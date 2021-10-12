<template>
  <main class="flex items-start" id="Front">
    <div class="w-full">
      <router-view></router-view>
    </div>
    <div class="bg-gray-300 relative shadow-lg form-right hidden lg:block h-screen" :class="{ formOpen: isShowForm }">
      <div class="booking-btn absolute text-sm cursor-pointer whitespace-no-wrap py-3 px-5" @click="isShowForm = !isShowForm">
        <a class="p-4 py-3 block bg-white shadow-lg rounded-lg">
          <i class="fas fa-arrow-right mr-1"></i>
        </a>
      </div>
      <div class="content-items">
        <div class="bg-white border-b-2 border-black mb-2 py-5">
          <img alt="" src="@/assets/logo.png" class="w-32 object-contain mx-auto">
        </div>
        <div class="flex flex-col p-2">
          <div class="bg-white w-full flex justify-between items-center text-gray-900 p-2 py-3" v-for="n in 6" :key="n">
            <div class="flex items-center text-base">
              <i class="fas fa-user mr-2"></i>
              <h6 class="font-black">Alex</h6>
            </div>
            <div class="flex" :class="{ hidden: isHddenScore }">
              <input type="text" value="1" class="w-12 border mx-1 text-center font-bold">
              <a class="block p-1"><i class="fas fa-plus-circle"></i></a>
              <a class="block p-1"><i class="fas fa-minus-circle"></i></a>
            </div>
          </div>
        </div>

        <div class="flex text-sm text-center">
          <div class="w-full p-2" v-if="isHddenScore">
            <a class="text-white w-full bg-gray-700 block py-2 rounded-lg cursor-pointer" @click="isHddenScore = false">Open Score</a>
          </div>
          <div class="w-1/2 p-2" v-if="!isHddenScore">
            <a class="text-white w-full bg-gray-700 block py-2 rounded-lg cursor-pointer" @click="isHddenScore = true">Hide Score</a>
          </div>
          <div class="w-1/2 p-2" v-if="!isHddenScore">
            <a class="text-white w-full bg-gray-700 block py-2 rounded-lg cursor-pointer">Clean Score</a>
          </div>
        </div>

        <div class="flex flex-col p-2">
          <div class="flex text-xl">
            <a @click="gameIdx = 0" class="p-2 py-3 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 0 }"><i class="fas fa-user-tag"></i></a>
            <a @click="gameIdx = 1" class="p-2 py-3 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 1 }"><i class="fas fa-dice"></i></a>
            <a @click="gameIdx = 2" class="p-2 py-3 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 2 }"><i class="fas fa-dna"></i></a>
            <a @click="gameIdx = 3" class="p-2 py-3 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 3 }"><i class="fas fa-user-tag"></i></a>
          </div>
          <div class="game-content bg-white w-full">
            <div v-if="gameIdx === 0">
              <div class="flex py-4 px-1 border-b-2 border-black">
                <div class="w-3/4 flex items-center px-2 text-black font-bold">
                  <span>抽</span>
                  <input type="text" class="border w-full mx-2 border-black rounded">
                  <span>人</span>
                </div>

                <div class="w-1/4 px-2">
                  <a href="" class="bg-gray-800 text-white px-3 py-2 block text-center rounded">Go</a>
                </div>
              </div>
            </div>
            <div class="" v-if="gameIdx === 1">
              <div>
                <img src="@/assets/img/frontend/dance.gif" alt="" class="object-contain">
              </div>
            </div>
            <div class="" v-if="gameIdx === 2">
              <div class="flex py-4 px-1 border-b-2 border-black">
                <div class="w-3/4 flex items-center px-2 text-black font-bold whitespace-no-wrap">
                  <span class="">倒數</span>
                  <input type="text" class="border w-12 mx-2 border-black rounded">
                  <span class="">:</span>
                  <input type="text" class="border w-12 mx-2 border-black rounded">
                </div>

                <div class="w-1/4 px-2">
                  <a href="" class="bg-gray-800 text-white px-3 py-2 block text-center rounded">Go</a>
                </div>
              </div>
            </div>
            <div class="" v-if="gameIdx === 3">
              <div class="w-full py-4 px-3">
                <a href="" class="bg-gray-800 text-white px-3 py-1 block text-center rounded">拍手</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import { Slide } from 'vue-burger-menu'
export default {
  name: 'Front',
  data () {
    return {
      gameIdx: 0,
      isHddenScore: false,

      isShowForm: false,
      step: 0,

      showfirstModal: false
    }
  },
  components: {
    // Slide
  },
  computed: {
  },
  mounted () {
  },
  updated () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .wFull {
    width: 100% !important;
  }
#Front {
  .booking-btn {
    left: -88px;
    top: 20px;
  }


  .tabAction {
    background: white;
  }
  .form-right {
    width: 0;
    transition: .4s;
    .content-items {
      transition: .3s;
      display: none;
    }
  }
  .formOpen {
    width: 369px;
    .content-items {
      display: block !important;
    }
  }
  .game-content {
    height: calc(100vh - 520px);
  }
}
</style>
