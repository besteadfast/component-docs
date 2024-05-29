import DefaultTheme from 'vitepress/theme';
import './tailwind.postcss';
import Pill from '../../components/Pill.vue';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('Pill', Pill);
  },
};
