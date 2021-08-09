
<template>
	<main class="flex flex-wrap p-3 xl:p-6">
		<h1 class="text-2xl leading-none text-black-1 mr-2">CTL測試課程 / <span v-if="$route.params.type === 'preview'">課前預習</span><span v-if="$route.params.type === 'review'">課後預習</span></h1>

    <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
      <div class="flex justify-between">
        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left"></i>返回
            </Button>
          </li>
          <li class='ml-2'>
            <div class="relative text-sm w-full md:w-48 md:mr-2">
              <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="type"
                >
                <option value="all">全類型</option>
              </select>
              <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </li>
        </ul>

        <ul class='flex cursor-pointer text-sm' v-if="tag === 1">
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-plus"></i>新增章節
            </Button>
          </li>
        </ul>
      </div>
      <div v-if="isData">
        <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">

          <!-- Chapter -->
          <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal mb-1">
            <div class="flex flex-wrap textColorblack">

              <div class="w-full px-3 py-3 md:flex mb-2">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="email">
                  Chapter 1
                </label>
                <div>
                </div>
                <div class="w-full md:w-8/12 flex items-center flex-wrap">
                  <div class="w-full md:w-1/2 px-1">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="章節標題">
                  </div>

                  <div class="w-full md:w-1/2 px-1">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="副標題">
                  </div>
                </div>
                <!-- <div class="w-full md:w-3/12 flex items-center justify-center md:pl-2">
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    儲存</button>
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-times"></i>取消修改</button>
                </div> -->
                <div class="w-full md:w-3/12 flex items-center justify-center md:pl-2">
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-plus"></i>新增單元
                  </button>
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <a href="" class="block px-1">
                    <i class="fas fa-bars mb-0"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Unit -->
          <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal">
            <div class="flex flex-wrap textColorblack">

              <div class="w-full px-3 py-3 md:flex mb-2">
                <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="email">
                  Unit 1
                </label>
                <div>
                </div>
                <div class="w-full md:w-9/12 flex items-center flex-wrap">
                  <div class="w-full md:w-2/5 px-1">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="章節標題">
                  </div>

                  <div class="w-full md:w-3/5 px-1 md:flex items-center">

                    <div>
                      <p class="text-xs whitespace-no-wrap mx-1 my-1 text-left">課程日期</p>
                      <date-picker
                        v-model="value1"
                        format="YYYY-MM-DD"
                        type="date"
                        placeholder="Select date"
                      ></date-picker>
                    </div>

                    <div class="flex flex-wrap ml-2">
                      <p class="text-xs whitespace-no-wrap mx-1 my-1 text-left">課程時間</p>
                      <div class="flex">
                        <p class="text-xs whitespace-no-wrap mx-1 my-1 text-left">從</p>
                        <date-picker
                        class="w-1/2"
                          v-model="value"
                          :minute-step="30"
                          :hour-options="hours"
                          format="HH:mm"
                          value-type="format"
                          type="time"
                          placeholder="HH:mm"
                        ></date-picker>

                        <p class="text-xs whitespace-no-wrap mx-1 my-1">到</p>

                        <date-picker
                        class="w-1/2"
                          v-model="value"
                          :minute-step="30"
                          :hour-options="hours"
                          format="HH:mm"
                          value-type="format"
                          type="time"
                          placeholder="HH:mm"
                        ></date-picker>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="w-full md:w-2/12 flex items-center justify-center md:pl-2">
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-check"></i>儲存</button>
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-times"></i>取消修改</button>
                </div>
                <!-- <div class="w-full md:w-1/5 flex items-center justify-center md:pl-2">
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-plus"></i>新增單元
                  </button>
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <a href="" class="block px-1">
                    <i class="fas fa-bars mb-0"></i>
                  </a>
                </div> -->
              </div>
            </div>
          </div>

          <!-- 新增單字 -->
          <Word />

          <!-- 新增片語 -->
          <Phrase />

          <!-- 新增句子重組 -->
          <Reorganization />

          <!-- 新增選擇題 -->
          <Choice />

          <!-- 新增學習內容 -->
          <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-t border-gray-1">
            <div class="flex flex-wrap textColorblack">
              <div class="w-full px-3 py-3 md:flex mb-2">
                <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="email">
                  新增學習內容
                </label>
                <div>
                </div>
                <div class="w-full md:w-4/5 flex items-center">
                  <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
                    影片
                  </button>
                  <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
                    單字
                  </button>
                  <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
                    片語
                  </button>
                  <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
                    必備句
                  </button>
                  <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
                    選擇題
                  </button>
                </div>

              </div>
            </div>
          </div>

        </form>
      </div>

      <NoData v-else />

    </section>
	</main>
</template>

<script>
/* eslint-disable no-console */
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import NoData from '@/components/NoData'
  import Word from '@/components/ctl_class/Word'
  import Choice from '@/components/ctl_class/Choice'
  import Reorganization from '@/components/ctl_class/Reorganization'
  import Phrase from '@/components/ctl_class/Phrase'
  export default {
    name: "AddTalkClass",
    components: {
      DatePicker,
      NoData,
      Word,
      Choice,
      Phrase,
      Reorganization
    },
    data() {
      return {
        isData: true,

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
  .tag {
    background: #CCCCCC;
    color: #808080;
  }
  .tagActive {
    background: white;
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
  .class__type_btn {
    color: #4D4D4D;
    border: 1px solid gray;
    transition: .3s;
  }
  .class__type_btn:hover {
    background: #4D4D4D;
    color: #ffffff;
    border: 1px solid gray;
  }


input[type="radio"]:checked + label span {
  background-color: gray;
}

</style>