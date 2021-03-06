import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

//跳转后滚到顶部
const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

const router = new Router({
  routes,
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  console.log(to)
	if (to.matched.some(record => record.meta.auth)) {
	  // if (!auth.loggedIn()) {
	  //   next({
	  //     path: '/login',
	  //     query: { redirect: to.fullPath }
	  //   })
	  // } else {
	    next()
	  // }
	} else {
	  next() // 确保一定要调用 next()
	}
})

router.afterEach(router => {

})

export default router
