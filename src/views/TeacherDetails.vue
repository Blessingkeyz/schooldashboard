<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp :show-search="true">Teacher Details</HeaderComp>
    </div>
    <!-- details -->
    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-6">
      <!-- column 1 -->
      <div class="bg-white rounded-2xl pb-10">
        <div class="bg-gradient-to-b from-[#252472] to-[#2321BD] rounded-t-2xl">
          <img src="/assets/teacher-header.svg" alt="teacher-header-art" />
        </div>
        <!-- profile image -->
        <div
          class="rounded-full -mt-[10%] ml-5 aspect-square w-[20%] bg-[#C1BBEB] border-white border-4 lg:border-8"
        ></div>
        <!-- Teacher name -->
        <div class="grid mt-5 ml-5">
          <h3 class="font-bold mb-4 text-lg md:text-2xl text-[#303972]">
            <!-- {{ teacher.name }} -->
            Maria Historia
          </h3>
          <p class="text-sm md:text-lg -mt-2 mb-2 text-[#A098AE]">
            <!-- {{ teacher.subject }} -->
            History Teacher
          </p>
        </div>
        <!-- teacher contacts -->
        <div
          class="grid xl:flex mx-5 mt-5 mb-10 justify-between space-y-5 xl:space-y-0"
        >
          <div class="flex items-center text-sm md:text-lg space-x-2">
            <div
              class="bg-[#FB7D5B] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
            >
              <img
                src="/assets/location-white.svg"
                alt="call icon"
                class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
              />
            </div>
            <p class="text-[#303972] font-semibold">Jakarta, Indonesia</p>
          </div>
          <div class="flex items-center text-sm md:text-lg space-x-2">
            <div
              class="bg-[#FB7D5B] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
            >
              <img
                src="/assets/call-white.svg"
                alt="call icon"
                class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
              />
            </div>
            <p class="text-[#303972] font-semibold">+12 345 6789 0</p>
          </div>
          <div class="flex items-center text-sm md:text-lg space-x-2">
            <div
              class="bg-[#FB7D5B] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
            >
              <img
                src="/assets/email-white.svg"
                alt="call icon"
                class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
              />
            </div>
            <p class="text-[#303972] font-semibold">Jakarta, Indonesia</p>
          </div>
        </div>
        <!-- About n Others -->
        <div class="text-[#303972] w-fit md:w-2/3 mx-5 text-sm md:text-lg">
          <!-- about -->
          <div class="mb-10">
            <p class="text-lg mb-3 md:text-2xl font-bold">About:</p>
            <p class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <!-- education -->
          <div class="mb-10">
            <p class="text-lg mb-3 md:text-2xl font-bold">Education:</p>
            <ol class="space-y-8">
              <li class="flex ml-2 space-x-3">
                <p class="font-extrabold">-</p>
                <div>
                  <p class="font-semibold mb-2">
                    History Major, Uiversity Akademia Historia
                  </p>
                  <p class="font-extralight">2013-2017</p>
                </div>
              </li>

              <li class="flex ml-2 space-x-3">
                <p class="font-extrabold">-</p>
                <div>
                  <p class="font-semibold mb-2">
                    History Major, Uiversity Akademia Historia
                  </p>
                  <p class="font-extralight">2013-2017</p>
                </div>
              </li>
            </ol>
          </div>
          <!-- Expertise -->
          <div class="mb-10">
            <p class="text-lg mb-3 md:text-2xl font-bold">Expertise:</p>
            <p class="text-justify">
              World History, Philosophy, Prehistoric, Culture, Ancient
            </p>
          </div>
        </div>
      </div>
      <!-- column 2 -->
      <div class="hidden md:block pb-10 -mr-4">
        <div
          class="bg-white mr-10 rounded-2xl mb-5 h-fit text-[#303972] pl-8 pr-2 py-4"
        >
          <p class="font-semibold mb-2 text-sm md:text-lg">Schedule Details</p>
          <p class="font-extralight text-xs md:text-sm">
            Thursday, 10th April 2023
          </p>
        </div>
        <div class="bg-white flex mr-10 rounded-2xl h-fit">
          <div class="bg-[#252472] rounded-l-2xl w-[10%]"></div>
          <div class="text-[#303972] pl-4 pr-2 py-4">
            <p class="font-semibold text-sm md:text-lg">World History</p>
            <p class="font-extralight text-xs md:text-sm">Class VI-8</p>
            <div class="mt-5 space-y-2">
              <div class="flex items-center space-x-3">
                <img src="/assets/Calendar-2.svg" alt="calender" />
                <p class="font-extralight text-xs lg:text-sm">March 20, 2021</p>
              </div>
              <div class="flex items-center space-x-3">
                <img src="/assets/Clock-2.svg" alt="calender" />
                <p class="font-extralight text-xs lg:text-sm">March 20, 2021</p>
              </div>
            </div>
          </div>
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
