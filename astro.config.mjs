import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jayesh-dhole.github.io',
  image: {
    // allow Astro to optimise Credly badge images
    domains: ['images.credly.com'],
  },
});
