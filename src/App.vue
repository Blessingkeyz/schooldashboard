<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import SidebarPage from './components/SidebarPage.vue'

const showSidebar = ref(false)

const isDesktop = ref(window.innerWidth >= 1024)

const toggleSidebar = () => {
  if (!isDesktop.value) {
    showSidebar.value = !showSidebar.value
  }
}

const updateIsDesktop = () => {
  isDesktop.value = window.matchMedia('(min-width: 1024px)').matches
  if (!isDesktop.value) {
    showSidebar.value = false
  }
}

// const handleResize = () => {
//   windowWidth.value = window.innerWidth
//   if (windowWidth.value < 1024) showSidebar.value = false
// }
// console.log(windowWidth)
watch(isDesktop, newValue => {
  if (!newValue) {
    showSidebar.value = false
  }
})

onMounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 1024px)')

  mediaQuery.addEventListener('change', updateIsDesktop)
  updateIsDesktop()
})

onUnmounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 1024px)')

  mediaQuery.removeEventListener('change', updateIsDesktop)
  // updateIsDesktop()
})
</script>

<template>
  <div class="flex">
    <SidebarPage
      v-if="showSidebar || isDesktop"
      :class="{
        'fixed inset-y-0 left-0 w-64 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out':
          !isDesktop,
        'translate-x-0': showSidebar,
        '-translate-x-full': !showSidebar && !isDesktop,
      }"
    />
    <div
      v-if="showSidebar && !isDesktop"
      @click="toggleSidebar"
      class="bg-black z-40 bg-opacity-50 fixed inset-0 lg:hidden"
    ></div>

    <div class="w-full">
      <main class="overflow-y-auto">
        <RouterView :toggleSidebar="toggleSidebar" />
      </main>
    </div>
  </div>
</template>
