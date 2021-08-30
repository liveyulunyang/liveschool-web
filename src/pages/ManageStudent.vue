
<template>
	<main class="flex flex-wrap p-6">
		<h1 class="text-2xl leading-none text-black-1 mr-2">新增帳號</h1>

    <div class="flex w-full mt-8 items-center">
      <div class="mr-6">
        <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
          <i class="fas fa-chevron-left"></i>返回
        </Button>
      </div>
      <div class="flex items-center">
        <label class="typo__label whitespace-no-wrap mr-2">選擇帳號角色</label>
          <Multiselect
            v-model="identityVal"
            :options="identityOptions"
            :multiple="false"
            :close-on-select="false"
            :clear-on-select="false"
            :show-labels="false"
            track-by="name" label="name"
            placeholder="老師">
          </Multiselect>
      </div>
    </div>

    <section class="w-full bg-white mt-4 min-h-screen p-6">

    <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">
      <div class="w-full bg-white rounded py-2 lg:p-4 flex flex-col justify-between leading-normal">
        <div class="flex flex-wrap textColorblack">


          <!-- 信箱 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="email">
              電子信箱
            </label>
            <div class="w-full md:w-3/5">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="email" type="email" placeholder="">
            </div>
            <div class="w-full md:w-1/5 flex items-center justify-center md:pl-2">
              <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap"><i class="far fa-check-square mr-2"></i>Verified</button>
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

          <!-- 手機 -->
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="mobile">
              行動電話
            </label>
            <div class="w-full md:w-3/5">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="mobile" type="phone" placeholder="">
            </div>
            <div class="w-full md:w-1/5 flex items-center justify-center md:pl-2">
              <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap"><i class="far fa-check-square mr-2"></i>Verified</button>
            </div>
          </div>

          <!-- 分區 -->
          <!-- <div class="w-full px-3 mb-2 md:mb-4 md:flex">
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
          </div> -->

          <!-- 分校 -->
          <!-- <div class="w-full px-3 mb-2 md:mb-4 md:flex">
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
          </div> -->

          <!-- 國家 -->
          <!-- <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="country">
              國家
            </label>
            <div class="w-full md:w-4/5">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="country" type="text" placeholder="">
            </div>
          </div> -->

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
  import Multiselect from 'vue-multiselect'
  export default {
    name: 'Manage',
    components: {
      Multiselect,
    },
    data() {
      return {
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
</style>