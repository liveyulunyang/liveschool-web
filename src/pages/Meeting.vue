<template>
  <main class="flex items-start p-6" id="user">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'會議管理'" />
        </div>
      </div>
      <div class="flex items-center w-full flex-wrap lg:flex-no-wrap mb-4">
        <FilterModal :showItems="showItems" />
        <div class="flex justify-end items-center">
          <button @click="toManage" class="px-4 py-2 btn-red text-white text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增會議
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template slot="statusLabel">
            <th class="whitespace-no-wrap text-center">狀態</th>
          </template>
          <template slot="record">
            <th class="whitespace-no-wrap text-center">紀錄</th>
          </template>
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">執行動作</th>
          </template>
          <template slot="statusText">
            <td data-th="狀態" class="bg-white">
              <button @click="openModal"
                class="table-btn mx-1 px-3 rounded"
                >
                開會網址 <i class="fas fa-arrow-right ml-1"></i>
              </button>
              <!-- <button
                class="text-gray-600 border border-gray-600 mx-1 px-3 py-2 rounded"
                >
                會議準備中
              </button> -->
              <!-- <button
                class="text-gray-600 border border-gray-600 mx-1 px-3 py-2 rounded"
                >
                會議已結束
              </button> -->
            </td>
          </template>
          <template slot="recordBtn">
            <td data-th="紀錄" class="bg-white">
              <MeetingModal :showfirstModal="showModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
              <!-- <button
                class="text-primary-normal hover:text-black-1  mx-1">
                <img src="@/assets/img/icons/film_active.svg" alt="" class="h-8 object-contain hasData">
              </button> -->
              <button
                class="mx-1 rounded table-btn-record table-btn-record--active"
                >
                <i class="fas fa-film"></i>
              </button>
            </td>
          </template>
          <template slot="actionsBtn">
            <td data-th="執行動作" class="bg-white">
              <button @click="toManage()"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="fas fa-edit"></i>
              </button>
              <button @click="del()"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </template>
      </Table>
      <Pagination />
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import 'vue2-datepicker/index.css'
  import Pagination from "@/components/modules/Pagination"
  import FilterModal from '@/components/FilterModal'
  import MeetingModal from '@/components/popup/MeetingModal'
  import Title from '@/components/Title'
  export default {
    name: "Meeting",
    components: {
      Table,
      Pagination,
      FilterModal,
      MeetingModal,
      Title
    },
    props: [
      'props'
    ],
    data () {
      return {
        showModal: false,

        showItems: {
          classroom: true,
          branch: true,
          timePeriod: true,
          search: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'id', label: 'ID', required: true, sortable: true },
            { name: 'room', label: '教室', required: true, sortable: true },
            { name: 'time', label: '時間', required: true, sortable: true },
            { name: 'name', label: '會議名稱', required: true, sortable: true },
            { name: 'branch', label: '站別', required: true, sortable: false}
          ],
          datas: [
            {
              id: '28268',
              room: 'ROOM1',
              time: '2021-06-22 22:00-23:00',
              name: '老師面試',
              branch: '企業站'
            },
            {
              id: '28268',
              room: 'ROOM1',
              time: '2021-06-22 22:00-23:00',
              name: '老師面試',
              branch: '企業站'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      openModal () {
        this.showModal = true
      },
      closeModal (closeModal) {
        this.showModal = closeModal
      },
      submit (submit) {
        console.log(submit)
      },
      toManage () {
        this.$router.push({ name: 'addMeeting' })
      },
      edit() {
        // this.$router.push({ name: 'account_edit', params: { id: 1 } })
      },
      async del() {
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
  #user {
    .role {
      width: 6em !important;
    }
    .search {
      width: 10em !important;
    }
    .mx-input {
      height: 42px !important;
    }

    .multiselect {
      width: fit-content !important;
    }
  }

</style>