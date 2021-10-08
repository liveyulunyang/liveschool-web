<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">使用者管理</h1>
        </div>
        <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">管理者<span class="bg-white rounded-lg px-2 py-1 mx-1">2</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">主任 / HR<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">督導<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">老師<span class="bg-white rounded-lg px-2 py-1 mx-1">99</span>人</h5>
          <h5 class="whitespace-no-wrap">學生<span class="bg-white rounded-lg px-2 py-1 mx-1">9999</span>人</h5>
        </div>
      </div>
      <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
        <FilterModal :showItems="showItems" />
        <div class="flex justify-end items-center">
          <Button class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 匯入帳號
          </Button>
          <Button @click="toManage" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-plus mr-1"></i> 新增帳號
          </Button>
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
          <template slot="actionsLabel">
            <th class="whitespace-no-wrap text-center">執行動作</th>
          </template>
          <template scope="props" slot="actionsBtn">
            <td data-th="執行動作">
              <button @click="edit(props.item.id)"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img src="@/assets/img/icons/edit.svg" alt="" class="w-6 object-contain">
              </button>
              <button @click="open(props.item.id)"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img src="@/assets/img/icons/more.svg" alt="" class="w-6 object-contain">
              </button>
              <button @click="del(props.item.id)"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img src="@/assets/img/icons/delete.svg" alt="" class="w-6 object-contain">
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
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          serach: true,
          sync: true
        },
        timeInterval: null,

        identityVal: null,
        identityOptions: [
          { name: '全部', value: '' },
          { name: '管理者', value: 'all' },
          { name: '主任/HR', value: 'all' },
          { name: '督導', value: 'all' },
          { name: '老師', value: 'all' },
          { name: '學生', value: 'all' }
        ],
        searchVal: null,
        searchOptions: [
          { name: '姓名/英文姓名', value: '' },
          { name: '行動電話', value: 'all' },
          { name: '縣市', value: 'all' },
          { name: '分校', value: 'all' },
          { name: '班級', value: 'all' },
          { name: '來源', value: 'all' }
        ],

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
        console.log('edit manage')
      },
      open() {
        console.log('open manage')
      },
      del() {
        this.$swal.fire({
          title: '確認要刪除此筆資料?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '刪除',
          cancelButtonText: '取消'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
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