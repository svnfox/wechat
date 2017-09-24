import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})

Router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
	  // this route requires auth, check if logged in
	  // if not, redirect to login page.
	  if (!auth.loggedIn()) {
	    next({
	      path: '/login',
	      query: { redirect: to.fullPath }
	    })
	  } else {
	    next()
	  }
	} else {
	  next() // 确保一定要调用 next()
	}
})

Router.afterEach(router => {

})
