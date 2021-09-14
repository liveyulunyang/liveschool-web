<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">學習紀錄列表
            </h1>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
          <div class="flex items-center justify-start flex-wrap">
            <FilterModal :showItems="showItems" />
          </div>
          <div>
            <ExportBtn />
          </div>
        </div>
        <Table
          :columns="tableList.columns"
          :actions="tableList.actions"
          :data="tableList.datas">
        </Table>
    </div>
  </main>
</template>

<script>
import Table from "@/components/tables/Record"
import 'vue2-datepicker/index.css'
import FilterModal from '@/components/FilterModal'
import ExportBtn from '@/components/modules/ExportBtn'
  export default {
    name: "Learn_record",
    components: {
      Table,
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
        periodTime: null,

        roomVal: null,
        roomOptions: [
          { name: '教室', value: '' }
        ],
        classTopicVal: null,
        classTopicOptions: [
          { name: '課程主題', value: '' }
        ],
        topicCategoryVal: null,
        topicCategoryOptions: [
          { name: '主題分類', value: '' }
        ],
        branchVal: null,
        branchOptions: [
          { name: '站別', value: '' }
        ],
        classTypeVal: null,
        classTypeOptions: [
          { name: '課程種類', value: '' }
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
            { name: 'name', label: '姓名/英文姓名', required: true },
            { name: 'account', label: '帳號(信箱)', required: true },
            { name: 'branch', label: '分校', required: true },
            { name: 'class', label: '班級', required: true },
            { name: 'point', label: '點數', required: true },
            { name: 'director', label: '班主任', required: true },
            { name: 'action', label: '執行動作', required: true }
          ],
          datas: [
            {
              name: '測試/Peggy',
              account: '2021.08.08',
              branch: '總公司',
              class: 'C8',
              point: '88',
              director: 'peggy@gmail.com',
              action: true
            },
            {
              name: '測試/Peggy',
              account: '2021.08.08',
              branch: '總公司',
              class: 'C8',
              point: '88',
              director: 'peggy@gmail.com',
              action: true
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>