<template>
  <div class="flex flex-wrap items-center text-sm" id="filterBtn">
    <!-- 狀態 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.progressStatus">
      <div class="relative w-full">
        <select @change="onChange" v-model="progressStatus" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">狀態</option>
          <option value="0">審核中</option>
          <option value="1">通過</option>
          <option value="2">未通過</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!-- 教室 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classroom">
      <div class="relative w-full">
        <select @change="onChange" v-model="classroom" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
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
        <select @change="onChange" v-model="role" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">權限</option>
          <option value="0">管理者</option>
          <option value="1">主任/HR</option>
          <option value="2">督導</option>
          <option value="3">老師</option>
          <option value="4">學生</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!-- 老師國籍 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.teacherCountry">
      <div class="relative w-full">
        <select @change="onChange" v-model="teacherCountry" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">菲師</option>
          <option>中師</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!-- 刪除原因 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.delReason">
      <div class="relative w-full">
        <select @change="onChange" v-model="delReason" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">刪除原因</option>
          <option value="0">長期未使用</option>
          <option value="1">建立錯誤</option>
          <option value="2">測試用</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!-- 身份 -->
    <!-- <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.listStatus">
      <div class="relative w-full">
        <select @change="onChange" v-model="listStatus" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">身份</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> -->
    <!-- 課程主題 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classTopic">
      <div class="relative w-full">
        <select @change="onChange" v-model="classTopic" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
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
        <select @change="onChange" v-model="classStatus" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">課程狀態</option>
          <option value="">課程準備中</option>
          <option value="" v-if="$store.state.auth.userRole === 'admin' || $store.state.auth.userRole === 'director'">上課中</option>
          <option value="">已結束</option>
          <option value="" v-if="$store.state.auth.userRole === 'student' || $store.state.auth.userRole === 'teacher'">前往上課</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!-- 主題分類 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.classification">
      <div class="relative w-full">
        <select @change="onChange" v-model="classification" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">主題分類</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!-- 站別 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.branch">
      <div class="relative w-full">
        <select @change="onChange" v-model="branch" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
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
        <select @change="onChange" v-model="classType" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
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
        v-model="timePeriod"
        type="date" range placeholder="選擇時間區間"
        :input-class="'mx-input'"></date-picker>
    </div>
    <!-- 審核狀態 -->
    <div class="w-full md:w-1/2 lg:w-auto p-1" v-if="showItems.approvalStatus">
      <div class="relative w-full">
        <select @change="onChange" v-model="approvalStatus" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">狀態</option>
          <option value="0">審核中</option>
          <option value="1">未通過</option>
          <option value="2">審核成功</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <!-- 搜尋欄位 -->
    <div class="w-full lg:w-auto md:flex p-1 items-center md:mb-0" v-if="showItems.search">
      <div class="relative w-full">
        <select @change="onChange" v-model="searchType" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
          >
          <option value="">請選擇搜尋欄位</option>
          <option value="0">姓名/英文姓名</option>
          <option value="1">行動電話</option>
          <option value="2">縣市</option>
          <option value="3">分校</option>
          <option value="4">班級</option>
          <option value="5">來源</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="flex bg-white w-full border border-gray-500 h-43">
        <input v-model="searchWord" type="text" placeholder="輸入關鍵字搜索" name="search" class="px-2 border-0 focus:outline-none w-full h-full">
        <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
      </div>
    </div>
    <!-- 搜尋欄位/只有輸入框 -->
    <div class="w-full lg:w-auto md:flex p-1 items-center md:mb-0" v-if="showItems.searchOnlyInput">
      <div class="flex bg-white w-full border border-gray-500 h-43">
        <input v-model="searchWord" type="text" placeholder="輸入關鍵字搜索" name="search" class="px-2 border-0 focus:outline-none w-full h-full">
        <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
      </div>
    </div>
    <!-- 重整按鈕 -->
    <div class="w-auto syncBtn p-1 cursor-pointer" v-if="showItems.sync">
      <a class="flex items-center justify-center btn-main text-white rounded" @click="revertData">
        <i class="fas fa-sync-alt"></i>
      </a>
    </div>

    <!-- 匯出按鈕 -->
    <a class="w-auto p-1 cursor-pointer" v-if="showItems.isExportBtn">
      <ExportBtn />
    </a>
  </div>
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
            teacherCountry: false,
            progressStatus: false,
            classroom: false,
            role: false,
            delReason: false,
            // listStatus: false,
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
        progressStatus: '',
        classroom: '',
        role: '',
        delReason: '',
        // listStatus: '',
        classTopic: '',
        classStatus: '',
        classification: '',
        branch: '',
        classType: '',
        timePeriod: [new Date(), new Date()],
        approvalStatus: '',
        searchType: '',
        searchWord: '',
        teacherCountry: ''
      }
    },
    methods: {
      onChange () {
        let self = this
        let filterArr = {}
        self.showItems.progressStatus ?  filterArr.progressStatus = self.progressStatus : null
        self.showItems.classroom ?  filterArr.classroom = self.classroom : null
        self.showItems.role ?  filterArr.role = self.role : null
        self.showItems.delReason ?  filterArr.delReason = self.delReason : null
        self.showItems.classTopic ?  filterArr.classTopic = self.classTopic : null
        // self.showItems.listStatus ?  filterArr.listStatus = self.listStatus : null
        self.showItems.classStatus ?  filterArr.classStatus = self.classStatus : null
        self.showItems.classification ?  filterArr.classification = self.classification : null
        self.showItems.branch ?  filterArr.branch = self.branch : null
        self.showItems.classType ?  filterArr.classType = self.classType : null
        self.showItems.timePeriod ?  filterArr.timePeriod = self.timePeriod : null
        self.showItems.approvalStatus ?  filterArr.approvalStatus = self.approvalStatus : null
        self.showItems.search ?  filterArr.searchType = self.searchType : null
        self.showItems.search || self.showItems.searchOnlyInput?  filterArr.searchWord = self.searchWord : null
        self.showItems.teacherCountry || self.showItems.teacherCountry?  filterArr.teacherCountry = self.teacherCountry : null
        console.log(filterArr)
      },
      revertData () {
        let self = this
        Object.assign(self.$data,self.$options.data())
      }
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