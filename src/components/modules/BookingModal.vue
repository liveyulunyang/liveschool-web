<template>
  <Modal :based-on="showfirstModal" :title="title" :modalClass="'modal-outer'" @close="$emit('closeModal', false)">
    <form novalidate>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="booker">
          預約者
        </label>
        <div class="w-full md:w-8/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="booker" type="text" placeholder="" :disabled="isDisabled">
        </div>
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="point">
          當前點數
        </label>
        <div class="w-full md:w-2/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="point" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="branch">
          分校
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="branch" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="type">
          課程類型
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="type" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="classname">
          課程名稱
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="classname" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="classtype">
          課程類型
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="classtype" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="problem">
          問題
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <textarea id="problem" placeholder="請輸入課程大綱" :disabled="isDisabled"
            class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
          </textarea>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="response">
          回應
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <textarea id="response" placeholder="請輸入課程大綱" :disabled="isDisabled"
            class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
          </textarea>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="number">
          人數班制
        </label>
        <div class="w-full md:w-5/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="number" type="text" placeholder="" :disabled="isDisabled">
        </div>
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="maxNum">
          最高人數
        </label>
        <div class="w-full md:w-2/12 flex items-center">
          <div class="relative text-sm w-full">
            <select :disabled="isDisabled" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="maxNum"
              >
              <option value="31">選擇分區</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="minNum">
          最低人數
        </label>
        <div class="w-full md:w-2/12 flex items-center">
          <div class="relative text-sm w-full">
            <select :disabled="isDisabled" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="minNum"
              >
              <option value="31">選擇分區</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="pro">
          教師專案
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="pro" type="text" placeholder="" :disabled="isDisabled">
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="teacher">
          指定教師
        </label>
        <div class="w-full md:w-11/12 flex items-center">
          <div class="relative text-sm w-full">
            <select :disabled="isDisabled" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="teacher"
              >
              <option value="31">選擇分區</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="date">
          課程日期
        </label>
        <div class="w-full md:w-5/12 flex items-center">
          <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="date" type="text" placeholder="" :disabled="isDisabled">
        </div>
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="name">
          課程時間從
        </label>
        <div class="w-full md:w-2/12 flex items-center">
          <div class="relative text-sm w-full">
            <select :disabled="isDisabled" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="timeStart"
              >
              <option value="31">選擇分區</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="name">
          到
        </label>
        <div class="w-full md:w-2/12 flex items-center">
          <div class="relative text-sm w-full">
            <select :disabled="isDisabled" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="timeEnd"
              >
              <option value="31">選擇分區</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="price">
          費用類型
        </label>
        <div class="w-full md:w-2/12 flex items-center">
          <div class="relative text-sm w-full">
            <select :disabled="isDisabled" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="price"
              >
              <option value="31">選擇分區</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2" for="name">
          點數
        </label>
        <div class="w-full md:w-2/12 flex items-center">
          <div class="relative text-sm w-full">
            <select :disabled="isDisabled" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
              >
              <option value="31">選擇分區</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 text-right px-2">
          設定
        </label>
        <div class="w-full md:w-4/12 flex items-center">
          <label class="control control--checkbox">主任是否要收到開課通知？
            <input type="checkbox" checked="checked" :disabled="isDisabled" />
            <div class="control__indicator"></div>
          </label>
        </div>
        <div class="w-full md:w-4/12 flex items-center">
          <label class="control control--checkbox">是否不開放公開預約？
            <input type="checkbox" checked="checked"  :disabled="isDisabled"/>
            <div class="control__indicator"></div>
          </label>
        </div>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 flex justify-end" v-if="!isDisabled">
        <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-times mr-1"></i>駁回</a>
        <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-check mr-1"></i>通過</a>
      </div>
      <div class="w-full px-3 mb-2 md:mb-4 flex justify-end" v-if="isDisabled">
        <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white" @click="addBooking()"><i class="fas fa-check mr-1"></i>送出</a>
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
      default: '預約資料審核'
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
