<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />

      <HeaderComp>User</HeaderComp>
    </div>
  </section>
</template>

<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue'
const { toggleSidebar } = defineProps<{
  toggleSidebar: () => void
}>()
import HeaderComp from '@/components/HeaderComp.vue'
</script>
