<template>
  <main class="" id="index">
    <!-- fixed-btn -->
    <div class="fixed-btn fixed z-50">
      <div class="fixed-btn-arrow">
        <img src="@/assets/img/home/btn_arrow_left.png" class="cursor-pointer left">
        <img src="@/assets/img/home/btn_arrow_right.png" class="cursor-pointer right">
      </div>
      <div class="absolute fixed-btn-items">
        <a href="">
          <img src="@/assets/img/home/btn_01.png" class="cursor-pointer">
        </a>
        <a href="">
          <img src="@/assets/img/home/btn_02.png" class="cursor-pointer">
        </a>
        <a href="">
          <img src="@/assets/img/home/btn_03.png" class="cursor-pointer">
        </a>
      </div>
    </div>
    <!-- banner -->
    <IndexBanner :bannerData="bannerData" />
    <!-- 課程種類 -->
    <section id="classType" class="bg-blue-main-dark overflow-hidden">
      <div class="text-white tracking-widest py-16 lg:py-24">
        <h3 class="text-3xl md:text-4xl font-semibold">課程種類</h3>
        <h3 class="text-3xl font-light">Course type</h3>
      </div>
      <div class="classType-items flex w-full justify-center">
        <a class="mx-3 classType-items-talk classType-items-card" :class="{ active: type === 'talk' }"  @click="type = 'talk'">
          <img src="@/assets/img/home/btn_home_Talk_off.png" class="off cursor-pointer">
          <img src="@/assets/img/home/btn_home_Talk_on.png" class="on cursor-pointer">
        </a>
        <a class="mx-3 classType-items-class classType-items-card" :class="{ active: type === 'class' }" @click="type = 'class'">
          <img src="@/assets/img/home/btn_home_Class_off.png" class="off cursor-pointer">
          <img src="@/assets/img/home/btn_home_Class_on.png" class="on cursor-pointer">
        </a>
        <a class="mx-3 classType-items-teacher classType-items-card" :class="{ active: type === 'teacher' }"  @click="type = 'teacher'">
          <img src="@/assets/img/home/btn_home_Teacher_off.png" class="off cursor-pointer">
          <img src="@/assets/img/home/btn_home_Teacher_on.png" class="on cursor-pointer">
        </a>
      </div>
      <div class="h-3 w-full absolute bg-class-red"></div>
      <!-- :class="{ bg-class-red: type === 'talk', bg-class-blue: type === 'class', bg-class-yellow: type === 'teacher' }" -->
    </section>
    <!-- 課程介紹/最新消息/熱門課程 -->
    <section class="py-16 container text-main px-2">
      <div class="py-8">
        <div class="flex items-center mb-6">
          <img src="@/assets/img/home/icon_home_bulleted.png" class="block">
          <h4 class="text-3xl md:text-4xl font-semibold mr-2">課程介紹</h4>
          <p class="text-2xl font-light">Course Introduction</p>
        </div>
        <img src="@/assets/img/home/pic_home_introduce.png" class="block">
      </div>

      <div class="py-8">
        <div class="flex items-center mb-6">
          <img src="@/assets/img/home/icon_home_bulleted.png" class="block">
          <h4 class="text-3xl md:text-4xl font-semibold mr-2">最新消息</h4>
          <p class="text-2xl font-light">News</p>
        </div>
        <img src="@/assets/img/home/pic_home_news.png" class="block">
      </div>

      <div class="py-8">
        <div class="flex flex-col justify-start md:flex-row md:items-center mb-6 md:justify-between">
          <div class="flex items-center">
            <img src="@/assets/img/home/icon_home_bulleted.png" class="block">
            <h4 class="text-3xl md:text-4xl font-semibold mr-2">熱門課程</h4>
            <p class="text-2xl font-light">Popular courses</p>
          </div>

          <a class="text-xl md:text-2xl font-semibold cursor-pointer">點我查看更多課程 >></a>
        </div>
        <Classes :bannerData="bannerData" />
      </div>
    </section>
    <!-- 如何上課 -->
    <section id="howtoclass" class="bg-blue-main-dark overflow-hidden py-16 lg:py-24">
      <div class="container px-2">
        <div class="text-white tracking-widest mb-16">
          <h3 class="text-3xl md:text-4xl font-semibold">如何上課</h3>
          <h3 class="text-3xl font-light mb-12">Course Introduction</h3>
          <p class="text-2xl font-light">使用ZOOM雲端視訊會議系統進行上課，建議使用者在上課前，預先下載ZOOM軟體; 若是未先下載，在進入課堂時，系統會導引至下載頁面，幫助使用者下載並安裝。</p>
        </div>

        <div class="flex justify-center">
          <a class="block cursor-pointer rounded-xl px-6 py-3 text-main font-bold bg-white text-3xl hover:shadow-xl text-main tracking-wider">軟體下載</a>
        </div>
      </div>
    </section>
    <!-- 成功見證 -->
    <section id="successWitness" class="overflow-hidden py-16 lg:py-24">
      <div class="container px-2">
        <div class="text-white tracking-widest mb-16">
          <h3 class="text-3xl md:text-4xl font-semibold text-main">成功見證</h3>
          <h3 class="text-3xl font-light mb-12 text-main">Success Witness</h3>
        </div>

        <div class="w-full h-full">
          <video controls width="100%">

            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
                    type="video/webm">

            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4">

              Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </section>
    <!-- 專業師資 -->
    <section id="professional_teachers" class="overflow-hidden py-16 lg:py-24">
      <div class="container">
        <div class="text-white tracking-widest mb-16">
          <h3 class="text-3xl md:text-4xl font-semibold text-main">專業師資</h3>
          <h3 class="text-3xl font-light mb-12 text-main">Professional teachers</h3>
        </div>

        <div class="px-2">
          <Teachers :bannerData="bannerData" />
        </div>


      </div>

    </section>
    <!-- 開啟你更多不同可能性的美好未來 -->
    <section id="login_free" class="bg-blue-main-dark overflow-hidden py-40">
      <div class="container">
        <div class="text-white tracking-widest mb-16">
          <h3 class="text-4xl font-semibold">開啟你更多不同可能性的美好未來</h3>
        </div>

        <div class="flex justify-center">
          <a class="block cursor-pointer rounded-xl px-6 py-3 text-main font-bold bg-white text-3xl hover:shadow-xl text-main tracking-wider">登入 / 免費註冊</a>
        </div>
      </div>

    </section>
  </main>
