<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'序號管理'" />
        </div>
        <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">已兌換<span class="bg-white rounded-lg px-2 py-1 mx-1">999</span>筆</h5>
          <h5 class="mr-3 whitespace-no-wrap">可使用<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>筆</h5>
          <h5 class="mr-3 whitespace-no-wrap">共<span class="bg-white rounded-lg px-2 py-1 mx-1">999999</span>筆</h5>
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap lg:flex-no-wrap mb-4">
        <FilterModal :showItems="showItems" />

        <div class="flex justify-end items-center">
          <button @click="openModal" class="px-4 py-2 btn-red text-white text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增序號
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">

          <template v-slot:actionsLabel><th class="whitespace-no-wrap text-center">動作</th></template>

          <template scope="props" slot="actionsBtn">
            <td data-th="動作">
              <button @click="del(props.item.id)"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </template>
      </Table>
      <AddSerialNumModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
      <Pagination />
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import FilterModal from '@/components/FilterModal'
  import Pagination from '@/components/modules/Pagination'
  import 'vue2-datepicker/index.css'
  import AddSerialNumModal from '@/components/popup/AddSerialNumModal'
  import Title from '@/components/Title'
  export default {
    name: 'Serial_number',
    components: {
      Table,
      FilterModal,
      Pagination,
      AddSerialNumModal,
      Title
    },
    props: [
      'props'
    ],
    data () {
      return {
        showfirstModal: false,

        showItems: {
          ProgressStatus: true,
          timePeriod: true,
          search: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'time', label: '建立時間', required: true },
            { name: 'SerialNumber', label: '序號', required: true },
            { name: 'password', label: '密碼', required: true },
            { name: 'publisher', label: '建立者', required: true },
            { name: 'point', label: '點數', required: true, sortable: false},
            { name: 'status', label: '狀態', required: true },
            { name: 'changer', label: '兌換者', required: true },
            { name: 'changeTime', label: '兌換時間', required: true }
          ],
          datas: [
            {
              time: '2020-05-06 15:00',
              SerialNumber: 'TEST88888',
              password: '0000',
              publisher: 'Peggy',
              point: '88',
              status: '已兌換',
              changer: 'rex@gmail.com',
              changeTime: '2020-05-06 15:00'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      edit(id) {
        console.log(id)
      },
      open(id) {
        console.log(id)
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
      openModal () {
        this.showfirstModal = true
      },
      closeModal (closeModal) {
        this.showfirstModal = closeModal
      },
      submit (submit) {
        // this.$router.push({ name: submit })
      }
    }
  }
</script>
<style src='vue-multiselect/dist/vue-multiselect.min.css'></style>
<style>
  .role {
    width: 6em !important;
  }
  .search {
    width: 10em !important;
  }
</style>