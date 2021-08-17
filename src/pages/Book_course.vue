<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">預約課程審核列表</h1>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row">
          <div class="flex items-center justify-start flex-wrap">
          <div class="mr-1">
            <Multiselect
              class="role"
              v-model="roomVal"
              :options="roomOptions"
              :multiple="false"
              :close-on-select="true"
              :clear-on-select="false"
              :show-labels="false"
              track-by="name" label="name"
              placeholder="狀態">
            </Multiselect>
          </div>
          <div class="mr-1">
            <Multiselect
              class=""
              v-model="classTypeVal"
              :options="classTypeOptions"
              :multiple="false"
              :close-on-select="true"
              :clear-on-select="false"
              :show-labels="false"
              track-by="name" label="name"
              placeholder="課程種類">
            </Multiselect>
          </div>
          <div class="mr-1">
            <date-picker
              v-model="periodTime"
              type="date" range placeholder="選擇時間區間"
              :input-class="'mx-input'"></date-picker>
          </div>

          <div class="mr-1">
            <Multiselect
              class="search"
              v-model="searchVal"
              :options="searchOptions"
              :multiple="false"
              :close-on-select="true"
              :clear-on-select="false"
              :show-labels="false"
              track-by="name" label="name"
              placeholder="請選擇搜尋欄位">
            </Multiselect>
          </div>

          <div class="mr-1 flex bg-white">
            <input type="text" placeholder="Search.." name="search" class="py-2 px-2 border-0 focus:outline-none w-20">
            <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
          </div>

          <div class="mr-1">
            <a href="" class="block">
              <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
            </a>
          </div>
          </div>
        </div>
        <Table :columns="vehiclesList.columns"
          :actions="vehiclesList.actions"
          :data="vehiclesList.datas">
        </Table>
    </div>
  </main>
</template>

<script>
  import Table from "@/components/tables/Course";
  import Multiselect from 'vue-multiselect'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  export default {
    name: "Book_course",
    components: {
      Table,
      Multiselect,
      DatePicker
    },
    data() {
      return {
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

        vehiclesList: {
          columns: [
            { name: 'id', label: 'ID', required: true },
            { name: 'classroom', label: '教室', required: true },
            { name: 'classname', label: '課程名稱', required: true },
            { name: 'teacher', label: '老師', required: true },
            { name: 'number', label: '人數', required: true, sortable: false},
            { name: 'point', label: '點數', required: true },
            { name: 'classtime', label: '開課時間', required: true },
            { name: 'classtype', label: '課程種類', required: true },
            { name: 'isPublic', label: '是否公開', required: true },
            { name: 'branch', label: '站別', required: true },
            { name: 'record', label: '紀錄', required: true },
            { name: 'materials', label: '補充教材', required: true },
            { name: 'actions', label: '執行動作', required: true
            },
            { name: 'status', label: '狀態', required: true }
          ],
          datas: [
            {
              id: '282638',
              classroom: 'ROOM1',
              classname: 'CTL測試課程',
              teacher: 'Peggy',
              number: '0/0',
              point: 88,
              classtime: '2021-06-22 22:00-23:00',
              classtype: 'CTL口說班',
              isPublic: '是',
              branch: 'XX站',
              record: 'C8',
              materials: 'C8',
              status: '準備中'
            },
            {
              id: '2825638',
              classroom: 'ROOM1',
              classname: 'CTL測試課程',
              teacher: 'Peggy',
              number: '0/0',
              point: 88,
              classtime: '2021-06-22 22:00-23:00',
              classtype: 'CTL口說班',
              isPublic: '是',
              branch: 'XX站',
              record: 'C8',
              materials: 'C8',
              status: '準備中'
            },
            {
              id: '282658',
              classroom: 'ROOM1',
              classname: 'CTL測試課程',
              teacher: 'Peggy',
              number: '0/0',
              point: 88,
              classtime: '2021-06-22 22:00-23:00',
              classtype: 'CTL口說班',
              isPublic: '是',
              branch: 'XX站',
              record: 'C8',
              materials: 'C8',
              status: '準備中'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      addClass () {
        this.$router.push({ name: 'addTalkClass' })
      },
      toEdit () {
        this.$router.push({ name: 'course_template' })
      }
      // edit() {
      //   // eslint-disable-next-line no-console
      //   console.log('edit manage');
      // },
      // open() {
      //   // eslint-disable-next-line no-console
      //   console.log('open manage');
      // },
      // del() {
      //   // eslint-disable-next-line no-console
      //   console.log('del manage');
      // }
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
</style>