
<template>
	<main class="flex flex-wrap p-6">
		<h1 class="text-2xl leading-none text-black-1 mr-2">新增帳號</h1>

    <div class="flex w-full mt-8 items-center">
      <div class="mr-6">
        <Button @click="$router.back(-1)" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm mx-1 rounded whitespace-no-wrap">
          <i class="fas fa-chevron-left mr-1"></i>返回
        </Button>
      </div>
      <div class="flex items-center">
        <label class="typo__label whitespace-no-wrap mr-2">選擇帳號角色</label>
        <FilterModal :showItems="showItems" />
      </div>
    </div>

    <section class="w-full bg-white mt-4 min-h-screen p-2 md:p-3 lg:p-6 max-w-8xl mx-auto">
      <div class="flex w-full flex-wrap">
        <div class="w-full lg:w-1/5">
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
        </div>
        <div class="w-full lg:w-4/5">
          <h5 class="text-left text-sm px-2 mb-2 font-bold">課程標籤(可多選)</h5>
          <div class="flex flex-wrap w-full">
            <div class="w-1/2 md:w-1/3 lg:w-1/4 py-1 px-2" v-for="(item, index) in tagOptions" :key="index">
              <a class="py-2 bg-white border border-gray-500 text-gray-0 text-sm rounded whitespace-no-wrap block text-gray-500 cursor-pointer"
                :class="{ tagActive: item.isActive }" >{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>

    <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">
      <div class="w-full bg-white rounded py-2 lg:p-4 flex flex-col justify-between leading-normal">
        <div class="flex flex-wrap textColorblack">


          <!-- 信箱 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="text-left md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="email">
              電子信箱
            </label>
            <div class="w-full md:w-4/5 flex flex-wrap">
              <input class="w-full md:w-5/6 appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="email" type="email" placeholder="">
              <div class="w-full md:w-1/6 flex items-center justify-center md:pl-1 lg:pl-2 mt-1 md:mt-0">
                <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap">
                  <!-- <i class="far fa-check-square mr-1 lg:mr-2 text-lg lg:text-xl"></i> -->
                  <i class="fas fa-square mr-1 lg:mr-2 text-lg lg:text-xl"></i>
                  Verified
                </button>
              </div>
            </div>
          </div>

          <!-- 姓名 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="name">
              姓名
            </label>
            <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="name" type="text" placeholder="請輸入姓名" maxlength="15">
          </div>

          <!-- 英文姓名 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="nameEn">
              英文姓名
            </label>
            <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="nameEn" type="text" placeholder="請輸入英文姓名" maxlength="15">
          </div>

          <!-- 行動電話 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="mobile">
              行動電話
            </label>
            <div class="w-full md:w-4/5 flex flex-wrap">
              <input class="w-full md:w-5/6 appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="mobile" type="phone" placeholder="">
              <div class="w-full md:w-1/6 flex items-center justify-center md:pl-2 lg:pl-2 mt-1 md:mt-0">
                <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap">
                  <!-- <i class="far fa-check-square mr-1 lg:mr-2 text-lg lg:text-xl"></i> -->
                  <i class="fas fa-square mr-1 lg:mr-2 text-lg lg:text-xl"></i>
                  Verified
                </button>
              </div>
            </div>

          </div>

          <!-- 分區 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="address">
              地區縣市
            </label>
            <div class="w-full md:w-4/5 md:flex">
              <div class="relative text-sm w-full md:w-32 md:mr-2">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                  <option value="31">選擇分區</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="address" type="phone" placeholder="請輸入縣市">
            </div>
          </div>

          <!-- 分校 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="school">
              分校
            </label>
            <div class="w-full md:w-4/5 md:flex">
              <div class="relative text-sm w-full md:w-32 md:mr-2">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                  <option value="31">選擇分校</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="school" type="phone" placeholder="其他請輸入">
            </div>
          </div>

          <!-- 國家 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="country">
              國家
            </label>
            <div class="w-full md:w-4/5">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="country" type="text" placeholder="">
            </div>
          </div>

          <!-- 經歷 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="experience">
              經歷
            </label>
            <div class="w-full md:w-4/5">
              <textarea id="experience"
                class="w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none">
              </textarea>
            </div>
          </div>

          <!-- 介紹音檔 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="upload">
              介紹音檔
            </label>
            <div class="w-full md:w-4/5 flex items-center">
              <a href="" class="block px-3 mr-3">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fas fa-upload"></i>
                </label>
                <input id="file-upload" type="file"/>
              </a>
              <div class="w-full">
                <audio controls class="w-full">
                  <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3" type="audio/ogg">
                    Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>

          <!-- 班主任 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="director">
              班主任
            </label>
            <div class="w-full md:w-4/5">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="director" type="text" placeholder="">
            </div>
          </div>

          <!-- 管轄區域 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="address">
              管轄區域
            </label>
            <div class="w-full md:w-4/5 md:flex">
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

          <!-- 密碼 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm" for="password">
              密碼
            </label>
            <input class="md:w-4/5 appearance-none block w-full  text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
              id="password" type="password" placeholder="請輸入8碼至15碼英數字"
              autocomplete="old-password" maxlength="15" name="firstShoppingPwd">
          </div>

          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm" for="password_check">
              確認密碼
            </label>
            <input class="md:w-4/5 appearance-none block w-full  text-sm border border-gray-500 rounded py-3 px-4 eading-tight focus:outline-none focus:bg-white focus:border-gray-900"
              id="password_check" type="password" placeholder="再次輸入密碼"
              autocomplete="check-password" maxlength="15">
          </div>

          <!-- 其他 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="other">
              其他
            </label>
            <div class="w-full md:w-4/5 md:flex justify-start">
              <button class="button-verified py-3 px-8 md:px-12 rounded w-full md:w-auto text-sm">
                <i class="far fa-check-square mr-1 lg:mr-2 text-xl"></i>promote
              </button>
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
  import myUpload from 'vue-image-crop-upload/upload-2.vue'
  import FilterModal from '@/components/FilterModal'
  export default {
    name: 'Manage',
    components: {
      FilterModal,
      myUpload
    },
    data () {
      return {
        showItems: {
          role: true,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: false,
          serach: false,
          sync: false
        },
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
    border: 1px solid #808080 !important;
    box-shadow: 0px 2px 2px 0px #00000040;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    color: black !important;
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
</style>