</template>

<script>
import axios from 'axios'
import IndexBanner from '@/components/index/Banner'
import Teachers from '@/components/index/Teachers'
import Classes from '@/components/index/Classes'
  export default {
    name: "Index",
    components: {
      IndexBanner,
      Teachers,
      Classes
    },
    data () {
      return {
        bannerData: null,
        type: 'talk'
      }
    },
    computed: {
    },
    mounted () {
      this.getBanner()
    },
    methods: {
      getBanner () {
        let self = this
        axios.get('https://api.liveabc.com/v1/ad/IndexBanner')
          .then((response) => {
            self.bannerData = response.data
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  #index{
    .fixed-btn {
      right: .8em;
      top: 50%;
      .right {
        display: none;
      }

      &:hover {
        .fixed-btn-items {
          visibility: visible;
          opacity: 1;
          display: block;
        }
        .right {
          display: block !important;
        }
        .left {
          display: none;
        }
      }
      .fixed-btn-items {
        bottom: 0;
        left: -100%;
        visibility: hidden;
        opacity: 0;
        display: none;
      }
    }

    #classType {
      background-image: url('~@/assets/img/home/background_home_01.png');
      background-repeat: no-repeat;
      background-size: contain;
      @media (max-width: 768px) {
        background-position: bottom;
      }
      .classType-items {
        .classType-items-card {
          transform: translateY(1em);
          &:hover {
            transform: translateY(0em);
          }
          .on {
            display: none;
          }
        }
        .active {
          transform: translateY(0em);
          .off {
            display: none;
          }
          .on {
            display: block !important;
          }
        }
      }
    }
    #howtoclass {
      background-image: url('~@/assets/img/home/background_home_02.png');
      background-repeat: no-repeat;
      background-size: contain;
      @media (max-width: 768px) {
        background-position: bottom;
      }
    }
    #successWitness {
      background: #FAF6EF;
      background-image: url('~@/assets/img/home/background_home_03.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
    #professional_teachers {
    }
    #login_free {
      background-image: url('~@/assets/img/home/background_home_04.png');
      background-repeat: no-repeat;
      background-size: contain;
      @media (max-width: 768px) {
        background-position: bottom;
      }
    }
  }
</style>