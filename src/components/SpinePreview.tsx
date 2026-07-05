import { useEffect, useRef, useState } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";
import "@esotericsoftware/spine-player/dist/spine-player.css";
import type { PortfolioItem } from "../data/portfolioItems.generated";

type SpinePreviewProps = {
  activeAnimation: string | null;
  item: PortfolioItem;
};

type PlayerStatus = "idle" | "loading" | "ready" | "failed";
type PreviewLayer = "a" | "b";

const supportedRuntimeMinor = "4.2";

function safeDisposePlayer(player: SpinePlayer | null) {
  if (!player) return;

  const playerInternals = player as unknown as { disposed?: boolean };

  try {
    player.pause();
    player.stopRendering();
    playerInternals.disposed = true;
    player.dispose();
  } catch (error) {
    console.warn("[SpinePreview] Spine player dispose skipped after mount changed:", error);
  }
}

function parseAtlasPages(atlasText: string) {
  const lines = atlasText.split(/\r?\n/);
  const pages: string[] = [];

  lines.forEach((line, index) => {
    const current = line.trim();
    const next = lines[index + 1]?.trim() ?? "";

    if (current && !current.includes(":") && next.startsWith("size:")) {
      pages.push(current);
    }
  });

  return pages;
}

function assetBasePath(assetPath: string) {
  const slashIndex = assetPath.lastIndexOf("/");
  return slashIndex >= 0 ? assetPath.slice(0, slashIndex + 1) : "";
}

function normalizeAssetPath(assetPath: string) {
  try {
    return decodeURI(assetPath);
  } catch {
    return assetPath;
  }
}

function activeAnimationCountMismatch(generatedAnimations: string[], jsonAnimations: string[]) {
  return (
    generatedAnimations.length !== jsonAnimations.length ||
    generatedAnimations.some((animation) => !jsonAnimations.includes(animation))
  );
}

async function validateSpineAssets(item: PortfolioItem, signal: AbortSignal) {
  if (!item.spine.json || !item.spine.atlas) {
    console.warn(
      `[SpinePreview] ${item.title} is missing a JSON or atlas path; showing dark fallback.`,
    );
    return;
  }

  try {
    const [jsonResponse, atlasResponse] = await Promise.all([
      fetch(item.spine.json, { signal }),
      fetch(item.spine.atlas, { signal }),
    ]);

    if (!jsonResponse.ok) {
      console.warn(`[SpinePreview] JSON load failed for ${item.title}: ${jsonResponse.status}`);
    }

    if (!atlasResponse.ok) {
      console.warn(`[SpinePreview] Atlas load failed for ${item.title}: ${atlasResponse.status}`);
    }

    const spineJson = jsonResponse.ok ? await jsonResponse.json() : null;
    const atlasText = atlasResponse.ok ? await atlasResponse.text() : "";
    const spineVersion = spineJson?.skeleton?.spine;
    const animationNames = Object.keys(spineJson?.animations ?? {});

    if (spineVersion && !spineVersion.startsWith(supportedRuntimeMinor)) {
      console.warn(
        `[SpinePreview] Runtime version mismatch for ${item.title}: export ${spineVersion}, player ${supportedRuntimeMinor}.x.`,
      );
    }

    const atlasPages = parseAtlasPages(atlasText);
    const texturePaths = new Set(item.spine.textures.map(normalizeAssetPath));
    const atlasDirectory = assetBasePath(item.spine.atlas);
    const missingPages = atlasPages
      .map((pageName) => normalizeAssetPath(`${atlasDirectory}${pageName}`))
      .filter((pagePath) => !texturePaths.has(pagePath));

    if (missingPages.length > 0) {
      console.warn(
        `[SpinePreview] Missing atlas texture pages for ${item.title}: ${missingPages.join(", ")}`,
      );
    }

    if (atlasPages.length === 0) {
      console.warn(`[SpinePreview] No atlas texture pages detected for ${item.title}.`);
    }

    if (item.spine.textures.some((texture) => texture.endsWith(".webp"))) {
      const webpSupport = document
        .createElement("canvas")
        .toDataURL("image/webp")
        .startsWith("data:image/webp");

      if (!webpSupport) {
        console.warn(
          `[SpinePreview] Browser may not support WebP textures for ${item.title}; playback can fail.`,
        );
      }
    }

    if (activeAnimationCountMismatch(item.animations, animationNames)) {
      console.warn(
        `[SpinePreview] Animation list mismatch for ${item.title}: generated data has ${item.animations.length}, JSON has ${animationNames.length}.`,
      );
    }
  } catch (error) {
    if (!signal.aborted) {
      console.warn(`[SpinePreview] Asset validation failed for ${item.title}:`, error);
    }
  }
}

