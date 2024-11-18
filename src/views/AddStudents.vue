<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp :show-search="false">Add Students</HeaderComp>
    </div>
    <!-- Student details -->
    <div class="bg-white rounded-2xl pb-10">
      <div class="bg-gradient-to-b from-[#252472] to-[#2321BD] rounded-t-2xl">
        <h3 class="text-xs text-white md:text-2xl font-bold pl-5 py-2">
          Student Details
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            First Name *
          </p>
          <input
            type="text"
            placeholder="Maria"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Last Name *
          </p>
          <input
            type="text"
            placeholder="Historia"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>

        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Date & Place of Birth *
          </p>
          <div class="grid grid-cols-2 space-x-4">
            <input
              type="date"
              placeholder="date"
              class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
            />
            <input
              type="text"
              placeholder="jakarta"
              class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
            />
          </div>
        </div>

        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Parent Name *
          </p>
          <input
            type="text"
            placeholder="Mano William"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>

        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">Email *</p>
          <input
            type="email"
            placeholder="Historia@mail.com"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">Phone *</p>
          <input
            type="tel"
            placeholder="+1234567890"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Address *
          </p>
          <input
            type="text"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            class="px-2 h-12 md:h-24 rounded-md border w-full text-xs md:text-sm text-[#303972] bg-transparent text-pretty py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">Photo *</p>
          <input
            type="file"
            placeholder="lorem"
            class="pl-2 h-12 md:h-24 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>
      </div>
    </div>
    <!-- Parent Details -->
    <div class="bg-white rounded-2xl my-5 md:my-8 pb-8">
      <div class="bg-gradient-to-b from-[#252472] to-[#2321BD] rounded-t-2xl">
        <h3 class="text-xs text-white md:text-2xl font-bold pl-5 py-2">
          Parent Details
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            First Name *
          </p>
          <input
            type="text"
            placeholder="Maria"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Last Name *
          </p>
          <input
            type="text"
            placeholder="William"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>

        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">Email *</p>
          <input
            type="email"
            placeholder="Historia@mail.com"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">Phone *</p>
          <input
            type="tel"
            placeholder="+1234567890"
            class="pl-2 h-8 md:h-12 rounded-md border text-xs md:text-sm text-[#303972] bg-transparent py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Address *
          </p>
          <input
            type="text"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            class="px-2 h-12 md:h-24 rounded-md border w-full text-xs md:text-sm text-[#303972] bg-transparent text-pretty py-2"
          />
        </div>
        <div class="grid px-5 pt-5 space-y-3 w-full">
          <p class="text-xs text-[#303972] md:text-lg font-semibold">
            Payments *
          </p>

          <option value="cash">cash</option>
        </div>
      </div>
    </div>
    <!-- save -->
    <div class="float-right space-x-4 flex mb-5 md:mb-8">
      <button
        class="border-[#4D44B5] border-2 rounded-full text-xs md:text-sm text-[#4D44B5] px-3 py-2 md:px-4 md:py-3"
      >
        save as draft
      </button>
      <button
        class="bg-[#4D44B5] border-2 rounded-3xl text-xs md:text-sm text-white px-3 py-2 md:px-5 md:py-3"
      >
        submit
      </button>
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
