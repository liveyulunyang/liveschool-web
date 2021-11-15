<template>
  <div>
    <div class="popBg" @click="close"></div>

    <div class="popup fixed w-full max-w-4xl">

      <div class="bg-blue-main-dark w-full py-3 flex justify-between items-center px-3">
        <span></span>
        <h2 class="text-white text-2xl">補充學習</h2>
        <a @click="close" class="text-white cursor-pointer text-xl block py-1 px-3">
          <i class="fas fa-times"></i></a>
      </div>
      <div class="px-3 md:px-8 py-6">

        <div class="flex justify-center text-xl md:text-2xl mb-6">
          <button class="font-bold py-4 rounded-lg w-1/2 md:w-1/3 mx-2 border-2" :class="{ active: isPoint === 0 }" @click="isPoint = 0">全部</button>
          <button class="font-bold py-4 rounded-lg w-1/2 md:w-1/3 mx-2 border-2" :class="{ active: isPoint === 1 }" @click="isPoint = 1">單字</button>
          <button class="font-bold py-4 rounded-lg w-1/2 md:w-1/3 mx-2 border-2" :class="{ active: isPoint === 2 }" @click="isPoint = 2">選擇題</button>
        </div>

        <div class="mb-6 w-full" v-if="isPoint === 0 || isPoint === 1">
          <div class="mx-auto bg-white w-full py-8 md:py-12 px-4 md:px-6 flex justify-center text-xl font-bold">

            <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-gray-1">
              <div class="flex flex-wrap textColorblack">

                <div class="w-full px-3 py-3 md:flex">
                  <label class="md:pt-2 md:w-2/12 tracking-wide text-sm mb-2" for="email">
                    單字
                  </label>
                  <div class="w-full md:w-10/12 flex items-center flex-wrap">
                    <div class="w-full md:w-2/5 px-1 flex items-center">
                      <span class="mr-2">1.</span>
                      <i class="fas fa-volume-up text-gray-1 mr-2 bg-gray-600 text-white p-2 rounded-full"></i>
                      <div class="w-full">
                        <h5 class="text-2xl">Carousel</h5>
                        <h6 class="text-base">[Carousel]</h6>
                      </div>
                    </div>
                    <div class="w-full md:w-1/5 px-1 flex items-center">
                      <p>n.(名詞)</p>
                    </div>
                    <div class="w-full md:w-2/5 px-1 flex items-center">
                      <h5 class="text-2xl">旋轉木馬</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-6 w-full" v-if="isPoint === 0 || isPoint === 2">
          <form action="javascript:void(0);" class="mx-auto bg-white w-full py-12 px-6 text-xl font-bold">
            <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-gray-1">
              <div class="flex flex-wrap textColorblack">

                <div class="w-full px-3 py-3 md:flex">
                  <label class="md:pt-2 md:w-2/12 tracking-wide text-sm mb-2" for="email">
                    選擇題
                  </label>
                  <div class="w-full md:w-10/12 flex items-center flex-wrap">
                    <div class="w-full flex items-center flex-wrap mb-2">
                      <div class="w-full px-1 flex items-center">
                        <span class="mr-2">1.</span>
                        <i class="fas fa-volume-up text-gray-1 mr-2 bg-gray-600 text-white p-2 rounded-full"></i>
                        <h6 class="text-left">Tom is really a naughty boy. He likes to _____ and play jokes on his younger sister when their parents are not around.</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full px-3 py-3 md:flex">
                  <label class="md:pt-2 md:w-2/12 tracking-wide text-sm mb-2 opacity-0" for="one_choice">
                    請勾選正確答案
                  </label>
                  <div class="w-full md:w-10/12 flex items-center flex-wrap">
                    <div class="px-2 flex items-center">
                      <a href="" class="border block w-full px-3 py-1">(A) alert</a>
                    </div>
                    <div class="px-2 flex items-center">
                      <a href="" class="border block px-3 py-1">(B) spare</a>
                    </div>
                    <div class="px-2 flex items-center">
                      <a href="" class="border block px-3 py-1">(C) tease</a>
                    </div>
                    <div class="px-2 flex items-center">
                      <a href="" class="border block px-3 py-1">(D) oppose</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
      isPoint: 0
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
