import DefaultTheme from 'vitepress/theme';
import './tailwind.postcss';
import Pill from '../../components/Pill.vue';
import { createApp, defineAsyncComponent, reactive, toRefs } from 'vue';
import {
  TransitionRoot,
  DialogDescription,
  DialogTitle,
} from '@headlessui/vue';

const headlessUiComponents = { TransitionRoot, DialogDescription, DialogTitle };

const modals = reactive({
  closeModal: () => {
    modals.activeModalId = null;
  },
  openModal: (id) => {
    modals.activeModalId = id;
  },
  activeModalId: null,
});

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('Pill', Pill);

    //register imported components
    Object.entries(headlessUiComponents).forEach(([key, definition]) => {
      app.component(key, definition);
    });

    app.config.globalProperties.$modals = modals;
  },
};
