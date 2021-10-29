<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">帳號回收中心</h1>
        </div>
        <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">管理者<span class="bg-white rounded-lg px-2 py-1 mx-1">2</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">主任 / HR<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">督導<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">老師<span class="bg-white rounded-lg px-2 py-1 mx-1">99</span>人</h5>
          <h5 class="whitespace-no-wrap">學生<span class="bg-white rounded-lg px-2 py-1 mx-1">9999</span>人</h5>
        </div>
      </div>
      <div class="flex items-center justify-between w-full lg:flex-row mb-4 flex-wrap lg:flex-no-wrap">
        <router-link :to="{ name: 'Users' }"  class="px-4 py-2 bg-gray-900 text-white hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
          <i class="fas fa-chevron-left"></i>返回
        </router-link>
        <FilterModal :showItems="showItems" />
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">執行動作</th>
          </template>
          <template slot="actionsBtn">
            <td data-th="執行動作" class="flex items-center justify-center bg-white">
              <button @click="recyle"
                class="text-white bg-gray-900 mx-1 py-1 px-2 rounded"
                >
                <i class="fas fa-redo-alt mr-1"></i>回復
              </button>
              <button @click="open()"
                class="mx-1"
                >
                <img src="@/assets/img/icons/more.svg" alt="" class="w-8 object-contain">
              </button>
            </td>
          </template>
      </Table>
      <Pagination />
    </div>
  </main>
</template>

<script>
  import Table from "@/components/table"
  import 'vue2-datepicker/index.css'
  import Pagination from "@/components/modules/Pagination"
  import FilterModal from '@/components/FilterModal'
  export default {
    name: "User",
    components: {
      Table,
      Pagination,
      FilterModal
    },
    props: [
      'props'
    ],
    data () {
      return {
        showItems: {
          role: true,
          delReason: true,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          search: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'time', label: '建立時間', required: true, sortable: true },
            { name: 'delPerson', label: '執行刪除者', required: true, sortable: true },
            { name: 'delReason', label: '刪除原因', required: true, sortable: true },
            { name: 'id', label: '帳號(信箱)', required: true, sortable: true },
            { name: 'name', label: '姓名/英文姓名', required: true, sortable: true },
            { name: 'role', label: '角色', required: true, sortable: true },
            { name: 'branch', label: '分校/別名', required: true, sortable: true },
            { name: 'school', label: '校別', required: true, sortable: true }
          ],
          datas: [
            {
              time: '2021-11-30 09:59',
              delPerson: 'Peggy',
              delReason: '建立錯誤',
              id: 'peggy@gmail.com',
              name: 'peggy',
              role: '管理者',
              branch: '中區',
              school: 'CTL校'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      toManage () {
        this.$router.push({ name: 'account_add' })
      },
      edit() {
        this.$router.push({ name: 'account_edit', params: { id: 1 } })
        console.log('edit manage')
      },
      open() {
        this.$router.push({ name: 'learn_record_student' })
      },
      recyle() {
        this.$swal.fire({
          title: '確認要回復此筆資料?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '確認',
          cancelButtonText: '取消',
          iconColor: '#B2B2B2',
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
              title: '回復成功!',
              text: '已成功復原帳號',
              confirmButtonColor: '#808080',
              confirmButtonText: 'OK',
              iconColor: '#B2B2B2',
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
<style>
  .role {
    width: 6em !important;
  }
  .search {
    width: 10em !important;
  }
  /* .mx-datepicker-range {
    width: 15em;
    height: 42px !important;
  } */
  .mx-input {
    height: 42px !important;
  }

  .multiselect {
    width: fit-content !important;
  }
</style>