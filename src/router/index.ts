import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const token = sessionStorage.getItem("accessToken")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/send-otp',
      name: 'send-otp',
      component: () => import('../views/SendOTP.vue')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/ResetPassword.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DasboardView.vue'),
      beforeEnter: (to, from, next) => {
        if( token === null) {
            router.push('/login');
        } else {
            next();
        }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      beforeEnter: (to, from, next) => {
        if(token === null) {
            router.push('/login')
        } else {
            next();
        }
      }
    }
  ]
})

export default router
