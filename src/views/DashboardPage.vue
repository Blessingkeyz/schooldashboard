<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp>Dashboard</HeaderComp>
    </div>
    <!-- details -->
    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-6">
      <!-- column 1 -->
      <div>
        <div class="bg-white rounded-2xl pb-10">
          <!-- stats -->
          <div
            class="grid xl:flex justify-around items-center pt-10 space-y-5 xl:space-y-0"
          >
            <div class="flex items-center text-sm md:text-lg space-x-5">
              <div
                class="bg-[#4D44B5] rounded-full items-center flex justify-center w-8 h-8 md:w-14 md:h-14"
              >
                <img
                  src="/assets/student.svg"
                  alt="call icon"
                  class="h-5 w-5 md:h-8 md:w-8 outline-white rounded-full"
                />
              </div>
              <div class="grid">
                <p
                  class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
                >
                  Students
                </p>
                <p class="text-[#303972] text-xl md:text-3xl font-bold">932</p>
              </div>
            </div>
            <div class="flex items-center text-sm md:text-lg space-x-5">
              <div
                class="bg-[#FB7D5B] rounded-full items-center flex justify-center w-8 h-8 md:w-14 md:h-14"
              >
                <img
                  src="/assets/teacher.svg"
                  alt="call icon"
                  class="h-5 w-5 md:h-8 md:w-8 outline-white rounded-full"
                />
              </div>
              <div class="grid">
                <p
                  class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
                >
                  Teachers
                </p>
                <p class="text-[#303972] text-xl md:text-3xl font-bold">754</p>
              </div>
            </div>
            <div class="flex items-center text-sm md:text-lg space-x-5">
              <div
                class="bg-[#FCC43E] rounded-full items-center flex justify-center w-8 h-8 md:w-14 md:h-14"
              >
                <img
                  src="/assets/calendar.svg"
                  alt="call icon"
                  class="h-5 w-5 md:h-8 md:w-8 outline-white rounded-full"
                />
              </div>
              <div class="grid">
                <p
                  class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
                >
                  Events
                </p>
                <p class="text-[#303972] text-xl md:text-3xl font-bold">40</p>
              </div>
            </div>
            <div class="flex items-center text-sm md:text-lg space-x-2">
              <div
                class="bg-[#303972] rounded-full items-center flex justify-center w-8 h-8 md:w-14 md:h-14"
              >
                <img
                  src="/assets/food.svg"
                  alt="call icon"
                  class="h-5 w-5 md:h-8 md:w-8 outline-white rounded-full"
                />
              </div>
              <div class="grid">
                <p
                  class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
                >
                  Foods
                </p>
                <p class="text-[#303972] text-xl md:text-3xl font-bold">32K</p>
              </div>
            </div>
          </div>
          <!-- school performance chart -->
        </div>
        <!-- Payment history -->
        <div>
          <div class="bg-white rounded-2xl p-4 my-8">
            <h3 class="font-bold mb-4 text-base md:text-xl text-[#303972]">
              Unpaid Student Intuition
            </h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <!-- payment id -->
                <div class="flex items-center text-sm md:text-lg space-x-2">
                  <div
                    class="bg-[#FF4550] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
                  >
                    <img
                      src="/assets/trending-up.svg"
                      alt="call icon"
                      class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
                    />
                  </div>
                  <p class="text-[#303972] text-base font-semibold">
                    #123456789
                  </p>
                </div>
                <!-- date -->
                <p class="text-xs md:text-sm font-light text-[#A098AE]">
                  2 March 2021, 13:45 PM
                </p>
                <!-- amount -->
                <p class="text-[#303972] text-base font-semibold">$ 50,036</p>
                <!-- payment status -->
                <p class="text-[#4CBC9A] text-base font-semibold">Complete</p>
              </div>

              <div class="flex justify-between items-center">
                <!-- payment id -->
                <div class="flex items-center text-sm md:text-lg space-x-2">
                  <div
                    class="bg-[#FF4550] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
                  >
                    <img
                      src="/assets/trending-up.svg"
                      alt="call icon"
                      class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
                    />
                  </div>
                  <p class="text-[#303972] text-base font-semibold">
                    #123456789
                  </p>
                </div>
                <!-- date -->
                <p class="text-xs md:text-sm font-light text-[#A098AE]">
                  2 March 2021, 13:45 PM
                </p>
                <!-- amount -->
                <p class="text-[#303972] text-base font-semibold">$ 50,036</p>
                <!-- payment status -->
                <div>
                  <p class="text-[#A098AE] text-base text-left font-semibold">
                    Pending
                  </p>
                </div>
              </div>

              <div class="flex justify-between items-center">
                <!-- payment id -->
                <div class="flex items-center text-sm md:text-lg space-x-2">
                  <div
                    class="bg-[#FF4550] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
                  >
                    <img
                      src="/assets/trending-up.svg"
                      alt="call icon"
                      class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
                    />
                  </div>
                  <p class="text-[#303972] text-base font-semibold">
                    #123456789
                  </p>
                </div>
                <!-- date -->
                <p class="text-xs md:text-sm font-light text-[#A098AE]">
                  2 March 2021, 13:45 PM
                </p>
                <!-- amount -->
                <p class="text-[#303972] text-base font-semibold">$ 50,036</p>
                <!-- payment status -->
                <p class="text-[#FF4550] text-base font-semibold">Cancelled</p>
              </div>

              <div class="flex justify-between items-center">
                <!-- payment id -->
                <div class="flex items-center text-sm md:text-lg space-x-2">
                  <div
                    class="bg-[#FF4550] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
                  >
                    <img
                      src="/assets/trending-up.svg"
                      alt="call icon"
                      class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
                    />
                  </div>
                  <p class="text-[#303972] text-base font-semibold">
                    #123456789
                  </p>
                </div>
                <!-- date -->
                <p class="text-xs md:text-sm font-light text-[#A098AE]">
                  2 March 2021, 13:45 PM
                </p>
                <!-- amount -->
                <p class="text-[#303972] text-base font-semibold">$ 50,036</p>
                <!-- payment status -->
                <p class="text-[#4CBC9A] text-base font-semibold">Complete</p>
              </div>
            </div>
            <!-- footer -->
            <div class="flex mt-10 mb-5 justify-between items-center">
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
          </div>
        </div>
      </div>

      <!-- column 2 -->
      <div class="hidden md:block -mr-1">
        <div
          class="bg-white mr-10 rounded-2xl mb-5 h-full text-[#303972] pl-8 pr-2 py-4"
        >
          <p class="font-semibold mb-2 text-sm md:text-lg">Schedule Details</p>
          <p class="font-extralight text-xs md:text-sm">
            Thursday, 10th April 2023
          </p>
        </div>
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
