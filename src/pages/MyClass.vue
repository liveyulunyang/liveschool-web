<template>
  <main class="p-6" id="myclass">
    <div class="flex items-start">
      <!-- 主任 -->
      <div class="flex flex-col w-full" v-if="$store.state.userRole === 'director'">

        <div class="mb-4 flex justify-between flex-wrap">
          <div class="flex justify-between flex-col">
            <Title :title="'我的課程'" />
            <div class="menu-bar flex items-center mb-2 flex-wrap">
              <div class="flex items-center">
                <a @click="isCalender = true" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: isCalender }"><i class="fas fa-border-all text-4xl"></i></a>
                <a @click="isCalender = false" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: !isCalender }"><i class="fas fa-list-alt text-4xl"></i></a>
              </div>
              <div class="radio flex items-center flex-1 justify-between sm:justify-start" id="radio-myclass">
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne booking">
                    <input type="checkbox" value="None" id="booking" name="check" checked="">
                    <label for="booking"></label>
                  </div>
                  <span class="text-sm ml-1 whitespace-no-wrap md:hidden">預約</span>
                  <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">LiveTalk單堂預約</span>
                </section>
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne finish">
                    <input type="checkbox" value="None" id="finish" name="check" checked="">
                    <label for="finish"></label>
                  </div>
                  <span class="text-sm ml-1 whitespace-no-wrap md:hidden">已結束</span>
                  <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">已結束課程</span>
                </section>
              </div>
              <!-- <div class="flex items-center flex-1 justify-between sm:justify-start">
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne personal">
                    <input type="checkbox" value="None" id="personal" name="check" checked="">
                    <label for="personal"></label>
                  </div>
                  <span class="text-sm ml-1 whitespace-no-wrap md:hidden">個人</span>
                  <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">個人課程</span>
                </section>
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne booking">
                    <input type="checkbox" value="None" id="booking" name="check" checked="">
                    <label for="booking"></label>
                  </div>
                  <span class="text-sm ml-1 whitespace-no-wrap md:hidden">預約</span>
                  <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">分校預約課程</span>
                </section>
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne finish">
                    <input type="checkbox" value="None" id="finish" name="check" checked="">
                    <label for="finish"></label>
                  </div>
                  <span class="text-sm ml-1 whitespace-no-wrap md:hidden">已結束</span>
                  <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">已結束課程</span>
                </section>
              </div> -->
              <div class="flex items-center text-xs flex-wrap" v-if="!isCalender">
                <FilterModal :showItems="showItems" />
              </div>
            </div>
          </div>
          <div>
            <router-link :to="{ name: 'account' }" class="block bg-gray-600 text-white px-24 py-2 rounded-lg cursor-pointer">
              <h3>剩餘點數</h3>
              <p class="text-3xl font-bold mb-0">255</p>
            </router-link>
            <p class="text-sm">即將於<span class="text-red-500 mx-1 font-bold">2021.09.07</span>過期<span class="text-red-500 mx-1 font-bold">50</span>點</p>
          </div>
        </div>
        <div class="content">
          <!-- <div class="menu-bar flex items-center mb-2 flex-wrap">
            <div class="flex items-center">
              <a @click="isCalender = true" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: isCalender }"><i class="fas fa-border-all text-4xl"></i></a>
              <a @click="isCalender = false" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: !isCalender }"><i class="fas fa-list-alt text-4xl"></i></a>
            </div>
            <div class="flex items-center flex-1 justify-between sm:justify-start">
              <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                <div class="roundedOne personal">
                  <input type="checkbox" value="None" id="personal" name="check" checked="">
                  <label for="personal"></label>
                </div>
                <span class="text-sm ml-1 whitespace-no-wrap md:hidden">個人</span>
                <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">個人課程</span>
              </section>
              <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                <div class="roundedOne booking">
                  <input type="checkbox" value="None" id="booking" name="check" checked="">
                  <label for="booking"></label>
                </div>
                <span class="text-sm ml-1 whitespace-no-wrap md:hidden">預約</span>
                <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">分校預約課程</span>
              </section>
              <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                <div class="roundedOne finish">
                  <input type="checkbox" value="None" id="finish" name="check" checked="">
                  <label for="finish"></label>
                </div>
                <span class="text-sm ml-1 whitespace-no-wrap md:hidden">已結束</span>
                <span class="text-sm ml-1 whitespace-no-wrap hidden md:block">已結束課程</span>
              </section>
            </div>
            <div class="flex items-center text-xs flex-wrap" v-if="!isCalender">
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
          </div> -->

          <div v-if="isCalender">
            <Calender class="hidden md:block" />
            <div class="md:hidden">
              <CalenderDot class="mb-4" />
              <div class="mb-4 w-full flex justify-between items-center">
                <div class="relative text-sm w-full sm:w-auto">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                    <option value="s">課程狀態</option>
                  </select>
                    <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div class="relative text-sm hidden sm:block w-full sm:w-auto">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                  >
                    <option value="">選擇搜尋欄位</option>
                  </select>
                    <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div class="mx-1 bg-white hidden sm:flex">
                  <input type="text" placeholder="Search.." name="search" class="py-2 px-2 border-0 focus:outline-none">
                  <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
                </div>
                <div class="hidden sm:block">
                  <a href="" class="block">
                    <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
                  </a>
                </div>

              </div>
              <div class="w-full flex flex-wrap items-center border-l-3 border-gray-900 bg-white py-2 pr-3 mb-2" v-for="n in 5" :key="n">
                <div class="w-7/12 sm:flex">
                  <p class="sm:w-1/2 font-bold sm:mr-1">22:00-23:00</p>
                  <p class="">Class2</p>
                </div>
                <div class="w-2/12">
                  <button class="bg-gray-900 px-3 py-2 rounded text-sm whitespace-no-wrap">
                    <i class="fas fa-folder-open text-white"></i></button>
                </div>
                <div class="w-3/12">
                  <a href="" class="flex whitespace-no-wrap items-center text-white bg-gray-900 text-sm py-2 px-2 rounded">
                    前往上課<i class="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section v-if="!isCalender">
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
                  <a class="mx-1 table-btn-actions rounded table-btn-actions cursor-pointer"><i class="fas fa-folder-open"></i></a>
                  <a href="" class="border px-2 py-1 ml-8 rounded">課程準備中</a>
                  <!-- <a href="" class="border px-2 py-1">前往上課</a> -->
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <!-- 學生 -->
      <div class="student flex flex-col w-full" v-if="$store.state.userRole === 'student'">
        <div class="flex flex-wrap items-stretch py-3 student-basic-info">
          <div class="md:flex-none py-4 text-white font-bold flex items-center justify-center md:border-r-2 px-3 w-full md:w-2/6">
            <div class="mx-2">
              <img src="@/assets/img/vector.svg" alt="" class="block object-contain w-32">
            </div>
            <div class="ml-2 text-left">
              <h6 class="text-2xl">Steve Jobs</h6>
              <h6 class="text-3xl">賈伯斯</h6>
            </div>
          </div>
          <div class="md:flex-1 text-white font-bold md:border-r-2 flex flex-col justify-center w-1/2 md:w-auto py-4 md:py-0">
            <h6 class="text-base lg:text-lg">累積上課時數</h6>
            <p class="text-2xl lg:text-3xl">1:05:20</p>
          </div>
          <div class="md:flex-1 text-white font-bold md:border-r-2 flex flex-col justify-center w-1/2 md:w-auto py-4 md:py-0">
            <h6 class="text-base lg:text-lg">累積完成課程數</h6>
            <p class="text-2xl lg:text-3xl">20</p>
          </div>
          <!-- <div class="md:flex-1 bg-gray-600 text-white font-bold md:border-r-2 flex flex-col justify-center w-1/2 md:w-auto py-4 md:py-0">
            <h6 class="text-base lg:text-lg">取得證書數</h6>
            <p class="text-2xl lg:text-3xl">3</p>
          </div> -->
          <div class="md:flex-1 text-white font-bold flex flex-col justify-center w-1/2 md:w-auto py-4 md:py-0">
            <h6 class="text-base lg:text-lg">剩餘點數</h6>
            <p class="text-2xl lg:text-3xl">8</p>
          </div>
        </div>
        <!-- <div class="flex items-stretch w-full flex-wrap bg-gray-600 text-white">
          <div class="w-full md:w-2/6 flex items-center justify-center md:border-r-2 py-4">
            <div class="mx-2">
              <img src="@/assets/img/vector.svg" alt="" class="block object-contain w-32">
            </div>
            <div class="text-3xl mx-2">
              <h6>Steve Jobs</h6>
            </div>
          </div>
          <div class="w-full md:w-1/6 md:border-r-2 h-full py-4">
            <h6 class="text-lg">累積上課時數</h6>
            <p class="text-2xl">1:05:20</p>
          </div>
          <div class="w-full md:w-1/6 md:border-r-2 h-full py-4">
            <h6 class="text-lg">累積完成課程數</h6>
            <p class="text-2xl">8</p>
          </div>
          <div class="w-full md:w-1/6 md:border-r-2 h-full py-4">
            <h6 class="text-lg">取得證書數</h6>
            <p class="text-2xl">8</p>
          </div>
          <div class="w-full md:w-1/6 h-auto py-4">
            <h6 class="text-lg">剩餘點數</h6>
            <p class="text-2xl">8</p>
          </div>
        </div> -->
        <div class="flex justify-between items-center flex-wrap">
          <Title :title="'我的課程'" />
        </div>
          <div class="content">
            <div class="menu-bar flex items-center mb-2 flex-wrap lg:flex-no-wrap justify-start">
              <div class="flex items-center">
                <a @click="isCalender = false" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: !isCalender }"><i class="fas fa-list-alt text-4xl"></i></a>
                <a @click="isCalender = true" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: isCalender }"><i class="fas fa-border-all text-4xl"></i></a>
              </div>
              <FilterModal :showItems="showItems" />
              <div class="flex items-center flex-1 justify-between sm:justify-start">
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne personal">
                    <input type="checkbox" value="None" id="personal" name="check" checked="">
                    <label for="personal"></label>
                  </div>
                  <!-- <span class="text-sm ml-1 whitespace-no-wrap md:hidden">個人</span> -->
                  <span class="text-sm ml-1 whitespace-no-wrap">LiveTalk</span>
                </section>
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne booking">
                    <input type="checkbox" value="None" id="booking" name="check" checked="">
                    <label for="booking"></label>
                  </div>
                  <!-- <span class="text-sm ml-1 whitespace-no-wrap md:hidden">預約</span> -->
                  <span class="text-sm ml-1 whitespace-no-wrap">LiveClass</span>
                </section>
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne finish">
                    <input type="checkbox" value="None" id="finish" name="check" checked="">
                    <label for="finish"></label>
                  </div>
                  <!-- <span class="text-sm ml-1 whitespace-no-wrap md:hidden">已結束</span> -->
                  <span class="text-sm ml-1 whitespace-no-wrap">LiveTeacher</span>
                </section>
              </div>
              <div class="flex items-center text-xs flex-wrap" v-if="!isCalender">
                <!-- <FilterModal :showItems="showItems" /> -->
                <!-- <div class="mx-1">
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
                </a> -->
              </div>
            </div>

            <div v-if="isCalender">
              <Calender class="hidden md:block" />
              <div class="md:hidden">
                <CalenderDot :isisFullWidth="true" class="mb-4" />
                <div class="mb-4 w-full flex justify-between items-center">
                  <div class="relative text-sm w-full sm:w-auto">
                    <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                      <option value="s">課程狀態</option>
                    </select>
                      <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  <div class="relative text-sm hidden sm:block w-full sm:w-auto">
                    <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                      <option value="">選擇搜尋欄位</option>
                    </select>
                      <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  <div class="mx-1 bg-white hidden sm:flex">
                    <input type="text" placeholder="Search.." name="search" class="py-2 px-2 border-0 focus:outline-none">
                    <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
                  </div>
                  <div class="hidden sm:block">
                    <a href="" class="block">
                      <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
                    </a>
                  </div>

                </div>
                <div class="w-full flex flex-wrap items-center border-l-3 border-gray-900 bg-white py-2 pr-3 mb-2" v-for="n in 5" :key="n">
                  <div class="w-7/12 sm:flex">
                    <p class="sm:w-1/2 font-bold sm:mr-1">22:00-23:00</p>
                    <p class="">Class2</p>
                  </div>
                  <div class="w-2/12">
                    <button class="bg-gray-900 px-3 py-2 rounded text-sm whitespace-no-wrap">
                      <i class="fas fa-folder-open text-white"></i></button>
                  </div>
                  <div class="w-3/12">
                    <a href="" class="flex whitespace-no-wrap items-center text-white btn-main text-sm py-2 px-2 rounded">
                      前往上課<i class="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <section v-if="!isCalender">
              <!-- <div v-if="!data">
                <NoData :text="'目前還未擁有任何課程喔'" />
                <button class="text-white bg-gray-900 px-5 py-2 rounded-full text-xl mb-4">前往增加個人課程</button>
                <img src="@/assets/img/myclass.png" alt="" class="mx-auto object-contain max-w-full">
              </div> -->
              <startClassModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
              <CourseModel :showfirstModal="showDetailModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
              <MyClassCommentModal :showfirstModal="showCommentModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
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
                    <a @click="showCommentModal = true" class="border px-2 py-1 text-gray-600 mr-2 rounded border-gray-600 cursor-pointer"><i class="fas fa-clipboard-list"></i></a>
                    <a class="border px-2 py-1 text-gray-600 mr-2 rounded border-gray-600 cursor-pointer"><i class="fas fa-film"></i></a>
                    <a @click="showDetailModal = true" class="mx-1 table-btn-actions rounded table-btn-actions cursor-pointer"><i class="fas fa-folder-open"></i></a>
                    <!-- <a href="" class="border px-2 py-1">課程準備中</a> -->
                    <a @click="showfirstModal = true" class="border px-2 py-1 btn-main text-white cursor-pointer rounded">前往上課<i class="fas fa-arrow-right ml-1 text-sm"></i></a>
                  </div>
                </div>
              </div>
            </section>

          </div>

      </div>
      <!-- 老師 -->
      <div class="flex flex-col w-full" v-if="$store.state.userRole === 'teacher'">
        <div class="flex justify-between items-center flex-wrap">
          <Title :title="'我的課程'" />
        </div>
          <div class="content">
            <div class="menu-bar flex items-center mb-2 flex-wrap">
              <div class="flex items-center">
                <a @click="isCalender = false" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: !isCalender }"><i class="fas fa-list-alt text-4xl"></i></a>
                <a @click="isCalender = true" class="block px-1 py-1 btn-toggle cursor-pointer" :class="{ isType: isCalender }"><i class="fas fa-border-all text-4xl"></i></a>
              </div>

              <div class="flex items-center justify-between sm:justify-start">
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne personal">
                    <input type="checkbox" value="None" id="personal" name="check" checked="">
                    <label for="personal"></label>
                  </div>
                  <!-- <span class="text-sm ml-1 whitespace-no-wrap md:hidden">個人</span> -->
                  <span class="text-sm ml-1 whitespace-no-wrap">LiveTalk</span>
                </section>
                <section style="background: none; border: none; box-shadow: none;" class="flex items-center mx-2">
                  <div class="roundedOne finish">
                    <input type="checkbox" value="None" id="finish" name="check" checked="">
                    <label for="finish"></label>
                  </div>

                  <span class="text-sm ml-1 whitespace-no-wrap">LiveTeacher</span>
                </section>
              </div>
              <FilterModal :showItems="showItems" />
            </div>

            <div v-if="isCalender">
              <Calender class="hidden md:block" />
              <div class="md:hidden">
                <CalenderDot :isisFullWidth="true" class="mb-4" />
                <div class="mb-4 w-full flex justify-between items-center">
                  <div class="relative text-sm w-full sm:w-auto">
                    <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                      <option value="s">課程狀態</option>
                    </select>
                      <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  <div class="relative text-sm hidden sm:block w-full sm:w-auto">
                    <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                      <option value="">選擇搜尋欄位</option>
                    </select>
                      <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  <div class="mx-1 bg-white hidden sm:flex">
                    <input type="text" placeholder="Search.." name="search" class="py-2 px-2 border-0 focus:outline-none">
                    <button type="submit" class="px-2"><i class="fa fa-search"></i></button>
                  </div>
                  <div class="hidden sm:block">
                    <a href="" class="block">
                      <img src="@/assets/img/icons/re.svg" alt="" class="w-8">
                    </a>
                  </div>

                </div>
                <div class="w-full flex flex-wrap items-center border-l-3 border-gray-900 bg-white py-2 pr-3 mb-2" v-for="n in 5" :key="n">
                  <div class="w-7/12 sm:flex">
                    <p class="sm:w-1/2 font-bold sm:mr-1">22:00-23:00</p>
                    <p class="">Class2</p>
                  </div>
                  <div class="w-2/12">
                    <button class="bg-gray-900 px-3 py-2 rounded text-sm whitespace-no-wrap">
                      <i class="fas fa-folder-open text-white"></i></button>
                  </div>
                  <div class="w-3/12">
                    <a href="" class="flex whitespace-no-wrap items-center text-white btn-main text-sm py-2 px-2 rounded">
                      前往上課<i class="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <section v-if="!isCalender">
              <!-- <div v-if="!data">
                <NoData :text="'目前還未擁有任何課程喔'" />
                <button class="text-white bg-gray-900 px-5 py-2 rounded-full text-xl mb-4">前往增加個人課程</button>
                <img src="@/assets/img/myclass.png" alt="" class="mx-auto object-contain max-w-full">
              </div> -->
              <startClassModal :showfirstModal="showfirstModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
              <!-- <CourseRecordModal :showfirstModal="showDetailModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit"/> -->
              <CourseModel :showfirstModal="showDetailModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
              <CourseRecordModal :showfirstModal="showCommentModal" v-on:closeModal="closeModal" :isDisabled="true" :title="'預約資料預覽'" v-on:submit="submit" />
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
                    <a @click="showCommentModal = true" class="border px-2 py-1 text-gray-600 mr-2 rounded border-gray-600 cursor-pointer"><i class="fas fa-clipboard-list"></i></a>
                    <a class="border px-2 py-1 text-gray-600 mr-2 rounded border-gray-600 cursor-pointer"><i class="fas fa-film"></i></a>
                    <a @click="showDetailModal = true" class="mx-1 table-btn-actions rounded table-btn-actions cursor-pointer"><i class="fas fa-folder-open"></i></a>
                    <!-- <a href="" class="border px-2 py-1">課程準備中</a> -->
                    <a @click="showfirstModal = true" class="border px-2 py-1 bg-gray-900 text-white cursor-pointer rounded">前往上課<i class="fas fa-arrow-right ml-1 text-sm"></i></a>
                  </div>
                </div>
              </div>
            </section>

          </div>
      </div>
    </div>
    <Pagination />
  </main>
