
<template>
<main class="flex flex-wrap p-3 xl:p-6">
  <Title :title="'新增會議'" />

  <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
    <div class="flex">
      <!-- <ul class="flex cursor-pointer text-sm">
        <li class="py-2 mr-1">
          <button @click="$router.push({ name: 'meeting' })" class="px-4 py-2 bg-gray-900 text-white  text-sm rounded whitespace-no-wrap">
            <i class="fas fa-chevron-left mr-1"></i>{{ $t('return') }}
          </button>
        </li>
        <li class="py-2 px-6 tag flex items-center justify-center mx-1" :class="{ tagAct: tag === 0 }" @click="tag = 0">會議基本資料</li>
      </ul> -->
      <div class="py-2 mr-1">
        <button @click="$router.back(-1)" class="px-4 py-2 btn-main text-white  text-sm rounded whitespace-no-wrap">
          <i class="fas fa-chevron-left mr-1"></i>{{ $t('return') }}
        </button>
      </div>
      <TabComponent :tag="tag" :tagArr="tagArr" v-on:tagIdx="tagIdx" />
    </div>
    <div v-if="isData">
      <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto" v-if="tag === 0">
        <div class="w-full bg-white py-2 lg:p-4 flex flex-col justify-between leading-normal">
          <div class="flex flex-wrap textColorblack">

            <!-- 名稱 -->
            <div class="w-full px-3 mb-2 md:mb-6 md:flex">
              <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="nameEn">
                名稱
              </label>
              <div class="w-full md:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="nameEn" type="phone" placeholder="請輸入文字">
              </div>
            </div>

            <!-- 指定教室 -->
            <div class="w-full px-3 mb-2 md:mb-6 md:flex">
              <label class="md:w-1/12 md:pt-2 tracking-wide text-sm mb-2" for="address">
                指定教室
              </label>
              <div class="w-full md:w-11/12 md:flex">
                <div class="relative text-sm w-full">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">ROOM1</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- 課程日期/時間 -->
            <div class="md:flex w-full mb-2 md:mb-6 flex-wrap">
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

            <!-- 站別 -->
            <div class="w-full px-3 mb-2 md:mb-6 md:flex">
              <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="name">
                上架站別
              </label>
              <div class="w-full md:w-11/12 flex items-center flex-wrap">
                <button class="button-verified py-3 rounded text-sm whitespace-no-wrap mx-1 px-5 md:px-8 flex items-center">
                  <!-- <i class="far fa-check-square mr-2"></i> -->
                  <i class="fas fa-square text-xl mr-2"></i>
                  台灣站</button>
                <button class="button-verified py-3 rounded text-sm whitespace-no-wrap mx-1 px-5 md:px-8 flex items-center">
                  <!-- <i class="far fa-check-square mr-2"></i> -->
                  <i class="fas fa-square text-xl mr-2"></i>
                  企業站</button>
                <button class="button-verified py-3 rounded text-sm whitespace-no-wrap mx-1 px-5 md:px-8 flex items-center">
                  <!-- <i class="far fa-check-square mr-2"></i> -->
                  <i class="fas fa-square text-xl mr-2"></i>
                  大陸站</button>
              </div>
            </div>

            <div class="md:flex mt-3 md:mb-4 w-full lg:pt-6 justify-end px-2">
              <button class="btn-main text-white py-3 px-8 md:px-12 rounded text-sm whitespace-no-wrap">
                <i class="fas fa-check mr-1"></i> 建立
              </button>
            </div>
          </div>
        </div>

      </form>
      <div v-if="tag === 1">
        <drag_meeting />
      </div>
      <!-- <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto" v-if="tag === 1">

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
                        format='HH:mm'
                        value-type='format'
                        type='time'
                        placeholder="HH:mm"
                      ></date-picker>

                      <p class="text-xs whitespace-no-wrap mx-1 my-1">到</p>

                      <date-picker
                      class="w-1/2"
                        v-model="value"
                        :minute-step="30"
                        :hour-options="hours"
                        format='HH:mm'
                        value-type='format'
                        type='time'
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
            </div>
          </div>
        </div>

        <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-t border-gray-1">
          <div class="flex flex-wrap textColorblack">

            <div class="w-full px-3 py-3 md:flex mb-2">
              <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="email">
                影片
              </label>
              <div>
              </div>
              <div class="w-full md:w-9/12 flex items-center flex-wrap">
                <div class="w-full md:w-4/5 px-1 flex items-center">
                  <i class="fas fa-external-link-alt text-gray-1 mr-2"></i>
                  <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                    id="email" type="email" placeholder="章節標題">
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
              <div class="w-full md:w-2/12 flex items-center justify-center md:pl-2">
                <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                  <i class="fas fa-check"></i>儲存</button>
                <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                  <i class="fas fa-times"></i>取消修改</button>
              </div>

            </div>
          </div>
        </div>

        <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-t border-gray-1">
          <div class="flex flex-wrap textColorblack">

            <div class="w-full px-3 py-3 md:flex mb-2">
              <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="email">
                單字
              </label>
              <div>
              </div>
              <div class="w-full md:w-9/12 flex items-center flex-wrap">
                <div class="w-full md:w-2/5 px-1 flex items-center">
                  <span class="mr-2">1.</span>
                  <div class="w-full">
                    <input class="md:mb-2 w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="英文單字">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="[音標]">
                  </div>
                </div>
                <div class="w-full md:w-1/5 px-1 flex items-center">
                  <div class="relative text-sm w-full md:w-48 md:mr-2">
                    <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                      >
                      <option value="31">n.(名詞)</option>
                      <option value="31">n.(名詞)</option>
                      <option value="31">n.(名詞)</option>
                    </select>
                    <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-2/5 px-1 flex items-center">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="中文標題">
                </div>
              </div>
              <div class="w-full md:w-2/12 flex items-center justify-center md:pl-2">
                <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                  <i class="fas fa-check"></i>儲存</button>
                <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
                  <i class="fas fa-times"></i>取消修改</button>
              </div>
            </div>
            <div class="w-full px-3 py-3 md:flex mb-2">
              <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 opacity-0" for="email">
                單字
              </label>
              <div class="w-full md:w-11/12 flex items-center flex-wrap">
                <div class="w-full md:w-4/5 px-1 flex items-center">
                  <i class="fas fa-external-link-alt text-gray-1 mr-2"></i>
                  <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                    id="email" type="email" placeholder="補充說明url">
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
            </div>
          </div>
        </div>

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
      </form> -->
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
  import Title from '@/components/Title'
  import TabComponent from '@/components/Tab'
    import drag_meeting from '@/components/modules/drag_meeting'
  export default {
    name: 'AddMeeting',
    components: {
      DatePicker,
      NoData,
      Title,
      TabComponent,
      drag_meeting
    },
    data () {
      return {
        isData: true,

        tag: 1,
        tagArr: [
          { name: '會議基本資料', role: '' },
          { name: '會議通知名單', role: '' }
        ],

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
      tagIdx (tagIdx) {
        this.tag = tagIdx
      }
    }
  }
</script>
<style src='vue-multiselect/dist/vue-multiselect.min.css'></style>
<style>
  #fileInput {
    display: none !important;
  }
  .tag {
    background: #CCCCCC;
    color: #808080;
  }
  .tagAct {
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
    background: #0F455C;
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
</style>