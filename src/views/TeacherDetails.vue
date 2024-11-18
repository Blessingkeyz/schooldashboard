<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp :show-search="true">Teacher Details</HeaderComp>
    </div>
    <!-- details -->
    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
      <div class="bg-white rounded-2xl pb-10">
        <div class="bg-gradient-to-b from-[#252472] to-[#2321BD] rounded-t-2xl">
          <img src="/assets/teacher-header.svg" alt="teacher-header-img" />
        </div>
        <div
          class="rounded-full -mt-20 ml-10 h-40 w-40 bg-[#C1BBEB] border-white border-8"
        ></div>
        <div class="grid float-left">
          <h3
            class="font-bold mb-4 text-center text-lg md:text-2xl text-[#303972]"
          >
            <!-- {{ teacher.name }} -->
            Maria Historia
          </h3>
          <p class="text-sm md:text-lg -mt-5 mb-2 text-[#A098AE]">
            <!-- {{ teacher.subject }} -->
            History Teacher
          </p>
          grid
        </div>
      </div>
    </div>
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
