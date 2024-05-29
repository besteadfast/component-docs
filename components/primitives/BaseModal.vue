<template>
  <slot name="open" :open="open"> </slot>
  <TransitionRoot :show="isOpen" as="template" v-bind="transitions">
    <Dialog
      @close="setIsOpen"
      :initialFocus="initialFocus"
      class="relative z-50"
      :unmount="false"
    >
      <div :class="bgClasses" aria-hidden="true" />
      <div :class="containerClasses">
        <DialogPanel
          :class="`${hasOverscroll ? 'overflow-y-scroll' : ''} ${panelClasses}`"
        >
          <slot name="content"> </slot>
          <slot name="close" :close="close"> </slot>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
  hasOverscroll: Boolean,
  initalFocus: String,
  bgClasses: String,
  containerClasses: String,
  panelClasses: String,
  description: String,
  transitions: Object,
});

const isOpen = ref(false);
const isShowing = ref(true);

function setIsOpen(value) {
  console.log('here');
  isOpen.value = value;
}

function open() {
  setIsOpen(true);
}

function close() {
  setIsOpen(false);
}
</script>
