import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import gzipPlugin from "rollup-plugin-gzip";

import dotenv from "dotenv";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ...
    rollupOptions: {
      // ...
      plugins: [
        // ...
        gzipPlugin({
          // Wähle die Dateitypen aus, die du komprimieren möchtest
          filter: /\.(js|css|html|json|svg)$/,
          // Gzip-Komprimierungseinstellungen (optional)
          minSize: 1024, // Mindestgröße der komprimierten Datei in Bytes
        }),
      ],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-icons")) {
              return "vendor-icons";
            }
            if (id.includes("framer-motion") || id.includes("gsap")) {
              return "vendor-animation";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
