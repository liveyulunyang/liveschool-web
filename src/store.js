import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    lang: 'zh',
    auth: {
      authorized: true, // true false
      userRole: 'admin', // admin director supervise student teacher
      reserveMode: false,
      user: null
    },
    isLoading: false
  },

  getters: {
    authorized: state => state.auth.authorized,
    userRole: state => state.auth.userRole,
    reserveMode: state => state.auth.reserveMode,
    lang: state => state.lang,
    isLoading: state => state.isLoading
  },

  actions: {
    isLoading: (context, data) => {
      context.commit('ISLOADING', data)
    },

    setRole: (context, data) => {
      context.commit('SETROLE', data)
    },

    // 設定語言
    setLang: ({ commit }, data) => {
      commit('SETLANG', data)
    },

    // 主任模式
    setMode: ({ commit }, data) => {
      commit('SETMODE', data)
    },

    login: async ({ commit, dispatch }, user) => {
      await axios.post('/login', {
        'email': user.account,
        'password': user.password
      })
      .then(response => {
        commit('LOGIN', response.data)
        dispatch('getProfile')
        // VueCookie.set('token', response.data.access_token)
      })
      .catch(error => {
        if (error.response.status === 401) {
        }
      })
    },

    logout: async ({ commit }) => {
      commit('LOGOUT')
      // await axios.post('/logout')
      //   .then(() => {
      //     commit('LOGOUT')
      //   }).catch(() => {
      //     commit('LOGOUT')
      //   })
    }
  },
  mutations: {
    ISLOADING (state, data) {
      state.isLoading = data
    },
    SETROLE (state, data) {
      state.auth.userRole = data
    },
    SETLANG (state, value) {
      state.lang = value
    },
    SETMODE (state, data) {
      state.auth.reserveMode = data
    },

    LOGIN (state) {
      state.auth.authorized = true
    },
    LOGOUT (state) {
      state.auth.authorized = false
      state.auth.user = {}
      state.auth.userRole = ''
      // VueCookie.delete('token')
    }
  }
})