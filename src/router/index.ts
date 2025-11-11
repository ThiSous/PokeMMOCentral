import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BasicRoute from '@/views/BasicRoute.vue'
import BerryCalculator from '@/views/BerryCalculator.vue'

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
  {
    path: '/Rota-Basica',
    name: 'Rota Básica',
    component: BasicRoute,
  },
  {
    path: '/Berry-Calculator',
    name: 'Guia de berries',
    component: BerryCalculator,
  },
]

const router = createRouter({
  history: createWebHistory('/PokeMMOCentral/'),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
})

export default router
