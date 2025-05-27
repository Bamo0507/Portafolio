// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://bamo0507.github.io/Portafolio/',
    base: '/Portafolio/',
    vite: {
        plugins: [tailwindcss()]
    }
});
