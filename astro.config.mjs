import { defineConfig } from 'astro/config';

export default defineConfig({
  // Hosted on GitHub Pages at https://jayesh-dhole.github.io/Portfolio/
  site: 'https://jayesh-dhole.github.io',
  base: '/Portfolio',
  image: {
    // allow Astro to optimise Credly badge images
    domains: ['images.credly.com'],
  },
});
