import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // ensures proper routing on Vercel
  build: {
    outDir: "dist", // output directory matches vercel.json
  },
});
