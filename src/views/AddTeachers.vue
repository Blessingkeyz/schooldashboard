<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp :show-search="false">Teachers</HeaderComp>
    </div>
    <!-- personal details -->
    <div class="bg-white">
      <div class="bg-gradient-to-b from-[#252472] to-[#2321BD] rounded-t-2xl">
        <h3 class="text-xs text-white md:text-2xl font-bold pl-5 py-2">
          Personal Details
        </h3>
      </div>
      <div class="grid-cols-1 md:grid-cols-2">
        <div class="grid px-5 pt-5 space-y-3 w-full md:w-1/2">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            First Name *
          </p>
          <input
            type="text"
            placeholder="Maria"
            class="pl-2 h-8 md:h-16 border text-xs text-[#303972] bg-transparent py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full md:w-1/2">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Last Name *
          </p>
          <input
            type="text"
            placeholder="Historia"
            class="pl-2 h-8 md:h-16 border text-xs text-[#303972] bg-transparent py-2"
          />
        </div>
      </div>
    </div>
    <!-- education -->
    <div></div>
    <!-- save -->
    <div></div>
  </section>
</template>

<script setup lang="ts">
// import { useTeachersStore } from '@/stores/teachers'
import HeaderComp from '@/components/HeaderComp.vue'
import MenuBar from '@/components/MenuBar.vue'

// const teachers = useTeachersStore()
const { toggleSidebar } = defineProps<{
  toggleSidebar: () => void
}>()
</script>
