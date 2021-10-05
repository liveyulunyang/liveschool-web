<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">預約課程設定</h1>
          </div>
        </div>
        <div class="content">
          <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
            <div class="flex justify-between">
              <ul class="flex cursor-pointer">
                <li class="py-2 px-6 tag flex items-center justify-center mr-2" :class="{ tagAct: tag === 0 }" @click="tag = 0">班型</li>
                <li class="py-2 px-6 tag flex items-center justify-center mx-2" :class="{ tagAct: tag === 1 }" @click="tag = 1">師資</li>
                <li class="py-2 px-6 tag flex items-center justify-center mx-2" :class="{ tagAct: tag === 2 }" @click="tag = 2">開課</li>
                <li class="py-2 px-6 tag flex items-center justify-center mx-2" :class="{ tagAct: tag === 3 }" @click="tag = 3">停課</li>
              </ul>
            </div>

            <div class="w-full flex flex-col justify-between leading-normal">

              <div v-if="tag === 0">
                <div class="flex justify-between flex-col md:flex-row font-semibold bg-white mb-4 py-6 shadow-lg px-3" v-for="n in 4" :key="n">
                  <div class="flex items-center mx-2 text-lg">
                    <h5>一對一課程(25分鐘)</h5>
                  </div>
                  <div class="flex items-center">
                    <div class="flex items-center mx-2">
                      <label for="role" class="whitespace-no-wrap mr-1">上限班數</label>
                      <div class="relative text-sm w-full">
                        <select class="block appearance-none w-full border border-gray-500 py-2 px-16 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role" name="role"
                          >
                          <option value="">1</option>
                        </select>
                        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center mx-2">
                      <button
                        class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
                        >
                        <img src="@/assets/img/icons/edit.svg" alt="" class="w-6 object-contain">
                      </button>
                      <button
                        class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
                        >
                        <img src="@/assets/img/icons/delete.svg" alt="" class="w-6 object-contain">
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="tag === 1">
                <div class="flex justify-between flex-col md:flex-row font-semibold bg-white mb-4 py-6 shadow-lg px-3" v-for="n in 2" :key="n">
                  <div class="flex items-center mx-2 text-lg">
                    <h5>歐/美外師、中師</h5>
                  </div>
                  <div class="flex items-center">
                    <div class="flex items-center mx-2 opacity-0">
                      <label for="role" class="whitespace-no-wrap mr-1">上限班數</label>
                      <div class="relative text-sm w-full">
                        <select disabled class="block appearance-none w-full border border-gray-500 py-2 px-16 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role" name="role"
                          >
                          <option value="">1</option>
                        </select>
                        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center mx-2">
                      <button
                        class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
                        >
                        <img src="@/assets/img/icons/edit.svg" alt="" class="w-6 object-contain">
                      </button>
                      <button
                        class="text-primary-normal hover:text-black-1 hover:bg-primary-light mx-1"
                        >
                        <img src="@/assets/img/icons/delete.svg" alt="" class="w-6 object-contain">
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="tag === 2" class="bg-white p-2 py-4 lg:px-4 lg:py-6">
                <p class="text-left">中午休息時間為12:00~14:00，固定不顯示</p>
                <div class="flex flex-wrap font-semibold" v-for="n in 7" :key="n">
                  <div class="w-full md:w-2/12 py-3 px-3">
                    <div class="bg-gray-400 py-3">星期一</div>
                  </div>
                  <div class="w-full md:flex-1 px-3 flex items-center py-3">
                    <label for="" class="mr-2 whitespace-no-wrap">開課時段</label>
                      <div class="relative text-sm w-full">
                        <select class="block appearance-none w-full border border-gray-500 py-2 px-16 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role" name="role"
                          >
                          <option value="">上午</option>
                          <option value="">下午</option>
                        </select>
                        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                  </div>
                  <div class="w-full md:flex-1 px-3 flex items-center py-3">
                    <label for="" class="mr-2 whitespace-no-wrap">開始時間</label>
                    <date-picker v-model="value1" type="time" placeholder="Select time" class="w-full"></date-picker>
                  </div>
                  <div class="w-full md:flex-1 px-3 flex items-center py-3">
                    <label for="" class="mr-2 whitespace-no-wrap">結束時段</label>
                    <date-picker v-model="value1" type="time" placeholder="Select time" class="w-full"></date-picker>
                  </div>
                </div>
              </div>
              <div v-if="tag === 3">
                <div class="flex flex-wrap lg:flex-no-wrap bg-white">
                  <div class="py-8 px-4 md:px-8 leading-loose flex flex-col justify-between w-full lg:w-auto">
                    <div class="md:flex lg:flex-col">
                      <div class="mb-8 md:w-1/2 lg:w-full">
                        <h6 class="text-xl font-bold">選擇日期</h6>
                        <p class="text-base">請先選擇課程時段</p>
                        <CalenderDot />
                      </div>
                      <div class="mb-8 md:w-1/2 lg:w-full">
                        <h6 class="text-xl font-bold">選擇時段</h6>
                        <div class="relative text-sm w-full">
                          <select v-model="TimePeriod" @change="setTime" class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
                            >
                            <option value="full">全天</option>
                            <option value="morning">上午</option>
                            <option value="afternoon">下午</option>
                          </select>
                          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-center items-center">
                      <button class="mx-4 px-4 py-2 bg-gray-900 text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                        停課
                      </button>

                      <button class="mx-4 px-4 py-2 bg-gray-400 text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
                        取消
                      </button>
                    </div>
                  </div>
                  <div class="px-2 w-full">
                    <FullCalendar :options="calendarOptions" class="hidden lg:block" ref="fullCalendar" :slot-min-time="'10:00'" />
                    <FullCalendar :options="calendarListOptions" class="lg:hidden" />
                    <!-- <Calender :Calendertype="'week'" /> -->
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  </main>
</template>

