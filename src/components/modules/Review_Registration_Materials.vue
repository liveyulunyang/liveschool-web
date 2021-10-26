<template>
  <Modal :based-on="showfirstModal" :title="'報名資料審核'" :modalClass="'modal-outer'" @close="$emit('closeModal', false)">
    <form novalidate>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2 font-bold" for="booker">
          預約者
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="booker" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2 font-bold" for="branch">
          分校
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="branch" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2 font-bold" for="type">
          課程類型
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="type" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2 font-bold" for="classname">
          課程主題
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="classname" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2 font-bold" for="classtype">
          課程名稱
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="classtype" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2 font-bold" for="problem">
          問題
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <textarea id="problem" placeholder="請輸入課程大綱" :disabled="isDisabled"
            class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
          </textarea>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2 font-bold" for="response">
          回應
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <textarea id="response" placeholder=""
            class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
          </textarea>
        </div>
      </div>

      <div class="w-full px-3 mb-2 md:mb-4 flex justify-end">
        <a class="px-4 py-2 bg-gray-700 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-times mr-1"></i>駁回</a>
        <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-check mr-1"></i>通過</a>
      </div>
    </form>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
export default {
  name: 'BookingModal',

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
      default: '報名資料審核'
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
    },
    addBooking () {
      this.close()
      this.$emit('submit', 'book_course')
    }
  }
}
</script>

<style>
.modal-outer {
  width: 100% !important;
  max-width: 64em !important;
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
