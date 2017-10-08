const Index              = resolve => require.ensure([], () => resolve(require('@/pages/Index')))
const Login              = resolve => require.ensure([], () => resolve(require('@/pages/Login')))

const routes = [
	{
	  path: '/',
	  name: 'Index',
	  alias: '/index',
    meta: {
	    title: '首页',
      // auth: false
    },
    children: [{
	    path: 'test',
      name: 'test',
      meta: {
	      title: 'tset',
        auth: false,
      },
      component: Login
    }],
	  component: Index
	},
	{
	  path: '/login',
	  name: 'Login',
    meta: {
	    title: '登录',
      auth: false
    },
	  component: Login
	}
]

export default routes
