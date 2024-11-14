<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp>Chat</HeaderComp>
    </div>
    <div class="p-6 space-y-4">
      <div class="grid grid-cols-4">
        <div class="bg-black"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
      </div>
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
