<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <Title :title="'點數管理'" />
          </div>
        </div>
        <div class="content">
          <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
            <div class="flex justify-between">
              <ul class="flex cursor-pointer">
                <li class="py-4 px-6 tag flex items-center justify-center mr-2" :class="{ tagAct: tag === 0 }" @click="tag = 0" v-if="$store.state.userRole === 'admin'">統計</li>
                <li class="py-4 px-6 tag flex items-center justify-center mx-2" :class="{ tagAct: tag === 1 }" @click="tag = 1">轉移</li>
                <li class="py-4 px-6 tag flex items-center justify-center mx-2" :class="{ tagAct: tag === 2 }" @click="tag = 2" v-if="$store.state.userRole === 'admin'">新增</li>
                <li class="py-4 px-6 tag flex items-center justify-center ml-2" :class="{ tagAct: tag === 3 }" @click="tag = 3">交易紀錄</li>
              </ul>
            </div>

            <div class="w-full flex flex-col justify-between leading-normal">

              <div v-if="tag === 0 && $store.state.userRole === 'admin'" class="bg-white py-2 lg:p-4">
                <FilterModal :showItems="showItems" />
                <!-- <div class="flex items-center mb-4 flex-wrap">
                  <div class="mr-1">
                    <date-picker
                      v-model="periodTime"
                      type="date" range placeholder="選擇時間區間"
                      :input-class="'mx-input'"></date-picker>
                  </div>
                  <div class="mr-1">
                    <a href="" class="block">
                      <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
                    </a>
                  </div>
                  <button class="px-4 py-2 btn-blue text-white text-sm mx-1 rounded whitespace-no-wrap">
                    <i class="fas fa-arrow-down mr-1"></i>匯出資料
                  </button>
                </div> -->
                <form>
                  <div class="mb-6">
                    <h6 class="text-left mb-2 text-lg font-bold">點數</h6>
                    <hr class="border-b mb-4">
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="consumption">課程消耗</label>
                      <input value="20" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="consumption" id="" placeholder="">
                    </div>
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="exchange">序號兌換</label>
                      <input value="10" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="exchange" id="" placeholder="">
                    </div>
                  </div>
                  <div class="mb-6">
                    <h6 class="text-left mb-2 text-lg font-bold">序號</h6>
                    <hr class="border-b mb-4">
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="username">已產生點數</label>
                      <input value="10" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" id="" placeholder="">
                    </div>
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="password">未兌換點數</label>
                      <input value="10" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="password" id="" placeholder="">
                    </div>
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="password">兌換點數</label>
                      <input value="10" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="password" id="" placeholder="">
                    </div>
                  </div>
                  <div class="mb-6">
                    <h6 class="text-left mb-2 text-lg font-bold">系統</h6>
                    <hr class="border-b mb-4">
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="username">已產生點數</label>
                      <input value="10" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" id="" placeholder="">
                    </div>
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="password">未兌換點數</label>
                      <input value="10" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="password" id="" placeholder="">
                    </div>
                    <div class="mb-4">
                      <label class="block text-md mb-2 text-left" for="password">兌換點數</label>
                      <input value="10" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="password" id="" placeholder="">
                    </div>
                  </div>
                </form>
              </div>
              <div v-if="tag === 1" class="bg-white py-2 lg:p-4">
                <form>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="email">轉出帳號</label>
                    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="" placeholder="">
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="text">轉出帳號或現有點數</label>
                    <div class="flex items-center mb-4">
                      <div class="px-2 h-full">
                        <input value="一般點數" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                      </div>
                      <input disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                    </div>
                    <div class="flex items-center">
                      <div class="px-2 h-full">
                        <input value="CTL點數" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                      </div>
                      <input disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="text">轉出點數</label>
                    <div class="flex flex-wrap">
                      <div class="w-full md:w-1/5 px-2">
                        <div class="relative text-sm h-full">
                          <select class="h-full block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                            >
                            <option value="">一般點數</option>
                          </select>
                          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                      <input class="w-full md:w-4/5 bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="reason">異動原因</label>
                    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="reason" id="" placeholder="">
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="emailRe">轉入帳號</label>
                    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="email" name="emailRe" id="emailRe" placeholder="">
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="">轉入帳號或現有點數</label>
                    <div class="flex items-center mb-4">
                      <div class="px-2 h-full">
                        <input value="一般點數" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" id="" placeholder="">
                      </div>
                      <input disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="point" id="" placeholder="">
                    </div>
                    <div class="flex items-center">
                      <div class="px-2 h-full">
                        <input value="CTL點數" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" id="" placeholder="">
                      </div>
                      <input disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="pointCTL" id="" placeholder="">
                    </div>
                  </div>
                </form>
              </div>
              <div v-if="tag === 2 && $store.state.userRole === 'admin'" class="bg-white py-2 lg:p-4">
                <form>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="email">帳號</label>
                    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="" placeholder="">
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="text">轉出帳號或現有點數</label>
                    <div class="flex items-center mb-4">
                      <div class="px-2 h-full">
                        <input value="一般點數" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                      </div>
                      <input disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                    </div>
                    <div class="flex items-center">
                      <div class="px-2 h-full">
                        <input value="CTL點數" disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                      </div>
                      <input disabled class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="text">新增點數</label>
                    <div class="flex flex-wrap">
                      <div class="w-full md:w-1/5 px-2">
                        <div class="relative text-sm h-full">
                          <select class="h-full block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                            >
                            <option value="">一般點數</option>
                          </select>
                          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                      <input class="w-full md:w-4/5 bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="text" id="" placeholder="">
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-md mb-2 text-left" for="reason">異動原因</label>
                    <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="reason" id="" placeholder="">
                  </div>
                </form>
              </div>
              <div v-if="tag === 3">
                <div class="flex items-center mb-4 flex-wrap bg-white py-2 lg:p-4">
                  <div class="mr-1">
                    <date-picker
                      v-model="periodTime"
                      type="date" range placeholder="選擇時間區間"
                      :input-class="'mx-input'"></date-picker>
                  </div>
                  <div class="mx-1 flex bg-white border">
                    <input type="text" placeholder="Search.." name="search" class="py-2 px-2 border-0 focus:outline-none w-20">
                    <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
                  </div>
                  <div class="ml-1">
                    <a href="" class="block">
                      <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
                    </a>
                  </div>
                  <button class="px-4 py-2 bg-gray-900 text-white  text-sm mx-1 rounded whitespace-no-wrap">
                    匯出資料
                  </button>
                </div>
                <Table :columns="tableList.columns"
                  :actions="tableList.actions"
                  :data="tableList.datas">
                </Table>
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
  import Table from '@/components/table'
  import FilterModal from '@/components/FilterModal'
  import Title from '@/components/Title'
  export default {
    name: "Point",
    components: {
      Table,
      DatePicker,
      FilterModal,
      Title
    },
    data () {
      return {
        tag: 0,
        showItems: {
          isExportBtn: true,
          timePeriod: true,
          sync: true
        },
        tableList: {
          columns: [
            { name: 'id', label: '交易日期', required: true },
            { name: 'classroom', label: '點數異動/課程名稱', required: true },
            { name: 'classname', label: '異動帳號', required: true },
            { name: 'teacher', label: '異動類別', required: true },
            { name: 'number', label: '點數', required: true, sortable: false},
            { name: 'point', label: '來源', required: true },
            { name: 'classtime', label: '異動原因', required: true },
            { name: 'classtype', label: '執行帳號', required: true }
          ],
          datas: [
            {
              id: '2021-08-31 18:20:30',
              classroom: 'ROOM1',
              classname: '測試戰學生',
              teacher: '一般點數',
              number: '-1',
              point: '系統',
              classtime: '成功預約',
              classtype: 'Admin(admin@liveabc.com)'
            },
            {
              id: '2021-08-30 18:20:30',
              classroom: 'ROOM1',
              classname: '測試戰學生',
              teacher: '一般點數',
              number: '-1',
              point: '系統',
              classtime: '成功預約',
              classtype: 'Admin(admin@liveabc.com)'
            },
            {
              id: '2021-08-29 18:20:30',
              classroom: 'ROOM1',
              classname: '測試戰學生',
              teacher: '一般點數',
              number: '-1',
              point: '系統',
              classtime: '成功預約',
              classtype: 'Admin(admin@liveabc.com)'
            }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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