<template>
  <main class="flex items-start" id="ApplyAdd">
    <div class="flex flex-col p-6 w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">新增報名</h1>
        </div>
      </div>
      <div class="flex w-full mb-4">
        <a @click="$router.back(-1)" class="px-4 py-2 bg-gray-900 text-white text-sm rounded whitespace-no-wrap hidden lg:block">
          <i class="fas fa-chevron-left mr-1"></i>取消
        </a>
        <nav class="font-bold w-full">
          <ul class="lg:flex" id="progressbar">
            <li :class="{ active: step === 0 }"><p>預約需知</p></li>
            <li :class="{ active: step === 1 }"><p>選擇課程</p></li>
            <li :class="{ active: step === 2 }"><p>上課名單</p></li>
            <li :class="{ active: step === 3 }"><p>設定與其他問題</p></li>
          </ul>
        </nav>
      </div>
      <div class="content w-full">
        <div v-if="step === 0">
          <div class="bg-white text-left py-8 px-4 md:px-8 xl:px-12 leading-loose font-semibold text-lg mb-4 ">
            <h6 class="text-xl mb-3 font-bold">班主任線上報名LiveTeacher需知</h6>
            <p>1. 課程提出預約後，系統會於3個工作日(不含六、日)完成審核。</p>
            <p>2. LiveTeacher課程為另外計費，不使用點數系統。</p>
            <p>3. 線上課程的申請核准，依提出申請的先後順序來安排，若未符合申請(例如: 教室已滿…等)，此預約單將「未通過」。</p>
            <p>4. 預約課程若「狀態」仍顯示「審核中」，主任可以取消預約，一旦課程審核完畢，恕不任意修改。</p>
            <p>5. 班主任個人資料如正確，課程審核不論「成功」或「未通過」，班主任皆會收到簡訊和郵件通知。</p>
            <p>6. 課程師資、時間之變動，總公司保有調配之權利。</p>
          </div>
          <div class="flex justify-center items-center">

            <label class="control control--checkbox mx-4">我同意
              <input type="checkbox" checked="checked"/>
              <div class="control__indicator"></div>
            </label>

            <button @click="step = 1" class="mx-4 px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              下一步
            </button>
          </div>
        </div>
        <div v-if="step === 1">
          <div class="bg-white text-left py-4 xl:py-8 px-4 md:px-8 xl:px-12 leading-loose font-semibold text-lg mb-4 flex flex-wrap items-center">
            <h6 class="text-xl font-bold">選擇課程</h6>
            <div class="relative w-auto mx-2 text-sm">
              <select class="block appearance-none py-3 px-4 pr-8 rounded leading-tight focus:outline-none border" id="setRole"
                >
                <option value="admin">課程主題</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div class="relative w-auto mx-2 text-sm">
              <select class="block appearance-none py-3 px-4 pr-8 rounded leading-tight focus:outline-none border" id="setRole"
                >
                <option value="admin">主題分類</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
            <div class="flex border mx-2">
              <input type="text" placeholder="輸入關鍵字搜尋" name="search" class="py-2 border-0 focus:outline-none w-32 text-sm">
              <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
            </div>
            <a href="" class="block ml-2">
              <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
            </a>
          </div>
          <div class="overflow-y-scroll h-screen-content mb-4">
            <div class="bg-white text-left py-2 px-4 xl:px-8 leading-loose font-semibold mb-4" v-for="n in 10" :key="n">
              <div class="flex flex-wrap py-2 items-center">
                <div class="w-4/5 lg:w-auto pr-2">
                  <img src="@/assets/img/classImg.png" alt="" class="object-contain max-w-full">
                </div>
                <div class="w-4/12 xl:flex text-left">
                    <div class="xl:w-1/2">CTL口說班</div>
                    <div class="xl:w-1/2">生活英語</div>
                </div>
                <div class="w-4/12 xl:flex text-left">
                    <div class="xl:w-1/2">兒童生活英語</div>
                    <div class="xl:w-1/2">CTL口說升級測驗Starter</div>
                </div>
                <div class="w-4/5 lg:w-auto flex items-center justify-end">
                  <button
                    class="text-primary-normal hover:text-black-1  hover:bg-gray-600"
                    >
                    <img src="@/assets/img/icons/more.svg" alt="" class="object-contain w-full">
                  </button>
                  <button class="ml-2 xl:ml-6 px-3 py-1 bg-gray-900 text-white hover:bg-gray-700 text-sm rounded whitespace-no-wrap">
                    選擇
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button @click="step = 0" class="mx-4 px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              上一步
            </button>

            <button @click="step = 2" class="mx-4 px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              下一步
            </button>
          </div>
        </div>
        <div v-if="step === 2">
          <Drag class="mb-4" />
          <div class="flex justify-center items-center">
            <button @click="step = 1" class="mx-4 px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              上一步
            </button>

            <button @click="step = 3" class="mx-4 px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              下一步
            </button>
          </div>
        </div>
        <div v-if="step === 3">
          <div class="bg-white text-left py-8 px-4 md:px-8 xl:px-12 leading-loose font-semibold text-lg mb-4 h-screen-50">
            <h6 class="text-xl mb-3 font-bold">設定與其他問題</h6>

            <div class="flex flex-wrap mb-6">
              <div class="w-full md:w-1/12 md:text-right">
                <p>設定</p>
              </div>
              <div class="w-full md:w-11/12 px-3">
                <label class="control control--checkbox mb-0 flex items-center">
                  <input type="checkbox" checked="checked"/>主任是否要收到開課通知？
                  <div class="control__indicator"></div>
                </label>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/12 md:text-right">
                <p>其他問題</p>
              </div>
              <div class="w-full md:w-11/12 px-3">
                <textarea id="otherProb" placeholder=""
                  class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
                </textarea>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <button @click="step = 2" class="mx-4 px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
              上一步
            </button>
          </div>
        </div>

        <!-- <BookingModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" /> -->
      </div>
    </div>
    <div class="bg-white h-full py-5 relative shadow-lg form-right hidden lg:block" :class="{ formOpen: isShowForm }">
      <div class="absolute bg-white booking-btn px-3 py-2 text-sm cursor-pointer whitespace-no-wrap" @click="isShowForm = !isShowForm">
        <i class="fas fa-arrow-right mr-1"></i>預約資料預覽
      </div>
      <form>
        <div class="h-screen-form overflow-y-scroll overflow-x-hidden mb-4 border-b whitespace-no-wrap">
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="booker">
              預約者
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="booker" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="branch">
              校別
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="branch" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="type">
              課程主題
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="type" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="classname">
              主題分類
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="classname" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="type">
              課程名稱
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="type" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="classtype">
              課程日期
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="classtype" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="classtype">
              課程時間從
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500
              focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="classtype" type="text" placeholder="">
                <span class="text-sm mx-2">到</span>
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="classtype" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="classtype">
              上課學生
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="classtype" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right" for="classtype">
              問題
            </label>
            <div class="w-full md:w-4/5 flex items-center px-2">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="classtype" type="text" placeholder="">
            </div>
          </div>
          <div class="w-full px-3 mb-2 md:mb-4 md:flex items-center">
            <label class="md:w-1/5 tracking-wide text-sm mb-2 text-right">
              設定
            </label>
            <div class="w-full md:w-4/5 px-2">
              <div class="flex items-center mb-2">
                <label class="control control--checkbox">主任是否要收到開課通知？
                  <input type="checkbox" checked="checked" />
                  <div class="control__indicator"></div>
                </label>
              </div>
              <div class="flex items-center">
                <label class="control control--checkbox">是否不開放公開預約？
                  <input type="checkbox" checked="checked" />
                  <div class="control__indicator"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="w-full px-3 mb-2 md:mb-4 flex justify-end">
          <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-times mr-1"></i>駁回</a>
          <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white" @click="close()"><i class="fas fa-check mr-1"></i>通過</a>
        </div> -->
        <div class="w-full px-3 mb-2 md:mb-4 flex justify-center">
          <a class="px-4 py-2 bg-gray-900 m-1 cursor-pointer text-white block w-full" @click="addBooking()"><i class="fas fa-check mr-1"></i>送出</a>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
  // import CalenderDot from '@/components/modules/CalenderDot'
  import Drag from '@/components/modules/drag'
  // import Calender from '@/components/modules/CalenderSimple'
