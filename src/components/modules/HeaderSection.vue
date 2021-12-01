<template>
  <header class="bg-white flex justify-between px-2 lg:px-16 border-b-2 border-gray-900 border-solid h-20 z-50">
    <Nav class="md:hidden" mode="mobile" :menu-list-item="roleMenu"></Nav>
    <router-link :to="{ name: logoRouter }" class="flex items-center cursor-pointer">
      <img alt="logo" src="@/assets/logo.png" class="w-24 md:w-48 h-auto" v-if="$route.name !== 'bookingClass' && $route.name !== 'classPreview' && $route.name !== 'classPreviewTeacher' && $route.name !== 'classPreviewTalk'">
      <span class="mt-4 ml-3 hidden md:block" v-if="$route.name !== 'bookingClass' && $route.name !== 'classPreview' && $route.name !== 'classPreviewTeacher' && $route.name !== 'classPreviewTalk'">遠距教學平台</span>
    </router-link>
    <router-link class="flex items-center" to="/" v-if="$route.name === 'bookingClass' || $route.name === 'classPreview' || $route.name === 'classPreviewTeacher' || $route.name === 'classPreviewTalk'">
      <img alt="logo" src="@/assets/logo_talk.png" class="w-24 md:w-48 h-auto" v-if="$route.params.type === 'talk' || $route.name === 'classPreviewTalk'">
      <img alt="logo" src="@/assets/logo_class.png" class="w-24 md:w-48 h-auto" v-if="$route.params.type === 'class' || $route.name === 'classPreview'">
      <img alt="logo" src="@/assets/logo_teacher.png" class="w-24 md:w-48 h-auto" v-if="$route.params.type === 'teacher' || $route.name === 'classPreviewTeacher'">
    </router-link>
    <div class="flex items-center">
      <div class="text-xs hidden lg:flex mr-3" v-if="userRole === 'director'">
        <a class="px-2 py-2 cursor-pointer rounded mx-1 btn-mode" :class="{ active: $store.state.auth.reserveMode }" @click="setMode(true)">預約管理模式</a>
        <a class="px-2 py-2 cursor-pointer rounded mx-1 btn-mode" :class="{ active: !$store.state.auth.reserveMode }" @click="setMode(false)">個人學習模式</a>
      </div>
      <div v-if="!authorized" class="flex items-center">
        <a class="hidden md:block cursor-pointer px-3 py-2 text-main font-bold mr-3" href="https://docs.google.com/forms/d/e/1FAIpQLSfw_Q9scdFhVp5iNFO8exubkbloQGILu3rbdsnmMFANnFqHDA/viewform" target="_blank">{{ $t('cooperative') }}</a>
        <a class="block cursor-pointer border-2 rounded-xl px-3 py-2 text-main font-bold border-main" @click="$emit('toggleLogin', true)">{{ $t('login') }}</a>
      </div>
      <div class="dropdown" v-if="authorized">
        <button class="dropbtn focus:outline-none font-bold" @click="isOpenUser = !isOpenUser">Hi! Peggy<i class="fas fa-sort-down ml-2"></i></button>
        <div id="myDropdown" class="dropdown-content font-bold" :class=" { hidden: !isOpenUser }" v-click-outside="hide">

          <router-link :to="{ name: 'account' }">{{ $t('account') }}</router-link>
          <router-link :to="{ name: 'learn_record_student' }">{{ $t('checkoutRecord') }}</router-link>
          <a @click="logout" class="cursor-pointer">{{ $t('logout') }}</a>
        </div>
      </div>
      <router-link :to="{ path: '/announce/read' }" v-if="authorized"
          class="mx-2 relative text-gray-1 hover:text-primary-normal focus:outline-none block cursor-pointer"
          round>
        <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-999"></span>
        <!-- <svg xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="35"
          width="35"
          class="fill-current">
        <use xlink:href="#c-icon-bell"></use>
        </svg> -->
        <i class="fas fa-bell text-3xl text-main"></i>
      </router-link>
    </div>
  </header>
</template>
<script>
import ClickOutside from 'vue-click-outside'
import Nav from '@/components/Nav'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',

  data () {
    return {
      isOpenUser: false
      // isOpenSideBar: false
    }
  },

  props: {
    roleMenu: {
      type: Array
    }
  },
  directives: {
    ClickOutside
  },
  components: {
    Nav
  },
  computed: {
    ...mapGetters([
      'userRole',
      'lang',
      'authorized'
    ]),
    logoRouter () {
      let self = this
      if (self.authorized) {
        if (self.userRole === 'admin') {
          return 'Users'
        } else if (self.userRole === 'director' && self.reserveMode) {
          return 'myClass'
            // self.$router.push({ name: 'myClass' })
          } else if (self.userRole === 'director' && !self.reserveMode) {
            return 'myClass'
            // self.$router.push({ name: 'myClass' })
          } else if (self.userRole === 'supervise') {
            return 'branch'
            // self.$router.push({ name: 'branch' })
          } else if (self.userRole === 'student') {
            return 'myClass'
            // self.$router.push({ name: 'myClass' })
          } else if (self.userRole === 'teacher') {
            return 'myClass'
            // self.$router.push({ name: 'myClass' })
          } else {
            return 'home'
            // self.$router.push({ name: 'Users' })
          }
      } else {
        return 'home'
        // self.$router.push({ name: 'index' })
      }
    }
  },
  mounted () {
    this.popupItem = this.$el
  },
  methods: {
    setMode (val) {
      this.$store.dispatch('setMode', val)
    },
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push({ path: '/' })
    },
    hide () {
      this.isOpenUser = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown{
  position: relative;
  display: inline-block;
  color: #4D4D4D;
  a {
    &:hover {
      background-color: #ddd;
    }
  }
  .dropbtn {
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    color: #4D4D4D;
  }

  .dropdown-content {
    /* display: none; */
    position: absolute;
    left: -2em;
    background-color: #ffffff;
    min-width: 140px;
    overflow: auto;
    border: 1px solid #ddd;
    z-index: 1;
    font-size: 14px;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  // .dropdown

  .show {display: block;}
}
.btn-mode {
  color: #999999;
  transition: .2s;
  &:hover {
    background: #0F455C;
    color: white;
  }
}
.btn-mode.active {
  background: #0F455C;
  color: white;
}
</style>
