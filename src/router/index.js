import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/card/:id',
      name: 'card',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardView.vue')
    },
    // if no match found redirect to 404
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router