import '@fullcalendar/core/vdom' // solves problem with Vite
// import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// import BookingModal from '@/components/popup/BookingModal'
  export default {
    name: "AddBooking",
    components: {
      // Calender,
      // CalenderDot,
      // FullCalendar,
      Drag
      // BookingModal
    },
    data () {
      return {
        isShowForm: false,
        step: 0,
        showfirstModal: false
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      openModal () {
        this.showfirstModal = true
      },
      closeModal (closeModal) {
        this.showfirstModal = closeModal
      },
      submit (submit) {
        this.$router.push({ name: submit })
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
#ApplyAdd {
  .h-screen-50 {
    height: calc(100vh - 400px);
  }
  .h-screen-content {
    height: calc(100vh - 450px);
  }
  .h-screen-form {
    height: calc(100vh - 200px);
  }
  .w-1-7 {
    width: calc(100% / 7);
  }
  .booking-btn {
    left: -124px;
    top: 20px;
  }
  nav {
    ul {
      li {
        list-style-type: none;
        text-transform: uppercase;
        font-size: 14px;
        width: calc(100%/4);
        position: relative;
        letter-spacing: 1px;
        p {
          color: rgb(201, 201, 201);
        }
        &:before {
          content: '';
          width: 10px;
          height: 10px;
          line-height: 26px;
          display: block;
          background: rgb(201, 201, 201);
          border-radius: 25px;
          margin: 0 auto 10px auto;
        }
        &:not(:first-child):after {
          content: '';
          width: 90%;
          height: 2px;
          background: rgb(201, 201, 201);
          position: absolute;
          left: -45%;
          top: 4px;
        }
        @media (max-width: 1023px) {
          width: 100%;
          margin-bottom: 20px;
          p {
            text-align: left;
            margin-left: 30px;
          }
          &:before {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            display: block;
            border-radius: 25px;
            margin: 0;
            top: 4px;
            z-index: 2;
          }
          &:not(:last-child):after {
            content: '';
            width: 2px;
            height: 40px;
            position: absolute;
            left: 4px;
            top: 3px;
            background: rgb(201, 201, 201);
          }
          &:last-child:after {
            content: none;
          }
        }
      }
      li.active {
        p {
          color: rgb(80, 80, 80);
        }
        &:before {
          background: rgb(80, 80, 80);
        }
      }
    }

  }
  .form-right {
    width: 0;
    // transform: translateX(100%);
    transition: .3s;
    a {
      display: none !important;
    }
  }
  .formOpen {
    width: 25%;
    a {
      display: block !important;
    }
  }

}

</style>