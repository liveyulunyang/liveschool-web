<template>
  <!-- <div class="flex items-center justify-start flex-wrap" id="filterBtn"> -->
    <div class="w-full flex flex-wrap items-center text-sm" id="filterBtn">
      <!-- 狀態 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.ProgressStatus">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">狀態</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 教室 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classroom">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">教室</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 權限 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.role">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">權限</option>
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
      <!-- 刪除原因 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.delReason">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">刪除原因</option>
            <option value="">長期未使用</option>
            <option value="">建立錯誤</option>
            <option value="">測試用</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 身份 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.listStatus">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">身份</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 課程主題 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classTopic">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">課程主題</option>
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
      <!-- 課程狀態 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classStatus">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">課程狀態</option>
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
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classification">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option>主題分類</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 站別 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.branch">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">站別</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 課程種類 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classType">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">課程種類</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 時間區間 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.timePeriod">
        <date-picker
          v-model="periodTime"
          type="date" range placeholder="選擇時間區間"
          :input-class="'mx-input'"></date-picker>
      </div>
      <!-- 審核狀態 -->
      <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.approvalStatus">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">狀態</option>
            <option value="">審核中</option>
            <option value="">未通過</option>
            <option value="">審核成功</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- 搜尋欄位 -->
      <div class="w-full lg:w-auto md:flex p-1 items-center md:mb-0" v-if="showItems.search">
        <div class="relative w-full">
          <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
            >
            <option value="">請選擇搜尋欄位</option>
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
        <div class="flex bg-white w-full border border-gray-500 h-43">
          <input type="text" placeholder="輸入關鍵字搜索" name="search" class="px-2 border-0 focus:outline-none w-full h-full">
          <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
        </div>
      </div>
      <!-- 搜尋欄位/只有輸入框 -->
      <div class="w-full lg:w-auto md:flex p-1 items-center md:mb-0" v-if="showItems.searchOnlyInput">
        <div class="flex bg-white w-full border border-gray-500 h-43">
          <input type="text" placeholder="輸入關鍵字搜索" name="search" class="px-2 border-0 focus:outline-none w-full h-full">
          <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
        </div>
      </div>
      <!-- 重整按鈕 -->
      <div class="w-auto syncBtn p-1 cursor-pointer" v-if="showItems.sync">
        <a class="flex items-center justify-center btn-main text-white rounded">
          <i class="fas fa-sync-alt"></i>
        </a>
      </div>

      <!-- 匯出按鈕 -->
      <a class="w-auto p-1 cursor-pointer" v-if="showItems.isExportBtn">
        <ExportBtn />
      </a>
    </div>
  <!-- </div> -->
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import 'vue2-datepicker/index.css'
  import ExportBtn from '@/components/modules/ExportBtn'
  export default {
    name: 'FilterModal',
    props: {
      showItems: {
        type: Object,
        default () {
          return {
            ProgressStatus: false,
            classroom: false,
            role: false,
            delReason: false,
            listStatus: false,
            classTopic: false,
            classStatus: false,
            classification: false,
            branch: false,
            classType: false,
            timePeriod: false,
            approvalStatus: false,
            search: false,
            searchOnlyInput: false,
            sync: false,
            isExportBtn: false
          }
        }
      }
    },
    components: {
      DatePicker,
      ExportBtn
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

<style lang="scss">
#filterBtn {
  .mx-datepicker-range {
    width: 100%;
    height: 43px !important;
  }
  .mx-input-wrapper {
    .mx-input {
      height: 43px !important;
      border-radius: 0 !important;
    }
  }
  .h-43 {
    height: 43px;
  }
  .syncBtn a {
    height: 36px;
    width: 36px;
    .fas {
      font-size: 20px;
    }
  }
  select {
    height: 43px !important;
  }
}

</style>