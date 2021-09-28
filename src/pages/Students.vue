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
          <FilterModal :showItems="showItems" />
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
        <template slot="actionsLabel">
          <th class="whitespace-no-wrap text-center">執行動作</th>
        </template>
        <template scope="props" slot="actionsBtn">
          <td data-th="執行動作">
            <button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              >
              <img src="@/assets/img/icons/edit.svg" alt="" class="w-6 object-contain">
            </button>
            <button
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
              >
              <img src="@/assets/img/icons/more.svg" alt="" class="w-6 object-contain">
            </button>
            <button
              class="hover:text-black-1 hover:bg-primary-light mx-1"
              >
              <img src="@/assets/img/icons/tick.svg" alt="" class="w-6 object-contain">
            </button>
            <button @click="open(props.item.id)"
              class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1 ml-3"
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
  import Table from "@/components/table";
  import Pagination from "@/components/modules/Pagination"
  import FilterModal from '../components/FilterModal.vue'
  export default {
    name: "Students",
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
          role: false,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: false,
          serach: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'id', label: '帳號(信箱)', required: true, sortable: true },
            { name: 'name', label: '姓名/英文姓名', required: true, sortable: true },
            { name: 'mobile', label: '電話', required: true, sortable: true },
            { name: 'point', label: '點數', required: true, sortable: false},
            { name: 'branch', label: '分校', required: true, sortable: true },
            { name: 'class', label: '班級', required: true, sortable: true }
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
.multiselect {
  width: fit-content !important;
}
</style>