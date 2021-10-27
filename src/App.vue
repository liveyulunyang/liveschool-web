<template>
  <div id="app" class="mx-auto overflow-hidden m-0 p-0 w-full h-auto">
    <router-view></router-view>
  </div>
</template>

<script>
  // import Nav from './components/Nav'
  // import Button from "./components/Button"
  // import SideBar from "./components/SideBar"
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      // Nav,
      // Button,
      // SideBar
    },
    data () {
      return {
        isOpenUser: false,
        menuListItems: [
          {
            icon: "fas fa-users",
            title: "使用者管理",
            url: "/",
            role: ['admin']
          },
          {
            icon: "fas fa-comments",
            title: "LC課程管理",
            url: "/courses",
            role: ['admin']
          },
          {
            icon: "fas fa-chalkboard-teacher",
            title: "TC課程管理",
            url: "/CoursesTeacher",
            role: ['admin']
          },
          {
            icon: "fab fa-youtube",
            title: "Live Class",
            url: "/live_class",
            role: ['admin']
          },
          {
            icon: "fas fa-list-ul",
            title: "分類管理",
            url: "/classification",
            role: ['admin']
          },
          {
            icon: "fas fa-book",
            title: "預約課程",
            url: "/book_course",
            role: ['admin', 'director']
          },
          {
            icon: "fas fa-history",
            title: "學習紀錄",
            url: "/learn_record",
            role: ['admin']
          },
          {
            icon: "fas fa-id-card",
            title: "授課紀錄",
            url: "/teach_record",
            role: ['admin']
          },
          {
            icon: "fas fa-ticket-alt",
            title: "點數管理",
            url: "/point",
            role: ['admin', 'director']
          },
          {
            icon: "fas fa-key",
            title: "序號管理",
            url: "/serial_number",
            role: ['admin']
          },
          {
            icon: "fas fa-bell",
            title: "公告",
            url: "/announce",
            role: ['admin']
          },
          {
            icon: "fas fa-info",
            title: "系統資訊",
            url: "/info",
            role: ['admin']
          },
          {
            icon: "far fa-calendar-alt",
            title: "我的課程",
            url: "/myClass",
            role: ['director', 'student', 'teacher']
          },
          {
            icon: "fas fa-users",
            title: "學生管理",
            url: "/students",
            role: ['director']
          },
          {
            icon: "fas fa-seedling",
            title: "能力剖面圖",
            url: "/sectional_drawing",
            role: ['student', 'teacher']
          },
          {
            icon: "fas fa-users",
            title: "分校管理",
            url: "/branch",
            role: ['supervise']
          }
          // {
          //   icon: "fas fa-school",
          //   title: "分校管理",
          //   url: "/branch",
          //   role: ['admin', 'director', 'student', 'supervise']
          // }
          // {
          //   id: 0,
          //   icon: "#c-icon-dashboard",
          //   title: "Overview",
          //   url: "/"
          // },s
          // {
          //   id: 1,
          //   icon: "#c-icon-analytics",
          //   title: "Analitycs",
          //   url: "/analytics"
          // },
          // {
          //   id: 2,
          //   icon: "#c-icon-vehicles",
          //   title: "Vehicles",
          //   url: "/vehicles"
          // },
          // {
          //   id: 3,
          //   icon: "#c-icon-service",
          //   title: "Service",
          //   url: "/service-reminders"
          // },
          // {
          //   id: 4,
          //   icon: "#c-icon-map",
          //   title: "Map",
          //   url: "/map"
          // },
          // {
          //   id: 5,
          //   icon: "#c-icon-chat",
          //   title: "Chat",
          //   url: "/chat"
          // },
          // {
          //   id: 6,
          //   icon: "#c-icon-settings",
          //   title: "Settings",
          //   url: "/settings"
          // }
        ],
        adminList: [
          {
            icon: "fas fa-users",
            title: "使用者管理",
            url: "/"
          },
          {
            icon: "fas fa-comments",
            title: "課程管理",
            url: "/courses"
          },
          {
            icon: "fas fa-chalkboard-teacher",
            title: "Live Teacher",
            url: "/CoursesTeacher"
          },
          {
            icon: "fab fa-youtube",
            title: "Live Class",
            url: "/CoursesClass"
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
            url: "/learn_record"
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
            url: "/announce"
          },
          {
            icon: "fas fa-info",
            title: "系統資訊",
            url: "/info"
          }
        ],
        directorList: [
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
        ],
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
