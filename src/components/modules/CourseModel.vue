<template>
  <Modal :based-on="showfirstModal" :modalClass="'modal-outer head-bg'" @close="$emit('closeModal', false)">
    <div class="relative">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/6 mb-4">
          <img src="@/assets/img/classImg.png" alt="" class="object-contain max-w-full">
        </div>
        <div class="w-full md:w-5/6 mb-4 px-3 pt-4 pb-3 flex flex-col justify-between font-bold">
          <p class="text-xl">國小 / 兒童生活英語</p>
          <p class="text-2xl">	B1 U1-U3 Class 2 <a href="" class="text-white bg-gray-500 rounded-full px-3 py-1 text-base ml-2"><i class="fas fa-play-circle mr-1"></i>課程介紹影片</a></p>
        </div>
        <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
          <h4>課程目標</h4>
        </div>
        <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-lg">
          <p>1.有關姓名、問候以及家庭成員的單字。 2.可以做基本的問候對話和認識家庭成員的單字。</p>
        </div>
        <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
          <h4>課程大綱</h4>
        </div>
        <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-lg">
          <p>1.學習如何自我介紹。</p>
          <p>2.學習三種不同的方式來問候朋友。</p>
          <p>3.知道如何說家庭成員。</p>
          <p>4.學習如何在不同時間迎接朋友。</p>
          <p>5.在課堂上學習一些實用的句子。</p>
        </div>
        <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
          <h4>授課教師</h4>
        </div>
        <div  class="w-full md:w-5/6 mb-4 px-3 py-2 flex flex-wrap">
          <div class="teacher-img md:mr-4 relative mb-3 md:mb-0">
            <img src="@/assets/img/teacherDefault.svg" alt="" class="object-contain">
            <a class="absolute right-0 bottom-0 bg-gray-700 rounded-full p-2 border border-white w-10 h-10 text-center">
              <i class="fas fa-volume-up text-white"></i>
            </a>
          </div>
          <div class="teacher-name flex flex-col justify-center">
            <h6 class="text-2xl font-bold">ALEX</h6>
            <h6 class="text-lg mb-3">ALEX WU</h6>
            <p class="text-lg">alex_teacherdemo88@liveabc.com</p>
          </div>
        </div>
        <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
          <h4>教師經歷</h4>
        </div>
        <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-lg font-semibold">
          <p>Hello, my name's Jeremy and I'm originally from Chicago, Illinois in the United States. I'm 33 years old and have been all around the world but currently living in Taiwan. Taiwan is very different from my home city, but in many ways better. I've been teaching English for about 4 years. My students range from small children who are just starting to learn, to working professionals who need to use English at their place of employment. with each student, my goal is to help them express themselves clearly as well as gain confidence in their speaking ability. I've also been learning Chinese for four years, so I know how it feels to learn another language and the struggles that come with it, such as practicing or finding ways to improve. If you're learning English for work, school, or just personal improvement, I'm happy to help and look forward to working with you in the future!</p>
        </div>
        <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
          <h4>課程費用</h4>
        </div>
        <div  class="w-full md:w-5/6 mb-4 px-3 py-2 text-2xl">
          <p>1,760元 (教材費用 1,280)</p>
        </div>
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

        <div class="w-full mt-4" v-for="n in 4" :key="n">
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
            <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
              <h4>補充教材</h4>
            </div>
            <div  class="w-full md:w-5/6 mb-4 px-3 py-2 flex flex-wrap">
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <!-- <img src="@/assets/img/icons/file.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/file_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <!-- <img src="@/assets/img/icons/before_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/before_test_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1 isActive"
                >
                <!-- <img src="@/assets/img/icons/after_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/after_test_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
            </div>
            <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
              <h4>課程紀錄</h4>
            </div>
            <div  class="w-full md:w-5/6 mb-4 px-3 py-2">
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1">
                <img :src="require('@/assets/img/icons/list.svg')" alt="" class="h-6 object-contain noData">
              </button>
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1">
                <img :src="require('@/assets/img/icons/film.svg')" alt="" class="h-6 object-contain noData">
                <!-- <img src="@/assets/img/icons/film_active.svg" alt="" class="h-6 object-contain hasData"> -->
              </button>
            </div>
          </div>
        </div>
      </div>
      <a class="inline-block text-white bg-gray-900 px-3 py-2 text-lg absolute bottom-0 right-0">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
export default {
  name: 'BookingModal',

  data () {
    return {
      // showfirstModal: false
    }
  },

  props: {
    showfirstModal: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Modal
  },
  computed: {
  },
  methods: {
    close () {
      let self = this
      self.$emit('closeModal', false)
    }
  }
}
</script>

<style>
.head-bg {
  width: 100% !important;
  max-width: 64em !important;
  background: rgb(255,255,255);
  height: calc(100vh - 100px);
  overflow-y: scroll;
  /* background: linear-gradient(0deg, #ffffff 88%, #E6E6E6 88%); */
}
.modal-footer {
  padding: 15px 0px 0px 0px;
  border-top: 1px solid #e5e5e5;
  margin-left: -14px;
  margin-right: -14px;
}
.vm-btn-close {
  outline: none !important;
}

</style>
