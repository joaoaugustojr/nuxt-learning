<template>
  <div
    :class="bgColor"
    class="
      fixed
      h-full
      flex
      items-center
      justify-center
      w-full
      overflow-auto overflow-x-hidden
      inset-0
    "
    @click.stop="$emit('update:show', false)"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  bgColor: String,
});
</script>
