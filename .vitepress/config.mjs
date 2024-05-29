import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Carbon Component Library',
  description: 'A library of editable components for the carbon boilerplate',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started',
        items: [],
      },
      {
        text: 'Components',
        items: [
          { text: 'Modal', link: '/components/modal' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Dropdown', link: '/components/dropdown' },
        ],
      },
      {
        text: 'Contributing',
        link: '/contributing',
        items: [],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  srcDir: './src',
  base: '/component-docs/',
});
