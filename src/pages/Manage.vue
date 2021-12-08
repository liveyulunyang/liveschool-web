
<template>
	<main class="p-6" id="manage">
    <Title v-if="$route.name === 'account_add'" :title="'新增帳號'" />
    <Title v-if="$route.name === 'account_edit'" :title="'編輯帳號資料'" />

    <div class="flex w-full mt-4 items-center">
      <div class="mr-6">
        <Button @click="$router.back(-1)" class="px-4 py-2 btn-main text-white  text-sm mx-1 rounded whitespace-no-wrap">
          <i class="fas fa-chevron-left mr-1"></i>{{ $t('return') }}
        </Button>
      </div>
      <div class="flex items-center mr-2 w-2/5 lg:w-auto">
        <label class="typo__label whitespace-no-wrap mr-2 hidden lg:block">選擇帳號角色</label>
        <FilterModal :showItems="showItems" />
      </div>
      <div class="flex justify-between mx-1">
        <TabComponent :tag="tag" :tagArr="tagArr" v-on:tagIdx="tagIdx" />
      </div>
    </div>

    <section v-if="tag === 0" class="w-full bg-white min-h-screen p-2 md:p-3 lg:p-6 max-w-8xl mx-auto">
      <div class="flex w-full flex-wrap">
        <div class="w-full lg:w-1/5">
          <div class="h-40 w-40 relative mx-auto">
            <a class="btn absolute right-0 bottom-0 cursor-pointer h-8 w-8 rounded-full bg-gray-900 flex justify-center items-center border-2 border-white" @click="isShow = !isShow"><i class="fas fa-camera text-base text-white"></i></a>
            <div class="mugShot-img">
              <img :src="require('@/assets/img/teacherDefault.svg')" alt="" class="object-contain block">
            </div>
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
              <a class="font-bold py-1 bg-white border border-gray-500 text-gray-0 text-sm rounded-lg whitespace-no-wrap block text-gray-500 cursor-pointer"
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
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="email">
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
              <div class="relative w-full md:w-1/6">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
                  >
                  <option value="">+886</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <input class="w-full md:w-4/6 appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
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
          <div class="w-full px-3 mb-2 md:mb-4 md:flex">
            <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm" for="password">
              備注
            </label>
            <input class="md:w-4/5 appearance-none block w-full  text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
              id="text" type="text" placeholder="" maxlength="30"
              autocomplete="old-password" name="text">
          </div>
        </div>
      </div>

      <div class="md:flex mt-3 md:mb-4 w-full lg:pt-6 justify-end px-2">
        <button class="btn-main text-white py-3 px-8 md:px-12 rounded w-full md:w-1/5 text-sm whitespace-no-wrap">
          建立
        </button>
      </div>
    </form>
    </section>

    <section v-if="tag === 1" class="w-full bg-white min-h-screen p-2 md:p-3 lg:p-6 max-w-8xl mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full flex flex-wrap mb-6 lg:mb-8" v-for="(item, index) in teachingTime" :key="index">
          <div class="bg-blue-main-light py-2 w-full lg:w-auto lg:px-24 leading-loose flex items-center justify-center mb-3 lg:mb-0">
            <p class="text-center">{{ item.title }}</p>
          </div>
          <!-- <div class="w-full lg:flex-1 mb-3 lg:mb-0">
            <div class="w-full px-3 md:flex">
              <label class="md:pt-2 md:text-sm md:w-1/3 tracking-wide text-sm mb-2 font-bold" for="name">
                開課時段
              </label>
              <div class="relative text-sm w-full md:w-2/3">
                <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
                  >
                  <option value="">上午</option>
                  <option value="">下午</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div> -->
          <div class="w-full lg:flex-1 mb-3 lg:mb-0">
            <div class="w-full px-3 md:flex">
              <label class="md:pt-2 md:text-sm md:w-1/3 tracking-wide text-sm mb-2 font-bold" for="name">
                開始時間
              </label>
              <div class="w-full md:w-2/3">
                <date-picker
                  class="w-full"
                  v-model="item.startTime"
                  :minute-step="30"
                  :hour-options="starthours"
                  format="HH:mm"
                  value-type="format"
                  type="time"
                  placeholder="HH:mm"
                ></date-picker>
              </div>
            </div>
          </div>
          <div class="w-full lg:flex-1 mb-3 lg:mb-0">
            <div class="w-full px-3 md:flex">
              <label class="md:pt-2 md:text-sm md:w-1/3 tracking-wide text-sm mb-2 font-bold" for="name">
                結束時間
              </label>
              <div class="w-full md:w-2/3">
                <date-picker
                  class="w-full"
                  v-model="item.endTime"
                  :minute-step="30"
                  :hour-options="endhours"
                  format="HH:mm"
                  value-type="format"
                  type="time"
                  placeholder="HH:mm"
                ></date-picker>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="md:flex mt-3 md:mb-4 w-full lg:pt-6 justify-end px-2">
        <button class="btn-main text-white py-3 px-8 md:px-12 rounded w-full md:w-1/5 text-sm whitespace-no-wrap">
          <i class="fas fa-check mr-1"></i>儲存
        </button>
      </div>
    </section>

    <section v-if="tag === 2" class="w-full bg-white min-h-screen p-2 md:p-3 lg:p-6 max-w-8xl mx-auto">
      <div class="flex">
        <div class="bg-white py-8 px-4 md:px-8 leading-loose flex flex-col justify-between">
          <div>
            <h6 class="text-xl font-bold">選擇日期</h6>
            <CalenderDot />
          </div>
          <div class="mb-8 md:w-1/2 lg:w-full">
            <h6 class="text-xl font-bold">選擇時段</h6>
            <div class="relative text-sm w-full">
              <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
                >
                <option value="full">全天</option>
                <option value="morning">半天</option>
                <option value="afternoon">單時段</option>
              </select>
              <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button @click="step = 2" class="mx-4 px-6 py-1 bg-gray-900 text-white  rounded whitespace-no-wrap">
              停課
            </button>

            <button @click="step = 4" class="mx-4 px-6 py-1 bg-gray-400 text-white  rounded whitespace-no-wrap">
              取消
            </button>
          </div>
        </div>
        <div class="px-2 w-full hidden lg:block">
          <FullCalendar :options="calendarOptions" />
        </div>
      </div>
    </section>
	</main>
