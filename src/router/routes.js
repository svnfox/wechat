const Index              = resolve => require.ensure([], () => resolve(require('@/pages/Index')))
const Login              = resolve => require.ensure([], () => resolve(require('@/pages/Login')))
const CertificateQuery   = resolve => require.ensure([], () => resolve(require('@/pages/CertificateQuery')))

const routes = [
	{
	  path: '/',
	  name: 'Index',
	  alias: '/index',
    meta: {
	    title: '首页',
      // auth: false
    }
	},
	{
	  path: '/login',
	  name: 'Login',
    meta: {
	    title: '登录',
      auth: false
    },
	  component: Login
	},
  {
    path: '/certificateQuery',
    name: 'CertificateQuery',
    meta: {
      title: '产证查询',
      auth: true,
    },
    component: CertificateQuery
  }
]

export default routes