<script>
  import DatePicker from 'vue2-datepicker'
  import 'vue2-datepicker/index.css'
  import CalenderDot from '@/components/modules/CalenderDot'

  import '@fullcalendar/core/vdom'
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import listPlugin   from '@fullcalendar/list'
  export default {
    name: "Course_setting",
    components: {
      DatePicker,
      CalenderDot,
      FullCalendar,
    },
    data () {
      return {
        tag: 0,
        periodTime: null,
        value1: null,
        TimePeriod: 'full',

        calendarOptions: {
          plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
          initialView: 'timeGridWeek',
          weekends: true,
          slotMinTime: '9:00:00',
          slotMaxTime: '21:00:00',
          events: [
            {
              title: '預約此時段',
              start: '2021-10-07T10:30:00',
              end: '2021-10-07T11:30:00',
              extendedProps: {
                department: 'BioChemistry'
              },
              description: 'Lecture',

            }
          ]
        },
        calendarListOptions: {
          plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
          initialView: 'listWeek',
          weekends: true,
          slotMinTime: '9:00:00',
          slotMaxTime: '21:00:00',
          events: [
            {
              title: '預約此時段',
              start: '2021-10-07T10:30:00',
              end: '2021-10-07T11:30:00',
              extendedProps: {
                department: 'BioChemistry'
              },
              description: 'Lecture'
            }
          ]
        }
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      setTime () {
        let TimePeriod = this.TimePeriod
        if (TimePeriod === 'morning') {
          this.$refs.fullCalendar.getApi().setOption('slotMinTime', '09:00:00')
          this.$refs.fullCalendar.getApi().setOption('slotMaxTime', '13:00:00')
        } else if (TimePeriod === 'afternoon') {
          this.$refs.fullCalendar.getApi().setOption('slotMinTime', '13:00:00')
          this.$refs.fullCalendar.getApi().setOption('slotMaxTime', '21:00:00')
        } else {
          this.$refs.fullCalendar.getApi().setOption('slotMinTime', '09:00:00')
          this.$refs.fullCalendar.getApi().setOption('slotMaxTime', '21:00:00')
        }
      }
    }
  }
</script>

<style lang="scss">

  .tag {
    background: #CCCCCC;
    color: #808080;
  }
  .tagAct {
    background: white;
    color: black;
  }
</style>