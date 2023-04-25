import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'comic',
          name: 'comic',
          component: () => import('../views/Comic.vue')
        },
        {
          path: 'video',
          name: 'video',
          component: () => import('../views/Video.vue')
        },
        {
          path: 'mmd',
          name: 'mmd',
          component: () => import('../views/MMD.vue')
        },
        {
          path: 'music',
          name: 'music',
          component: () => import('../views/Music.vue')
        },
        {
          path: 'storage',
          name: 'storage',
          component: () => import('../views/Storage.vue')
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('../views/Setting.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
