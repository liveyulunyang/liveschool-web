<template>
  <main class="container p-6">
    <div class="bg-blue-main-dark text-white py-4 tracking-wider">
      <h3 class="font-bold text-lg">忘記密碼</h3>
    </div>
    <div class="bg-white py-6 px-6 md:px-16 text-left">
      <form action="javascript:void(0);" class="text-NotoSansRegular textColorblack mx-auto">
        <div class="w-full bg-white rounded py-2 lg:p-4 flex flex-col justify-between leading-normal">
          <div class="flex flex-wrap textColorblack">

            <div class="w-full px-3 mb-4 md:flex">
              <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-2/12 xl:w-1/12" for="email">
                <span class="text-red-600">*</span> 電子信箱
              </label>
              <div class="w-full md:w-10/12 xl:w-11/12">
                <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                  id="email" type="email" placeholder="">
              </div>
            </div>

          </div>
        </div>
        <div class="md:flex w-full justify-center px-3">
          <button class="btn-main py-3 rounded text-sm whitespace-no-wrap mx-1 text-white w-full md:w-1/3 font-bold" @click="success">
            寄送密碼重置連結
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'forgetPwd',
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
          title: '信件已寄出',
          text: '請至信箱點選密碼重置連結，以便輸入新的密碼',
          showConfirmButton: false,
          iconColor: '#91DAE4'
        })
      }
    }
  }
</script>
<style>
</style>