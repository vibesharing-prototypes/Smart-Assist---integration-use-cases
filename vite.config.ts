import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router") || id.includes("node_modules/scheduler")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/@mui") || id.includes("node_modules/@emotion")) {
            return "vendor-mui";
          }
          if (id.includes("@diligentcorp/atlas-react-bundle/icons")) {
            return "vendor-atlas-icons";
          }
          if (id.includes("@diligentcorp/atlas-react-bundle")) {
            return "vendor-atlas-core";
          }
        },
      },
    },
  },
});
