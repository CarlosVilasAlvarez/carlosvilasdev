// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://carlosvilas.dev',
    integrations: [sitemap()],
    server: { port: 3000, host: true },
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
    output: "server",
    adapter: node({
        mode: 'standalone'
    })
});