import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group, Points } from "three";
import * as THREE from "three";

type SceneProps = {
  isMobile: boolean;
  pointerEnabled: boolean;
  reducedMotion: boolean;
};

const gold = "#f2b85c";
const amber = "#d9852e";
const magenta = "#bc3c91";
const violet = "#653ad9";

function useMotionSettings() {
  const [settings, setSettings] = useState({
    isMobile: false,
    pointerEnabled: false,
    reducedMotion: false,
  });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");

    const update = () => {
      const isMobile = mobileQuery.matches;
      const isTouch = coarsePointerQuery.matches;
      const reducedMotion = motionQuery.matches;

      setSettings({
        isMobile,
        pointerEnabled: !isMobile && !isTouch && !reducedMotion,
        reducedMotion,
      });
    };

    update();
    mobileQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    coarsePointerQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
      coarsePointerQuery.removeEventListener("change", update);
    };
  }, []);

  return settings;
}

function FloatingCard({
  color,
  position,
  rotation,
  scale = 1,
}: {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[1.18, 1.62, 0.08]} />
        <meshStandardMaterial
          color="#170c18"
          emissive={color}
          emissiveIntensity={0.16}
          metalness={0.62}
          roughness={0.28}
        />
      </mesh>
      <mesh position={[0, 0, 0.052]} scale={[1.04, 1.04, 1]}>
        <boxGeometry args={[1.18, 1.62, 0.012]} />
        <meshStandardMaterial
          color="#2a1524"
          emissive={color}
          emissiveIntensity={0.08}
          metalness={0.38}
          roughness={0.42}
        />
      </mesh>
      <mesh position={[0, 0.16, 0.07]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.26, 0.025, 10, 42]} />
        <meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={0.38} />
      </mesh>
      <mesh position={[0, -0.28, 0.08]} rotation={[0, 0, Math.PI / 4]}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function Coin({
  position,
  rotation,
  scale = 1,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <cylinderGeometry args={[0.36, 0.36, 0.08, 48]} />
        <meshStandardMaterial
          color={amber}
          emissive={gold}
          emissiveIntensity={0.2}
          metalness={0.84}
          roughness={0.22}
        />
      </mesh>
      <mesh position={[0, 0.045, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.23, 0.012, 8, 40]} />
        <meshStandardMaterial color="#ffe2a2" emissive={gold} emissiveIntensity={0.32} />
      </mesh>
    </group>
  );
}

