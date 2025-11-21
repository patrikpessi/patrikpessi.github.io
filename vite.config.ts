import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
    plugins: [tailwindcss(), sveltekit()],
    define: {
        API_URL: mode === "production" ? '"contentful-proxy.patrik-pessi1426.workers.dev"' : '"http://127.0.0.1:4000/"',
    },
}));
