<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">主任分校列表</h1>
        </div>
        <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">管理者<span class="bg-white rounded-lg px-2 py-1 mx-1">2</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">主任 / HR<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">督導<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">老師<span class="bg-white rounded-lg px-2 py-1 mx-1">99</span>人</h5>
          <h5 class="whitespace-no-wrap">學生<span class="bg-white rounded-lg px-2 py-1 mx-1">9999</span>人</h5>
        </div>
      </div>
      <div class="flex items-center w-full flex-wrap mb-4 justify-between">
        <div class="flex items-center">
          <FilterModal :showItems="showItems" />
        </div>
        <div class="flex justify-end items-center">
          <ExportBtn />
          <!-- <button class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
            + 匯出報表
          </button> -->
          <!-- <Button @click="toManage" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
            + 新增分校
          </Button> -->
        </div>
      </div>
      <Table :columns="tableList.columns"
        :actions="tableList.actions"
        :data="tableList.datas">
      </Table>
      <Pagination />
    </div>
  </main>
</template>

<script>
  import Table from "@/components/tables/Branch"
  import Pagination from "@/components/modules/Pagination"
  import FilterModal from '@/components/FilterModal'
  import ExportBtn from '@/components/modules/ExportBtn'
  export default {
    name: "User",
    components: {
      Table,
      Pagination,
      FilterModal,
      ExportBtn
    },
    data () {
      return {
        showItems: {
          role: false,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          serach: true,
          sync: true
        },

        tableList: {
          columns: [
            // { name: 'id', label: '帳號(信箱)', required: true, sortable: true },
            // { name: 'name', label: '姓名/英文姓名', required: true, sortable: true },
            // { name: 'CTL', label: 'CTL帳號', required: true, sortable: true },
            // { name: 'mobile', label: '行動電話', required: true, sortable: true },
            // { name: 'point', label: '點數', required: true, sortable: false},
            // { name: 'role', label: '角色', required: true, sortable: true },
            // { name: 'source', label: '來源', required: true, sortable: true },
            // { name: 'city', label: '縣市', required: true, sortable: true },
            // { name: 'branch', label: '分校', required: true, sortable: true },
            // { name: 'class', label: '班級', required: true, sortable: true },
            // { name: 'time', label: '建立時間', required: true, sortable: true },
            { name: 'id', label: '分區/校名', required: true, sortable: true },
            { name: 'name', label: '校別', required: true, sortable: true },
            { name: 'CTL', label: '主任帳號', required: true, sortable: true },
            { name: 'mobile', label: '姓名/英文姓名', required: true, sortable: true },
            { name: 'point', label: '預約成功課數', required: true, sortable: false},
            { name: 'role', label: '待審核課數', required: true, sortable: true },
            { name: 'source', label: '已結束課數', required: true, sortable: true },
            { name: 'city', label: '原始課數', required: true, sortable: true },
            { name: 'branch', label: '新增課數', required: true, sortable: true },
            { name: 'class', label: '已使用點數', required: true, sortable: true },
            { name: 'time', label: '剩餘點數', required: true, sortable: true },
            { name: 'actions', label: '執行動作',
              actions: [
                { name: 'edit', label: 'edit' },
                { name: 'open', label: 'open' },
                { name: 'del', label: 'del' }
              ]
            }
          ],
          datas: [
            {
              id: '北區',
              name: 'CTL校',
              nameEn: 'Peggy@gmail.com',
              CTL: '是',
              mobile: 'Peggy',
              point: 8,
              role: '99',
              source: '66',
              city: '77',
              branch: '9',
              class: '88',
              time: '88'
            },
            {
              id: '南區',
              name: 'CTL校',
              nameEn: 'Peggy@gmail.com',
              CTL: '是',
              mobile: 'Peggy',
              point: 8,
              role: '99',
              source: '66',
              city: '77',
              branch: '9',
              class: '88',
              time: '88'
            },
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      toManage () {
        this.$router.push({ name: 'account_add' })
      }
    }
  }
</script>
<style>
</style>