<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp :show-search="false">Students</HeaderComp>
    </div>
    <!-- 2nd header -->
    <div class="flex justify-between items-center py-1 px-0 lg:px-4">
      <div
        class="flex items-center rounded-[40px] pl-6 bg-white h-8 md:h-12 lg:h-14 w-[200px] xl:w-[300px]"
      >
        <img
          src="/assets/Search.svg"
          alt="searchicon"
          class="w-4 h-4 md:w-6 md:h-6"
        />
        <input
          type="text"
          placeholder="Search here..."
          class="pl-4 border-none text-[#303972] bg-transparent py-2"
        />
      </div>
      <div class="flex gap-12">
        <div class="flex items-center space-x-4">
          <button
            class="w-12 md:w-52 h-8 md:h-12 lg:h-[60px] rounded-xl md:rounded-full flex border-[#4D44B5] text-lg border-2 items-center gap-5 justify-center bg-white text-black"
          >
            <p class="hidden md:block">Newest</p>
            <img
              src="/assets/dropdown.svg"
              alt="notificationicon"
              class="w-6 h-6"
            />
          </button>
          <router-link
            :to="'/addteachers'"
            class="w-12 md:w-52 h-8 md:h-12 lg:h-[60px] rounded-xl md:rounded-full bg-gradient-to-b from-[#252472] to-[#2321BD] text-white text-lg items-center gap-5 flex justify-center"
          >
            <img src="/assets/add.svg" alt="notificationicon" class="w-4 h-4" />
            <p class="hidden md:block">New Student</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 2nd header ends -->
    <div class="py-5 flex justify-center px-2 lg:px-5 space-y-4">
      <div
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-x-8 gap-y-8"
      >
        <div
          class="bg-white 2xl:w-[338px] xl:w-[250px] md:w-[220px] h-[280px] md:h-[352px] grid rounded-3xl lg:p-1 xl:p-5"
          v-for="teacher in teachers.teachers"
          :key="teacher.id"
        >
          <div class="items-center grid p-5">
            <a href="/studentdetails" class="justify-self-end"
              ><img
                src="/assets/dots copy.svg"
                alt="dots"
                class="w-4 h-4 md:h-6 md:w-6"
            /></a>
            <div
              class="bg-[#C1BBEB] justify-self-center rounded-full w-20 h-20 md:h-[120px] md:w-[120px]"
            >
              <!-- <img src="" alt="Profile" class="h-10 w-10 rounded-full" /> -->
            </div>
            <h3
              class="font-bold mb-4 text-center text-lg md:text-2xl text-[#303972]"
            >
              {{ teacher.name }}
            </h3>
            <p class="text-sm md:text-lg -mt-5 mb-2 text-center text-[#A098AE]">
              {{ teacher.subject }}
            </p>
            <div class="flex items-center gap-5 justify-center">
              <div
                class="bg-[#4D44B5] rounded-full items-center flex justify-center w-10 h-10"
              >
                <img
                  src="/assets/call-white.svg"
                  alt="call icon"
                  class="h-6 w-6 outline-white rounded-full"
                />
              </div>
              <div
                class="bg-[#4D44B5] rounded-full items-center flex justify-center w-10 h-10"
              >
                <img
                  src="/assets/email-white.svg"
                  alt="emailicon"
                  class="h-6 w-6 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="flex ml-5 mr-2 my-10 justify-between items-center">
      <p class="text-sm md:text-lg text-[#A098AE]">
        Showing <span class="font-bold">1-5</span> from
        <span class="font-bold">100</span> data
      </p>
      <div
        class="flex space-x-1 md:space-x-2 items-center justify-items-center"
      >
        <img
          src="/assets/nextbutton.svg"
          alt="call icon"
          class="h-4 w-4 md:h-6 md:w-6 outline-white rounded-full"
        />

        <div
          class="bg-[#4D44B5] rounded-full items-center flex justify-center w-6 h-6 md:w-10 md:h-10"
        >
          1
        </div>
        <div
          class="bg-[#4D44B5] rounded-full items-center flex justify-center w-6 h-6 md:w-10 md:h-10"
        >
          2
        </div>
        <div
          class="bg-[#4D44B5] rounded-full items-center flex justify-center w-6 h-6 md:w-10 md:h-10"
        >
          3
        </div>

        <img
          src="/assets/nextbutton.svg"
          alt="next"
          class="h-4 w-4 md:h-6 md:w-6 rotate-180 outline-white rounded-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue'
import { useTeachersStore } from '@/stores/teachers'
import HeaderComp from '@/components/HeaderComp.vue'
import MenuBar from '@/components/MenuBar.vue'

const teachers = useTeachersStore()
const { toggleSidebar } = defineProps<{
  toggleSidebar: () => void
}>()
</script>
