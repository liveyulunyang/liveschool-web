<template>
    <Modal :based-on="showfirstModal" :title="''" :modalClass="'modal-outer bg-blue-main-light pb-4 head-bg'" @close="$emit('closeModal', false)">
      <div class="flex justify-between items-center">
        <FilterModal :showItems="showItems" />
        <div class="flex items-center">
          <input type="email" placeholder="輸入帳號信箱加入學生" class="py-1 px-1">
          <a class="block btn-main text-white p-1 px-2 mx-2 rounded cursor-pointer"><i class="fas fa-user-plus"></i></a>
          <button @click="importList" class="px-4 py-2 btn-blue text-white text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 匯入名單
          </button>
        </div>
      </div>
      <div class="h-table">
        <Table
          :columns="tableList.columns"
          :actions="tableList.actions"
          :data="tableList.datas">
            <template slot="AdmissionStatus">
              <th class="whitespace-no-wrap text-center">狀態</th>
            </template>

            <template slot="attend">
              <th class="whitespace-no-wrap text-center">有無出席</th>
            </template>

            <template slot="actionsLabel">
              <th class="whitespace-no-wrap text-center">執行動作</th>
            </template>

            <template slot="AdmissionStatusContent">
              <td data-th="狀態">
                <p class="border py-1 border-gray-700 text-gray-700 rounded">正取</p>
                <!-- <p class="border py-1 border-gray-500 text-gray-500 rounded">備取</p> -->
              </td>
            </template>

            <template slot="attendContent">
              <td data-th="有無出席">
                <i class="fas fa-check-circle text-center"></i>
              </td>
            </template>

            <template slot="actionsBtn">
              <td data-th="執行動作">
                <button @click="del()"
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
          { name: 'email', label: '帳號信箱', required: true },
          { name: 'name', label: '學生姓名', required: true },
          { name: 'mobile', label: '行動電話', required: true }
        ],
        datas: [
          {
            email: 'Peggy@gmail',
            name: 'Peggy',
            mobile: '0933000000'
          },
          {
            email: 'Peggy@gmail',
            name: 'Peggy',
            mobile: '0933000000'
          },
          {
            email: 'Peggy@gmail',
            name: 'Peggy',
            mobile: '0933000000'
          },
          {
            email: 'Peggy@gmail',
            name: 'Peggy',
            mobile: '0933000000'
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
    // returnData () {
    //   if (this.$store.state.auth.userRole === 'admin') {
    //     return this.tableListAdmin
    //   } else {
    //     return this.tableList
    //   }
    // }
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
    },
    importList () {},

    del (id) {
      // console.log(id)
      // this.$swal.fire({
      //   title: '確認要刪除此筆資料?',
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: '刪除',
      //   cancelButtonText: '取消'
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     this.$swal.fire(
      //       'Deleted!',
      //       'Your file has been deleted.',
      //       'success'
      //     )
      //   }
      // })
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
