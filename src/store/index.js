import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

const state = {
  token: localStorage.token ? localStorage.token : '',
  user: {},
  title: '',
}
const mutations = {
  [types.LOGIN]: (state, data) => {
    state.token = data
    localStorage.token = data
  },
  [types.LOGOUT]: (state) => {
    state.token = null
    localStorage.removeItem('token')
  },
  [types.TITLE]: (state, data) => {
    state.title = data
  }
}
const getters = {
  [types.TOKEN]: (state) => {
    return state.token
  }
}
const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
