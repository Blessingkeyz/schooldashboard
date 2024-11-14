// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import DashboardPage from '@/views/DashboardPage.vue'
import StudentsPage from '@/views/StudentsPage.vue'
import AddStudents from '@/views/AddStudents.vue'
import TeachersPage from '@/views/TeachersPage.vue'
import EventsPage from '@/views/EventsPage.vue'
import FinancePage from '@/views/FinancePage.vue'
import FoodsPage from '@/views/FoodsPage.vue'
import UserPage from '@/views/UserPage.vue'
import ChatPage from '@/views/ChatPage.vue'
import LatestActivity from '@/views/LatestActivity.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: DashboardPage },
  { path: '/students', name: 'Students', component: StudentsPage },
  { path: '/addstudents', name: 'AddStudents', component: AddStudents },
  { path: '/teachers', name: 'Teachers', component: TeachersPage },
  { path: '/events', name: 'Events', component: EventsPage },
  { path: '/finance', name: 'Finance', component: FinancePage },
  { path: '/foods', name: 'Foods', component: FoodsPage },
  { path: '/user', name: 'User', component: UserPage },
  { path: '/chat', name: 'Chat', component: ChatPage },
  {
    path: '/latest-activity',
    name: 'LatestActivity',
    component: LatestActivity,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
