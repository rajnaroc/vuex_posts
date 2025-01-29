import { createRouter, createWebHistory } from 'vue-router'
import PostView from '@/views/PostView.vue'

const routes = [
  {
    path: '/',
    name: 'post',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
