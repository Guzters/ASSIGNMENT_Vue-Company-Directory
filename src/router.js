import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/login', component: LoginPage },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
