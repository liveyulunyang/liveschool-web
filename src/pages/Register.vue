<template>
  <main class="container p-6">
    <div class="bg-blue-main-dark text-white py-4 tracking-wider">
      <h3 class="font-bold text-lg">免費註冊</h3>
    </div>
    <div class="bg-white py-6 px-6 md:px-16 text-left">
      <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">
        <div class="w-full bg-white rounded py-2 lg:p-4 flex flex-col justify-between leading-normal mb-4">
          <div class="flex flex-wrap textColorblack">
            <!-- 電子信箱 -->
            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-3/12 xl:w-2/12 text-right px-2" for="email">
                <span class="text-red-600">*</span> 電子信箱
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="email" type="email" placeholder="請輸入有效的e-mail，完成驗證能收到系統通知">
              </div>
            </div>
            <!-- * 密碼 -->
            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-3/12 xl:w-2/12 text-right px-2" for="password">
                <span class="text-red-600">*</span> 密碼
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="password" type="password" placeholder="密碼最小長度為 6 字元">
              </div>
            </div>
            <!-- * 確認密碼 -->
            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-3/12 xl:w-2/12 text-right px-2" for="password_check">
                <span class="text-red-600">*</span>確認密碼
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="password_check" type="password" placeholder="請再次輸入您設定的密碼">
              </div>
            </div>
            <!-- * 姓名 -->
            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-3/12 xl:w-2/12 text-right px-2" for="name">
                <span class="text-red-600">*</span>姓名
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="name" type="text" placeholder="登入系統後將顯示您所填寫的名稱">
              </div>
            </div>
            <!-- * 英文姓名 -->
            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-3/12 xl:w-2/12 text-right px-2" for="nameEn">
                <span class="text-red-600">*</span>英文姓名
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="nameEn" type="text" placeholder="請輸入班主任的聯絡信箱，以方便聯繫">
              </div>
            </div>
            <!-- * 行動電話 -->
            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-3/12 xl:w-2/12 text-right px-2" for="mobile">
                <span class="text-red-600">*</span>行動電話
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12 flex justify-between">
                <input class="w-1/4 lg:w-1/12 mr-2 appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="mobile_area" type="text" placeholder="886">
                <input class="flex-1 appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="mobile" type="text" placeholder="請輸入有效的手機號碼，完成驗證能收到系統通知">
              </div>
            </div>
            <!-- * 班主任電子信箱 -->
            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-3/12 xl:w-2/12 text-right px-2" for="email_director">
                <span class="text-red-600">*</span>班主任電子信箱
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="email_director" type="email" placeholder="請輸入班主任的聯絡信箱，以方便聯繫">
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-full font-bold mb-2">
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
            </div>
            <div class="ml-3">
              <label for="remember" class="font-medium text-gray-900">我同意</label>
            </div>
          </div>
          <router-link :to="{ name: 'policy' }" @click.native="close" class="underline cursor-pointer text-blue-600 ml-2"> «LiveTalk 線上授課學員公約»</router-link>
        </div>
        <div class="md:flex w-full justify-center px-3">
          <button class="btn-main py-3 rounded text-sm whitespace-no-wrap mx-1 text-white w-full md:w-1/3 font-bold" @click="success">
            註冊
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Register',
    components: {
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
      success () {
        this.$swal.fire({
          icon: 'success',
          title: '註冊成功',
          text: '系統將自動轉跳至登入頁面......',
          showConfirmButton: false,
          iconColor: '#91DAE4'
        })
      }
    }
  }
</script>
<style>
</style>