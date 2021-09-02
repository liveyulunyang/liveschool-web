<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">學生學習紀錄
            </h1>
            <span>測試學生(test@gmail.com)</span>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
          <div class="flex items-center justify-start flex-wrap">
            <div class="mr-1">
              <router-link :to="{ name: 'learn_record' }"  class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                <i class="fas fa-chevron-left"></i>返回
              </router-link>
            </div>
          <div class="mr-1">
            <date-picker
              v-model="periodTime"
              type="date" range placeholder="選擇時間區間"
              :input-class="'mx-input'"></date-picker>
          </div>
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
          </div>
          <div>
            <a class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
              <i class="fas fa-arrow-down mr-1"></i>匯出資料
            </a>
          </div>
        </div>
      <div class="flex flex-wrap">
        <!-- 統計 -->
        <div class="w-full md:w-2/5 xl:w-1/6 px-2">
          <div class="bg-white font-bold px-4 py-5">
            <h6 class=" text-left text-lg mb-2">統計</h6>
            <hr class="border-b border-gray-800 mb-2">
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>上課次數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8次</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>出席率</p>
              </div>
              <div class="w-1/2 text-right">
                <p>100%</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>總分鐘數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8分鐘</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>平均分鐘數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>10分鐘</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>剩餘點數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8點</p>
              </div>
            </div>
          </div>
          <div class="bg-white font-bold px-4 py-5">
            <h6 class=" text-left text-lg mb-2">分類統計</h6>
            <hr class="border-b border-gray-800 mb-2">
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>come to live</p>
              </div>
              <div class="w-1/2 text-right">
                <p>1堂</p>
              </div>
            </div>
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>兒童生活英語</p>
              </div>
              <div class="w-1/2 text-right">
                <p>1堂</p>
              </div>
            </div>
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>兒童漫畫英語</p>
              </div>
              <div class="w-1/2 text-right">
                <p>1堂</p>
              </div>
            </div>
          </div>
        </div>
        <Table class="w-full md:w-3/5 xl:w-5/6"
          :columns="tableList.columns"
          :actions="tableList.actions"
          :data="tableList.datas">
        </Table>
      </div>
    </div>
  </main>
</template>

<script>
import Table from "@/components/tables/Record_student";
import Multiselect from 'vue-multiselect'
import 'vue2-datepicker/index.css'
import DatePicker from 'vue2-datepicker'
  export default {
    name: "Learn_record",
    components: {
      Table,
      Multiselect,
      DatePicker
    },
    data () {
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

        tableList: {
          columns: [
            { name: 'time', label: '課程時間', required: true },
            { name: 'status', label: '課程狀態', required: true },
            { name: 'point', label: '課程點數', required: true },
            { name: 'topic', label: '主題', required: true },
            { name: 'classification', label: '主題分類', required: true },
            { name: 'name', label: '名稱', required: true },
            { name: 'other', label: '其他', required: true },
            { name: 'detail', label: '課程詳情', required: true }
          ],
          datas: [
            {
              time: '2021-06-22 22:00~23:00',
              status: '課程已結束',
              point: '88',
              topic: '生活英語',
              classification: '生活英語',
              name: 'B1 U1'
            },
            {
              time: '2021-06-23 22:00~23:00',
              status: '課程已結束',
              point: '88',
              topic: '生活英語',
              classification: '生活英語',
              name: 'B1 U1'
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