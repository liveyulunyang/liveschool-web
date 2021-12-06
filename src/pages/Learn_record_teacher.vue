<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex items-center">
            <Title :title="'老師授課紀錄'" />
            <span>ALEX/ALEX WU(alex_teacherdemo88@liveabc.com)</span>
          </div>
        </div>
        <div class="flex items-center justify-between w-full flex-wrap lg:flex-no-wrap mb-4">
          <div class="flex items-center justify-start flex-wrap lg:flex-no-wrap">
            <div class="mr-1">
              <router-link :to="{ name: 'learn_record' }"  class="px-4 py-2 btn-main text-white  text-sm rounded whitespace-no-wrap">
                <i class="fas fa-chevron-left mr-1"></i>{{ $t('return') }}
              </router-link>
            </div>
            <FilterModal :showItems="showItems" />
          </div>
          <div>
            <!-- <a class="px-4 py-3 btn-blue text-white text-sm mx-1 rounded whitespace-no-wrap">
              <i class="fas fa-arrow-down mr-1"></i>匯出資料
            </a> -->
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
                <p>上課次數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8次</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>堂數(50分鐘為一單位)</p>
              </div>
              <div class="w-1/2 text-right">
                <p>100堂</p>
              </div>
            </div>
            <div class="w-full flex py-2 border-b border-gray-800">
              <div class="w-1/2 text-left">
                <p>平均問卷分數</p>
              </div>
              <div class="w-1/2 text-right">
                <p>8分鐘</p>
              </div>
            </div>
            <!-- <div class="w-full flex py-2 border-b border-gray-800">
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
            </div> -->
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
        <div class="w-full md:w-3/5 xl:w-5/6 px-2">
          <Table
            :columns="tableList.columns"
            :actions="tableList.actions"
            :data="tableList.datas">
            <template slot="othersLabel">
              <th class="whitespace-no-wrap text-center">其他</th>
            </template>
            <template slot="classDetailLabel">
              <th class="whitespace-no-wrap text-center">課程詳情</th>
            </template>

            <template slot="others">
              <td data-th="其他">
                <CommentContentModal :showfirstModal="showCommentModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
                <!-- <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  問券調查
                </button> -->
                <button class="btn-main text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1" @click="showCommentModal = true">
                  老師評語
                </button>
                <button class="btn-main text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1" @click="showCommentModal = true">
                  學生評語
                </button>
              </td>
            </template>
            <template slot="classDetail">
              <CalenderModel :showfirstModal="showDetailModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
              <td data-th="課程詳情">
                <!-- <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-folder-open"></i>
                </button> -->
                <button
                  class="mx-1 table-btn-actions rounded"
                  >
                  <i class="far fa-folder-open"></i>
                </button>
              </td>
            </template>
          </Table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Table from '@/components/table'
import FilterModal from '@/components/FilterModal'
import CommentContentModal from '@/components/popup/CommentContentModal'
import CalenderModel from '@/components/popup/CalenderModel'
import Title from '@/components/Title'
import ExportBtn from '@/components/modules/ExportBtn'
  export default {
    name: "Learn_record",
    components: {
      Table,
      FilterModal,
      CommentContentModal,
      CalenderModel,
      Title,
      ExportBtn
    },
    data () {
      return {
        showCommentModal: false,
        showDetailModal: false,

        showItems: {
          classType: true,
          timePeriod: true
        },

        tableList: {
          columns: [
            { name: 'time', label: '課程時間', required: true },
            { name: 'status', label: '課程狀態', required: true },
            { name: 'point', label: '課程點數', required: true },
            { name: 'topic', label: '主題', required: true },
            { name: 'classification', label: '主題分類', required: true },
            { name: 'name', label: '名稱', required: true }
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
      openModal () {
        this.showfirstModal = true
      },
      closeModal (closeModal) {
        this.showfirstModal = closeModal
        this.showDetailModal = closeModal
        this.showCommentModal = closeModal
      },
      submit (submit) {
        this.$router.push({ name: submit })
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>