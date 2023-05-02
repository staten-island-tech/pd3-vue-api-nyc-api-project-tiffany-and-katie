import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomeView',
      name: 'Home',
      component: HomeView
    },
   {
    path: '/BarView',
    name: 'Barview',
    component: () => import('../views/BarView.vue')
   },
   {
    path: '/PieView',
    name: 'PieView',
    component: () => import('../views/PieView.vue')
   }
  ]
})

export default router
