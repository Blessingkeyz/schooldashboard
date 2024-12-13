<template>
  <section class="px-4">
    <div class="w-full flex lg:block">
      <MenuBar :toggleSidebar="toggleSidebar" />
      <HeaderComp :show-search="true">Student Details</HeaderComp>
    </div>
    <!-- details -->
    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-6">
      <!-- column 1 -->
      <div>
        <!-- Personal details -->
        <div class="bg-white rounded-2xl pb-10">
          <div
            class="bg-gradient-to-b from-[#252472] to-[#2321BD] rounded-t-2xl"
          >
            <img src="/assets/student-header.svg" alt="teacher-header-art" />
          </div>
          <!-- profile image -->
          <div
            class="rounded-full -mt-[10%] ml-5 aspect-square w-[20%] bg-[#C1BBEB] border-white border-4 lg:border-8"
          ></div>
          <!-- Teacher name -->
          <div class="grid mt-5 ml-5">
            <h3 class="font-bold mb-4 text-lg md:text-2xl text-[#303972]">
              <!-- {{ student.name }} -->
              Karen Hope
            </h3>
            <p class="text-sm md:text-lg -mt-2 mb-2 text-[#A098AE]">Student</p>
          </div>
          <!--  contacts -->
          <div class="grid grid-cols-2 gap-y-5 mx-5 mt-5 mb-10 justify-between">
            <div>
              <p
                class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
              >
                Parents:
              </p>
              <div class="flex items-center text-sm md:text-lg space-x-2">
                <div
                  class="bg-[#FB7D5B] rounded-full items-center flex justify-center w-8 h-8 md:w-10 md:h-10"
                >
                  <img
                    src="/assets/user-white.svg"
                    alt="call icon"
                    class="h-5 w-5 md:h-6 md:w-6 outline-white rounded-full"
                  />
                </div>
                <p class="text-[#303972] font-semibold">Justin Hope</p>
              </div>
            </div>
            <div>
              <p
                class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
              >
                Adress:
              </p>
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
                <p class="text-[#303972] font-semibold">Jakarta</p>
              </div>
            </div>
            <div>
              <p
                class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
              >
                Phone:
              </p>
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
            </div>
            <div>
              <p
                class="text-xs md:text-sm -mt-2 mb-2 font-light text-[#A098AE]"
              >
                Email:
              </p>
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
                <p class="text-[#303972] font-semibold">Hope@jodna.com</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Payment history -->
        <div>
          <div class="bg-white rounded-2xl p-4 my-8">
            <h3 class="font-bold mb-4 text-base md:text-xl text-[#303972]">
              Payment History
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
