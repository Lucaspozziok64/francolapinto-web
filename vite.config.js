import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Esto es importante para Netlify
  define: {
    // Esto crea un número único cada vez que construyes (build)
    "import.meta.env.VITE_RELEASE_VERSION": JSON.stringify(Date.now()),
  },
});
