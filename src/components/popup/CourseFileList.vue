<template>
    <Modal :based-on="showfirstModal" :title="''" :modalClass="'modal-outer bg-gray-300 pb-4 main-w'" @close="$emit('closeModal', false)">
      <h2>檔案清單</h2>
      <div class="h-table">
        <Table
          :columns="returnData.columns"
          :actions="returnData.actions"
          :data="returnData.datas">
            <template slot="attend">
              <th class="whitespace-no-wrap text-center">出席</th>
            </template>
            <template slot="record">
              <th class="whitespace-no-wrap text-center">課前分數</th>
            </template>
            <template slot="statusLabel">
              <th class="whitespace-no-wrap text-center">課後分數</th>
            </template>
            <template slot="actionsLabel">
              <th class="whitespace-no-wrap text-center">其他</th>
            </template>

            <template slot="attendContent">
              <td data-th="有無出席">
                <i class="fas fa-check-circle text-center"></i>
              </td>
            </template>
            <template slot="recordBtn">
              <td data-th="課前分數">
                <p class="px-1 py-2">-</p>
              </td>
            </template>
            <template slot="statusText">
              <td data-th="課後分數">
                <p class="px-1 py-2">-</p>
              </td>
            </template>
            <!-- <template slot="recordBtn">
              <td data-th="課前分數">
                <p class="px-1 py-2 border border-gray-300 text-gray-300" v-if="$store.state.userRole !== 'admin'">課後練習成績</p>
                <p class="px-1 py-2 border border-gray-300 text-gray-300" v-if="$store.state.userRole === 'admin'">請輸入課程成績</p>
              </td>
            </template>
            <template slot="statusText">
              <td data-th="課後分數">
                <p class="px-1 py-2 border border-gray-300 text-gray-300" v-if="$store.state.userRole !== 'admin'">課後練習成績</p>
                <p class="px-1 py-2 border border-gray-300 text-gray-300" v-if="$store.state.userRole === 'admin'">請輸入課程成績</p>
              </td>
            </template> -->
            <template slot="actionsBtn">
              <td data-th="其他">
                <button @click="openModal"
                  class="text-sm text-primary-normal hover:text-black-1  mx-1 text-white bg-gray-900 px-2 py-2 rounded"
                  >
                  <i class="far fa-star mr-1"></i>老師評語
                </button>
                <button @click="openModal"
                  class="text-sm text-primary-normal hover:text-black-1  mx-1 text-white bg-gray-900 px-2 py-2 rounded"
                  >
                  <i class="far fa-star mr-1"></i>學生評語
                </button>
                <button v-if="$store.userRole === 'student'"
                  class="text-sm text-primary-normal hover:text-black-1  mx-1 text-white bg-gray-900 px-2 py-2 rounded"
                  >
                  <i class="far fa-gem mr-1"></i>成績證書
                </button>
              </td>
            </template>
        </Table>
      </div>

  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import Table from '@/components/table'
export default {
  name: 'FileListModal',

  data () {
    return {
      tableList: {
        columns: [
          { name: 'email', label: '帳號信箱', required: true },
          { name: 'name', label: '學生姓名', required: true },
          { name: 'point', label: '剩餘點數', required: true, uesrRole: 'student' }
        ],
        datas: [
          {
            email: 'Peggy@gmail',
            name: 'Peggy',
            point: '88',
          }
        ]
      },
      tableListAdmin: {
        columns: [
          { name: 'email', label: '帳號信箱', required: true },
          { name: 'name', label: '學生姓名', required: true }
        ],

        datas: [
          {
            email: 'Peggy@gmail',
            name: 'Peggy',
            point: '88',
          }
        ]
      }
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
    Modal,
    Table
  },
  computed: {
    returnData () {
      if (this.$store.state.userRole === 'admin') {
        return this.tableListAdmin
      } else {
        return this.tableList
      }
    }
  },
  methods: {
    close () {
      let self = this
      self.$emit('closeModal', false)
    },

    openModal () {
      this.showSecondModal = true
    },
    closeModal (closeModal) {
      this.showSecondModal = closeModal
    },
    submit (submit) {
      // this.$router.push({ name: submit })
    }
    // addBooking () {
    //   this.close()
    //   // this.$emit('submit', 'book_course')
    // }
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
  .h-table {
    height: calc(100vh - 300px);
    overflow-y: scroll;
  }
</style>
