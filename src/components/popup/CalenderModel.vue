<template id="calenderModel">
  <Modal :based-on="showfirstModal" :modalClass="'modal-outer student-w student-bg'" @close="$emit('closeModal', false)">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/6 mb-4">
        <img src="@/assets/img/classImg.png" alt="" class="object-contain max-w-full">
      </div>
      <div class="w-full md:w-5/6 mb-4 px-3 pt-4 pb-3 flex flex-col justify-between font-bold">
        <p class="text-xl mb-3 md:text-white">生活英語 / 兒童生活英語</p>
        <p class="text-2xl">	B1 U1-U3 Class 2</p>
      </div>
      <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
        <h4>課程目標</h4>
      </div>
      <div  class="w-full md:w-5/6 mb-4 px-3 py-2">
        <p>1.有關姓名、問候以及家庭成員的單字。 2.可以做基本的問候對話和認識家庭成員的單字。</p>
      </div>
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
        <h4>授課教師</h4>
      </div>
      <div  class="w-full md:w-5/6 mb-4 px-3 py-2 flex flex-wrap">
        <MugShot />
        <div class="teacher-name flex flex-col justify-center">
          <h6 class="text-2xl font-bold">ALEX</h6>
          <h6 class="text-lg mb-3">ALEX WU</h6>
          <p class="text-lg">alex_teacherdemo88@liveabc.com</p>
        </div>
      </div>
      <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
        <h4>教師經歷</h4>
      </div>
      <div  class="w-full md:w-5/6 mb-4 px-3 py-2">
        <p>Hello, my name's Jeremy and I'm originally from Chicago, Illinois in the United States. I'm 33 years old and have been all around the world but currently living in Taiwan. Taiwan is very different from my home city, but in many ways better. I've been teaching English for about 4 years. My students range from small children who are just starting to learn, to working professionals who need to use English at their place of employment. with each student, my goal is to help them express themselves clearly as well as gain confidence in their speaking ability. I've also been learning Chinese for four years, so I know how it feels to learn another language and the struggles that come with it, such as practicing or finding ways to improve. If you're learning English for work, school, or just personal improvement, I'm happy to help and look forward to working with you in the future!</p>
      </div>
      <div class="w-full md:w-1/6 text-xl md:mb-4 md:border-r-2 border-gray-900 px-3 text-left md:text-right py-2 font-semibold">
        <h4>補充教材</h4>
      </div>
      <div class="w-full md:w-5/6 mb-4 px-3 py-2 flex">
        <button
        class="mx-1 table-btn-actions rounded">
        <i class="fas fa-folder-plus"></i>
        </button>
        <button
          class="table-btn mx-1 px-3 rounded">
          <i class="fas fa-book-open mr-1"></i>課前
        </button>
        <button
          class="table-btn mx-1 px-3 rounded">
          <i class="fas fa-book-open mr-1"></i>課後
        </button>
        <button
          class="mx-1 table-btn-actions rounded">
          <i class="fas fa-film"></i>
        </button>
      </div>
      <div class="w-full mb-4 px-3 py-2 flex justify-end" v-if="$route.name === 'myClass' && $store.state.auth.userRole === 'teacher'">
        <startClassModal :showfirstModal="showClassModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
        <a @click="showClassModal = true" class="border px-3 py-2 btn-main text-white cursor-pointer rounded text-xl tracking-wider">前往上課<i class="fas fa-arrow-right ml-1"></i></a>
      </div>
    </div>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import MugShot from '@/components/MugShot'
import startClassModal from '@/components/popup/startClassModal'
export default {
  name: 'CalenderModel',

  data () {
    return {
      showClassModal: false
    }
  },

  props: {
    showfirstModal: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Modal,
    MugShot,
    startClassModal
  },
  computed: {
  },
  methods: {
    close () {
      let self = this
      self.$emit('closeModal', false)
    },
    closeModal (closeModal) {
      this.showClassModal = closeModal
    },
    submit () {}
  }
}
</script>

<style lang="scss">
  .student-bg {
    background-repeat: repeat;
    background-image: url('~@/assets/img/background_top_02.jpg');
    background-size: contain;
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
