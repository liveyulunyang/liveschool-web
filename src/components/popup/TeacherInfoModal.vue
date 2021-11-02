<template>
  <Modal :based-on="showfirstModal" :modalClass="'modal-outer head-bg overflow-y-scroll'" @close="$emit('closeModal', false)">
    <div class="relative">
      <div class="flex flex-wrap">
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
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import MugShot from '@/components/MugShot'
export default {
  name: 'TeacherInfoModal',

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
    Modal,
    MugShot
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
