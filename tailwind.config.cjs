/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        extend: {
            fontSize: {
                tm: '1.688rem',
            },
        },
    },
    plugins: [],
};