function SymbolPlaque({
  position,
  rotation,
  scale = 1,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[1.1, 0.72, 0.12]} />
        <meshStandardMaterial
          color="#211123"
          emissive={violet}
          emissiveIntensity={0.14}
          metalness={0.58}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0.08]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.28, 0.28, 0.035]} />
        <meshStandardMaterial color={magenta} emissive={magenta} emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function ParticleField({ isMobile, reducedMotion }: SceneProps) {
  const points = useRef<Points>(null);
  const count = isMobile ? 52 : 130;
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      values[i3] = (Math.random() - 0.32) * (isMobile ? 7 : 10);
      values[i3 + 1] = (Math.random() - 0.5) * (isMobile ? 5.4 : 7);
      values[i3 + 2] = (Math.random() - 0.5) * (isMobile ? 4 : 7);
    }

    return values;
  }, [count, isMobile]);

  useFrame(({ clock }) => {
    if (!points.current || reducedMotion) {
      return;
    }

    points.current.rotation.y = clock.elapsedTime * 0.025;
    points.current.rotation.z = Math.sin(clock.elapsedTime * 0.18) * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f4bd62"
        size={isMobile ? 0.022 : 0.028}
        sizeAttenuation
        transparent
        opacity={0.72}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function HeroWorld({ isMobile, pointerEnabled, reducedMotion }: SceneProps) {
  const group = useRef<Group>(null);
  const dampedPointer = useRef({ x: 0, y: 0 });
  const drift = reducedMotion ? 0 : 1;

  useFrame(({ clock, pointer }) => {
    if (!group.current) {
      return;
    }

    const t = clock.elapsedTime;
    const targetX = pointerEnabled ? THREE.MathUtils.clamp(pointer.x, -0.45, 0.45) : 0;
    const targetY = pointerEnabled ? THREE.MathUtils.clamp(pointer.y, -0.35, 0.35) : 0;

    dampedPointer.current.x = THREE.MathUtils.lerp(
      dampedPointer.current.x,
      targetX,
      0.035,
    );
    dampedPointer.current.y = THREE.MathUtils.lerp(
      dampedPointer.current.y,
      targetY,
      0.035,
    );

    const introPulse = reducedMotion
      ? 0
      : Math.max(0, 1 - t / 1.24) * Math.sin(Math.min(t / 1.24, 1) * Math.PI);

    group.current.rotation.y =
      Math.sin(t * 0.28) * 0.082 * drift +
      dampedPointer.current.x * 0.018 +
      introPulse * 0.08;
    group.current.rotation.x =
      Math.sin(t * 0.22) * 0.034 * drift -
      dampedPointer.current.y * 0.01 -
      introPulse * 0.025;
    group.current.position.y = Math.sin(t * 0.42) * 0.1 * drift;
    group.current.scale.setScalar(1 + introPulse * (isMobile ? 0.025 : 0.045));
  });

  return (
    <group ref={group} position={isMobile ? [1.28, 0.58, 0] : [1.35, 0, 0]}>
      <FloatingCard
        color={magenta}
        position={isMobile ? [0.2, 0.45, 0] : [0.2, 0.35, 0.45]}
        rotation={[0.16, -0.38, -0.18]}
        scale={isMobile ? 0.78 : 1.1}
      />
      <FloatingCard
        color={violet}
        position={isMobile ? [1.34, -0.8, -1.15] : [1.55, -0.9, -1.15]}
        rotation={[-0.12, -0.68, 0.18]}
        scale={isMobile ? 0.54 : 0.82}
      />
      <Coin
        position={isMobile ? [-1.05, 1.18, -0.7] : [-1.5, 1.25, -0.65]}
        rotation={[1.15, 0.28, 0.22]}
        scale={isMobile ? 0.56 : 0.85}
      />
      <Coin
        position={isMobile ? [1.7, 0.92, -0.95] : [2.25, 0.92, -0.95]}
        rotation={[1.34, -0.44, 0.12]}
        scale={isMobile ? 0.44 : 0.72}
      />
      <SymbolPlaque
        position={isMobile ? [-0.25, -1.55, -0.8] : [-1.22, -1.38, -0.45]}
        rotation={[0.12, 0.42, -0.12]}
        scale={isMobile ? 0.58 : 0.86}
      />
      {!isMobile && (
        <>
          <SymbolPlaque
            position={[2.45, 1.62, -1.65]}
            rotation={[-0.18, -0.52, 0.22]}
            scale={0.62}
          />
          <mesh position={[0.75, -1.65, 0.85]} rotation={[0.5, 0.8, 0.2]}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial
              color={magenta}
              emissive={magenta}
              emissiveIntensity={0.54}
              metalness={0.55}
              roughness={0.25}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

function SceneContent(props: SceneProps) {
  return (
    <>
      <color attach="background" args={["#050407"]} />
      <fog attach="fog" args={["#050407", 6.2, 12]} />
      <ambientLight intensity={0.72} />
      <pointLight position={[-2.4, 2.4, 3.2]} color={gold} intensity={1.5} />
      <pointLight position={[2.6, -1, 2.8]} color={magenta} intensity={1.8} />
      <HeroWorld {...props} />
      <ParticleField {...props} />
    </>
  );
}

export function HeroScene() {
  const { isMobile, pointerEnabled, reducedMotion } = useMotionSettings();

  return (
    <div className="hero-visual hero-animate" aria-hidden="true">
      <Canvas
        camera={{
          fov: isMobile ? 48 : 44,
          position: isMobile ? [0, 0, 7.6] : [0, 0, 7],
        }}
        dpr={isMobile ? [1, 1.35] : [1, 1.8]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <SceneContent
          isMobile={isMobile}
          pointerEnabled={pointerEnabled}
          reducedMotion={reducedMotion}
        />
      </Canvas>
    </div>
  );
}
