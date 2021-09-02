<template>
  <div id="app" class="min-h-screen overflow-auto">
    <Nav class="hidden md:block" :menu-list-item="roleMenu" :user="user"></Nav>
    <header class="bg-white flex justify-between px-2 lg:px-20 border-b border-gray-3 border-solid h-20">
      <Nav class="md:hidden" mode="mobile" :menu-list-item="roleMenu" :user="user"></Nav>
      <router-link class="flex items-center" to="/">
        <img alt="Velocity" src="./assets/logo.png" class="w-24 md:w-48 h-auto">
      </router-link>
      <div class="flex items-center">
        <div class="dropdown">
          <button class="dropbtn focus:outline-none" @click="isOpenUser = !isOpenUser">Hi! Peggy<i class="fas fa-sort-down ml-2"></i></button>
          <div id="myDropdown" class="dropdown-content" :class=" { hidden: !isOpenUser }">

            <a href="#about">編輯個人資料</a>
            <a href="#base">登出</a>
          </div>
        </div>
        <Button @click.native="openSideBar"
            class="mx-2 relative text-gray-1 hover:text-primary-normal focus:outline-none"
            round>
          <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-normal"></span>
          <svg xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            height="35"
            width="35"
            class="fill-current">
          <use xlink:href="#c-icon-bell"></use>
          </svg>
        </Button>
        <!-- <Button @click.native="openSideBar"
                class="mx-2 relative text-gray-1 hover:text-primary-normal"
                round>
          <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary-normal"></span>
          <svg xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              height="35"
              width="35"
              class="fill-current">
            <use xlink:href="#c-icon-chat"></use>
          </svg>
        </Button> -->
        <!-- <Button @click.native="openSideBar"
                class="mx-2"
                round>
          <avatar type="simple"
                  :img="user.img"
                  img-class="h-8 w-8 rounded-full">
          </avatar>
        </Button> -->
      </div>
    </header>
    <router-view class="min-h-full" @click.native="outside" />
    <SideBar :is-visible="isOpenSideBar" @click="outside"></SideBar>

    <div class="fixed fiex flex-wrap bottom-0 left-0 w-full flex z-40 cursor-pointer bg-blue-500 text-white">
      <div class="w-1/4 border py-3" @click="$store.dispatch('setRole', 'admin')">管理者</div>
      <div class="w-1/4 border py-3" @click="$store.dispatch('setRole', 'director')">主任</div>
      <div class="w-1/4 border py-3" @click="$store.dispatch('setRole', 'student')">學生</div>
      <div class="w-1/4 border py-3" @click="$store.dispatch('setRole', 'supervise')">督導</div>
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav'
  import Button from "./components/Button"
  // import Avatar from "./components/Avatar"
  import SideBar from "./components/SideBar"
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      Nav,
      Button,
      SideBar
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
            title: "課程管理",
            url: "/courses",
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
            icon: "fas fa-address-card",
            title: "授課紀錄",
            url: "/teach_record",
            role: ['admin']
          },
          {
            icon: "fas fa-money-bill",
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
            role: ['director', 'student']
          },
          {
            icon: "fas fa-users",
            title: "學生管理",
            url: "/students",
            role: ['director']
          },
          {
            icon: "fas fa-users",
            title: "分校管理",
            url: "/branch",
            role: ['supervise']
          }
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
        var filterEmpty = this.menuListItems.filter((item, index, array) => {
          return item.role.indexOf(this.userRole) > -1
        })
        return filterEmpty
      }
    },
    methods: {
      openSideBar () {
        this.isOpenSideBar = !this.isOpenSideBar
      },
      outside () {
        this.isOpenSideBar = false
        this.isOpenUser = false
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: block;
    background-color: #F4F6FC;
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    grid-template-areas: "head"
    "main";
  }
  #app > header {
    grid-area: head;
  }
  main {
    grid-area: main;
  }

  @media (min-width: 768px) {
    #app {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 80px 1fr ;
      grid-template-areas: "nav head"
      "nav main";
    }

    #app > header {
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
