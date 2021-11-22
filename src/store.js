import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    lang: 'zh',
    auth: {
      authorized: true,
      userRole: 'director', // admin director supervise student teacher
      reserveMode: false,
      user: null
    }
  },
  getters: {
    userRole: state => state.auth.userRole,
    reserveMode: state => state.auth.reserveMode,
    lang: state => state.lang
  },
  actions: {
    setRole: (context, data) => {
      context.commit('SETROLE', data)
    },
    setLang: ({ commit }, data) => {
      commit('SETLANG', data)
    },
    setMode: ({ commit }, data) => {
      commit('SETMODE', data)
    }
  },
  mutations: {
    SETROLE (state, data) {
      state.auth.userRole = data
    },
    SETLANG (state, value) {
      state.lang = value
    },
    SETMODE (state, data) {
      state.auth.reserveMode = data
    }
  }
})