export function SpinePreview({ activeAnimation, item }: SpinePreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerARef = useRef<HTMLDivElement | null>(null);
  const layerBRef = useRef<HTMLDivElement | null>(null);
  const playersRef = useRef<Record<PreviewLayer, SpinePlayer | null>>({ a: null, b: null });
  const layerItemIdsRef = useRef<Record<PreviewLayer, string | null>>({ a: null, b: null });
  const activeLayerRef = useRef<PreviewLayer | null>(null);
  const loadIdRef = useRef(0);
  const fadeTimerRef = useRef<number | null>(null);
  const [activeLayer, setActiveLayer] = useState<PreviewLayer | null>(null);
  const [loadingLayer, setLoadingLayer] = useState<PreviewLayer | null>(null);
  const [fadingLayer, setFadingLayer] = useState<PreviewLayer | null>(null);
  const [status, setStatus] = useState<PlayerStatus>("idle");

  useEffect(() => {
    const diagnosticsAbortController = new AbortController();
    const loadId = loadIdRef.current + 1;
    loadIdRef.current = loadId;

    const currentLayer = activeLayerRef.current;
    if (currentLayer && layerItemIdsRef.current[currentLayer] === item.id) {
      return () => diagnosticsAbortController.abort();
    }

    const targetLayer: PreviewLayer = currentLayer === "a" ? "b" : "a";
    const targetElement = targetLayer === "a" ? layerARef.current : layerBRef.current;
    const firstAnimation = item.animations[0] ?? null;

    setLoadingLayer(targetLayer);
    setStatus("loading");

    if (!targetElement || !item.spine.json || !item.spine.atlas || !firstAnimation) {
      console.warn(
        `[SpinePreview] ${item.title} cannot initialize: missing JSON, atlas, or animation.`,
      );
      setLoadingLayer(null);
      setStatus("failed");
      return () => diagnosticsAbortController.abort();
    }

    void validateSpineAssets(item, diagnosticsAbortController.signal);
    safeDisposePlayer(playersRef.current[targetLayer]);
    playersRef.current[targetLayer] = null;
    layerItemIdsRef.current[targetLayer] = null;
    targetElement.innerHTML = "";

    try {
      const player = new SpinePlayer(targetElement, {
        alpha: true,
        animation: firstAnimation,
        animations: item.animations,
        atlas: item.spine.atlas,
        backgroundColor: "00000000",
        defaultMix: 0.18,
        interactive: false,
        mipmaps: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        showControls: false,
        showLoading: false,
        skeleton: item.spine.json,
        viewport: {
          padBottom: "26%",
          padLeft: "26%",
          padRight: "26%",
          padTop: "26%",
          transitionTime: 0.18,
        },
        error: (_player, message) => {
          if (loadIdRef.current !== loadId) {
            safeDisposePlayer(player);
            return;
          }

          console.warn(
            `[SpinePreview] Runtime/player issue for ${item.title}; check version support, unsupported constraints, atlas pages, or blend assets. ${message}`,
          );
          console.error(`Spine player failed for ${item.title}: ${message}`);

          safeDisposePlayer(playersRef.current[targetLayer]);
          playersRef.current[targetLayer] = null;
          layerItemIdsRef.current[targetLayer] = null;
          targetElement.innerHTML = "";
          setLoadingLayer(null);
          setStatus("failed");
        },
        success: () => {
          if (loadIdRef.current !== loadId) {
            safeDisposePlayer(player);
            return;
          }

          const previousLayer = activeLayerRef.current;
          playersRef.current[targetLayer] = player;
          layerItemIdsRef.current[targetLayer] = item.id;
          activeLayerRef.current = targetLayer;
          setActiveLayer(targetLayer);
          setLoadingLayer(null);
          setStatus("ready");

          if (previousLayer && previousLayer !== targetLayer) {
            setFadingLayer(previousLayer);
            if (fadeTimerRef.current) {
              window.clearTimeout(fadeTimerRef.current);
            }
            fadeTimerRef.current = window.setTimeout(() => {
              safeDisposePlayer(playersRef.current[previousLayer]);
              playersRef.current[previousLayer] = null;
              layerItemIdsRef.current[previousLayer] = null;
              const previousElement = previousLayer === "a" ? layerARef.current : layerBRef.current;
              if (previousElement) previousElement.innerHTML = "";
              setFadingLayer(null);
            }, 380);
          }
        },
      });

      playersRef.current[targetLayer] = player;
    } catch (error) {
      console.error(`Spine player failed for ${item.title}:`, error);
      setLoadingLayer(null);
      setStatus("failed");
    }

    return () => diagnosticsAbortController.abort();
  }, [item]);

  useEffect(
    () => () => {
      if (fadeTimerRef.current) {
        window.clearTimeout(fadeTimerRef.current);
      }
      safeDisposePlayer(playersRef.current.a);
      safeDisposePlayer(playersRef.current.b);
      playersRef.current = { a: null, b: null };
    },
    [],
  );

  useEffect(() => {
    const activePlayer = activeLayer ? playersRef.current[activeLayer] : null;

    if (
      !activeAnimation ||
      !activePlayer ||
      !activePlayer.skeleton ||
      !activeLayer ||
      layerItemIdsRef.current[activeLayer] !== item.id ||
      status !== "ready"
    ) {
      return;
    }

    try {
      activePlayer.setAnimation(activeAnimation, true);
      activePlayer.play();
    } catch (error) {
      console.error(`Spine animation switch failed for ${item.title}:`, error);
      setStatus("failed");
    }
  }, [activeAnimation, activeLayer, item.id, item.title, status]);

  const statusLabel =
    status === "failed"
      ? "Preview unavailable"
      : status === "ready"
        ? "Playing"
        : "Loading motion...";
  const isTransitioning = loadingLayer !== null && activeLayer !== null;

  return (
    <div className="spine-preview-shell">
      <div
        className={`spine-preview spine-preview-${status} ${
          isTransitioning ? "spine-preview-switching" : ""
        }`}
        ref={containerRef}
      >
        <div
          className={`spine-player-mount spine-player-layer ${
            activeLayer === "a" ? "spine-player-layer-active" : ""
          } ${loadingLayer === "a" ? "spine-player-layer-loading" : ""} ${
            fadingLayer === "a" ? "spine-player-layer-fading" : ""
          }`}
          ref={layerARef}
        />
        <div
          className={`spine-player-mount spine-player-layer ${
            activeLayer === "b" ? "spine-player-layer-active" : ""
          } ${loadingLayer === "b" ? "spine-player-layer-loading" : ""} ${
            fadingLayer === "b" ? "spine-player-layer-fading" : ""
          }`}
          ref={layerBRef}
        />
        {isTransitioning && <div className="spine-preview-loading-glass">Loading motion...</div>}
        <span className="spine-preview-status">{statusLabel}</span>
      </div>
    </div>
  );
}
