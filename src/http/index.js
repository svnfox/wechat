import axios from 'axios'
import store from '@/store'
import * as types from '@/store/types'
import router from '@/router'
import md5 from 'md5'

axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api/v1'

//格式化数据
axios.defaults.transformRequest = data => JSON.stringify(data)

// http request 拦截器
axios.interceptors.request.use(
  config => {
    let timeTamp = parseInt(new Date().getTime() / 1000)
    let LcSign = md5('8d4afc5fb9bf4a3d8d7d2a5f0bf8c8fe' + timeTamp + "f3369de5101044bb930a288e1b44a1d6")

    config.headers['Content-Type'] = 'application/json'
    config.headers['LC-Appkey'] = '8d4afc5fb9bf4a3d8d7d2a5f0bf8c8fe'
    config.headers['LC-Sign'] = LcSign
    config.headers['LC-Timestamp'] = timeTamp
    config.headers['LC-Session'] = store.getters[types.TOKEN]

    return config
  },
  err => {
    return Promise.reject(err)
  });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 403:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT)
                    // router.replace({
                    //     path: 'login',
                    //     query: {redirect: router.currentRoute.fullPath}
                    // })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;
