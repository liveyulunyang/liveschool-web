<template>
    <Modal :based-on="showfirstModal" :title="''" :modalClass="'modal-outer bg-gray-300 pb-4 main-w'" @close="$emit('closeModal', false)">
      <h2 class="text-center text-2xl font-bold">檔案清單</h2>
      <div class="flex items-center">
        <button class="px-4 py-2 btn-red text-white text-sm mx-1 rounded whitespace-no-wrap">
          <i class="fas fa-plus mr-1"></i> 上傳檔案
        </button>
        <p class="ml-2">上傳的檔案大小總和不得超過 1 GB。</p>
      </div>
      <div class="h-table">
        <Table
          :columns="tableList.columns"
          :actions="tableList.actions"
          :data="tableList.datas">

            <template slot="actionsLabel">
              <th class="whitespace-no-wrap text-center">動作</th>
            </template>

            <template slot="actionsBtn">
              <td data-th="動作">
                <button
                  class="mx-1 table-btn-actions rounded"
                  >
                  <i class="far fa-folder-open"></i>
                </button>
                <button @click="del(0)"
                  class="mx-1 table-btn-actions rounded"
                  >
                  <i class="far fa-trash-alt"></i>
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
          { name: 'email', label: '檔名', required: true },
          { name: 'name', label: '大小', required: true }
        ],
        datas: [
          {
            email: 'Life English 01. Fast-Food Restaurant.pdf',
            name: '33,5 MB'
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
  },
  methods: {
    close () {
      let self = this
      self.$emit('closeModal', false)
    },
    del(id) {
      console.log(id)
      this.$swal.fire({
        title: '確認要刪除此筆資料?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '刪除',
        cancelButtonText: '取消',
        customClass: {
          title: 'font-bold text-2xl text-black',
          actions: 'btns',
          confirmButton: 'btn btn-confirm',
          cancelButton: 'btn btn-cancel'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire({
            icon: 'success',
            title: '刪除成功!',
            text: '您所選擇的檔案已刪除',
            confirmButtonColor: '#808080',
            confirmButtonText: 'OK',
            customClass: {
              title: 'font-bold text-2xl text-black',
              htmlContainer: 'text-sm',
              actions: 'btns',
              confirmButton: 'px-10'
            }
          })
        }
      })
    },
    submit (submit) {
      // this.$router.push({ name: submit })
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
  .h-table {
    height: calc(100vh - 300px);
    overflow-y: scroll;
  }
</style>
