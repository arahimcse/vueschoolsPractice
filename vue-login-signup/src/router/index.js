import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboarPage.vue')
    }
  ]
})

export default router
