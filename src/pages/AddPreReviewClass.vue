
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

        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-plus"></i>新增章節
            </Button>
          </li>
        </ul>
      </div>
      <div v-if="isData">
        <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">

          <!-- 新增學習內容 -->
          <TypeContent class="mb-2" />

          <!-- 新增單字 -->
          <Word class="mb-2" />

          <!-- 新增片語 -->
          <Phrase class="mb-2" />

          <!-- 新增句子重組 -->
          <Reorganization class="mb-2" />

          <!-- 新增選擇題 -->
          <Choice class="mb-2" />

        </form>
      </div>

      <NoData v-else />

    </section>

	</main>
</template>

<script>
/* eslint-disable no-console */
  // import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import NoData from '@/components/NoData'
  import Word from '@/components/ctl_class/Word'
  import Choice from '@/components/ctl_class/Choice'
  import Reorganization from '@/components/ctl_class/Reorganization'
  import Phrase from '@/components/ctl_class/Phrase'
  import TypeContent from '@/components/ctl_class/TypeContent'
  export default {
    name: "AddTalkClass",
    components: {
      // DatePicker,
      NoData,
      Word,
      Choice,
      Phrase,
      Reorganization,
      TypeContent
    },
    data () {
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