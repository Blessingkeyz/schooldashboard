<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp>Latest Activity</HeaderComp>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderComp from '@/components/HeaderComp.vue'
const { toggleSidebar } = defineProps<{
  toggleSidebar: () => void
}>()
</script>