</template>

<script>
import Calender from '@/components/modules/Calender'
// import Calender from '@/components/modules/CalenderSimple'
import CalenderDot from '@/components/modules/CalenderDot'
import 'vue2-datepicker/index.css'
import startClassModal from '@/components/popup/startClassModal'
import CourseModel from '@/components/popup/CalenderModel'
import FilterModal from '@/components/FilterModal'
import MyClassCommentModal from '@/components/popup/MyClassCommentModal'
import CourseRecordModal from '@/components/popup/CourseRecordModal'
import Pagination from "@/components/modules/Pagination"
import Title from '@/components/Title'
// import NoData from '@/components/NoData'
  export default {
    name: "MyClass",
    components: {
      Calender,
      CalenderDot,
      startClassModal,
      CourseModel,
      FilterModal,
      MyClassCommentModal,
      Pagination,
      CourseRecordModal,
      Title
      // NoData
    },
    data () {
      return {
        isCalender: false,
        periodTime: null,

        data: null,

        showfirstModal: false,
        showDetailModal: false,
        showCommentModal: false,

        showItems: {
          classStatus: true,
          role: false,
          listStatus: false,
          classTopic: false,
          classification: false,
          branch: false,
          classType: false,
          timePeriod: true,
          search: true,
          sync: false
        }
      }
    },
    computed: {
    },
    methods: {
      openModal () {
        this.showfirstModal = true
      },
      closeModal (closeModal) {
        this.showfirstModal = closeModal
        this.showDetailModal = closeModal
        this.showCommentModal = closeModal
      },
      submit (submit) {
        this.$router.push({ name: submit })
      }
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
#myclass {
  .student-basic-info {
    background-repeat: repeat;
    background-image: url('~@/assets/img/background_top_01.jpg');
    background-size: contain;
    @media screen and (max-width: 1025px) {
      background-image: none;
      background-color: #0F455C;
    }
  }
  .text-xs {
    font-size: 12px !important;
  }

  .btn-toggle {
    color: #B2B2B2;
  }
  .isType {
    color: black;
  }
}
</style>