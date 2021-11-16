<template>
    <Modal :based-on="showfirstModal" :title="'老師評語'" :modalClass="'modal-outer pb-4 leading-loose font-bold main-w'" @close="$emit('closeModal', false)">
      <h3>日期: 2021-03-08 課名: Test01</h3>
      <h4 class="mb-3">學生: Peggy&emsp;教師：佩姬/Peggy</h4>
      <h5 class="bg-gray-400 py-1 text-lg">一、老師教學 Teacher's teaching</h5>
      <div class="flex flex-wrap leading-loose py-2" v-for="n in 5" :key="n">
        <div class="w-full md:w-4/5 flex text-lg">
          <span class="mr-1">{{ n }}.</span>
          <div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, ullam.</div>
            <div>發音正確度</div>
          </div>
        </div>
        <div class="w-full md:w-1/5 text-lg">
          <span class="mr-1 opacity-0 md:hidden">{{ n }}.</span><i class="fas fa-star text-gray-800 mr-1" v-for="n in 4" :key="n"></i><i class="fas fa-star text-gray-400 mr-1" v-for="n in 1" :key="n"></i>
        </div>
      </div>
      <h5 class="bg-gray-400 py-1 text-lg">一、學生學習 Student's Learning</h5>
      <div class="flex flex-wrap leading-loose py-2" v-for="n in 5" :key="n">
        <div class="w-full md:w-4/5 flex text-lg">
          <span class="mr-1">{{ n }}.</span>
          <div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, ullam.</div>
            <div>發音正確度</div>
          </div>
        </div>
        <div class="w-full md:w-1/5 text-lg">
          <span class="mr-1 opacity-0 md:hidden">{{ n }}.</span><i class="fas fa-star text-gray-800 mr-1" v-for="n in 4" :key="n"></i><i class="fas fa-star text-gray-400 mr-1" v-for="n in 1" :key="n"></i>
        </div>
      </div>
      <div class="w-full px-3 mt-2">
        <label class="w-full font-bold text-sm mb-2 px-2" for="problem">
          其他意見(comment)
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <textarea id="problem" placeholder=""
            class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
          </textarea>
        </div>
      </div>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
export default {
  name: 'StudentsModal',

  data () {
    return {
    }
  },

  props: {
    showfirstModal: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
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

<style lang="scss">
  .vm-title {
    font-weight: 800;
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
  .h-table {
    height: calc(100vh - 300px);
    overflow-y: scroll;
  }
</style>
