import { RouteRecordRaw } from 'vue-router'

// 基础路由

export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('/src/views/home.vue')
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('/src/views/content.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('/src/errorPages/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
]


// 白名单(路径)
export const whiteList = ['/home', '/content', '/404']