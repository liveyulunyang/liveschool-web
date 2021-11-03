<template>
    <Modal :based-on="showfirstModal" :title="'課程紀錄'" :modalClass="'modal-outer bg-gray-300 pb-4 main-w'" @close="$emit('closeModal', false)">
      <FilterModal :showItems="showItems" />
      <div class="h-table">
        <Table
          :columns="returnData.columns"
          :actions="returnData.actions"
          :data="returnData.datas">
            <template slot="attend">
              <th class="whitespace-no-wrap text-center">有無出席</th>
            </template>

            <template slot="actionsLabel">
              <th class="whitespace-no-wrap text-center">其他</th>
            </template>

            <template slot="attendContent">
              <td data-th="有無出席">
                <i class="fas fa-check-circle text-center"></i>
              </td>
            </template>

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
              </td>
            </template>
        </Table>
      </div>
  </Modal>
</template>
<script>
import Modal from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import FilterModal from '@/components/FilterModal'
import Table from '@/components/table'
export default {
  name: 'StudentsModal',

  data () {
    return {
      showSecondModal: false,
      showItems: {
        role: false,
        listStatus: false,
        classTopic: false,
        classification: false,
        branch: false,
        classType: false,
        timePeriod: false,
        search: true,
        sync: true,
        approvalStatus: false,
        isExportBtn: false
      },
      tableList: {
        columns: [
          { name: 'name', label: '學生姓名', required: true },
          { name: 'point', label: '課前分數', required: true },
          { name: 'afterPoint', label: '課後分數', required: true }
        ],
        datas: [
          {
            name: 'Peggy',
            point: '88',
            afterPoint: 200
          },
          {
            name: 'Peggy',
            point: '88',
            afterPoint: 200
          },
          {
            name: 'Peggy',
            point: '88',
            afterPoint: 200
          },
          {
            name: 'Peggy',
            point: '88',
            afterPoint: 200
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
    FilterModal,
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
