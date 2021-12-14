<template>
  <main class="flex items-start p-6" id="user">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'使用者管理'" />
        </div>
        <UserNum :userNum="userNum" />
        <!-- <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap mb-2">管理者<span class="bg-white rounded-lg px-2 py-1 mx-1">2</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap mb-2">主任 / HR<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap mb-2">督導<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap mb-2">老師<span class="bg-white rounded-lg px-2 py-1 mx-1">99</span>人</h5>
          <h5 class="whitespace-no-wrap mb-2">學生<span class="bg-white rounded-lg px-2 py-1 mx-1">9999</span>人</h5>
        </div> -->
      </div>
      <div class="flex items-center w-full flex-wrap lg:flex-no-wrap mb-4 lg:justify-between">
        <FilterModal :showItems="showItems" />
        <div class="flex justify-end items-center">
          <button @click="toRecyle" class="px-4 py-2 btn-green text-white text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-trash-alt mr-1"></i> 帳號回收中心
          </button>
          <button class="px-4 py-2 btn-blue text-white text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 匯入帳號
          </button>
          <button @click="toManage" class="px-4 py-2 btn-red text-white  text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增帳號
          </button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">執行動作</th>
          </template>
          <template slot="actionsBtn">
            <td data-th="執行動作" class="bg-white">
              <button @click="edit()"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="fas fa-edit"></i>
              </button>
              <button @click="open()"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-folder-open"></i>
              </button>
              <button @click="del()"
                class="mx-1 table-btn-actions rounded"
                >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </template>
      </Table>
      <Pagination v-on:pageChange="pageChange" :pagination="pagination" />
    </div>
  </main>
</template>

<script>
  import Table from '@/components/table'
  import 'vue2-datepicker/index.css'
  import Pagination from "@/components/modules/Pagination"
  import FilterModal from '@/components/FilterModal'
  import Title from '@/components/Title'
  import UserNum from '@/components/UserNum'
  export default {
    name: "User",
    components: {
      Table,
      Pagination,
      FilterModal,
      Title,
      UserNum
    },
    props: [
      'props'
    ],
    data () {
      return {
        userNum: [
          { role: '管理者', num: 99, unit: '人' },
          { role: '主任 / HR', num: 99, unit: '人' },
          { role: '督導', num: 99, unit: '人' },
          { role: '老師', num: 99, unit: '人' },
          { role: '學生', num: 99, unit: '人' }
        ],
        showItems: {
          role: true,
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
            { name: 'id', label: '帳號(信箱)', required: true, sortable: true },
            { name: 'name', label: '姓名/英文姓名', required: true, sortable: true },
            { name: 'CTL', label: 'CTL帳號', required: true, sortable: true },
            { name: 'mobile', label: '行動電話', required: true, sortable: true },
            { name: 'point', label: '點數', required: true, sortable: false},
            { name: 'role', label: '角色', required: true, sortable: true },
            { name: 'source', label: '來源', required: true, sortable: true },
            { name: 'city', label: '縣市', required: true, sortable: true },
            { name: 'branch', label: '分校', required: true, sortable: true },
            { name: 'class', label: '班級', required: true, sortable: true },
            { name: 'time', label: '建立時間', required: true, sortable: true }
          ],
          datas: [
            {
              id: 'rex_chu1_1@liveabc.com',
              name: '測試名稱',
              nameEn: 'Peggy',
              CTL: '是',
              mobile: '0912312312',
              point: 8,
              role: '管理者',
              source: '本站',
              city: '台北市',
              branch: '總部測試校',
              class: 'C8',
              time: '2020-11-30 09:59'
            },
            {
              id: 'rex_chu1@liveabc.com',
              name: '測試名稱',
              nameEn: 'Peggy',
              CTL: '是',
              mobile: '0912312312',
              point: 8,
              role: '管理者',
              source: '本站',
              city: '台北市',
              branch: '總部測試校',
              class: 'C8',
              time: '2020-11-30 09:59'
            }
          ]
        },

        // pagination
        pagination: {
          currentPage: 0,
          length: 10
        }
      }
    },
    computed: {
    },
    methods: {
      toRecyle () {
        this.$router.push({ name: 'usersRecycle' })
      },
      toManage () {
        this.$router.push({ name: 'account_add' })
      },
      edit() {
        this.$router.push({ name: 'account_edit', params: { id: 1 } })
        console.log('edit manage')
      },
      open() {
        this.$router.push({ name: 'learn_record_student' })
        console.log('open manage')
      },
      async del() {
        let self = this
        const inputOptions = new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              '1.已長期未使用': '已長期未使用',
              '2.建立錯誤': '建立錯誤',
              '3.測試用': '測試用'
            })
          }, 0)
        })

        const { value: reason } = await self.$swal.fire({
          title: '請選擇刪除原因',
          text: '請協助勾選帳號需刪除原因，以便增進網站管理品質',
          input: 'radio',
          showCancelButton: true,
          confirmButtonText: '刪除',
          cancelButtonText: '取消',
          customClass: {
            title: 'font-bold bg-gray-alert text-2xl text-black',
            htmlContainer: 'text-sm bg-gray-alert pb-3',
            actions: 'btns',
            confirmButton: 'btn btn-confirm',
            cancelButton: 'btn btn-cancel'
          },
          inputOptions: inputOptions,
          inputValidator: (value) => {
            if (!value) {
              return '請選擇原因'
            }
          }
        })

        if (reason) {
          console.log(reason)
          self.$swal.fire({
            icon: 'success',
            title: '刪除成功!',
            text: '您所選擇的檔案已刪除完成',
            confirmButtonColor: '#808080',
            confirmButtonText: '確認',
            iconColor: '#B2B2B2',
            customClass: {
              title: 'font-bold text-2xl text-black',
              htmlContainer: 'text-sm',
              actions: 'btns',
              confirmButton: 'btn btn-confirm',
              cancelButton: 'btn btn-cancel'
            }
          })
        }
      },

      async delDisable() {
        let self = this
        self.$swal.fire({
          title: '此帳號還有點數尚未使用，無法刪除',
          confirmButtonText: '確認',
          customClass: {
            popup: 'py-10',
            title: 'font-bold text-2xl text-black mb-4',
            htmlContainer: 'text-sm',
            actions: 'btns',
            confirmButton: 'btn btn-confirm',
            cancelButton: 'btn btn-cancel'
          }
        })
      },

      getData () {
        this.$store.dispatch('isLoading', true)
      },

      pageChange (pageChange) {
        let self = this
        self.pagination.currentPage = pageChange
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