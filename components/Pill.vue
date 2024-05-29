<template>
  <div class="inline-flex items-center justify-center translate-y-[-2px]">
    <span
      class="py-s1 px-s3 ml-s2 rounded-full bg-gold-100 text-sm text-[var(--vp-c-text-2)]"
      >{{ label }}</span
    >
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  type: String,
});
</script>
