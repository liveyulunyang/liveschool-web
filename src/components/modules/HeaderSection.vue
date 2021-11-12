<template>
  <header class="bg-white flex justify-between px-2 lg:px-20 border-b-2 border-gray-900 border-solid h-20">
    <Nav class="md:hidden" mode="mobile" :menu-list-item="roleMenu"></Nav>
    <router-link class="flex items-center" to="/">
      <img alt="Velocity" src="@/assets/logo.png" class="w-24 md:w-48 h-auto">
      <span class="mt-4 ml-3 hidden md:block">遠距教學平台</span>
    </router-link>
    <div class="flex items-center">
      <div v-if="!$store.state.auth.authorized" class="flex items-center">
        <a class="hidden md:block cursor-pointer px-3 py-2 text-main font-bold mr-3" href="https://docs.google.com/forms/d/e/1FAIpQLSfw_Q9scdFhVp5iNFO8exubkbloQGILu3rbdsnmMFANnFqHDA/viewform" target="_blank">合作開課</a>
        <a class="block cursor-pointer border-2 rounded-xl px-3 py-2 text-main font-bold border-main" @click="$emit('toggleLogin', true)">登入 / 免費註冊</a>
      </div>
      <div class="dropdown" v-if="$store.state.auth.authorized">
        <button class="dropbtn focus:outline-none" @click="isOpenUser = !isOpenUser">Hi! Peggy<i class="fas fa-sort-down ml-2"></i></button>
        <div id="myDropdown" class="dropdown-content" :class=" { hidden: !isOpenUser }">

          <router-link :to="{ name: 'account' }">帳號資料</router-link>
          <router-link :to="{ name: 'learn_record_student' }">查詢紀錄</router-link>
          <a href="#base">登出</a>
        </div>
      </div>
      <button @click.native="openSideBar" v-if="$store.state.auth.authorized"
          class="mx-2 relative text-gray-1 hover:text-primary-normal focus:outline-none"
          round>
        <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-gray-900"></span>
        <svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="35"
          width="35"
          class="fill-current">
        <use xlink:href="#c-icon-bell"></use>
        </svg>
      </button>
    </div>
  </header>
</template>
<script>
import Nav from '@/components/Nav'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',

  data () {
    return {
    }
  },

  props: {
    roleMenu: {
      type: Array
    }
  },

  components: {
    Nav
  },
  computed: {
    ...mapGetters([
      'userRole',
      'lang'
    ])
  },
  methods: {
  }
}
</script>

<style>
</style>
