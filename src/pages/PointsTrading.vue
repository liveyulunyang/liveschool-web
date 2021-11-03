<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <Title :title="'點數交易紀錄'" />
            <span>測試學生(test@gmail.com)</span>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
          <div class="flex items-center justify-start flex-wrap">
            <div class="mr-1">
              <router-link :to="{ name: 'learn_record' }"  class="px-4 py-2 bg-gray-900 text-white  text-sm rounded whitespace-no-wrap">
                <i class="fas fa-chevron-left"></i>返回
              </router-link>
            </div>
            <FilterModal :showItems="showItems" />
          </div>
          <div>
            <a class="px-4 py-2 bg-gray-900 text-white  text-sm mx-1 rounded whitespace-no-wrap">
              <i class="fas fa-arrow-down mr-1"></i>匯出資料
            </a>
          </div>
        </div>
      <div class="flex flex-wrap">
        <!-- 統計 -->
        <div class="w-full md:w-2/5 xl:w-1/6 px-2 mb-4 md:mb-0">
          <div class="bg-white font-bold px-4 py-5">
            <h6 class=" text-left text-lg mb-2">統計</h6>
            <hr class="border-b border-gray-800 mb-2">
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>剩餘點數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8次</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>使用點數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>100%</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>新增點數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8分鐘</p>
              </div>
            </div>
          </div>
          <div class="bg-white font-bold px-4 py-5">
            <h6 class=" text-left text-lg mb-2">分類統計</h6>
            <hr class="border-b border-gray-800 mb-2">
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>成功預約</p>
              </div>
              <div class="w-1/2 text-right">
                <p>1堂</p>
              </div>
            </div>
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>課程購買</p>
              </div>
              <div class="w-1/2 text-right">
                <p>1堂</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-3/5 xl:w-5/6 px-2">
          <Table
            :columns="tableList.columns"
            :actions="tableList.actions"
            :data="tableList.datas">
          </Table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Table from '@/components/table'
import FilterModal from '@/components/FilterModal'
import Title from '@/components/Title'
  export default {
    name: "Learn_record",
    components: {
      Table,
      FilterModal,
      Title
    },
    data () {
      return {
        showItems: {
          branch: false,
          classType: false,
          timePeriod: true,
          search: true,
          sync: true
        },

        tableList: {
          columns: [
            { name: 'time', label: '交易時間', required: true },
            { name: 'status', label: '課程狀態', required: true },
            { name: 'point', label: '課程點數', required: true },
            { name: 'topic', label: '主題', required: true },
            { name: 'classification', label: '主題分類', required: true }
          ],
          datas: [
            {
              time: '2021-06-22 22:00~23:00',
              status: 'Unit1',
              point: '-1',
              topic: '系統',
              classification: '成功預約'
            },
            {
              time: '2021-06-23 22:00~23:00',
              status: 'Unit1',
              point: '-1',
              topic: '系統',
              classification: '成功預約'
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