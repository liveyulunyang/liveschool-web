
<template>
<main class="flex flex-wrap p-3 xl:p-6">
  <h1 class="text-2xl leading-none text-black-1 mr-2">新增LiveTeacher課程</h1>

  <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
    <div class="flex justify-between">
      <ul class="flex cursor-pointer text-sm">
        <li class="py-2 mr-1">
          <button @click="$router.back(-1)" class="px-4 py-2 bg-gray-900 text-white  hover:bg-gray-600 text-sm rounded whitespace-no-wrap">
            <i class="fas fa-chevron-left mr-1"></i>返回
          </button>
        </li>
        <li class="py-2 px-6 tag flex items-center justify-center mx-1" :class="{ tagAct: tag === 0 }" @click="tag = 0">課程基本資料</li>
        <!-- <li class="py-2 px-6 tag flex items-center justify-center mx-1" :class="{ tagAct: tag === 1 }" @click="tag = 1">課程章節</li> -->
        <li class="py-2 px-6 tag flex items-center justify-center mx-1" :class="{ tagAct: tag === 1 }" @click="tag = 1">堂數設定</li>
        <li class="py-2 px-6 tag flex items-center justify-center mx-1" :class="{ tagAct: tag === 2 }" @click="tag = 2">課程時間</li>
      </ul>

      <ul class="flex cursor-pointer font-semibold" v-if="tag === 1">
        <li class="py-2 mr-2">
          <p class="font-bold">已建立 <span class="text-red-800">5</span>堂</p>
        </li>
        <li class="py-2 mr-2">
          <a class="px-4 py-2 bg-gray-500 text-white  hover:bg-gray-600 rounded whitespace-no-wrap font-semibold">
            批次匯入
          </a>
        </li>
        <li class="py-2 mr-1">
          <a class="px-4 py-2 bg-gray-900 text-white rounded whitespace-no-wrap font-semibold">
            <i class="fas fa-plus mr-1"></i>新增課堂
          </a>
        </li>
      </ul>
    </div>
    <div v-if="isData">
      <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto" v-if="tag === 0">
        <div class="w-full bg-white py-2 lg:p-4 flex flex-col justify-between leading-normal">
          <div class="flex flex-wrap textColorblack">

            <!-- 課程類型 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="email">
                課程類型
              </label>
              <div>
              </div>
              <div class="w-full md:w-4/5 flex items-center flex-wrap lg:flex-no-wrap">

                <div class="relative text-sm w-full lg:w-1/4 lg:pr-1">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">一般口說課程</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>

                <input class="w-full lg:w-auto lg:flex-1 appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="email" type="email" placeholder="">

                <div class="w-full lg:w-32 flex items-center justify-center lg:pl-2 mt-1 md:mt-0">
                  <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap px-1">
                    <!-- <i class="far fa-check-square mr-1 lg:mr-2 text-lg lg:text-xl"></i> -->
                    <i class="fas fa-square mr-1 lg:mr-2 text-lg lg:text-xl"></i>
                    公開課程
                  </button>
                </div>
              </div>
              <!-- <div class="w-full md:w-1/5 flex items-center justify-center md:pl-2">
                <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap">
                  <i class="far fa-check-square mr-2"></i>
                  <i class="fas fa-square"></i>
                  公開課程</button>
              </div> -->
            </div>

            <!-- 封面 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
                封面
              </label>
              <div class="w-full md:w-3/5 flex items-center">
                <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="name" type="text" placeholder="請輸入url">
              </div>
              <div class="w-full md:w-1/5 flex items-center">
                <a href="" class="block px-1 lg:px-3 lg:mr-1 xl:mr-3">
                  <label for="file-upload" class="custom-file-upload">
                    <i class="fas fa-upload"></i>
                  </label>
                  <input id="file-upload" type="file"/>
                </a>
                <div class="flex items-center">
                  <span>cover.jpg</span>
                  <a href="" class="block p-2"><i class="fas fa-times"></i></a>
                </div>
              </div>
            </div>

            <!-- 名稱 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="nameEn">
                名稱
              </label>
              <div class="w-full md:w-4/5">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="nameEn" type="phone" placeholder="請輸入文字">
              </div>
            </div>

            <!-- 副標說明 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="mobile">
                副標說明
              </label>
              <div class="w-full md:w-4/5">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="mobile" type="phone" placeholder="請輸入文字">
              </div>
            </div>

            <!-- 課程分類 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="address">
                課程分類
              </label>
              <div class="w-full md:w-4/5 md:flex">
                <div class="relative text-sm w-full md:w-48 md:mr-2">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">課程主題</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div class="relative text-sm w-full md:w-48">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">主題分類</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- 課程大綱 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="experience">
                課程大綱
              </label>
              <div class="w-full md:w-4/5">
                <textarea id="experience" placeholder="請輸入課程大綱"
                  class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
                </textarea>
              </div>
            </div>

            <!-- 課程目標 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="experience">
                課程目標
              </label>
              <div class="w-full md:w-4/5">
                <textarea id="experience" placeholder="請輸入課程目標"
                  class=" py-3 px-4 w-full p-1 resize border border-gray-500 rounded focus:border-gray-700 focus:shadow-none focus:outline-none text-sm">
                </textarea>
              </div>
            </div>

            <!-- 課前預習 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
                課前預習
              </label>
              <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name" type="text" placeholder="請輸入url">
            </div>

            <!-- 課前預習 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
                課後預習
              </label>
              <input class="md:w-4/5 appearance-none border-gray-500 focus:border-gray-900 block w-full  text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name" type="text" placeholder="請輸入url">
            </div>

            <div class="flex w-full mb-2 md:mb-4 flex-wrap">
              <!-- 指定教師 -->
              <div class="w-full md:w-1/3 px-3 md:flex">
                <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2" for="address">
                  指定教師
                </label>
                <div class="w-full md:w-2/3 md:flex">
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
              <!-- 指定教室 -->
              <div class="px-3 md:flex w-full md:w-1/3">
                <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2" for="address">
                  指定教室
                </label>
                <div class="w-full md:w-2/3 md:flex">
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
            </div>

            <div class="flex w-full mb-2 md:mb-4 flex-wrap">
              <!-- 人數班制 -->
              <div class="w-full md:w-1/3 px-3 md:flex mb-4 md:mb-0">
                <label class="md:pt-2 tracking-wide text-sm md:w-1/3" for="address">
                  人數班制
                </label>
                <div class="w-full md:w-2/3 md:flex">
                  <div class="relative text-sm w-full md:w-48 md:mr-2">
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
              <!-- 最高人數 -->
              <div class="w-1/2 md:w-1/3 px-3 flex">
                <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                  最高人數
                </label>
                <div class="w-full md:w-2/3 md:flex">
                  <input type="number" id="tentacles" name="tentacles" class="border rounded"
                          min="1" max="100" value="1">
                </div>
              </div>
              <!-- 最低人數 -->
              <div class="w-1/2 md:w-1/3 px-3 flex">
                <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                  最低人數
                </label>
                <div class="w-full md:w-2/3 md:flex">
                  <input type="number" id="tentacles" name="tentacles" class="border rounded"
                        min="1" max="100" value="1">
                </div>
              </div>
            </div>

            <!-- 課程日期 -->
            <div class="md:flex w-full mb-2 md:mb-4 flex-wrap">
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

            <!-- 費用類型 -->
            <div class="md:flex w-full mb-2 md:mb-4">
              <!-- 費用類型 -->
              <div class="w-full md:w-1/3 px-3 md:flex mb-4 md:mb-0">
                <label class="md:pt-2 md:w-1/3 tracking-wide text-sm mb-2" for="address">
                  費用類型
                </label>
                <div class="w-full md:w-2/3 md:flex">
                  <div class="relative text-sm w-full md:w-48 md:mr-2">
                    <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                      >
                      <option value="31">一般點數</option>
                    </select>
                    <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 點數 -->
              <div class="w-1/2 md:w-1/3 px-3 flex">
                <label class="md:w-1/3 md:pt-2 tracking-wide text-sm mb-2 whitespace-no-wrap" for="address">
                  點數
                </label>
                <div class="w-full md:w-2/3 md:flex">
                  <input type="number" id="tentacles" name="tentacles" class="border rounded"
                        min="1" max="100" value="1">
                </div>
              </div>
            </div>

            <!-- 站別 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="name">
                上架站別
              </label>
              <div class="w-full md:w-2/5 flex items-center">
                <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap mx-1">
                  <!-- <i class="far fa-check-square mr-2"></i> -->
                  <i class="fas fa-square"></i>
                  台灣站</button>
                <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap mx-1">
                  <!-- <i class="far fa-check-square mr-2"></i> -->
                  <i class="fas fa-square"></i>
                  企業站</button>
                <button class="button-verified py-3 rounded w-full text-sm whitespace-no-wrap mx-1">
                  <!-- <i class="far fa-check-square mr-2"></i> -->
                  <i class="fas fa-square"></i>
                  大陸站</button>
              </div>
            </div>

            <!-- 課程狀態 -->
            <div class="w-full px-3 mb-2 md:mb-4 md:flex">
              <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="address">
                課程狀態
              </label>
              <div class="w-full md:w-4/5 md:flex">
                <div class="relative text-sm w-full md:w-48 md:mr-2">
                  <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                    >
                    <option value="31">草稿</option>
                  </select>
                  <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex mt-3 md:mb-4 w-full lg:pt-6 justify-end px-2">
          <button class="button-main py-3 px-8 md:px-12 rounded w-full md:w-1/5 text-sm whitespace-no-wrap">
            建立
          </button>
        </div>
      </form>
      <div v-if="tag === 1">
        <div class="flex justify-between flex-col md:flex-row  bg-white mb-4 py-3 shadow-lg px-4" v-for="n in 4" :key="n">
          <div class="flex items-center mx-2 text-xl">
            <h5 class=" mx-2">第 {{ n }} 堂</h5>
            <h5 class="font-semibold mx-2">一對一課程(25分鐘)</h5>
          </div>
          <div class="flex items-center mx-2 text-lg">
            <h5 class=" mx-1">Unit{{ n }}</h5>
            <h5 class="font-semibold mx-1">落葉的美</h5>
          </div>
          <div class="flex items-center">
            <div class="flex items-center mx-2">
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1">
                <img :src="require('@/assets/img/icons/list.svg')" alt="" class="h-6 object-contain noData">
              </button>
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1">
                <img :src="require('@/assets/img/icons/film.svg')" alt="" class="h-6 object-contain noData">
                <!-- <img src="@/assets/img/icons/film_active.svg" alt="" class="h-6 object-contain hasData"> -->
              </button>
            </div>
            <div class="flex items-center mx-2">
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <!-- <img src="@/assets/img/icons/file.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/file_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
              <button @click="toPreview"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <!-- <img src="@/assets/img/icons/before_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/before_test_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
              <button @click="toReview"
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1 isActive"
                >
                <!-- <img src="@/assets/img/icons/after_test.svg" alt="" class="h-6 object-contain noData"> -->
                <img :src="require('@/assets/img/icons/after_test_active.svg')" alt="" class="h-6 object-contain hasData">
              </button>
            </div>
            <div class="flex items-center mx-2">
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img src="@/assets/img/icons/edit.svg" alt="" class="w-6 object-contain">
              </button>
              <button
                class="text-primary-normal hover:text-black-1  hover:bg-gray-600 mx-1"
                >
                <img src="@/assets/img/icons/delete.svg" alt="" class="w-6 object-contain">
              </button>
            </div>
            <div class="flex flex-col ml-4 font-light justify-center">
              <i class="fas fa-minus"></i>
              <i class="fas fa-minus"></i>
              <i class="fas fa-minus"></i>
              <i class="fas fa-minus"></i>
              <i class="fas fa-minus"></i>
            </div>
          </div>
        </div>
      </div>
      <div v-if="tag === 2">
        <div class="flex items-center py-6 lg:py-8 px-3 bg-white mb-5 flex-wrap font-bold">
          <div class="w-full lg:w-1/3 flex px-4 items-center mb-2 lg:mb-0">
            <label for="" class="whitespace-no-wrap w-1/3 px-2">課程開始時間</label>
            <date-picker
              class="w-2/3"
              v-model="value1"
              format="YYYY-MM-DD"
              type="date"
              placeholder="請選擇日期"
            ></date-picker>
          </div>
          <div class="w-full lg:w-1/3 flex px-4 items-center mb-2 lg:mb-0">
            <label for="" class="whitespace-no-wrap w-1/3 px-2">課程時間從</label>
            <div class="w-2/3 flex items-center">
              <date-picker v-model="value3" type="time" placeholder="Select time"></date-picker>
              <span class="mx-2">到</span>
              <date-picker v-model="value4" type="time" placeholder="Select time"></date-picker>
            </div>
          </div>
          <div class="w-full lg:w-1/3 flex px-4 items-center">
            <label for="" class="whitespace-no-wrap w-1/3  px-2">時段重複設定</label>
            <div class="relative text-sm w-2/3">
              <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
                >
                <option value="">每周 星期一</option>
                <option value="">每周 星期二</option>
                <option value="">每周 星期三</option>
                <option value="">每周 星期四</option>
                <option value="">每周 星期五</option>
                <option value="">每周 星期六</option>
                <option value="">每周 星期日</option>
              </select>
              <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white">
          <Calender class="" />
        </div>
      </div>

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
  import Calender from '@/components/modules/Calender'
  export default {
    name: 'AddTalkClass',
    components: {
      DatePicker,
      NoData,
      Calender
    },
    data () {
      return {
        isData: true,

        tag: 2,
        time: null,
        value1: null,
        value2: null,
        value3: null,
        value4: null
      }
    },
    mounted() {

    },
    methods: {
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
</style>