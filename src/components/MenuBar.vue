<template>
  <button
    @click="props.toggleSidebar"
    class="lg:hidden text-xl text-white bg-purple-300 h-8 mt-5 rounded-lg px-3"
  >
    ≡
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  toggleSidebar: () => void
}>()
</script>
