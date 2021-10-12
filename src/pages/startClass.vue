<template>
  <div class="bg-gray-800 relative">
  <!-- <div>
    <fullscreen :fullscreen.sync="fullscreen">
      content
    </fullscreen>
    <button type="button" @click="toggle" >Fullscreen</button>
    <div class="fullscreen-wrapper">
      content
    </div>
    <button type="button" @click="toggleApi" >FullscreenApi</button>
  </div> -->
    <div class="container max-h-screen">
      <pdf src="/test.pdf" :page="currentPage" @num-pages="pageCount = $event" @page-loaded="currentPage = $event" ref="myPdfComponent"></pdf>
    </div>

    <div class="absolute w-full left-0 bottom-0 bg-gray-900">
      <div class="flex items-stretch py-3 video-mode-play-bar">
        <div class="w-1/3 text-white flex items-center">
          <div class="dropup w-full">
            <button class="dropbtn w-full text-left text-lg focus:outline-none" @click="isShowMenu= !isShowMenu">
              <i class="fas fa-sort-up px-4"></i>01.English Restaurant
            </button>
            <div class="dropup-content w-full px-4" :class="{ block: isShowMenu }">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="w-2/3 border-l flex items-center">
          <div class="bottom-0 left-0 w-full px-3">
            <div class="flex items-center justify-between">
              <div class="flex w-5/6 items-center">
                <a class="text-white block px-2 cursor-pointer" @click="prePage">
                  <i class="fas fa-chevron-left"></i>
                </a>
                <div class="mx-2">
                  <p class="text-white text-lg font-bold">{{ currentPage }}<span class="mx-1">/</span>{{ pageCount }}</p>
                </div>
                <div class="progess-bar relative w-full mx-2">
                  <div class="progess-bar-bg h-2 text-xs flex rounded">
                    <div :style="`width:{{ currentPage }} / {{ pageCount }}`" class="rounded progess-bar-num shadow-none flex flex-col whitespace-nowrap bg-white justify-center login-btn-login player-video"></div>
                  </div>
                </div>
                <a class="text-white block px-2 cursor-pointer" @click="nextPage"><i class="fas fa-chevron-right"></i></a>
              </div>
              <div class="w-1/6 video-mode-play-bar-btns flex justify-center items-center mx-2 text-white">
                <a class="btn inline-block p-3 text-xl cursor-pointer" @click="$refs.myPdfComponent.print()">
                  <i class="fas fa-download"></i>
                </a>
                <a class="btn inline-block p-3 text-xl cursor-pointer">
                  <i class="fas fa-expand"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueFullscreen from 'vue-fullscreen'
// Vue.use(VueFullscreen)
import pdf from 'vue-pdf'
var loadingTask = pdf.createLoadingTask('https://cdn.mozilla.net/pdfjs/tracemonkey.pdf');
  export default {
    name: "startClass",
    components: {
      pdf
    },
    data () {
      return {
        src: loadingTask,
        currentPage: 1,
        pageCount: 0,
        isShowMenu: false

        // fullscreen: false,
        // teleport: true,
        // pageOnly: false
      }
    },
    computed: {
      progressCalc () {
        return this.currentPage / this.pageCount * 1000
      }
    },
    mounted () {
    },
    methods: {
      prePage () {
        if (this.currentPage > 1) {
          this.currentPage --
        }
      },
      nextPage () {
        if (this.currentPage < this.pageCount) {
          this.currentPage ++
        }
      }
      // toggle () {
      //   this.fullscreen = !this.fullscreen
      // },
      // toggleApi () {
      //   this.$fullscreen.toggle(this.$el.querySelector('.fullscreen-wrapper'), {
      //     teleport: this.teleport,
      //     callback: (isFullscreen) => {
      //       this.fullscreen = isFullscreen
      //     },
      //   })
      // }
    }
  }
</script>
<style lang="scss" scoped>
.video-mode-play-bar {
  background: rgba(126, 126, 126, 0.1);
}
.video-mode-play-bar .player-video {
  position: relative;
}
.progess-bar-num {
  z-index: 999;
}
.progess-bar-bg {
  background: rgba(255, 255, 255, 0.3);
}
/* Dropup Button */
.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropup content */
.dropup {
  position: relative;
  display: inline-block;
}

/* Dropup content (Hidden by Default) */
.dropup-content {
  display: none;
  position: absolute;
  bottom: 70px;
  background: rgba(0,0,0,0.8);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropup */
.dropup-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropup links on hover */
.dropup-content a:hover {background-color: #ddd}

/* Show the dropup menu on hover */
// .dropup:hover .dropup-content {
//   display: block;
// }

/* Change the background color of the dropup button when the dropup content is shown */
// .dropup:hover .dropbtn {
//   background-color: #2980B9;
// }
</style>