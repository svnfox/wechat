import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  user: {},
  token: null,
  title: '',
  token: ''
}
const getters = {}
const mutations = {
  [types.SIGN_IN]: (state, data) => {
    localStorage.token = data
    state.token = data
  },
  [types.SIGN_OUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.TITLE]: (state, data) => {
    state.title = data
  }
}
const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug
})