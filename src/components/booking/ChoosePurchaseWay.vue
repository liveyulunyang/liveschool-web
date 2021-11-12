<template>
  <div>
    <div class="popBg" @click="close"></div>

    <div class="popup fixed w-full max-w-4xl">

      <div class="bg-blue-main-dark w-full py-3">
        <h2 class="text-white text-2xl">選擇購買方式</h2>
      </div>
      <div class="px-3 md:px-8 py-6">
        <div class="mb-4 flex">

          <div class="bg-white px-2 py-2 shadow-md transition duration-500 w-full flex borderGreen mb-3 border-l-4 borderGreen flex-col md:flex-row">
            <div class="md:w-2/12 p-1"><img src="@/assets/img/classImg.png" alt="" class="mx-auto object-contain max-w-full"></div>
            <div class="md:w-2/12 p-1 flex items-center justify-center"><p>國中升學</p></div>
            <div class="md:w-2/12 p-1 flex items-center justify-center"><p>英文</p></div>
            <div class="md:w-2/12 p-1 flex items-center justify-center"><p>多語達人的英文單字記憶撇步</p></div>
            <div class="md:w-4/12 p-1 flex items-center justify-center md:justify-end">
              <button class="btn-red py-3 px-4 rounded text-lg whitespace-no-wrap text-center font-bold text-white">
                3 點
              </button>
            </div>
          </div>

        </div>

        <div class="flex justify-center text-xl md:text-2xl mb-6">
          <button class="font-bold py-4 rounded-lg w-1/2 md:w-1/3 mx-2 border-2" :class="{ active: isPoint }" @click="isPoint = true">使用點數</button>
          <button class="font-bold py-4 rounded-lg w-1/2 md:w-1/3 mx-2 border-2" :class="{ active: !isPoint }" @click="isPoint = false">上課兌換序號輸入</button>
        </div>

        <div class="mb-6 w-full" v-if="isPoint">
          <div class="mx-auto bg-white w-full py-8 md:py-12 px-4 md:px-6 flex justify-center text-xl font-bold">
            <div class="w-full md:w-3/5 flex">
              <p class="flex-1">目前點數</p>
              <p class="flex-1">666</p>
              <p class="flex-1">-3</p>
              <p class="flex-1 text-red-600">=663</p>
            </div>
          </div>
        </div>
        <div class="mb-6" v-if="!isPoint">
          <form action="javascript:void(0);" class="mx-auto bg-white w-full py-12 px-6">
            <!-- <div class="w-full bg-white rounded py-2 lg:p-4 flex flex-col justify-between leading-normal"> -->
              <div class="flex flex-wrap textColorblack">

                <div class="w-full px-3 mb-4 md:flex">
                  <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-2/12 xl:w-2/12" for="email">
                    輸入序號
                  </label>
                  <div class="w-full md:w-10/12 xl:w-10/12">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="">
                  </div>
                </div>
                <div class="w-full px-3 mb-4 md:flex">
                  <label class="md:pt-2 md:text-sm tracking-wide text-sm mb-2 w-full md:w-2/12 xl:w-2/12" for="email">
                    輸入密碼
                  </label>
                  <div class="w-full md:w-10/12 xl:w-10/12">
                    <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                      id="email" type="email" placeholder="">
                  </div>
                </div>
              </div>
            <!-- </div> -->
          </form>
        </div>
        <div class="flex justify-center text-lg">
          <button class="btn-main text-white font-bold py-3 rounded mx-2 px-8">確認購買</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChoosePurchaseWay',

  data () {
    return {
      isPoint: true
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
      let self = this
      self.$emit('toggle', false)
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
    background-color: #DEECF0;
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

  button {
    color: #A5C3C7;
    border-color: #A5C3C7;
  }
  .active {
    background: #0F455C;
    border-color: #0F455C;
    color: #ffffff;
  }
</style>
