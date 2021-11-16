import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    lang: 'zh',
    auth: {
      authorized: true,
      userRole: 'admin', // admin director supervise student teacher
      user: null
    }
  },
  getters: {
    userRole: state => state.auth.userRole,
    lang: state => state.lang
  },
  actions: {
    setRole: (context, data) => {
      context.commit('SETROLE', data)
    },
    setLang: ({ commit }, data) => {
      commit('SETLANG', data)
    }
  },
  mutations: {
    SETROLE (state, data) {
      state.auth.userRole = data
    },
    SETLANG (state, value) {
      state.lang = value
    }
  }
})