import { defineConfig, fontProviders } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blogsite-d5e.pages.dev/',
  integrations: [tailwind(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/atkinson-regular.woff'],
          },
          {
            weight: 700,
            style: 'normal',
            src: ['./src/assets/fonts/atkinson-bold.woff'],
          },
        ],
      },
    },
  ],
});
