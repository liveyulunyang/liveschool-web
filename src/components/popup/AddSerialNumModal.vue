<template id="AddSerialNumModal">
    <Modal :based-on="showfirstModal" :title="''" :modalClass="'modal-outer main-w'" @close="$emit('closeModal', false)">
    <form novalidate>

      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/6 tracking-wide text-sm mb-2 text-right px-2" for="branch">
          建立者
        </label>
        <div class="w-full md:w-5/6 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="branch" type="text" placeholder="" disabled>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/6 tracking-wide text-sm mb-2 text-right px-2" for="branch">
          點數數量
        </label>
        <div class="w-full md:w-5/6 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="branch" type="text" placeholder="">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 flex justify-end">
        <a class="px-4 py-2 bg-gray-700 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-times mr-1"></i>取消</a>
        <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-check mr-1"></i>建立</a>
      </div>
    </form>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
export default {
  name: 'AddSerialNumModal',

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

<style lang="scss">
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
