<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">LiveTalk課程模板</h1>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row">
          <div class="flex items-center justify-start flex-wrap">
            <Button @click="$router.back(-1)" class="mr-3 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left"></i>返回
            </Button>

          <div class="mr-1">
            <Multiselect
              class=""
              v-model="classTopicVal"
              :options="classTopicOptions"
              :multiple="false"
              :close-on-select="true"
              :clear-on-select="false"
              :show-labels="false"
              track-by="name" label="name"
              placeholder="課程主題">
            </Multiselect>
          </div>
          <div class="mr-1">
            <Multiselect
              class=""
              v-model="topicCategoryVal"
              :options="topicCategoryOptions"
              :multiple="false"
              :close-on-select="true"
              :clear-on-select="false"
              :show-labels="false"
              track-by="name" label="name"
              placeholder="主題分類">
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
          <div class="flex justify-end items-center">
            <Button @click="addClass" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
              + 新增模板
            </Button>
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
  import Table from "@/components/tables/Template";
  import Multiselect from 'vue-multiselect'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  export default {
    name: "CourseTemplate",
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
            { name: 'type', label: '課程種類', required: true },
            { name: 'name', label: '課程名稱', required: true },
            { name: 'materials', label: '補充教材', required: true },
            { name: 'actions', label: '執行動作', required: true }
          ],
          datas: [
            {
              type: 'CTL口說班',
              name: 'CTL口說升級測驗Starter'
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