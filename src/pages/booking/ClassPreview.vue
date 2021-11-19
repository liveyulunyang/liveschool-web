<template>
  <main class="p-6 max-w-7xl mx-auto w-full">
    <div class="flex justify-between items-center mb-4 flex-wrap">
      <div class="flex flex-col lg:flex-row items-start lg:items-center">
        <div class="tag flex text-white text-xs mb-2">
          <span class="px-2 py-1 bg-class-purple-01 mx-1 rounded">親子教養</span>
          <span class="px-2 py-1 bg-class-purple-02 mx-1 rounded">單字應用</span>
        </div>

        <h2 class="text-2xl font-bold text-left">老師希望你別再說錯的 英語易混淆字！</h2>

      </div>
      <div class="flex items-center flex-wrap">
        <p v-if="$route.name === 'classPreviewTeacher'" class="lg:mx-2 text-class-red-02 font-semibold">欲報名課程請洽Live互動美語全台分校主任或撥打(02)7730-9567</p>
        <button  v-if="$route.name === 'classPreview'" class="btn-red py-3 px-12 rounded text-lg whitespace-no-wrap text-center font-bold text-white hidden lg:block" @click="isOpenPurchaseWay = true">
          購買課程
        </button>
        <button  v-if="$route.name === 'classPreviewTeacher'" class="btn-red py-3 px-12 rounded text-lg whitespace-no-wrap text-center font-bold text-white hidden lg:block">
          點我查詢分校
        </button>
        <button v-if="$route.name === 'classPreviewTalk'" class="btn-red py-3 px-12 rounded text-lg whitespace-no-wrap text-center font-bold text-white" @click="isOpenPurchaseWay = true">
          我要預約
        </button>
        <ChoosePurchaseWay v-if="isOpenPurchaseWay" v-on:toggle="toggle" />
      </div>
    </div>

    <div class="relative w-full h-max-video">
      <div  v-if="$route.name !== 'classPreviewTalk'">
        <div class="video-player flex items-stretch mx-auto" id="preview" :class="{ isTeacher: $route.name === 'classPreviewTeacher' }">
          <VideoJs class="VideoJs" />
          <List class="item-list-container" :class="{ openList: isOpenList }" v-on:close="close" v-if="$route.name === 'classPreview'" />
        </div>
        <div class="list-toggle py-2 bg-gray-btn text-white font-bold tracking-wider cursor-pointer mb-4" @click="isOpenList = true"  v-if="$route.name === 'classPreview'">單元一覽</div>
        <button v-if="$route.name === 'classPreview'" class="btn-red py-3 w-full rounded text-lg whitespace-no-wrap text-center font-bold text-white lg:hidden" @click="isOpenPurchaseWay = true">
          購買課程
        </button>
        <button v-if="$route.name === 'classPreviewTeacher'" class="btn-red py-3 w-full rounded text-lg whitespace-no-wrap text-center font-bold text-white lg:hidden">
          點我查詢分校
        </button>
        <button v-if="$route.name === 'classPreviewTalk'" class="btn-red py-3 w-full rounded text-lg whitespace-no-wrap text-center font-bold text-white lg:hidden">
          我要預約
        </button>
      </div>
      <div class="class_detail mt-10 mx-auto">
        <TabComponent :tag="tag" :tagArr="tagArr" v-on:tagIdx="tagIdx" />
        <div class="bg-white w-full">

          <div class="flex flex-wrap p-6 w-full" v-if="tag === 0">
            <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
              <h4>課程目標</h4>
            </div>
            <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-left">
              <p>1.有關姓名、問候以及家庭成員的單字。 2.可以做基本的問候對話和認識家庭成員的單字。</p>
            </div>
            <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
              <h4>課程大綱</h4>
            </div>
            <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-left">
              <p>1.學習如何自我介紹。</p>
              <p>2.學習三種不同的方式來問候朋友。</p>
              <p>3.知道如何說家庭成員。</p>
              <p>4.學習如何在不同時間迎接朋友。</p>
              <p>5.在課堂上學習一些實用的句子。</p>
            </div>
          </div>

          <div class="teacher flex flex-wrap p-6 xl:pt-20 w-full" v-if="tag === 1">
            <div  class="w-full mb-4 px-3 py-2 flex flex-wrap">
              <MugShot />
              <div class="teacher-name flex flex-col justify-center text-white text-left pl-3">
                <h6 class="text-2xl font-bold">ALEX</h6>
                <h6 class="text-lg mb-3">ALEX WU</h6>
                <p class="text-lg text-main">alex_teacherdemo88@liveabc.com</p>
              </div>
            </div>
            <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
              <h4>專業領域</h4>
            </div>
            <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-lg flex flex-wrap">
              <div class="w-1/2 lg:w-1/4 p-2" v-for="n in 5" :key="n">
                <div class="border shadow-md text-center text-sm font-bold border-gray-700 rounded-lg py-1">國中升學</div>
              </div>
            </div>
            <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
              <h4>教師經歷</h4>
            </div>
            <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-lg font-semibold">
              <p>Hello, my name's Jeremy and I'm originally from Chicago, Illinois in the United States. I'm 33 years old and have been all around the world but currently living in Taiwan. Taiwan is very different from my home city, but in many ways better. I've been teaching English for about 4 years. My students range from small children who are just starting to learn, to working professionals who need to use English at their place of employment. with each student, my goal is to help them express themselves clearly as well as gain confidence in their speaking ability. I've also been learning Chinese for four years, so I know how it feels to learn another language and the struggles that come with it, such as practicing or finding ways to improve. If you're learning English for work, school, or just personal improvement, I'm happy to help and look forward to working with you in the future!</p>
            </div>
          </div>

          <div class="flex flex-wrap p-6 w-full" v-if="tag === 2">
            <div class="flex flex-wrap w-full mt-4">
              <div class="w-full md:w-1/4 p-2 mb-4" v-for="n in 8" :key="n">
                <div class="rounded-lg border">
                  <p class="bg-gray-300 py-2 text-center font-bold">第一堂</p>
                  <div class="p-2 pb-4">
                    <span class="border border-gray-700 px-1 ">2021</span>
                    <h6 class="text-4xl text-center font-bold tracking-wider">7/14</h6>
                    <h6 class="text-xl text-center font-bold tracking-wider">大自然的百寶箱</h6>
                    <p class="text-center tracking-wide font-semibold">Unit 1 落葉的美</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full mt-4">
              <div class="flex mb-4 md:p-3 md:px-5 md:text-2xl font-bold whitespace-no-wrap w-full justify-between bg-gray-300">
                <div class="py-1 px-2 md:px-5">第一堂 2021.07.04</div>
                <div class="text-right py-1 px-2 md:px-5">12:00-12:50</div>
              </div>
              <div class="flex flex-wrap">
                <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
                  <h4>課程大綱</h4>
                </div>
                <div  class="w-full md:w-5/6 mb-4 px-3 py-2">
                  <p>1.學習如何自我介紹。</p>
                  <p>2.學習三種不同的方式來問候朋友。</p>
                  <p>3.知道如何說家庭成員。</p>
                  <p>4.學習如何在不同時間迎接朋友。</p>
                  <p>5.在課堂上學習一些實用的句子。</p>
                </div>
                <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
                  <h4>課程目標</h4>
                </div>
                <div  class="w-full md:w-5/6 mb-4 px-3 py-2">
                  <p>1.學習如何自我介紹。</p>
                  <p>2.學習三種不同的方式來問候朋友。</p>
                  <p>3.知道如何說家庭成員。</p>
                  <p>4.學習如何在不同時間迎接朋友。</p>
                  <p>5.在課堂上學習一些實用的句子。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import TabComponent from '@/components/Tab'
  import MugShot from '@/components/MugShot'
  import ChoosePurchaseWay from '@/components/booking/ChoosePurchaseWay'
  import VideoJs from '@/components/booking/VideoJs'
  import List from '@/components/booking/VideoJsList'
  export default {
    name: "ClassPreview",
    components: {
      VideoJs,
      List,
      TabComponent,
      MugShot,
      ChoosePurchaseWay
    },
    data () {
      return {
        tag: 0,

        isOpenPurchaseWay: false,

        isOpenList: false
      }
    },
    computed: {
      routeName () {
        return this.$route.name
      },

      tagArr () {
        if (this.$route.name === 'classPreviewTeacher') {

          return [
            { name: '課程特色', role: '' },
            { name: '講師介紹', role: '' },
            { name: '課堂時間', role: '' }
          ]
        } else {
          return [
            { name: '課程特色', role: '' },
            { name: '講師介紹', role: '' }
          ]
        }
      }
    },
    methods: {
      tagIdx (tagIdx) {
        this.tag = tagIdx
      },
      toggle (toggle) {
        this.isOpenPurchaseWay = toggle
      },
      close (close) {
        this.isOpenList = close
      }
    }
  }
</script>
<style lang="scss">
.h-max-video {
  min-height: calc(100vh - 160px);
  .video-player {
    position: relative;
    overflow: hidden;
    margin-top: 40px;
    width: 100%;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    transition: height 0.3s ease 0s;
    @media (max-width: 1024px) {
      height: 504px;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 360px;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }

    .VideoJs {
      width: 65%;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    .item-list-container {
      width: 35%;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
  .class_detail {
    // max-width: 1350px;
  }
}

@media (max-width: 1024px) {
  .item-list-container.openList {
    display: block !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    height: 100% !important;
    width: 100% !important;
  }
}
.isTeacher {
  .VideoJs {
    // width: 100% !important;
    // @media (max-width: 1024px) {
    //   width: 100%;
    // }
  }
}

.list-toggle {
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
}

.teacher {
  background-repeat: no-repeat;
  background-image: url('~@/assets/img/background_top_02.jpg');
  background-size: contain;
  margin: 0 auto;
  @media (max-width: 768px) {
    background-image: none;
  }
}
</style>