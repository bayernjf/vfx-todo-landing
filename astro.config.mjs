import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// hreflang alternates are emitted per-page in BaseLayout via <link rel="alternate">,
// so the sitemap integration only needs to produce a basic sitemap-index.xml.
export default defineConfig({
  site: 'https://vfx-todo.pages.dev',
  integrations: [sitemap(), mdx(), tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
