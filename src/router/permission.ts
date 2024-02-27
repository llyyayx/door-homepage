import { whiteList } from './basics.router'
import { Router } from 'vue-router'


// 权限验证

export const permission = (router: Router) => {
  
  router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/404', query: { redirect: to.fullPath } })
    }
  })

}
