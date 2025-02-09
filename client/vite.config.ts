import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct routing
  server: {
    fs: {
      allow: ["."], // Allows all files to be accessed
    },
  },
});
