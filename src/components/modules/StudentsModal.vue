<template>
  <Modal :based-on="showfirstModal" :title="title" :modalClass="'modal-outer bg-gray-300 pb-4'" @close="$emit('closeModal', false)">
    <FilterModal :showItems="showItems" />
    <div class="h-table">
      <Table
        :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
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
        approvalStatus: false
      },
        tableList: {
          columns: [
            { name: 'status', label: '狀態', required: true },
            { name: 'email', label: '帳號信箱', required: true },
            { name: 'name', label: '學生姓名', required: true },
            { name: 'mobile', label: '行動電話', required: true },
            { name: 'isAttend', label: '出席', required: true }
          ],
          datas: [
            {
              status: '正取',
              email: '課程已結束',
              name: 'Peggy',
              mobile: '090000000',
              isAttend: '是'
            },
            {
              status: '正取',
              email: '課程已結束',
              name: 'Peggy',
              mobile: '090000000',
              isAttend: '是'
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
      default: '預約資料審核'
    },
  },

  components: {
    Modal,
    FilterModal,
    Table
  },
  computed: {
  },
  methods: {
    close () {
      let self = this
      self.$emit('closeModal', false)
    }
    // addBooking () {
    //   this.close()
    //   // this.$emit('submit', 'book_course')
    // }
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
  .h-table {
    height: calc(100vh - 300px);
    overflow-y: scroll;
  }
</style>
