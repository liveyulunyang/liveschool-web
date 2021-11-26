<template>
  <div>
    <Modal :based-on="showfirstModal" :modalClass="'modal-outer main-w'" @close="$emit('closeModal', false)" v-if="isEdit">
      <form novalidate>
        <div class="w-full px-3 mb-2 md:mb-4">
          <label class="md:pt-2 tracking-wide text-sm mb-2 text-right px-2 font-semibold" for="booker">
            標題
          </label>
          <div class="w-full flex items-center">
            <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="booker" type="text" placeholder="">
          </div>
        </div>
        <div class="w-full px-3 mb-2 md:mb-4">
          <label class="md:pt-2 tracking-wide text-sm mb-2 text-right px-2 font-semibold" for="booker">
            副標題
          </label>
          <div class="w-full flex items-center">
            <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="booker" type="text" placeholder="">
          </div>
        </div>
        <div class="w-full px-3 mb-2 md:mb-4">
          <label class="md:pt-2 tracking-wide text-sm mb-2 text-right px-2 font-semibold" for="booker">
            上架時間
          </label>
          <div class="w-full">
            <date-picker v-model="value1" type="datetime" placeholder="Select datetime" :input-class="'mx-input py-5'"></date-picker>
          </div>
        </div>
        <div class="w-full px-3 mb-2 md:mb-4">
          <label class="md:pt-2 tracking-wide text-sm mb-2 text-right px-2 font-semibold" for="booker">
            下架時間
          </label>
          <div class="w-full">
            <date-picker v-model="value2" type="datetime" placeholder="Select datetime" :input-class="'mx-input py-5'"></date-picker>
          </div>
        </div>
        <div class="w-full px-3 mb-2 md:mb-4">
          <label class="md:pt-2 tracking-wide text-sm mb-2 text-right px-2 font-semibold" for="price">
            公告狀態
          </label>
          <div class="w-full flex items-center">
            <div class="relative text-sm w-full">
              <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="price"
                >
                <option value="31">草稿</option>
                <option value="31">一般公告</option>
                <option value="31">重要公告(到期後自動轉為一般公告)</option>
              </select>
              <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <!-- 編輯器 -->
        <div class="w-full px-3 mb-2 md:mb-4">
          <label class="md:pt-2 tracking-wide text-sm mb-2 text-right px-2 font-semibold" for="booker">
            內文
          </label>
          <div class="w-full">
            <vue-editor v-model="content" />
          </div>
        </div>
        <div class="w-full px-3 mb-2 md:mb-4 flex justify-center">
          <a class="px-4 py-2 bg-gray-600 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-times mr-1"></i>取消</a>
          <a class="px-4 py-2 btn-main m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-check mr-1"></i>發布</a>
        </div>
      </form>
    </Modal>
    <Modal :based-on="showfirstModal" :modalClass="'modal-outer student-w'" @close="$emit('closeModal', false)" v-if="!isEdit">
      <div class="py-4 px-4 bg-blue-main-light">
        <h3 class="text-4xl font-bold ">ZOOM版本更新下載 通知</h3>
      </div>
        <div class="py-4 px-4">
          <div class="htmlContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et reprehenderit excepturi quidem vero atque dicta hic commodi totam corrupti labore amet cum molestias nobis laudantium, debitis, magni ratione fuga. Cum assumenda consectetur, aperiam, similique et temporibus tempore hic sequi repellendus doloribus esse quo, necessitatibus quod ullam recusandae magnam eos at sit aliquid cumque id illo neque! Eum magnam unde quibusdam aspernatur, ratione labore ut, fuga illo officia deleniti totam aut nostrum, enim dolores est distinctio molestias! Eum accusantium repudiandae, vitae placeat provident laudantium laboriosam quaerat eaque, corrupti, fugit molestias perspiciatis nisi atque dolore perferendis quidem. Officiis, architecto? Dolorum quia quisquam iure asperiores expedita voluptatum error vel ut. Possimus reiciendis atque dolore nemo consequuntur debitis. Aspernatur veniam possimus, at culpa fuga quia ex nam velit? Optio quod ducimus, ipsam velit officiis sint cupiditate quas perferendis minima itaque dignissimos, doloremque iste. Quod voluptates quos molestiae repudiandae saepe dolore quia perspiciatis blanditiis nobis enim ipsam deleniti, laudantium deserunt a natus atque asperiores sapiente numquam perferendis similique corrupti odio culpa pariatur. Quasi minus placeat mollitia optio ea quas, delectus fugiat suscipit harum sed accusamus ipsam quo quisquam reprehenderit soluta quam qui voluptatem maiores illo! Itaque totam repudiandae ad impedit error minus, consequuntur deserunt.
          </div>
        </div>
      <div class="w-full px-3 mb-2 md:mb-4 flex justify-center">
        <a class="px-16 py-2 btn-main m-1 cursor-pointer text-white" @click="close()">OK</a>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import { VueEditor } from "vue2-editor"
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
  name: 'AnnounceModal',

  data () {
    return {
      value1: null,
      value2: null,

      content: null,
      showTimePanel: false
    }
  },

  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
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
    Modal,
    VueEditor,
    DatePicker
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
    },

    toggleTimePanel() {
      this.showTimePanel = !this.showTimePanel
    },
    handleOpenChange() {
      this.showTimePanel = false
    }
  }
}
</script>
<style lang="scss">
  .vm-btn-close {
    outline: none;
    &:focus {
      outline: none;
    }
  }
  .modal-footer {
    padding: 15px 0px 0px 0px;
    border-top: 1px solid #e5e5e5;
    margin-left: -14px;
    margin-right: -14px;
  }
  .htmlContent {
    height: calc(100vh - 350px);
    overflow-y: scroll;
  }
</style>
