<template>
  <div id="app" class="mx-auto overflow-hidden m-0 p-0">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
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
        },
        isOpenSideBar: false
      }
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'userRole'
      ]),
      roleMenu () {
        if (this.userRole === 'admin') {
          return this.adminList
        } else if (this.userRole === 'director') {
            return this.directorList
          } else if (this.userRole === 'supervise') {
            return this.superviseList
          } else if (this.userRole === 'student') {
            return this.studentList
          } else if (this.userRole === 'teacher') {
            return this.teacherList
          } else {
            return this.adminList
          }
        // var filterEmpty = this.menuListItems.filter((item, index, array) => {
        //   return item.role.indexOf(this.userRole) > -1
        // })
        // return filterEmpty
      }
    },
    methods: {
      openSideBar () {
        this.isOpenSideBar = !this.isOpenSideBar
      },
      outside () {
        this.isOpenSideBar = false
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
