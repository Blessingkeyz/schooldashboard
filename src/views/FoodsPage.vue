<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp>Foods </HeaderComp>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderComp from '@/components/HeaderComp.vue'
import MenuBar from '@/components/MenuBar.vue'
const { toggleSidebar } = defineProps<{
  toggleSidebar: () => void
}>()
</script>
