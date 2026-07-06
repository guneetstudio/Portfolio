import { defineConfig } from "vite";
import type { Plugin, PreviewServer, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";

function webpSkeletonViewerRoute(): Plugin {
  const rewriteToolRoute = (url: string | undefined) => {
    if (url === "/tools/webp-skeleton-viewer/") {
      return "/tools/webp-skeleton-viewer/index.html";
    }
    return url;
  };

  return {
    name: "webp-skeleton-viewer-route",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, _res, next) => {
        const request = req as unknown as { url?: string };
        request.url = rewriteToolRoute(request.url);
        next();
      });
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use((req, _res, next) => {
        const request = req as unknown as { url?: string };
        request.url = rewriteToolRoute(request.url);
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [webpSkeletonViewerRoute(), react()],
});
