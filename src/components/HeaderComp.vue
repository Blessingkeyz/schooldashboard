<template>
  <header class="hidden lg:flex justify-between items-center py-10 px-4">
    <h1 class="text-[#303972] font-Poppins font-bold text-4xl">
      <slot />
    </h1>
    <div class="flex gap-12">
      <!-- search bar -->
      <div
        v-if="showSearch"
        class="flex items-center rounded-[40px] pl-6 bg-white h-14 max-w-[200px] xl:max-w-[300px]"
      >
        <img src="/assets/Search.svg" alt="searchicon" class="w-6 h-6" />
        <input
          type="text"
          placeholder="Search here..."
          class="pl-4 text-[#303972] bg-transparent font-Poppins py-2"
        />
      </div>
      <!-- search bar end -->
      <div class="flex items-center space-x-4">
        <button
          class="w-16 h-16 rounded-full justify-items-center bg-white text-black"
        >
          <img src="/assets/bell.svg" alt="notificationicon" class="w-6 h-6" />
        </button>
        <button
          class="justify-items-center w-16 h-16 rounded-full bg-white text-black"
        >
          <img src="/assets/gear.svg" alt="settingsicon" class="w-6 h-6" />
        </button>
        <div class="flex items-center text-black space-x-2">
          <div class="text-sm">
            <div class="font-semibold">Nabila A.</div>
            <div class="font-normal mt-1 text-right">Admin</div>
          </div>
          <div class="bg-[#C1BBEB] rounded-full w-16 h-16">
            <!-- <img src="" alt="Profile" class="h-10 w-10 rounded-full" /> -->
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- mobile view -->

  <header
    class="block lg:hidden justify-between items-center w-full my-5 md:my-4 ml-4"
  >
    <div class="flex justify-between items-center mb-3 md:mb-5">
      <h1 class="text-[#303972] font-bold text-2xl md:text-4xl">
        <slot />
      </h1>
      <div class="flex items-center space-x-4">
        <div class="flex items-center text-black space-x-2">
          <div class="text-[10px] md:text-sm">
            <div class="font-semibold">Nabila A.</div>
            <div class="font-normal -mt-1 md:mt-0 text-right">Admin</div>
          </div>
          <div class="bg-[#C1BBEB] rounded-full w-7 h-7 md:w-10 md:h-10">
            <!-- <img src="" alt="Profile" class="h-10 w-10 rounded-full" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="flex -ml-14 justify-between items-center">
      <!-- search bar -->
      <div
        v-if="showSearch"
        class="flex items-center rounded-[40px] pl-6 bg-white h-8 md:h-10 w-[200px] md:w-[270px]"
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
      <!-- search bar end -->
      <div
        :class="{
          'flex space-x-2 md:space-x-4': showSearch,
          'ml-auto flex space-x-2 md:space-x-4': !showSearch,
        }"
      >
        <button
          class="w-8 h-8 md:w-10 md:h-10 rounded-full justify-items-center bg-white text-black"
        >
          <img
            src="/assets/bell.svg"
            alt="notificationicon"
            class="w-4 h-4 md:w-5 md:h-5"
          />
        </button>
        <button
          class="justify-items-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-black"
        >
          <img
            src="/assets/gear.svg"
            alt="settingsicon"
            class="w-4 h-4 md:w-5 md:h-5"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { showSearch } = defineProps({
  showSearch: {
    type: Boolean,
    default: true,
  },
})
</script>
