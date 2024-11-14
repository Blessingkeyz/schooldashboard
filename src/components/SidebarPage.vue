<template>
  <aside
    class="w-[230px] md:w-[345px] bg-gradient-to-b from-[#252472] to-[#2321BD] min-h-screen px-4 py-6 md:py-12 text-white"
  >
    <div class="flex items-center space-x-3 mb-4 md:mb-6">
      <div
        class="bg-[#FB7D5B] w-9 h-9 md:h-12 md:w-12 rounded-xl flex items-center justify-center"
      >
        <p class="text-white p-5 text-xl md:text-3xl font-bold">JT</p>
      </div>
      <span
        class="text-xl md:text-3xl w-[200px] font-Poppins text-white font-bold"
        >JODNA TECH</span
      >
    </div>
    <nav>
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="pb-2 pt-1 md:pt-3 md:pb-3 px-4 rounded-md hover:bg-blue-600"
        >
          <router-link
            :to="item.path"
            class="flex items-center space-x-2 text-white"
          >
            <img :src="item.icon" alt="icon" class="w-6 h-6 md:h-8 md:w-8" />
            <span class="text-sm md:text-lg text-[#c1bbeb] font-medium">{{
              item.name
            }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import homeicon from '/assets/home.svg'
import studenticon from '/assets/student.svg'
import teachericon from '/assets/teacher.svg'
import eventsicon from '/assets/calendar.svg'
import financeicon from '/assets/finance.svg'
import foodicon from '/assets/food.svg'
import usericon from '/assets/User.svg'
import chaticon from '/assets/chat.svg'
import activityicon from '/assets/Activity.svg'

const menuItems = [
  { name: 'Dashboard', path: '/', icon: homeicon },
  { name: 'Students', path: '/students', icon: studenticon },
  { name: 'Teachers', path: '/teachers', icon: teachericon },
  { name: 'Events', path: '/events', icon: eventsicon },
  { name: 'Finance', path: '/finance', icon: financeicon },
  { name: 'Foods', path: '/foods', icon: foodicon },
  { name: 'User', path: '/user', icon: usericon },
  { name: 'Chat', path: '/chat', icon: chaticon },
  { name: 'Latest Activity', path: '/latest-activity', icon: activityicon },
]
</script>
