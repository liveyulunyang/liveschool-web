
<template>
	<main class="flex flex-wrap p-6">
		<h1 class="text-2xl leading-none text-black-1 mr-2">新增LiveTalk課程</h1>

    <div class="flex w-full mt-8 items-center">
      <div class="mr-6">
        <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
          <i class="fas fa-chevron-left"></i>返回
        </Button>
      </div>
    </div>

    <section class="w-full bg-white mt-4 min-h-screen p-6">
      <div class="flex w-full flex-wrap">
        <!-- <div class="w-full lg:w-1/5">
          <div class="h-40 w-40 relative">
            <a class="btn absolute right-0 bottom-0 cursor-pointer h-8 w-8 rounded-full bg-gray-900 flex justify-center items-center border-2 border-white" @click="isShow = !isShow"><i class="fas fa-camera text-base text-white"></i></a>
            <img src="@/assets/img/vector.svg" alt="" class="block object-contain" v-if="!imgDataUrl">
            <my-upload field="img"
              @crop-success="cropSuccess"
              @crop-upload-success="cropUploadSuccess"
              @crop-upload-fail="cropUploadFail"
              v-model="isShow"
              :width="300"
              :height="300"
              :langType="'zh-tw'"
              url="/upload"
              :params="params"
              :headers="headers"
              img-format="png"></my-upload>
            <img :src="imgDataUrl">
          </div>
        </div> -->
        <!-- <div class="w-full lg:w-4/5">
          <h5 class="text-left text-sm px-2 mb-2 font-bold">課程標籤(可多選)</h5>
          <div class="flex flex-wrap w-full">
            <div class="w-1/2 md:w-1/3 lg:w-1/4 py-1 px-2" v-for="(item, index) in tagOptions" :key="index">
              <a class="py-1 bg-white border border-gray-200 text-gray-0 text-sm rounded whitespace-no-wrap block" :class="{ tagActive: item.isActive }" >{{ item.name }}</a>
            </div>
          </div>
        </div> -->
      </div>

    <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">
      <div class="w-full bg-white rounded py-2 lg:p-4 flex flex-col justify-between leading-normal">
        <div class="flex flex-wrap textColorblack">

          <!-- 課程類型 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="email">
              課程類型
            </label>
            <div>
            </div>
            <div class="w-full md:w-3/5 flex items-center">

              <div class="relative text-sm w-full md:w-48 md:mr-2">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                  <option value="31">一般口說課程</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="email" type="email" placeholder="">
            </div>
            <div class="w-full md:w-1/5 flex items-center justify-center md:pl-2">
              <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap">
                <!-- <i class="far fa-check-square mr-2"></i> -->
                <i class="fas fa-square"></i>
                公開課程</button>
            </div>
          </div>

          <!-- 封面 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
              封面
            </label>
            <div class="w-full md:w-3/5 flex items-center">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name" type="text" placeholder="請輸入url">
            </div>
            <div class="w-full md:w-1/5 flex items-center">
              <a href="" class="block px-3 mr-3">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fas fa-upload"></i>
                </label>
                <input id="file-upload" type="file"/>
              </a>
              <span>cover.jpg</span>
              <a href="" class="block p-2"><i class="fas fa-times"></i></a>
            </div>
          </div>

          <!-- 名稱 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="nameEn">
              名稱
            </label>
            <div class="w-full md:w-4/5">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="nameEn" type="phone" placeholder="請輸入文字">
            </div>
          </div>

          <!-- 副標說明 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="mobile">
              副標說明
            </label>
            <div class="w-full md:w-4/5">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="mobile" type="phone" placeholder="請輸入文字">
            </div>
          </div>

          <!-- 課程分類 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="address">
              課程分類
            </label>
            <div class="w-full md:w-4/5 md:flex">
              <div class="relative text-sm w-full md:w-48 md:mr-2">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                  <option value="31">課程主題</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <div class="relative text-sm w-full md:w-48">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                  <option value="31">主題分類</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <!-- 課程大綱 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="experience">
              課程大綱
            </label>
            <div class="w-full md:w-4/5">
              <textarea id="experience" placeholder="請輸入課程大綱"
                class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
              </textarea>
            </div>
          </div>

          <!-- 課程目標 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="experience">
              課程目標
            </label>
            <div class="w-full md:w-4/5">
              <textarea id="experience" placeholder="請輸入課程目標"
                class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
              </textarea>
            </div>
          </div>

          <!-- 課前預習 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
              課前預習
            </label>
            <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="name" type="text" placeholder="請輸入url">
          </div>

          <!-- 課前預習 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
              課後預習
            </label>
            <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="name" type="text" placeholder="請輸入url">
          </div>

          <div class="flex w-full mb-2 md:mb-4 flex-wrap">
            <!-- 指定教師 -->
            <div class="w-full md:w-1/3 px-3 md:flex">
              <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2" for="address">
                指定教師
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <div class="relative text-sm w-full md:w-48">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">選擇分區</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <!-- 指定教室 -->
            <div class="px-3 md:flex w-full md:w-1/3">
              <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2" for="address">
                指定教室
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <div class="relative text-sm w-full md:w-48">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">選擇分區</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full mb-2 md:mb-4 flex-wrap">
            <!-- 人數班制 -->
            <div class="w-full md:w-1/3 px-3 md:flex mb-4 md:mb-0">
              <label class="md:pt-2 tracking-wide text-sm md:w-1/3" for="address">
                人數班制
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <div class="relative text-sm w-full md:w-48 md:mr-2">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">選擇分區</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <!-- 最高人數 -->
            <div class="w-1/2 md:w-1/3 px-3 flex">
              <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                最高人數
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <input type="number" id="tentacles" name="tentacles" class="border rounded"
                      min="1" max="100" value="1">
              </div>
            </div>
            <!-- 最低人數 -->
            <div class="w-1/2 md:w-1/3 px-3 flex">
              <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                最低人數
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <input type="number" id="tentacles" name="tentacles" class="border rounded"
                      min="1" max="100" value="1">
              </div>
            </div>
          </div>

          <!-- 課程日期 -->
          <div class="md:flex w-full mb-2 md:mb-4 flex-wrap">
            <div class="w-full md:w-1/3 px-2 md:flex">
              <label class="md:pt-2 md:w-1/3 tracking-wide text-sm mb-2" for="address">
                課程日期
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <date-picker
                  v-model="time"
                  format="YYYY-MM-DD"
                  type="date"
                  placeholder="Select date"
                  input-class="mx-input py-2"
                ></date-picker>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 md:flex">
              <label class="md:pt-2 md:w-1/3 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                課程時間從
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <date-picker
                  v-model="value1"
                  :time-picker-options="{
                    start: '06:00',
                    step: '00:60',
                    end: '23:00',
                  }"
                  format="hh:mm a"
                  type="time"
                  placeholder="hh:mm a"
                  input-class="mx-input py-2"
                ></date-picker>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-2 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                到
              </label>
              <div class="w-full md:w-4/5 md:flex">
                <date-picker
                  v-model="value2"
                  :time-picker-options="{
                    start: '06:00',
                    step: '00:60',
                    end: '23:00',
                  }"
                  format="hh:mm a"
                  type="time"
                  placeholder="hh:mm a"
                  input-class="mx-input py-2"
                ></date-picker>
              </div>
            </div>
          </div>

          <!-- 費用類型 -->
          <div class="md:flex w-full mb-2 md:mb-4">
            <!-- 費用類型 -->
            <div class="w-full md:w-1/3 px-3 md:flex mb-4 md:mb-0">
              <label class="md:pt-2 md:w-1/3 tracking-wide text-sm mb-2" for="address">
                費用類型
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <div class="relative text-sm w-full md:w-48 md:mr-2">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">一般點數</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- 點數 -->
            <div class="w-1/2 md:w-1/3 px-3 flex">
              <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                點數
              </label>
              <div class="w-full md:w-2/3 md:flex">
                <input type="number" id="tentacles" name="tentacles" class="border rounded"
                      min="1" max="100" value="1">
              </div>
            </div>
          </div>

          <!-- 站別 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
              上架站別
            </label>
            <div class="w-full md:w-2/5 flex items-center">
              <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap mx-1">
                <!-- <i class="far fa-check-square mr-2"></i> -->
                <i class="fas fa-square"></i>
                台灣站</button>
              <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap mx-1">
                <!-- <i class="far fa-check-square mr-2"></i> -->
                <i class="fas fa-square"></i>
                企業站</button>
              <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap mx-1">
                <!-- <i class="far fa-check-square mr-2"></i> -->
                <i class="fas fa-square"></i>
                大陸站</button>
            </div>
          </div>

          <!-- 課程狀態 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="address">
              課程狀態
            </label>
            <div class="w-full md:w-4/5 md:flex">
              <div class="relative text-sm w-full md:w-48 md:mr-2">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                  <option value="31">草稿</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex mt-3 md:mb-4 w-full lg:pt-6 justify-end px-2">
        <button class="button-main py-3 px-8 md:px-12 rounded w-full md:w-1/5 text-sm whitespace-no-wrap">
          建立
        </button>
      </div>
    </form>
    </section>
	</main>
