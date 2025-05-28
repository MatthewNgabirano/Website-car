// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Website-car/",
  plugins: [react()],
  build: {
    outDir: "dist", // Make sure this is 'dist' or your expected folder
  },
});
