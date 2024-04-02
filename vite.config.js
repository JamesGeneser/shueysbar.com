import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Shueys-Bar/",

  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
});

// const path = require('path')
