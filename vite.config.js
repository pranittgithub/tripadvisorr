import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Allows external access
    allowedHosts: ["1d03-150-107-182-225.ngrok-free.app"], // Add your ngrok host
  },
});
