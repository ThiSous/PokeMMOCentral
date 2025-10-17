import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import About from '@/components/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Sobre',
    name: 'Sobre',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
