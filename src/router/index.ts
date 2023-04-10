import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
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
      component: LoginView
    }
  ]
})

export default router
