<template>
  <TransitionRoot
    :show="$modals.activeModalId === modalId"
    as="template"
    enter="duration-200 ease-out"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="duration-200 ease-in"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <Dialog @close="$modals.closeModal" class="relative z-50" :unmount="false">
      <div
        class="modal-background fixed inset-0 flex w-screen items-center justify-center bg-black/30"
        aria-hidden="true"
      />
      <div
        class="modal-container fixed inset-0 flex w-screen items-center justify-center p-s10"
      >
        <DialogPanel
          :class="`${
            hasOverscroll ? 'overflow-y-scroll' : ''
          } modal-content w-[600px] h-auto max-h-[100%] bg-white rounded-[10px]`"
        >
          <slot>
            <div class="modal-body">
              <div class="px-s8 py-s10 group">
                <DialogTitle>Title</DialogTitle>
                <DialogDescription> Description </DialogDescription>
                <p>Other Body content</p>
              </div>
            </div>
          </slot>
          <button
            class="absolute top-s8 right-s8 px-s2 text-white text-[40px] leading-[40px]"
            @click="$modals.closeModal"
            type="button"
            aria-label="Close modal"
          >
            X
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue';

const props = defineProps({
  hasOverscroll: {
    type: Boolean,
    default: true,
  },
  modalId: {
    type: String,
    default: '',
  },
});
</script>
