// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';
import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://astro.build/config
export default defineConfig({
    site: 'https://carlosvilas.dev',
    integrations: [sitemap()],
    experimental: {
        svg: true,
    },
    server: { port: 3000, host: true },
    vite: {
        plugins: [
            tailwindcss(),
            paraglideVitePlugin({
                project: "./project.inlang",
                outdir: "./src/paraglide",
                strategy: ["preferredLanguage", "baseLocale"]
            })
        ]
    },
    output: "server",
    adapter: node({
        mode: 'standalone'
    })
});