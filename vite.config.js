import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // IMPORTANT: ensures JS and CSS assets load correctly on Vercel
  build: {
    outDir: "dist", // default Vite output
    rollupOptions: {
      output: {
        manualChunks: undefined, // ensures correct chunking for React Router
      },
    },
  },
});
