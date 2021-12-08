<template>
<div>
  <div id="Company" class="min-h-screen overflow-auto">
    <HeaderSection :roleMenu="roleMenu" />
    <Login v-if="$store.state.isOpenLogin" />

    <router-view class="min-h-full" @click.native="outside" />
  </div>
</div>
</template>

<script>
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
      Login
    },
    watch: {
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
      ])
    },
    methods: {
      outside () {
        this.isOpenUser = false
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
