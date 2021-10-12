<template>
  <div id="startClass">
    <Modal :based-on="showfirstModal" :modalClass="'modal-outer bg-gray-300 max-w-modal'" @close="$emit('closeModal', false)">
      <div class="p-6">
        <div class="bg-white py-6 px-4 flex justify-between items-center mb-5">
          <h3 class="text-xl font-bold">課程互動講義(含課程講義)</h3>

          <div>
            <label for="toggle">
              <input type="checkbox" id="toggle" :checked="isHandout" />
              <span></span>
            </label>
          </div>
        </div>

        <div class="pb-6">
          <a class="bg-gray-900 text-white w-full block text-center text-2xl py-2 font-semibold mb-6 cursor-pointer">開始上課</a>
          <p class="text-xl text-gray-700 text-center">進入課程後須手動點選錄製按鈕</p>
        </div>
      </div>
      <div class="bg-white py-6 px-8">
        <h4 class="mb-5 text-xl font-semibold">課程檔案</h4>

        <div class="flex justify-between items-center mb-5" v-for="n in 3" :key="n">
          <p class="">Lorem ipsum dolor sit amet.pdf</p>
          <a class="bg-gray-500 text-white block text-center py-1 px-4 font-semibold rounded cursor-pointer">查看</a>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import 'vue2-datepicker/index.css'
export default {
  name: 'startClassModal',

  data () {
    return {
      value1: null,
      value2: null,

      content: null,
      showTimePanel: false,

      isHandout: true
    }
  },

  props: {
    showfirstModal: {
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
<style lang="scss" scoped>
  .max-w-modal {
    max-width: 50em !important;
  }
  .vm-btn-close {
    outline: none;
    &:focus {
      outline: none;
    }
  }
  .modal-outer {
    width: 100% !important;
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



:root {
  --wrapper-width: 50px;
  --wrapper-height: 29.5px;
  --button-width: 25.5px;
  --button-toggle-width: 33.3px;
  --padding: calc((var(--wrapper-height) - var(--button-width)) / 2);
}
span {
  position: relative;
  display: inline-block;
  width: var(--wrapper-width);
  height: var(--wrapper-height);
  background-color: #e9e9ea;
  border-radius: calc(var(--wrapper-height) / 2);
  transition: all 0.3s ease-in-out;
}
span::after {
  content: '';
  position: absolute;
  width: var(--button-width);
  height: var(--button-width);
  background-color: #fff;
  border-radius: calc(var(--button-width) / 2);
  top: var(--padding);
  transform: translateX(var(--padding));
  transition: all 0.3s ease-in-out;
  box-shadow: 10px 0 40px rgba(0, 0, 0, 0.1);
}
input[type='checkbox']:checked + span {
  background-color: #000000;
}
input[type='checkbox']:active + span::after {
  width: var(--button-toggle-width);
}
input[type='checkbox']:checked + span::after {
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  transform: translateX(
    calc(var(--wrapper-width) - var(--padding) - var(--button-width))
  );
}
input[type='checkbox']:checked:active + span::after {
  transform: translateX(
    calc(var(--wrapper-width) - var(--padding) - var(--button-toggle-width))
  );
}
input[type='checkbox'] {
  display: none;
}
</style>
