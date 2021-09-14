<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">帳號資料</h1>
          </div>
        </div>
        <div class="content">
          <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
            <div class="flex justify-between">
              <ul class="flex cursor-pointer">
                <li class="py-2 px-6 tag flex items-center justify-center mr-2" :class="{ tagAct: tag === 0 }" @click="tag = 0">帳號</li>
                <li class="py-2 px-6 tag flex items-center justify-center mx-2" :class="{ tagAct: tag === 1 }" @click="tag = 1">點數</li>
                <li class="py-2 px-6 tag flex items-center justify-center mx-2" :class="{ tagAct: tag === 2 }" @click="tag = 2">密碼</li>
              </ul>
            </div>

            <div class="w-full flex flex-col justify-between leading-normal">

              <div v-if="tag === 0" class="bg-white py-2 lg:p-4">
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

                      <!-- 班級 -->
                      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="director">
                          班級
                        </label>
                        <div class="w-full md:w-4/5">
                          <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                            id="director" type="text" placeholder="">
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

                      <!-- 縣市 -->
                      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="director">
                          縣市
                        </label>
                        <div class="w-full md:w-4/5">
                          <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                            id="director" type="text" placeholder="">
                        </div>
                      </div>

                      <!-- 分校 -->
                      <div class="w-full px-3 mb-2 md:mb-4 md:flex">
                        <label class="md:pt-2 md:text-sm md:w-1/5 tracking-wide text-sm mb-2" for="director">
                          分校
                        </label>
                        <div class="w-full md:w-4/5">
                          <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                            id="director" type="text" placeholder="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="md:flex mt-3 md:mb-4 w-full lg:pt-6 justify-end px-6">
                    <button class="button-main py-2 px-4 rounded text-sm whitespace-no-wrap mx-1">
                      取消修改
                    </button>
                    <button class="button-main py-2 px-4 rounded text-sm whitespace-no-wrap mx-1">
                      <i class="fas fa-check mr-1"></i>更新
                    </button>
                  </div>
                </form>
              </div>
              <div v-if="tag === 1" class="">
                <div class="flex flex-wrap mb-4 items-stretch">
                  <div class="w-full lg:w-2/4 lg:pr-4 mb-4 lg:mb-0">
                    <div class="w-full h-full bg-white flex items-center justify-center font-semibold py-4 lg:py-0">
                      <h6 class="text-xl mx-2 whitespace-no-wrap">現在點數</h6>
                      <span class="bg-gray-300 py-4 px-12 w-3/5 text-3xl whitespace-no-wrap">666</span>
                      <h6 class="text-xl mx-2 whitespace-no-wrap">點</h6>
                    </div>
                  </div>
                  <div class="w-1/2 lg:w-1/4 lg:pt-0 pr-2 lg:px-2 text-3xl text-white font-bold">
                    <a class="block cursor-pointer">
                      <img src="@/assets/img/icons/btn_point_add.svg" alt="" class="w-full object-contain">
                    </a>
                  </div>
                  <div class="w-1/2 lg:w-1/4 lg:pt-0 pl-2 lg:pl-4 text-3xl text-white font-bold">
                    <a class="block cursor-pointer">
                      <img src="@/assets/img/icons/btn_point_contact.svg" alt="" class="w-full object-contain">
                    </a>
                  </div>
                </div>
                <div class="flex flex-wrap bg-white py-6 px-6 items-center">
                  <date-picker
                    class="mr-1"
                    v-model="periodTime"
                    type="date" range placeholder="選擇時間區間"
                    :input-class="'mx-input'">
                  </date-picker>
                  <div class="mr-1 flex bg-white border">
                    <input type="text" placeholder="Search.." name="search" class="py-2 px-2 border-0 focus:outline-none">
                    <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
                  </div>
                  <a href="" class="block mr-1">
                    <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
                  </a>
                  <button class="px-4 py-2 bg-gray-900 text-white hover:bg-primary-light text-sm mx-1 rounded whitespace-no-wrap">
                    <i class="fas fa-arrow-down mr-1"></i>匯出資料
                  </button>
                </div>
                <Table :columns="tableList.columns"
                  :actions="tableList.actions"
                  :data="tableList.datas">
                </Table>
              </div>
              <div v-if="tag === 2" class="bg-white p-2 py-4 lg:px-4 lg:py-6">
                <form>
                  <div class="mb-4 flex flex-wrap items-center">
                    <label class="w-full md:w-1/12 block text-md text-left" for="password">更新密碼</label>
                    <input class="w-full md:w-11/12 bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="password" id="" placeholder="">
                  </div>
                  <div class="mb-4 flex flex-wrap items-center">
                    <label class="w-full md:w-1/12 block text-md text-left" for="password-check">再輸入一次新密碼</label>
                    <input class="w-full md:w-11/12 bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline" type="text" name="password-check" id="" placeholder="">
                  </div>
                  <div class="">
                    <button class="button-main py-2 px-4 rounded text-sm whitespace-no-wrap">
                      <i class="fas fa-check mr-1"></i>更新
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
    </div>
  </main>
</template>

<script>
  import Table from "@/components/tables/point"
  export default {
    name: "Point",
    components: {
      Table,
      DatePicker
    },
    data () {
      return {
        tag: 0,
        periodTime: null,
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