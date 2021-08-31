<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
        <div class="mb-4 flex justify-between items-center flex-wrap">
          <div class="flex">
            <h1 class="text-xl ading-none text-black-1 mr-2 font-bold">我的課程
            </h1>
          </div>
        </div>
        <div class="content">
          <div class="menu-bar flex items-center mb-2 flex-wrap">
            <div class="flex items-center">
              <a @click="isCalemder = true" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: isCalemder }"><i class="fas fa-border-all text-4xl"></i></a>
              <a @click="isCalemder = false" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: !isCalemder }"><i class="fas fa-list-alt text-4xl"></i></a>
            </div>
            <div class="flex items-center">
              <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                <div class="roundedOne personal">
                  <input type="checkbox" value="None" id="personal" name="check" checked="">
                  <label for="personal"></label>
                </div>
                <span class="text-sm ml-1 whitespace-no-wrap">個人課程</span>
              </section>
              <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                <div class="roundedOne booking">
                  <input type="checkbox" value="None" id="booking" name="check" checked="">
                  <label for="booking"></label>
                </div>
                <span class="text-sm ml-1 whitespace-no-wrap">預約課程</span>
              </section>
              <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                <div class="roundedOne finish">
                  <input type="checkbox" value="None" id="finish" name="check" checked="">
                  <label for="finish"></label>
                </div>
                <span class="text-sm ml-1 whitespace-no-wrap">已結束課程</span>
              </section>
            </div>
            <div class="flex items-center text-xs flex-wrap" v-if="!isCalemder">
              <div class="mx-1">
                <date-picker
                  v-model="periodTime"
                  type="date" range placeholder="選擇時間區間"
                  :input-class="'mx-input text-xs'"></date-picker>
              </div>
              <div class="relative w-auto mx-1">
                <select class="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="maxNum"
                  >
                  <option value="31">課程狀態</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <div class="relative w-auto mx-1">
                <select class="block appearance-none w-full py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="maxNum"
                  >
                  <option value="31">選擇搜尋欄位</option>
                </select>
                <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              <div class="flex bg-white">
                <input type="text" placeholder="輸入關鍵字搜尋" name="search" class="py-2 px-2 border-0 focus:outline-none w-32">
                <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
              </div>
              <a href="" class="block ml-1">
                <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
              </a>
            </div>
          </div>

          <div v-if="isCalemder">
            <Calender class="hidden md:block" />
            <div class="md:hidden">
              <CalenderDot />
              <div class="w-full flex flex-wrap items-center">
                <div class="w-7/12 sm:flex">
                  <p class="sm:w-1/2 font-bold mr-1">22:00-23:00</p>
                  <p class="sm:w-1/2">Class2</p>
                </div>
                <div class="w-2/12">
                  <button class="button-verified px-3 py-2 rounded text-sm whitespace-no-wrap">
                    <i class="fas fa-folder-open text-white"></i></button>
                </div>
                <div class="w-3/12">
                  <a href="" class="flex whitespace-no-wrap items-center text-white bg-gray-btn text-sm py-2 px-2">
                    前往上課<i class="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section v-if="!isCalemder">
            <!-- <div v-if="!data">
              <NoData :text="'目前還未擁有任何課程喔'" />
              <button class="text-white bg-gray-900 px-5 py-2 rounded-full text-xl mb-4">前往增加個人課程</button>
              <img src="@/assets/img/myclass.png" alt="" class="mx-auto object-contain max-w-full">
            </div> -->
            <div class="flex items-center justify-center flex-wrap">
              <div class="bg-white px-2 py-2 hover:shadow-lg transition duration-500 w-full flex borderGreen mb-3 border-l-4 borderGreen flex-col md:flex-row"  v-for="n in 5" :key="n">
                <div class="md:w-1/12 p-1"><img src="@/assets/img/classImg.png" alt="" class="mx-auto object-contain max-w-full"></div>
                <div class="md:w-1/12 p-1 flex items-center justify-center"><p>2021-06-22<br/>22:00-23:00</p></div>
                <div class="md:w-1/12 p-1 flex items-center justify-center"><p>Wednesday<br/>星期三</p></div>
                <div class="md:w-1/12 p-1 flex items-center justify-center"><p>Peggy</p></div>
                <div class="md:w-1/12 p-1 flex items-center justify-center"><p>生活英語</p></div>
                <div class="md:w-1/12 p-1 flex items-center justify-center"><p>兒童生活英語</p></div>
                <div class="md:w-1/12 p-1 flex items-center justify-center"><p>B1 U1-U3 Class 2</p></div>
                <div class="md:w-5/12 p-1 flex items-center justify-center md:justify-end">
                  <a href="" class="border px-2 py-1 text-white bg-gray-900"><i class="fas fa-folder-open"></i></a>
                  <a href="" class="border px-2 py-1 ml-8">課程準備中</a>
                  <!-- <a href="" class="border px-2 py-1">前往上課</a> -->
                </div>
              </div>
            </div>
          </section>

        </div>
    </div>
  </main>
</template>

<script>
import Calender from '@/components/modules/Calemder'
// import Calender from '@/components/modules/CalenderSimple'
import CalenderDot from '@/components/modules/CalenderDot'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
// import NoData from '@/components/NoData'
  export default {
    name: "MyClass",
    components: {
      Calender,
      DatePicker,
      CalenderDot
      // NoData
    },
    data () {
      return {
        isCalemder: true,
        periodTime: null,

        data: null
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
.text-xs {
  font-size: 12px !important;
}
.mx-datepicker-range {
  width: 15em;
  height: 42px !important;
}
.mx-input {
  height: 42px !important;
}
.btn-toggle {
  color: #B2B2B2;
}
.isType {
  color: black;
}

.ondisplay section {
  width: 100px;
  height: 100px;
  background: #555;
  display: inline-block;
  position: relative;
  text-align: center;
  margin-top: 5px;
  border: 1px solid gray;
  border-radius: 5px;
}
.roundedOne {
  width: 28px;
  height: 28px;
  position: relative;
  border-radius: 50px;
}
.roundedOne.personal {
  background: #C76565;
}
.roundedOne.booking {
  background: #55ACB8;
}
.roundedOne.finish {
  background: #B3B3B3;
}
.roundedOne input[type=checkbox] {
  visibility: hidden;
}
.roundedOne label {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  left: 4px;
  top: 4px;
  background: white;
  border-radius: 50px;
}
.roundedOne input[type=checkbox]:checked + label:after {
  opacity: 1;
}
.roundedOne label:after {
  content: '';
  width: 10px;
  height: 10px;
  position: absolute;
  top: 5px;
  left: 5px;
  opacity: 0;
  border-radius: 50px;
}
.roundedOne.personal label:after {
  background: #C76565;
}
.roundedOne.booking label:after {
  background: #55ACB8;
}
.roundedOne.finish label:after {
  background: #B3B3B3;
}
</style>