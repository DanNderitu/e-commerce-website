import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  // vite config env
  define: {
    "process.env.REACT_APP_SUPABASE_URL": JSON.stringify(
      process.env.REACT_APP_SUPABASE_URL
    ),
    "process.env.REACT_APP_ANON_KEY": JSON.stringify(
      process.env.REACT_APP_ANON_KEY
    ),
  },
});
