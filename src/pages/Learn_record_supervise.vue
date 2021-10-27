<template>
  <main class="flex items-start p-6">
    <StudentsModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="''" v-on:submit="submit" />
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">主任預約紀錄
            </h1>
            <span>ALEX/ALEX WU(test@gmail.com)</span>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap flex-col lg:flex-row mb-4">
          <div class="flex items-center justify-start flex-wrap">
            <div class="mr-1">
              <router-link :to="{ name: 'branch' }"  class="px-4 py-2 bg-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap border border-gray-500">
                <i class="fas fa-chevron-left"></i>返回
              </router-link>
            </div>
            <FilterModal :showItems="showItems" />
          </div>
          <div>
            <ExportBtn />
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
                <p>總申請數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8次</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>申請成功數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>10次</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>申請失敗數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>10次</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>申請取消數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>10次</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>扣除總點數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>88點</p>
              </div>
            </div>
          </div>
          <div class="bg-white font-bold px-4 py-5">
            <h6 class=" text-left text-lg mb-2">分類統計</h6>
            <hr class="border-b border-gray-800 mb-2">
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>一對一課程</p>
              </div>
              <div class="w-1/2 text-right">
                <p>88堂</p>
              </div>
            </div>
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>一對六課程</p>
              </div>
              <div class="w-1/2 text-right">
                <p>5堂</p>
              </div>
            </div>
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>歐/美外師、中師</p>
              </div>
              <div class="w-1/2 text-right">
                <p>1堂</p>
              </div>
            </div>
            <div class="w-full flex py-2">
              <div class="w-1/2 text-left">
                <p>菲師</p>
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
            :data="tableList.datas"
            v-on:openModal="openModal"
            >
          </Table>
          <Pagination />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Table from '@/components/table'
import FilterModal from '@/components/FilterModal'
import Pagination from '@/components/modules/Pagination'
import ExportBtn from '@/components/modules/ExportBtn'
import StudentsModal from '@/components/popup/StudentsModal'
  export default {
    name: 'Learn_record_supervise',
    components: {
      Table,
      FilterModal,
      Pagination,
      ExportBtn,
      StudentsModal
    },
    data () {
      return {
        showfirstModal: false,
        showItems: {
          role: false,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          search: false,
          sync: false,
          approvalStatus: true
        },

        tableList: {
          columns: [
            { name: 'time', label: '狀態', required: true },
            { name: 'status', label: '建立時間', required: true },
            { name: 'point', label: '課程名稱', required: true },
            { name: 'topic', label: '課程種類', required: true },
            { name: 'classification', label: '教師專案', required: true },
            { name: 'name', label: '安排教師', required: true },
            { name: 'other', label: '人數', required: true },
            { name: 'detail', label: '課程使用點數', required: true },
            { name: 'orderTime', label: '預約時間', required: true },
            { name: 'classTime', label: '實際開課時間', required: true },
          ],
          datas: [
            {
              time: '2021-06-22 22:00~23:00',
              status: '課程已結束',
              point: '88',
              topic: '生活英語',
              classification: '歐/美外師、中師',
              name: 'Peggy',
              other: '0/0',
              detail: '88',
              orderTime: '2021-06-22 22:00~23:00',
              classTime: '2021-06-22 22:00~23:00'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      submit () {},

      openModal () {
        this.showfirstModal = true
      },
      closeModal (closeModal) {
        console.log(closeModal)
        this.showfirstModal = closeModal
      }
    }
  }
</script>
<style lang="scss">
</style>