<template>
  <div>
    <div class="popBg" @click="close"></div>

    <div class="popup fixed w-full max-w-4xl px-4 md:px-6 lg:px-0 flex flex-col md:flex-row ">

        <div class="w-full md:w-1/2 bg-white">
          <form class="p-10  rounded flex justify-center items-center flex-col w-full">
            <h3 class="mb-5 text-3xl uppercase text-main font-bold">登入</h3>
            <input type="email" name="email" class="mb-5 p-3 w-full focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Email" required>
            <input type="password" name="password" class="mb-5 p-3 w-full focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Password" required>
            <button class="btn-main text-white font-bold py-2 rounded w-full" id="login"><span>登入</span></button>

            <div class="flex justify-between w-full mt-6">
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required="">
                </div>
                <div class="text-sm ml-3">
                <label for="remember" class="font-medium text-gray-900">記住我</label>
                </div>
              </div>
              <a class="underline cursor-pointer">忘記密碼</a>
            </div>
          </form>
        </div>
        <div class="w-full md:w-1/2 bg-blue-main-dark">
          <form class="p-10 rounded flex justify-between flex-col">
            <h3 class="mb-5 text-3xl uppercase text-white">免費註冊</h3>
            <p class="mb-3 text-lg text-white text-left">還沒有帳號？</p>
            <p class="mb-12 md:mb-20 text-lg text-white text-left">快點加入線上真人口說家教，開口說英語吧!</p>
            <button class="bg-white text-main w-full py-2 rounded font-bold" id="register"><span>免費註冊</span></button>
          </form>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',

  data () {
    return {
    }
  },

  props: {
  },

  components: {
  },
  computed: {
  },
  methods: {
    close () {
      console.log('f')
      let self = this
      self.$emit('toggleLogin', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .popBg {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed !important;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
  }
  .popup {
    width: auto;
    z-index: 9999 !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation-name: example;
    animation-duration: .2s;
    animation-fill-mode: forwards;
    .btn {
      bottom: 3%;
      right: 5%;
    }
    .popup_inner {
      img {
        max-height: 80vh;
      }
    }
  }

  @keyframes example {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      }
  }


</style>