</template>

<script>
/* eslint-disable no-console */
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  export default {
    name: "AddTalkClass",
    components: {
      DatePicker
    },
    data() {
      return {
        time: null,
        value1: null,
        value2: null,

        identityVal: null,
        identityOptions: [
          { name: '管理者', value: 'all' },
          { name: '主任/HR', value: 'all' },
          { name: '督導', value: 'all' },
          { name: '老師', value: 'all' },
          { name: '學生', value: 'all' }
        ],
        tagOptions: [
          { id: 0, name: 'Come to Live', isActive: false },
          { id: 1, name: 'Come to Live', isActive: false },
          { id: 2, name: 'Come to Live', isActive: true },
          { id: 3, name: 'Come to Live', isActive: false },
          { id: 4, name: 'Come to Live', isActive: false },
          { id: 5, name: 'Come to Live', isActive: false },
          { id: 6, name: 'Come to Live', isActive: false },
          { id: 7, name: 'Come to Live', isActive: true },
          { id: 8, name: 'Come to Live', isActive: false },
          { id: 9, name: 'Come to Live', isActive: false },
          { id: 10, name: 'Come to Live', isActive: false },
          { id: 11, name: 'Come to Live', isActive: false }
        ],
        isShow: false,
        params: {
          token: '123456798',
          name: 'avatar'
        },
        headers: {
          smail: '*_~'
        },
        imgDataUrl: ''
      }
    },
    mounted() {

    },
    methods: {
			cropSuccess(imgDataUrl) {
				console.log('-------- crop success --------')
				this.imgDataUrl = imgDataUrl
			},
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------')
				console.log(jsonData);
				console.log('field: ' + field);
			},
			cropUploadFail(status, field){
				// eslint-disable-next-line no-console
				console.log('-------- upload fail --------')
				console.log(status)
				console.log('field: ' + field)
			}
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  #fileInput {
    display: none !important;
  }
  .tagActive {
    border: 1px solid #808080;
    box-shadow: 0px 2px 2px 0px #00000040;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    color: black;
  }
  input[type="file"] {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
  }
  .custom-file-upload {
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    color: white;
    background: #4D4D4D;
    border-radius: 8px;
  }
  .mx-datepicker {
    width: 100%;
  }
</style>