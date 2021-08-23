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
        <Table
          :columns="vehiclesList.columns"
          :actions="vehiclesList.actions"
          :data="vehiclesList.datas">
        </Table>
    </div>
  </main>
</template>

<script>
  import Table from "@/components/tables/Booking";
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
            // { name: 'id', label: 'ID', required: true },
            { name: 'setTime', label: '建立時間', required: true },
            { name: 'BranchChool', label: '分校', required: true },
            { name: 'classname', label: '課程名稱', required: true },
            { name: 'classtype', label: '課程種類', required: true },
            { name: 'teacherProject', label: '教師專案', required: true },
            { name: 'teacher', label: '安排教師', required: true },
            { name: 'number', label: '人數', required: true, sortable: false},
            { name: 'point', label: '點數', required: true },
            { name: 'bookingTime', label: '預約時間', required: true },
            { name: 'classtime', label: '實際開課時間', required: true },
            { name: 'status', label: '狀態', required: true },
            { name: 'actions', label: '動作', required: true }
          ],
          datas: [
            {
              id: '282638',
              setTime: '2021.08.08',
              BranchChool: '總公司',
              classname: 'B1 U1-U3 Class 2',
              classtype: 'CTL口說班',
              teacherProject: '菲常厲害優惠專案',
              teacher: 'Peggy',
              number: 'CTL口說班',
              point: 88,
              bookingTime: '2021-06-22 22:00-23:00',
              classtime: 'C8',
              status: '審核中',
              actions: true
            },
            {
              id: '282639',
              setTime: '2021.08.08',
              BranchChool: '總公司',
              classname: 'B1 U1-U3 Class 2',
              classtype: 'CTL口說班',
              teacherProject: '菲常厲害優惠專案',
              teacher: 'Peggy',
              number: '0/0',
              point: 88,
              bookingTime: '2021-06-22 22:00-23:00',
              classtime: '2021-06-22 22:00-23:00',
              status: '審核中',
              actions: false
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
      //   console.log('edit manage');
      // },
      // open() {
      //   console.log('open manage');
      // },
      // del() {
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