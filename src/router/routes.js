const Index              = resolve => require.ensure([], () => resolve(require('@/pages/Index')))
const Login              = resolve => require.ensure([], () => resolve(require('@/pages/Login')))
const CertificateQuery   = resolve => require.ensure([], () => resolve(require('@/pages/CertificateQuery')))
const MPreview           = resolve => require.ensure([], () => resolve(require('@/components/MPreview')))

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
  },
  {
    path: '/MPreview',
    name: 'MPreview',
    meta: {
      title: '相册',
      auth: false
    },
    component: MPreview
  }
]

export default routes
