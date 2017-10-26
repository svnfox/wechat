// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueScroller from 'vue-scroller'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import YDUI from 'vue-ydui'
import FastClick from 'fastclick'
import App from './App'
import axios from './http'
import router from './router'
import store from './store'
import 'vue-ydui/dist/ydui.base.css'
import 'vue-ydui/dist/ydui.flexible'

//按需引入各个UI组件
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
import {TimeLine, TimeLineItem} from 'vue-ydui/dist/lib.rem/timeline';

Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
Vue.component(TimeLine.name, TimeLine);
Vue.component(TimeLineItem.name, TimeLineItem);

//下拉刷新
Vue.use(VueScroller)
Vue.use(VueAwesomeSwiper)
Vue.use(YDUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: { App }
})
