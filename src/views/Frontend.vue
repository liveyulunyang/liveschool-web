<template>
  <main class="flex items-start overflow-hidden" id="Front">
    <Applaud v-if="isShowApplaud" />
    <Cheer v-if="isShowCheer" />
    <DingDong  v-if="isShowDingDong" />
    <div class="w-full h-screen">
      <router-view></router-view>
    </div>
    <div class="bg-gray-300 shadow-lg form-right h-screen fixed right-0 lg:relative" :class="{ formOpen: isShowForm }">
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
          <div class="studentList bg-white p-1 scroll-bar">
            <div class=" w-full flex justify-between items-center text-gray-900 p-2 py-3 h-12" v-for="(item, index) in student" :key="index">
              <div class="flex items-center text-base">
                <img src="@/assets/img/frontend/pic_student_head.png" alt="" class="object-contain w-6 mr-2">
                <h6 class="font-black">{{ item.name }}</h6>
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
              <div v-if="gameIdx === 0" class="flex flex-col w-full">
                <div class="flex py-4 px-1 border-b-2 border-black">
                  <div class="w-3/4 flex items-center px-2 text-black font-bold">
                    <span>抽</span>
                    <input v-model="selectNum" type="number" min="1" :max="student.length - 1" class="border w-full mx-2 border-black rounded text-center">
                    <span>人</span>
                  </div>

                  <div class="w-1/4 px-2">
                    <a class="btn-main text-white px-3 py-2 block text-center rounded cursor-pointer" @click="randomPeople">Go</a>
                  </div>
                </div>

                <div class="selectedList">
                  <div class="w-full flex justify-between items-center text-gray-900 p-2 py-3 h-12 bg-gray-200 my-2" v-for="(item, index) in selectedstudent" :key="index">
                    <div class="flex items-center text-base">
                      <img src="@/assets/img/frontend/pic_student_head.png" alt="" class="object-contain w-6 mr-2">
                      <h6 class="font-black">{{ item.name }}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="" v-if="gameIdx === 1">
                <div class="w-full py-4 px-3">
                  <a class="btn-main text-white px-3 py-1 block text-center rounded cursor-pointer mb-4" @click="shakeDice">開始</a>

                  <div>
                    <img :src="require('@/assets/img/frontend/ani_01_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="diceNum === null">
                    <img :src="require('@/assets/img/frontend/ani_02_01_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="diceNum === 1">
                    <img :src="require('@/assets/img/frontend/ani_02_02_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="diceNum === 2">
                    <img :src="require('@/assets/img/frontend/ani_02_03_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="diceNum === 3">
                    <img :src="require('@/assets/img/frontend/ani_02_04_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="diceNum === 4">
                    <img :src="require('@/assets/img/frontend/ani_02_05_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="diceNum === 5">
                    <img :src="require('@/assets/img/frontend/ani_02_06_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="diceNum === 6">
                  </div>
                </div>

              </div>
              <div class="" v-if="gameIdx === 2">
                <div class="flex py-4 px-1 border-b-2 border-black">
                  <div class="w-3/4 flex items-center px-2 text-black font-bold whitespace-no-wrap">
                    <span class="">倒數</span>
                    <input :disable="isCountDown === true" type="text" class="border w-12 mx-2 border-black rounded text-center" v-model="min">
                    <span class="">:</span>
                    <input :disable="isCountDown === true" type="text" class="border w-12 mx-2 border-black rounded text-center" v-model="sec">
                  </div>

                  <div class="w-1/4 px-2">
                    <a class="btn-main text-white px-3 py-2 block text-center rounded cursor-pointer" @click="startCountDown" v-if="isCountDown === null || isCountDown === false">Go</a>
                    <a class="btn-main text-white px-3 py-2 block text-center rounded cursor-pointer" @click="stopCountDown" v-if="isCountDown === true">Stop</a>
                  </div>
                </div>

                <div class="px-3">
                  <img :src="require('@/assets/img/frontend/ani_03_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="isCountDown === null">
                  <img :src="require('@/assets/img/frontend/ANI_04_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="isCountDown === true">
                  <img :src="require('@/assets/img/frontend/ANI_05_ok.gif') + '?' + new Date().getTime()" alt="" class="object-contain" v-if="isCountDown === false">
                </div>
              </div>
              <div class="" v-if="gameIdx === 3">
                <div class="w-full py-4 px-3">
                  <a class="btn-main text-white px-3 py-1 block text-center rounded cursor-pointer mb-4" @click="openApplaud">拍手</a>
                  <a class="btn-main text-white px-3 py-1 block text-center rounded cursor-pointer mb-4" @click="openCheer">歡呼</a>
                  <a class="btn-main text-white px-3 py-1 block text-center rounded cursor-pointer" @click="openDingDong">讚</a>
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
import DingDong from '@/components/startClass/DingDong'
export default {
  name: 'Front',
  data () {
    return {
      gameIdx: 0,
      isHddenScore: false,

      isShowForm: false,
      step: 0,

      showfirstModal: false,

      // 選人
      selectNum: 2,
      student: [
        { name: 'Alex' },
        { name: 'Peggy' },
        { name: 'Leo' },
        { name: 'Rex' },
        { name: 'Crystal' },
        { name: 'Amy' },
        { name: 'Annie' },
        { name: 'Annie' },
        { name: 'Annie' },
        { name: 'Annie' }
      ],
      selectedstudent: [],
      // 骰子
      diceNum: null,
      // 倒數計時
      min: '0',
      sec: '10',
      isCountDown: null,
      timer: 0,
      // 效果
      isShowApplaud: false,
      isShowCheer: false,
      isShowDingDong: false
    }
  },
  components: {
    Applaud,
    Cheer,
    DingDong
  },
  computed: {
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy() {
    clearTimeout(this.timer)
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
        return delay('b', 2000)
      }).then(() => {
        self.isShowCheer = false
      })
    },
    async openDingDong () {
      let self = this

      var delay = (r,s) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([r,s])
        }, s)
        })
      }

      delay('a', 0).then(() => {
        self.isShowDingDong = true
        return delay('b', 2000)
      }).then(() => {
        self.isShowDingDong = false
      })
    },

    randomPeople () {
      let self = this
      if (self.selectedstudent !== []) {
        var delay = (r,s) => {
          return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([r,s])
          }, s)
          })
        }

        delay('a', 0).then(() => {
          self.$data.selectedstudent = self.$options.data().selectedstudent
          return delay('b', 1)
        }).then(() => {
          self.randomPeopleFunc()
        })
      } else {
        self.randomPeopleFunc()
      }
    },
    randomPeopleFunc () {
      let self = this
      let arr = []
      let selectNum = Number(self.selectNum)
      for (let i = 0; i < selectNum; i++) {
        let f = Math.floor(Math.random() * self.student.length)
        if (arr.indexOf(f) === -1) {
          arr.push(f)
        }
      }
      console.log(arr.length)
      console.log(selectNum)
      if (arr.length < selectNum) {
        self.randomPeople()
      }
      if (arr.length === selectNum) {
        console.log(arr)
        for (let j = 0; j < arr.length; j++) {
          self.selectedstudent.push(self.student[arr[j]])
        }
        console.log(self.selectedstudent)
      }
    },
    shakeDice () {
      let self = this
      self.diceNum = Math.floor(Math.random() * 6) + 1
    },
    stopCountDown () {
      let self = this
      self.isCountDown = false
      clearTimeout(this.timer)
    },
    startCountDown () {
      // 倒數計時
      let self = this

      if (self.min !== '00' || self.sec !== '00' && self.isCountDown === null) {
        var delay = (r,s) => {
          return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([r,s])
          }, s)
          })
        }

        delay('a', 0).then(() => {
          self.isCountDown = true
          self.calculateCountDown()
          return delay('b', Number(self.min) * 60000 + Number(self.sec) * 1000)
        }).then(() => {
          self.isCountDown = false
        })
      }
    },
    calculateCountDown () {
      let self = this
      var timeArray = [Number(self.min), Number(self.sec)]
      var m = timeArray[0]
      var s = self.checkSecond((timeArray[1] - 1))
      if (s == 59){
        m = m - 1
      }
      if (m < 0) {
        clearTimeout(self.timer)
        return
      }

      self.min = m
      self.sec = s
      self.timer = setTimeout(self.calculateCountDown, 1000)
    },
    checkSecond (sec) {
      if (sec < 10 && sec >= 0) {
        sec = '0' + sec
      }
      if (sec < 0) {
        sec = '59'
      }
      return sec
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
      @media (max-width: 1024px) {
        left: -5.5em;
        top: 20px;
      }
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
      height: calc(100vh / 2 - 60px);
    }
    .studentList {
      height: calc(100vh / 2 - 160px);
      overflow-y: scroll;
    }
    .selectedList {
      height: calc(100vh / 2 - 140px);
      // flex: 1 1 0% !important;
      overflow-y: scroll;
    }
  }
</style>
