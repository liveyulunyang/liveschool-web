<template>
  <div id="app" class="mx-auto overflow-hidden m-0 p-0 scroll-bar">
    <BookLoading v-if="$store.state.isLoading" />
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import BookLoading from '@/components/modules/BookLoading'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      BookLoading
    },
    data () {
      return {
        isOpenUser: false,
        user: {
          img: {
            src: require('./assets/img/avatar.png'),
            alt: 'avatar'
          },
          firstName: "Anna",
          lastName: "Black",
          professionnalFunction: "Sr. Customer Manager"
        }
        // isOpenSideBar: false
      }
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'userRole'
      ])
    },
    methods: {
      outside () {
        // this.isOpenSideBar = false
        this.isOpenUser = false
      },
      setRole (event) {
        this.$store.dispatch('setRole', event.target.value)
      }
    }
  }
</script>

<style>
</style>
