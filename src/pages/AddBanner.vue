<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <Title :title="'新增Banner'" />
          </div>
        </div>

        <div class="content">
          <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
            <div class="flex justify-between">
              <!-- <TabComponent :tag="tag" :tagArr="tagArr" v-on:tagIdx="tagIdx" /> -->
            </div>

            <div class="w-full flex flex-col justify-between leading-normal">

              <div class="bg-white p-2 lg:p-4 max-w-8xl mx-auto">
                <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">
                  <div class="w-full bg-white rounded py-2 lg:p-4 justify-between leading-normal flex flex-wrap">
                    <div class="w-full md:w-1/5 px-2">
                      <img :src="require('@/assets/default.png')" alt="" class="object-contain w-full">
                    </div>
                    <div class="flex flex-wrap textColorblack flex-1 px-2">
                      <!-- 檔案 -->
                      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="name">
                          上傳圖片
                        </label>
                        <div class="file-upload w-full md:w-4/5">
                          <div class="file-select">
                            <div class="file-select-button" id="fileName">Choose File</div>
                            <div class="file-select-name" id="noFile">No file chosen...</div>
                            <input type="file" name="chooseFile" id="chooseFile">
                          </div>
                        </div>
                      </div>
                      <!-- 標題 -->
                      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="name">
                          標題
                        </label>
                        <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                          id="name" type="text" placeholder="請輸入標題" maxlength="100">
                      </div>

                      <!-- 連結 -->
                      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="nameEn">
                          連結
                        </label>
                        <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                          id="nameEn" type="text" placeholder="請輸入連結" maxlength="500">
                      </div>

                      <div class="w-full lg:w-1/3 px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="nameEn">
                          發佈日期
                        </label>
                        <div class="w-full md:w-4/5">
                          <date-picker v-model="value4" type="datetime" placeholder="Select datetime" :input-class="'mx-input py-5'"></date-picker>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="nameEn">
                          結束日期
                        </label>
                        <div class="w-full md:w-4/5">
                          <date-picker v-model="value5" type="datetime" placeholder="Select datetime" :input-class="'mx-input py-5'"></date-picker>
                        </div>
                      </div>
                      <div class="w-full lg:w-1/3 px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="price">
                          公告狀態
                        </label>
                        <div class="w-full md:w-4/5">
                          <div class="relative text-sm w-full">
                            <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="price"
                              >
                              <option value="31">Public</option>
                              <option value="31">Draft</option>
                            </select>
                            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="md:flex mt-3 md:mb-4 w-full lg:pt-6 justify-end px-6">
                    <button class="btn-main text-white py-2 px-6 rounded text-sm whitespace-no-wrap mx-1">
                      取消修改
                    </button>
                    <button class="btn-main text-white py-2 px-6 rounded text-sm whitespace-no-wrap mx-1">
                      <i class="fas fa-check mr-1"></i>新增
                    </button>
                  </div>

                </form>

              </div>
            </div>
          </section>
        </div>
    </div>
  </main>
</template>

<script>
  // import Table from '@/components/table'
  import Title from '@/components/Title'
  // import FilterModal from '@/components/FilterModal'
  // import TabComponent from '@/components/Tab'
  import DatePicker from 'vue2-datepicker'
  import 'vue2-datepicker/index.css'
  export default {
    name: "Account",
    components: {
      // Table,
      DatePicker,
      Title,
      // FilterModal
      // TabComponent
    },
    data () {
      return {
        value4: null,
        value5: null
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
.file-upload {
  display: block;
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  .file-select {
    display: block;
    border: 2px solid #dce4ec;
    color: #34495e;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    text-align: left;
    background: #FFFFFF;
    overflow: hidden;
    position: relative;
    .file-select-button {
        background: #dce4ec;
        padding: 0 10px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
    }
    .file-upload .file-select .file-select-name {
        line-height: 40px;
        display: inline-block;
        padding: 0 10px;
    }
    input[type=file] {
        z-index: 100;
        cursor: pointer;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        filter: alpha(opacity=0);
    }
  }
}
</style>