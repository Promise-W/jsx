import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/sunhome',
    children: [
      {
        path: 'sunhome',
        name: 'SunHome',
        component: () => import('@/views/sunhome.vue')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'loveforever',
        name: 'LoveForever',
        component: () => import('@/views/loveforever.vue'),
        meta: { title: 'About', icon: 'documentation', affix: true }
      },
      {
        path: 'beautylife',
        name: 'BeautyLife',
        component: () => import('@/views/beautylife.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
