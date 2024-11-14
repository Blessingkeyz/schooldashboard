<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
    >
      <div :class="`text-${stat.color} bg-${stat.color} p-3 rounded-full`">
        <!-- <stat.icon class="h-6 w-6" /> -->
      </div>
      <div>
        <p class="text-2xl font-semibold">{{ stat.value }}</p>
        <p class="text-gray-500">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import {
//   UserIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   ShoppingCartIcon,
// } from '@heroicons/vue/solid'

export default defineComponent({
  setup() {
    const stats = [
      { label: 'Students', value: 932, color: 'orange' },
      { label: 'Teachers', value: 754, color: 'purple' },
      { label: 'Events', value: 40, color: 'yellow' },
      { label: 'Foods', value: '32k', color: 'red' },
    ]

    return {
      stats,
    }
  },
})
</script>
