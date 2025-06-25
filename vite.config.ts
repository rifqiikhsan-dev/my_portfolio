import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "./",

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts"
  },

  css: {
    postcss: {
      plugins: [tailwind()]
    }
  }
});
