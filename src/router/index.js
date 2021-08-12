import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/loveyou'
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'loveyou',
        name: 'LoveYou',
        component: () => import('@/views/loveyou.vue'),
        meta: { title: 'LoveYou', icon: 'love-you' }
      },
      {
        path: 'lovelife',
        name: 'LoveLife',
        component: () => import('@/views/lovelife.vue'),
        meta: { title: 'LoveLife', icon: 'Love-life' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
