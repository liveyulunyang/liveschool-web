<template>
  <main class="flex items-start p-6" id="bookingAdd">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">新增預約</h1>
          </div>
        </div>
        <nav class="text-black font-bold mb-4" aria-label="Breadcrumb">
          <ol class="p-0 xl:inline-flex xl:text-sm w-full">
            <li class="flex items-center w-32 mb-4 xl:mb-0">
              <button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                <i class="fas fa-chevron-left mr-1"></i>取消
              </button>
            </li>
            <li class="flex items-center border-l-2 xl:border-l-0 border-gray-400 pl-2 xl:pl-0 xl:flex-1 whitespace-no-wrap" :class="{ active: step === 0 }">
              <a href="#" class="block">預約需知</a>
              <hr class="w-full border-b border-gray-400 mr-5 ml-2 hidden xl:block">
            </li>
            <li class="flex items-center border-l-2 xl:border-l-0 border-gray-400 pl-2 xl:pl-0 py-1 xl:flex-1 whitespace-no-wrap" :class="{ active: step === 1 }">
              <a href="#">課程人數與師資</a>
              <hr class="w-full border-b border-gray-400 mr-5 ml-2 hidden xl:block">
            </li>
            <li class="flex items-center border-l-2 xl:border-l-0 border-gray-400 pl-2 xl:pl-0 py-1 xl:flex-1 whitespace-no-wrap" :class="{ active: step === 2 }">
              <a href="#">選擇課程</a>
              <hr class="w-full border-b border-gray-400 mr-5 ml-2 hidden xl:block">
            </li>
            <li class="flex items-center border-l-2 xl:border-l-0 border-gray-400 pl-2 xl:pl-0 py-1 xl:flex-1 whitespace-no-wrap" :class="{ active: step === 3 }">
              <a href="#">預約課程時段</a>
              <hr class="w-full border-b border-gray-400 mr-5 ml-2 hidden xl:block">
            </li>
            <li class="flex items-center border-l-2 xl:border-l-0 border-gray-400 pl-2 xl:pl-0 py-1 xl:flex-1 whitespace-no-wrap" :class="{ active: step === 4 }">
              <a href="#">上課名單</a>
              <hr class="w-full border-b border-gray-400 mr-5 ml-2 hidden xl:block">
            </li>
            <li class="flex items-center border-l-2 xl:border-l-0 border-gray-400 pl-2 xl:pl-0 py-1 xl:flex-1 whitespace-no-wrap" :class="{ active: step === 5 }">
              <a href="#">設定與其他問題</a>
              <hr class="w-full border-b border-gray-400 mr-5 ml-2 hidden xl:block">
            </li>
            <li class="flex items-center border-l-2 xl:border-l-0 border-gray-400 pl-2 xl:pl-0 py-1 xl:flex-1 whitespace-no-wrap" :class="{ active: step === 6 }">
              <a href="#">預約資料預覽</a>
            </li>
          </ol>
        </nav>
        <div class="content w-full">
          <div v-if="step === 0">
            <div class="bg-white text-left py-8 px-4 md:px-8 xl:px-12 leading-loose font-semibold text-lg mb-4">
              <h6 class="text-xl mb-3 font-bold">班主任線上預約需知</h6>
              <p>1. 課程提出申請後，系統會於3日內完成審核。</p>
              <p>2. 預約課程前，請先確認學生點數是否充足，若學生點數不足，課程將無法通過審核。</p>
              <p>3. 線上課程的申請核准，依提出申請的先後順序來安排，若未符合申請(例如: 教室已滿/師資不符…等)，此預約單將「未通過」。</p>
              <p>4. 預約課程若「狀態」仍顯示「審核中」，主任可以取消預約，一旦課程審核完畢，恕不任意修改。</p>
              <p>5. 班主任個人資料如正確，課程審核不論「成功」或「未通過」，班主任皆會收到簡訊和郵件通知。</p>
              <p>6. 課程預約後，若欲取消，請學生依規定自行於課前12小時上線取消，否則點數將不予返還。</p>
              <p>7. 預約課程「成功」上架後，若課前6小時仍未達開班人數，此課程將會被取消。</p>
              <p>8. 課程師資安排，總公司保有調配之權利。</p>
            </div>
            <div class="flex justify-center items-center">

              <label class="control control--checkbox mx-4">我同意
                <input type="checkbox" checked="checked"/>
                <div class="control__indicator"></div>
              </label>

              <button @click="step = 1" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                下一步
              </button>
            </div>
          </div>
          <div v-if="step === 1">
            <div class="bg-white text-left py-8 px-4 md:px-8 xl:px-12 leading-loose font-semibold text-lg mb-4">
              <h6 class="text-xl mb-1 font-bold">選擇課程人數</h6>
              <div class="flex flex-col mb-8">
                <label class="inline-flex items-center mt-3">
                  <input type="radio" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">一對一課程(25分鐘)</span>
                </label>
                <label class="inline-flex items-center mt-3">
                  <input type="radio" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">一至六人班課程(50分鐘)</span>
                </label>
              </div>
              <h6 class="text-xl mb-1 font-bold">選擇師資</h6>
              <div class="flex flex-col">
                <label class="inline-flex items-center mt-3">
                  <input type="radio" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">歐/美外師、中師</span>
                </label>
                <label class="inline-flex items-center mt-3">
                  <input type="radio" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">菲師</span>
                </label>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <button @click="step = 0" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                上一步
              </button>

              <button @click="step = 2" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                下一步
              </button>
            </div>
          </div>
          <div v-if="step === 2">
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
                <input type="text" placeholder="輸入關鍵字搜尋" name="search" class="py-2 px-2 border-0 focus:outline-none w-32 text-sm">
                <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
              </div>
              <a href="" class="block ml-2">
                <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
              </a>
            </div>
            <div class="overflow-y-scroll h-screen-50 mb-4">
              <div class="bg-white text-left py-2 px-4 xl:px-8 leading-loose font-semibold mb-4" v-for="n in 10" :key="n">
                <div class="flex flex-wrap py-2 items-center">
                  <div class="w-2/12 pr-2">
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
                  <div class="w-2/12 flex items-center justify-end">
                    <button
                      class="text-primary-normal hover:text-black-1 hover:bg-primary-light"
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
              <button @click="step = 1" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                上一步
              </button>

              <button @click="step = 3" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                下一步
              </button>
            </div>
          </div>
          <div v-if="step === 3">

            <div class="flex">
              <div class="bg-white py-8 px-4 md:px-8 leading-loose flex flex-col justify-between">
                <div>
                  <h6 class="text-xl font-bold">選擇可預約時段</h6>
                  <p class="text-base">請先選擇課程時段</p>
                  <CalenderDot />
                </div>
                <div class="flex justify-center items-center">
                  <button @click="step = 2" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                    上一步
                  </button>

                  <button @click="step = 4" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                    下一步
                  </button>
                </div>
              </div>
              <div class="px-2 w-full">
                <FullCalendar :options="calendarOptions" />
                <!-- <Calender :Calendertype="'week'" /> -->
              </div>
            </div>

          </div>
          <div v-if="step === 4">
            <div class="flex flex-wrap">
              <div class="w-1/2 text-left px-4 leading-loose font-semibold text-lg mb-4">
                <div class="bg-white w-full px-6 py-4">
                  <h6 class="text-xl font-bold">學生名單</h6>
                </div>
              </div>
              <div class="w-1/2 text-left px-4 leading-loose font-semibold text-lg mb-4">
                <div class="bg-white w-full px-6 py-4">
                  <h6 class="text-xl font-bold">上課名單</h6>
                </div>
              </div>
            </div>
            <Drag class="mb-4" />
            <div class="flex justify-center items-center">
              <button @click="step = 3" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                上一步
              </button>

              <button @click="step = 5" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                下一步
              </button>
            </div>
          </div>
          <div v-if="step === 5">
            <div class="bg-white text-left py-8 px-4 md:px-8 xl:px-12 leading-loose font-semibold text-lg mb-4 h-screen-50">
              <h6 class="text-xl mb-3 font-bold">設定與其他問題</h6>

              <div class="flex flex-wrap mb-6">
                <div class="w-full md:w-1/12 md:text-right">
                  <p>設定</p>
                </div>
                <div class="w-full md:w-11/12 px-2">
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
                <div class="w-full md:w-11/12 px-2">
                  <textarea id="otherProb" placeholder=""
                    class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
                  </textarea>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <button @click="step = 4" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                上一步
              </button>

              <button @click="openModal" class="mx-4 px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                預約資料預覽
              </button>
            </div>
          </div>

          <BookingModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
        </div>
    </div>
  </main>
