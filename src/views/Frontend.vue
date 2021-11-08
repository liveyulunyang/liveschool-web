<template>
  <main class="flex items-start" id="Front">
    <Applaud v-if="isShowApplaud" />
    <Cheer v-if="isShowCheer" />
    <div class="w-full h-screen">
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
        <div class="py-2 px-3">
          <div class="bg-white p-1">
            <div class=" w-full flex justify-between items-center text-gray-900 p-2 py-3 h-12" v-for="n in 6" :key="n">
              <div class="flex items-center text-base">
                <img src="@/assets/img/frontend/pic_student_head.png" alt="" class="object-contain w-6 mr-2">
                <h6 class="font-black">Alex</h6>
              </div>
              <div class="flex" :class="{ hidden: isHddenScore }">
                <input type="text" value="1" class="w-12 border mx-1 text-center font-bold">
                <a class="block p-1 text-main cursor-pointer"><i class="fas fa-plus-circle"></i></a>
                <a class="block p-1 text-main cursor-pointer"><i class="fas fa-minus-circle"></i></a>
              </div>
            </div>
          </div>

          <div class="flex text-sm text-center py-4">
            <div class="w-full px-2" v-if="isHddenScore">
              <a class="text-white w-full btn-main block py-2 rounded-lg cursor-pointer" @click="isHddenScore = false">Open Score</a>
            </div>
            <div class="w-1/2 pr-2" v-if="!isHddenScore">
              <a class="text-white w-full btn-main block py-2 rounded-lg cursor-pointer" @click="isHddenScore = true">Hide Score</a>
            </div>
            <div class="w-1/2 pl-2" v-if="!isHddenScore">
              <a class="text-white w-full btn-main block py-2 rounded-lg cursor-pointer">Clean Score</a>
            </div>
          </div>

          <div class="flex flex-col">
            <div class="flex text-xl">
              <a @click="gameIdx = 0" class="p-1 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 0 }">
                <img src="@/assets/img/frontend/btn_select_off.svg" alt="" class="object-contain"  v-if="gameIdx !== 0">
                <img src="@/assets/img/frontend/btn_select_on.svg" alt="" class="object-contain"  v-if="gameIdx === 0">
              </a>
              <a @click="gameIdx = 1" class="p-1 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 1 }">
                <img src="@/assets/img/frontend/btn_dice_off.svg" alt="" class="object-contain"  v-if="gameIdx !== 1">
                <img src="@/assets/img/frontend/btn_dice_on.svg" alt="" class="object-contain"  v-if="gameIdx === 1">
              </a>
              <a @click="gameIdx = 2" class="p-1 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 2 }">
                <img src="@/assets/img/frontend/btn_time_off.svg" alt="" class="object-contain"  v-if="gameIdx !== 2">
                <img src="@/assets/img/frontend/btn_time_on.svg" alt="" class="object-contain"  v-if="gameIdx === 2">
              </a>
              <a @click="gameIdx = 3" class="p-1 cursor-pointer rounded-t-lg w-12 flex justify-center items-center" :class="{ tabAction: gameIdx === 3 }">
                <img src="@/assets/img/frontend/btn_celebrate_off.svg" alt="" class="object-contain" v-if="gameIdx !== 3">
                <img src="@/assets/img/frontend/btn_celebrate_on.svg" alt="" class="object-contain" v-if="gameIdx === 3">
              </a>
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
                    <a href="" class="bg-gray-800 text-white px-3 py-2 block text-center rounded cursor-pointer">Go</a>
                  </div>
                </div>
              </div>
              <div class="" v-if="gameIdx === 3">
                <div class="w-full py-4 px-3">
                  <a class="btn-main text-white px-3 py-1 block text-center rounded cursor-pointer mb-4" @click="openApplaud">拍手</a>
                  <a class="btn-main text-white px-3 py-1 block text-center rounded cursor-pointer mb-4" @click="openCheer">歡呼</a>
                  <!-- <a class="bg-gray-800 text-white px-3 py-1 block text-center rounded cursor-pointer" @click="openApplaud">叮咚</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Applaud from '@/components/startClass/Applaud'
import Cheer from '@/components/startClass/Cheer'
export default {
  name: 'Front',
  data () {
    return {
      gameIdx: 0,
      isHddenScore: false,

      isShowForm: false,
      step: 0,

      showfirstModal: false,

      isShowApplaud: false,
      isShowCheer: false
    }
  },
  components: {
    Applaud,
    Cheer
  },
  computed: {
  },
  mounted () {
  },
  updated () {
  },
  methods: {
    async openApplaud () {
      let self = this

      var delay = (r,s) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([r,s])
        }, s)
        })
      }

      delay('a', 0).then(() => {
        self.isShowApplaud = true
        return delay('b', 5000)
      }).then(() => {
        self.isShowApplaud = false
      })
    },
    async openCheer () {
      let self = this

      var delay = (r,s) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([r,s])
        }, s)
        })
      }

      delay('a', 0).then(() => {
        self.isShowCheer = true
        return delay('b', 5000)
      }).then(() => {
        self.isShowCheer = false
      })
    }
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
