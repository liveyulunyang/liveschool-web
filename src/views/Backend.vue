<template>
<div>
  <div id="backView" class="min-h-screen overflow-auto">
    <Nav class="hidden md:block" :menu-list-item="roleMenu" ></Nav>

    <HeaderSection :roleMenu="roleMenu" />
    <Login v-if="$store.state.isOpenLogin" />

    <router-view class="min-h-full" @click.native="outside" />
    <!-- <SideBar :is-visible="isOpenSideBar" @click="outside"></SideBar> -->

    <div class="fixed bottom-0 right-0 z-40 cursor-pointer" v-if="$store.state.auth.authorized">
      <div class="relative w-auto mx-1">
        <select class="block appearance-none py-3 px-4 pr-8 rounded leading-tight focus:outline-none border" id="setRole"
          @change="setRole($event)" v-model="$store.state.auth.userRole">
          <option value="admin">管理者</option>
          <option value="director">主任</option>
          <option value="student">學生</option>
          <option value="supervise">督導</option>
          <option value="teacher">老師</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
  import Nav from '@/components/Nav'
  // import SideBar from "@/components/SideBar"
  import HeaderSection from "@/components/modules/HeaderSection"
  import Login from "@/components/popup/Login"
  import { mapGetters } from 'vuex'
  export default {
    name: 'Backend',
    data () {
      return {
        isOpenLogin: false,
          isOpenUser: false,
          adminList: [
            {
              icon: "fas fa-users",
              title: "使用者管理",
              url: "/users"
            },
            {
              icon: "fas fa-comments",
              title: "Live Talk",
              url: "/courses_talk"
            },
            {
              icon: "fas fa-chalkboard-teacher",
              title: "Live Teacher",
              url: "/courses_teacher"
            },
            {
              icon: "fab fa-youtube",
              title: "Live Class",
              url: "/courses_class"
            },
            {
              icon: "fas fa-list-ul",
              title: "分類管理",
              url: "/classification"
            },
            {
              icon: "fas fa-book",
              title: "預約課程",
              url: "/book_course_Admin"
            },
            {
              icon: "fas fa-history",
              title: "學習紀錄",
              url: "/learn_record/list"
            },
            {
              icon: "fas fa-id-card",
              title: "授課紀錄",
              url: "/teach_record"
            },
            {
              icon: "fas fa-ticket-alt",
              title: "點數管理",
              url: "/point"
            },
            {
              icon: "fas fa-key",
              title: "序號管理",
              url: "/serial_number"
            },
            {
              icon: "fas fa-bell",
              title: "公告",
              url: "/announce/edit"
            },
            {
              icon: "fas fa-briefcase",
              title: "會議管理",
              url: "/meeting"
            },
            {
              icon: "fas fa-info",
              title: "系統教室資訊",
              url: "/info"
            },
            {
              icon: "far fa-newspaper",
              title: "首頁管理",
              url: "/index_manage"
            }
          ],
          directorListReserve: [
            {
              icon: "fas fa-users",
              title: "學生管理",
              url: "/students"
            },
            {
              icon: "fas fa-book",
              title: "預約課程",
              url: "/book_course_director"
            },
            {
              icon: "fas fa-chalkboard-teacher",
              title: "報名進度",
              url: "/RegistrationProgress"
            },
            {
              icon: "far fa-calendar-alt",
              title: "我的課程",
              url: "/myClass"
            }
          ],
          directorListBook: [
            {
              icon: "far fa-calendar-alt",
              title: "我的課程",
              url: "/myClass"
            },
            {
              icon: "fas fa-chart-line",
              title: "能力剖面圖",
              url: "/sectional_drawing"
            }
          ],
          superviseList: [
            {
              icon: "fas fa-users",
              title: "分校管理",
              url: "/branch"
            }
          ],
          studentList: [
            {
              icon: "far fa-calendar-alt",
              title: "我的課程",
              url: "/myClass"
            },
            {
              icon: "fas fa-chart-line",
              title: "能力剖面圖",
              url: "/sectional_drawing"
            }
          ],
          teacherList: [
            {
              icon: "far fa-calendar-alt",
              title: "我的課程",
              url: "/myClass"
            }
          ]

          // isOpenSideBar: false
      }
    },
    components: {
      HeaderSection,
      Nav,
      // SideBar,
      Login
    },
    watch: {
      '$store.state.auth.authorized' (oldVal, newVal) {
        if (newVal === false) {
          this.$router.push({ name: 'home' })
        }
      }
    },
    mounted () {
    },
    updated () {
    },
    computed: {
      ...mapGetters([
        'userRole',
        'reserveMode',
        'lang'
      ]),
      lang: {
        get () {
          return this.$store.state.lang
        },
        set () {}
      },
      roleMenu () {
        if (this.userRole === 'admin') {
          return this.adminList
        } else if (this.userRole === 'director' && this.reserveMode) {
            return this.directorListReserve
          } else if (this.userRole === 'director' && !this.reserveMode) {
            return this.directorListBook
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
      outside () {
        this.isOpenUser = false
      },
      setRole (event) {
        this.$store.dispatch('setRole', event.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #backView {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: block;
    background-color: #DEECF0;
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    grid-template-areas: "head"
    "main";
  }
  #backView > header {
    grid-area: head;
  }
  main {
    grid-area: main;
  }

  @media (min-width: 768px) {
    #backView {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 80px 1fr ;
      grid-template-areas: "nav head"
      "nav main";
    }

    #backView > header {
      grid-area: head;
    }
  }

</style>