</template>

<script>
  import CalenderDot from '@/components/modules/CalenderDot'
  import Drag from '@/components/modules/drag'
  // import Calender from '@/components/modules/CalenderSimple'
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import BookingModal from '@/components/modules/BookingModal'
  export default {
    name: "AddBooking",
    components: {
      // Calender,
      CalenderDot,
      FullCalendar,
      Drag,
      BookingModal
    },
    data () {
      return {
        step: 0,
        calendarOptions: {
          plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin ],
          initialView: 'timeGridWeek',
          weekends: true,
          events: [
            {
              title: '預約此時段',
              start: '2021-09-07T10:30:00',
              end: '2021-09-07T11:30:00',
              extendedProps: {
                department: 'BioChemistry'
              },
              description: 'Lecture'
            }
          ]
        },
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
#bookingAdd {
  nav {
    li a {
      color: rgba(203, 213, 224);
    }
    @media screen and (min-width: 1440px) {
      a {
        position: relative;
        color: rgba(203, 213, 224);
        &:before {
          position: absolute;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          left: -0.7rem;
          background: rgba(203, 213, 224);
        }
      }
      .active {
        a {
          color: rgb(0, 0, 0);
          &:before {
            background: rgb(0, 0, 0);
          }
        }
      }
    }
    li.active {
      border-color: rgb(0, 0, 0) !important;
      a {
        color: rgb(0, 0, 0);
      }
    }
  }

}
.h-screen-50 {
  height: calc(100vh - 450px);
}
</style>