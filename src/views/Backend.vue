<template>
<div>
<div id="backView" class="min-h-screen overflow-auto">
  <Nav class="hidden md:block" :menu-list-item="roleMenu" :user="user"></Nav>
  <header class="bg-white flex justify-between px-2 lg:px-20 border-b-2 border-gray-900 border-solid h-20">
    <Nav class="md:hidden" mode="mobile" :menu-list-item="roleMenu" :user="user"></Nav>
    <router-link class="flex items-center" to="/">
      <img alt="Velocity" src="@/assets/logo.png" class="w-24 md:w-48 h-auto">
    </router-link>
    <div class="flex items-center">
      <div class="dropdown">
        <button class="dropbtn focus:outline-none" @click="isOpenUser = !isOpenUser">Hi! Peggy<i class="fas fa-sort-down ml-2"></i></button>
        <div id="myDropdown" class="dropdown-content" :class=" { hidden: !isOpenUser }">

          <router-link :to="{ name: 'account' }">帳號資料</router-link>
          <router-link :to="{ name: 'learn_record_student' }">查詢紀錄</router-link>
          <a href="#base">登出</a>
        </div>
      </div>
      <Button @click.native="openSideBar"
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
      </Button>
    </div>
  </header>
  <router-view class="min-h-full" @click.native="outside" />
  <SideBar :is-visible="isOpenSideBar" @click="outside"></SideBar>

  <div class="fixed bottom-0 right-0 z-40 cursor-pointer">
    <div class="relative w-auto mx-1">
      <select class="block appearance-none py-3 px-4 pr-8 rounded leading-tight focus:outline-none border" id="setRole"
        @change="setRole($event)" v-model="$store.state.userRole">
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
  <footer class="bg-gray-900 w-full text-white py-12 px-3 md:px-0 text-center md:text-left">
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
</div>
</template>

<script>
  import Nav from '@/components/Nav'
  import Button from "@/components/Button"
  import SideBar from "@/components/SideBar"
  import { mapGetters } from 'vuex'
export default {
  name: 'Backend',
  data () {
    return {
        isOpenUser: false,
        menuListItems: [
          {
            icon: "fas fa-users",
            title: "使用者管理",
            url: "/users",
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
        ],
        adminList: [
          {
            icon: "fas fa-users",
            title: "使用者管理",
            url: "/users"
          },
          {
            icon: "fas fa-comments",
            title: "課程管理",
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
            src: require('@/assets/img/avatar.png'),
            alt: 'avatar'
          },
          firstName: "Anna",
          lastName: "Black",
          professionnalFunction: "Sr. Customer Manager"
        },
        isOpenSideBar: false
    }
  },
  components: {
    Nav,
    Button,
    SideBar
  },
  mounted () {
  },
  updated () {
  },
    computed: {
      ...mapGetters([
        'userRole',
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
      },
      setLang (lang) {
        this.$store.dispatch('setLang', lang)
        this.$i18n.locale = lang
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

.dropbtn {
  /* background-color: #04AA6D; */
  /* color: white; */
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  /* background-color: #3e8e41; */
}

.dropdown {
  position: relative;
  display: inline-block;
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

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
</style>
