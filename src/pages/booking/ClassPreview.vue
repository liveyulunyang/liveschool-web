<template>
  <main class="p-6 max-w-8xl mx-auto w-full">
    <div class="flex justify-between items-center mb-6 flex-wrap">
      <div class="flex flex-col lg:flex-row items-start lg:items-center">
        <div class="tag flex text-white text-xs">
          <span class="px-2 py-1 bg-class-purple-01 mx-1 rounded">親子教養</span>
          <span class="px-2 py-1 bg-class-purple-02 mx-1 rounded">單字應用</span>
        </div>
        <!-- <div> -->
          <h2 class="text-2xl font-bold text-left">老師希望你別再說錯的 英語易混淆字！</h2>
        <!-- </div> -->
      </div>
      <div>
        <button class="btn-red py-3 px-12 rounded text-lg whitespace-no-wrap text-center font-bold text-white" @click="isOpen = true">
          購買課程
        </button>
        <!-- <ChoosePurchaseWay v-if="isOpen" v-on:toggle="toggle" /> -->
      </div>
    </div>
    <div class="">
      <div class="relative w-full h-max-video">
        <div class="video-player flex items-stretch" id="preview">
          <VideoJs class="VideoJs" />
          <List class="item-list-container" :class="{ open: isOpenList }" v-on:close="close" />
        </div>
        <div class="list-toggle py-2 bg-gray-btn text-white font-bold tracking-wider cursor-pointer" @click="isOpenList = true">單元一覽</div>
      </div>
    </div>
    <!-- <div>
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

        <div class="flex flex-wrap p-6 w-full" v-if="tag === 1">
          <div  class="w-full mb-4 px-3 py-2 flex flex-wrap">
            <MugShot />
            <div class="teacher-name flex flex-col justify-center">
              <h6 class="text-2xl font-bold">ALEX</h6>
              <h6 class="text-lg mb-3">ALEX WU</h6>
              <p class="text-lg">alex_teacherdemo88@liveabc.com</p>
            </div>
          </div>
          <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
            <h4>專業領域</h4>
          </div>
          <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-lg flex flex-wrap">
            <div class="w-1/4 p-2" v-for="n in 5" :key="n">
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
      </div>
    </div> -->
  </main>
</template>

<script>
  // import TabComponent from '@/components/Tab'
  // import MugShot from '@/components/MugShot'
  // import ChoosePurchaseWay from '@/components/booking/ChoosePurchaseWay'
  import VideoJs from '@/components/booking/VideoJs'
  import List from '@/components/booking/VideoJsList'
  export default {
    name: "ClassPreview",
    components: {
      VideoJs,
      List
      // TabComponent,
      // MugShot,
      // ChoosePurchaseWay
    },
    data () {
      return {
        tag: 0,
        tagArr: [
          { name: '課程特色', role: '' },
          { name: '講師介紹', role: '' }
        ],

        // isOpen: false,

        isOpenList: false
      }
    },
    computed: {
    },
    methods: {
      tagIdx (tagIdx) {
        this.tag = tagIdx
      },
      toggle (toggle) {
        this.isOpen = toggle
      },
      close (close) {
        this.isOpenList = close
      }
    }
  }
</script>
<style lang="scss">
.video-player {
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  width: 100%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  transition: height 0.3s ease 0s;
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
  @media (max-width: 1024px) {
    .item-list-container.open {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }

.h-max-video {
  min-height: calc(100vh - 160px);
}
.list-toggle {
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
}

</style>