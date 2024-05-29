<template>
  <BaseModal
    bgClasses="fixed inset-0 flex w-screen items-center justify-center bg-black/30"
    containerClasses="fixed inset-0 flex w-screen items-center justify-center"
    panelClasses="modal-content w-[600px] h-auto relative bg-white"
    hasOverscroll
    initialFocus="closeButtonRef"
    :transitions="{
      enter: 'duration-200 ease-out',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'duration-200 ease-in',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    }"
  >
    <template #open="{ open }">
      <button
        @click="open"
        type="button"
        class="mt-s2 py-s2 px-s3 rounded border-solid border-[1px] border-white/0 bg-[var(--vp-c-bg-soft)] text-[var(--vp-button-alt-text)] hover:border-[var(--vp-c-brand-1)] transition"
        aria-label="Open modal"
      >
        {{ openLabel }}
      </button>
    </template>
    <template #content>
      <div class="modal-body">
        <div class="px-s8 py-s10 border-t-2 border-gray-200 group">
          <DialogTitle>{{ title }}</DialogTitle>
          <DialogDescription> Description </DialogDescription>
          <p>Other Body content</p>
        </div>
      </div>
    </template>
    <template #close="{ close }">
      <button
        ref="closeButtonRef"
        class="absolute top-s8 right-s8"
        @click="close"
        type="button"
        aria-label="Close modal"
      >
        {{ closeLabel }}
      </button>
    </template>
  </BaseModal>
</template>

<script setup>
import { DialogDescription, DialogTitle } from '@headlessui/vue';
import BaseModal from './primitives/BaseModal.vue';

const props = defineProps({
  title: String,
  openLabel: String,
  closeLabel: String,
});
</script>
