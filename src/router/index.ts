import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BasicRoute from '@/views/BasicRoute.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  // 👇 Adicione essa parte
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 } // sempre começa do topo ao trocar de página
    }
  },
})

export default router
