import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // must be "/" for Vercel static build
  build: {
    outDir: "dist", // default Vite output
  },
});
