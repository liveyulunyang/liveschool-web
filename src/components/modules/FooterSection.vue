<template>
  <footer class="bg-gray-900 w-full text-white py-12 px-3 text-center md:text-left">
    <div class="container mx-auto flex flex-wrap justify-between">
      <div class="flex flex-wrap w-full md:w-auto mb-12 md:mb-0">
        <div class="px-4 w-1/3 md:w-auto">
          <h6 class="text-lg mb-6">Live School</h6>
          <a href="">{{ $t('teachers') }}</a>
        </div>
        <div class="px-4 w-1/3 md:w-auto">
          <h6 class="text-lg mb-6">{{ $t('SiteGuide') }}</h6>
          <a href="" class="block mb-3">{{ $t('QA') }}</a>
          <a href="" class="block mb-3">{{ $t('Manual') }}</a>
          <a href="" class="block">{{ $t('downloads') }}</a>
        </div>
        <div class="px-4 w-1/3 md:w-auto">
          <h6 class="text-lg mb-6">切換語言</h6>
          <a @click="setLang('en')" class="block mb-3 cursor-pointer">English</a>
          <a @click="setLang('zh')" class="block mb-3 cursor-pointer">繁體中文</a>
          <a @click="setLang('cn')" class="block cursor-pointer">简体中文</a>
        </div>
      </div>
      <div class="w-full md:w-auto flex flex-col items-center md:flex-none md:items-start">
        <p><img src="@/assets/logo_liveabc.png" alt="" class="mb-3"></p>
        <p class="mb-3">school@liveabc.com</p>
        <p>客服專線：02-7730-9567、02-2528-0958</p>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',

  data () {
    return {
    }
  },

  props: {
  },

  components: {
  },
  computed: {
    ...mapGetters([
      'userRole',
      'lang'
    ])
  },
  methods: {
    setRole (event) {
      this.$store.dispatch('setRole', event.target.value)
    },
    setLang (lang) {
      this.$store.dispatch('setLang', lang)
      this.$i18n.locale = lang
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