</template>

<script>
/* eslint-disable no-console */
  import myUpload from 'vue-image-crop-upload/upload-2.vue'
  import FilterModal from '@/components/FilterModal'
    import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import CalenderDot from '@/components/modules/CalenderDot'
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import Title from '@/components/Title'
  import TabComponent from '@/components/Tab'
  export default {
    name: 'Manage',
    components: {
      FilterModal,
      myUpload,
      DatePicker,
      CalenderDot,
      FullCalendar,
      Title,
      TabComponent
    },
    data () {
      return {
        tag: 0,
        tagArr: [
          { name: '基本資料', role: '' },
          { name: '授課時間', role: '' },
          { name: '停課時間', role: '' }
        ],

        showItems: {
          role: true,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: false,
          search: false,
          sync: false
        },
        tagOptions: [
          { id: 0, name: 'Come to Live', isActive: false },
          { id: 1, name: '自然發音', isActive: false },
          { id: 2, name: '生活英語', isActive: true },
          { id: 3, name: '商業英語', isActive: false },
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
        imgDataUrl: '',

        starthours: Array.from({ length: 13 }).map((_, i) => i + 8),
        endhours: Array.from({ length: 13 }).map((_, i) => i + 9),
        teachingTime: [
          { title: '星期一', timePeriod: null, startTime: '14:00', endTime: '21:00' },
          { title: '星期二', timePeriod: null, startTime: '14:00', endTime: '21:00' },
          { title: '星期三', timePeriod: null, startTime: '14:00', endTime: '21:00' },
          { title: '星期四', timePeriod: null, startTime: '14:00', endTime: '21:00' },
          { title: '星期五', timePeriod: null, startTime: '14:00', endTime: '21:00' },
          { title: '星期六', timePeriod: null, startTime: '14:00', endTime: '21:00' },
          { title: '星期日', timePeriod: null, startTime: '14:00', endTime: '21:00' }
        ],

        calendarOptions: {
          plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin ],
          initialView: 'timeGridWeek',
          weekends: true,
          slotDuration: '00:30:00',
          slotMinTime: '9:00:00',
          slotMaxTime: '21:00:00',
          events: [
            {
              title: 'test',
              start: '2021-10-28T10:30:00',
              end: '2021-10-28T11:00:00',
              extendedProps: {
                department: 'BioChemistry'
              },
              description: 'Lecture'
            },
            {
              title: 'test',
              start: '2021-10-28T11:00:00',
              end: '2021-10-28T11:30:00',
              extendedProps: {
                department: 'BioChemistry'
              },
              description: 'Lecture'
            },
            {
              title: '此時段已預約:99999',
              start: '2021-10-28T14:00:00',
              end: '2021-10-28T14:30:00',
              extendedProps: {
                department: 'BioChemistry'
              },
              description: 'Lecture',
              className: 'isBooked'
            }
          ]
        }
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
#manage {
  .mx-input {
    height: 43px;
  }
  .mugShot-img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
  }
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
  .fc-view-harness {
    height: 700px !important;
  }
  .fc-v-event {
    border-radius: 0;
    background-color: rgb(167, 167, 167) !important;
    border: none;
    border-left: 4px solid #565656;
    box-shadow: none !important;
    .fc-event-main {
      color: black !important;
      font-weight: 900;
    }

  }
  .isBooked {
    background: rgb(212, 212, 212) !important;
    border-left: 4px solid #808080;
    .fc-event-time {
      display: none;
    }
    .fc-event-main {
      color: #999999 !important;
      font-weight: 900;
    }
  }
}

</style>