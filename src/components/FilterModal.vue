<template>
  <div class="flex items-center justify-start flex-wrap">
    <div class="w-full flex flex-wrap items-center">
      <!-- 權限 -->
      <div class="w-full md:w-1/2 lg:w-auto px-1 mb-2" v-if="showItems.role">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="" disabled="disabled" hidden="hidden">角色</option>
            <option value="">管理者</option>
            <option value="">主任/HR</option>
            <option value="">督導</option>
            <option value="">老師</option>
            <option value="">學生</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 狀態 -->
      <div class="w-full md:w-1/2 lg:w-auto px-1 mb-2" v-if="showItems.listStatus">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="" disabled="disabled" hidden="hidden">身份</option>
            <option value="">全部</option>
            <option value="">管理者</option>
            <option value="">主任/HR</option>
            <option value="">督導</option>
            <option value="">老師</option>
            <option value="">學生</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 課程主離 -->
      <div class="w-full md:w-1/2 lg:w-auto px-1 mb-2" v-if="showItems.classTopic">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="" disabled="disabled" hidden="hidden">課程主離</option>
            <option value="all">全部</option>
            <option value="220">Come to Live</option>
            <option value="225">自然發音</option>
            <option value="221">生活英語</option>
            <option value="223">檢定課程</option>
            <option value="222">商業英語</option>
            <option value="224">日文課程</option>
            <option value="227">互動英語雜誌</option>
            <option value="289">線上師訓課程</option>
            <option value="226">雙師課程</option>
            <option value="320">Ready Go</option>
            <option value="336">Sound It Out Lite</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 主題分類 -->
      <div class="w-full md:w-1/2 lg:w-auto px-1 mb-2" v-if="showItems.classification">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option disabled="disabled" hidden="hidden">主題分類</option>
            <option value="">全部</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 站別 -->
      <div class="w-full md:w-1/2 lg:w-auto px-1 mb-2" v-if="showItems.branch">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="" disabled="disabled" hidden="hidden">站別</option>
            <option value="">全部</option>
            <option value="">管理者</option>
            <option value="">主任/HR</option>
            <option value="">督導</option>
            <option value="">老師</option>
            <option value="">學生</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 課程種類 -->
      <div class="w-full md:w-1/2 lg:w-auto px-1 mb-2" v-if="showItems.classType">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="" disabled="disabled" hidden="hidden">課程種類</option>
            <option value="">全部</option>
            <option value="">管理者</option>
            <option value="">主任/HR</option>
            <option value="">督導</option>
            <option value="">老師</option>
            <option value="">學生</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 時間區間 -->
      <div class="w-full md:w-1/2 lg:w-auto px-1 mb-2" v-if="showItems.timePeriod">
        <date-picker
          v-model="periodTime"
          type="date" range placeholder="選擇時間區間"
          :input-class="'mx-input'"></date-picker>
      </div>
      <!-- 搜尋欄位 -->
      <div class="w-full lg:w-auto md:flex px-1 items-center" v-if="showItems.serach">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="" disabled="disabled" hidden="hidden">請選擇搜尋欄位</option>
            <option value="">姓名/英文姓名</option>
            <option value="">行動電話</option>
            <option value="">縣市</option>
            <option value="">分校</option>
            <option value="">班級</option>
            <option value="">來源</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
        <div class="flex bg-white w-full border">
          <input type="text" placeholder="請選擇搜尋欄位" name="search" class="py-2 px-2 border-0 focus:outline-none w-full">
          <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
        </div>
      </div>
      <!-- <div class="w-full lg:w-auto flex px-1" v-if="showItems.serach">
        <div class="relative text-sm w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="" disabled="disabled" hidden="hidden">請選擇搜尋欄位</option>
            <option value="">姓名/英文姓名</option>
            <option value="">行動電話</option>
            <option value="">縣市</option>
            <option value="">分校</option>
            <option value="">班級</option>
            <option value="">來源</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-auto flex px-1 mb-2" v-if="showItems.serach">
        <div class="flex bg-white w-full border">
          <input type="text" placeholder="請選擇搜尋欄位" name="search" class="py-2 px-2 border-0 focus:outline-none w-full">
          <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
        </div>
      </div> -->
      <!-- 重製按鈕 -->
      <div class="w-full md:w-1/2 lg:w-auto flex px-1 mb-2" v-if="showItems.sync">
        <a href="" class="flex items-center justify-center bg-gray-900 text-white w-8 h-8">
          <i class="fas fa-sync-alt text-lg"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import 'vue2-datepicker/index.css'
  export default {
    name: 'FilterModal',
    props: {
      showItems: {
        type: Object,
        default () {
          return {
            role: true,
            listStatus: true,
            classTopic: true,
            classification: true,
            branch: true,
            classType: true,
            timePeriod: true,
            serach: true,
            sync: true
          }
        }
      }
    },
    components: {
      DatePicker
    },
    data () {
      return {
        roleVal: '',

        periodTime: null,

        roomVal: '',

        classTopicVal: '',

        topicCategoryVal: '',

        branchVal: '',

        classTypeVal: '',

        searchVal: '',
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
  .mx-datepicker-range {
    width: 100%;
    height: 42px !important;
  }
</style>