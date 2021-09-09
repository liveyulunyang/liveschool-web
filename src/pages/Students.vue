<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">學生管理</h1>
        </div>
        <!-- <div class="flex text-xs flex-wrap">
          <h5 class="mr-3 whitespace-no-wrap">管理者<span class="bg-white rounded-lg px-2 py-1 mx-1">2</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">主任 / HR<span class="bg-white rounded-lg px-2 py-1 mx-1">915</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">督導<span class="bg-white rounded-lg px-2 py-1 mx-1">9</span>人</h5>
          <h5 class="mr-3 whitespace-no-wrap">老師<span class="bg-white rounded-lg px-2 py-1 mx-1">99</span>人</h5>
          <h5 class="whitespace-no-wrap">學生<span class="bg-white rounded-lg px-2 py-1 mx-1">9999</span>人</h5>
        </div> -->
      </div>
      <div class="flex items-center justify-between w-full flex-wrap">
        <div class="flex items-center justify-start flex-wrap">

          <Multiselect
            class="mr-1"
            v-model="searchVal"
            :options="searchOptions"
            :multiple="false"
            :close-on-select="true"
            :clear-on-select="false"
            :show-labels="false"
            track-by="name" label="name"
            placeholder="請選擇搜尋欄位">
          </Multiselect>

          <div class="mr-1 flex bg-white">
            <input type="text" placeholder="Search.." name="search" class="py-2 px-2 border-0 focus:outline-none w-20">
            <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
          </div>


          <a href="" class="block mr-1">
            <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
          </a>
          <button class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
            <i class="fas fa-arrow-down"></i> 匯出資料
          </button>
        </div>
        <div class="flex justify-end items-center">
          <button class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
            + 匯入學生清單
          </button>
          <button @click="toManage" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
            + 新增學生
          </button>
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
  import Table from "@/components/tables/Student";
  import Multiselect from 'vue-multiselect'
  import 'vue2-datepicker/index.css';
  import Pagination from "@/components/modules/Pagination";
  export default {
    name: "Students",
    components: {
      Table,
      Multiselect,
      Pagination
    },
    data () {
      return {
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
            { name: 'mobile', label: '電話', required: true, sortable: true },
            { name: 'point', label: '點數', required: true, sortable: false},
            { name: 'branch', label: '分校', required: true, sortable: true },
            { name: 'class', label: '班級', required: true, sortable: true },

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
        this.$router.push({ name: 'studentsAdd' })
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .role {
    width: 6em !important;
  }
  .search {
    width: 10em !important;
  }
.mx-datepicker-range {
  width: 15em;
  height: 42px !important;
}
.mx-input {
  height: 42px !important;
}

.multiselect {
  width: fit-content !important;
}
</style>