<template>
  <Modal :based-on="showfirstModal" :modalClass="'modal-outer meetingNodal'" @close="$emit('closeModal', false)">
    <div class="">
      <h1 class="text-center font-bold text-xl bg-gray-500 py-3 mb-4">會議網址</h1>
      <div class="flex flex-wrap">
        <div class="w-full px-3 py-3 md:flex mb-4">
          <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="one_choice">主持人URL
          </label>
          <div class="w-full md:w-9/12 flex items-center flex-wrap">
            <div class="w-full px-1 flex items-center">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="startUrl" type="text" value="KyGBLh_M8gD0ajhyWSoOKhcYXF8">
            </div>
          </div>
          <div class="w-full md:w-2/12 flex items-center flex-wrap px-1">
            <button @click="copy()"
            class="bg-gray-900 mx-1 text-white py-1 px-2 w-full rounded h-full text-sm">
            Copy
            </button>
          </div>
        </div>
        <div class="w-full px-3 py-3 md:flex">
          <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="one_choice">與會者URL
          </label>
          <div class="w-full md:w-9/12 flex items-center flex-wrap">
            <div class="w-full px-1 flex items-center">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="startUrl" type="text" value="KyGBLh_M8gD0ajhyWSoOKhcYXF8">
            </div>
          </div>
          <div class="w-full md:w-2/12 flex items-center flex-wrap px-1">
            <button @click="copy()"
            class="bg-gray-900 mx-1 text-white py-1 px-2 w-full rounded h-full text-sm">
            Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
export default {
  name: 'MeetingNodal',

  data () {
    return {
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
    },
    copy () {}
  }
}
</script>

<style>
.meetingNodal {
  width: 100% !important;
  background: rgb(255,255,255);
  height: 40vh;
  overflow-y: scroll;
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
