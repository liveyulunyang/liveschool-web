<template>
  <div>
    <div class="popBg" @click="close"></div>

    <div class="popup fixed">
      <div class="popup__inner fixed z-40 pt-6 pb-5 px-4 md:px-10 bg-white max-w-lg rounded">
        <div class="popup__header text-NotoSansRegular textColorRed text-base mb-5 flex items-center">
          <!-- <span>{{ moment(new Date()).format('M/DD') }} 每日一句</span> -->
          <!-- <span v-if="dailyContent.category.name !== null">【{{ dailyContent.category.name }}】</span> -->
        </div>
        <div class="popup__body text-NotoSansRegular text-base mb-8">
          <!-- <p class="mb-3 whitespace-pre-wrap textColorDarkBlack">{{ dailyContent.english }}</p>
          <p class="whitespace-pre-wrap textColorDarkBlack">{{ dailyContent.local }}</p> -->
        </div>
        <div class="popup__buttons flex justify-between items-center">
          <div class="w-1/3"></div>
          <a class="button-gray px-8 py-2 rounded text-sm text-NotoSansRegular border borderColordarkgray cursor-pointer"
            @click.prevent="close">
            關閉
          </a>
          <router-link :to="{ name: 'dailySentence' }" @click.native="close" class="w-1/3 text-sm underline text-NotoSansRegular">看更多每日一句</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DailySentence_pop',

  data () {
    return {
      isPlaying: false
    }
  },

  props: {
    dailyContent: {
      type: Object
    }
  },

  methods: {
    close () {
      // let self = this
      // self.$emit('close', false)
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
  z-index: 1000;
  .popup__inner {
    top: 45%;
    left: 0;
    right: 0;
    margin: 0 auto;
    line-height: 1.5;
    letter-spacing: .05em;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    -ms-transform: scale(0.3);
    -o-transform: scale(0.3);
    transform: scale(0.3);

    -webkit-animation-name: example;
    -webkit-animation-duration: .3s;
    animation-name: example;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    .popup__header {
      margin-bottom: 15px;
      font-size: 0.85em;
      font-weight: bold;
    }
    .popup__body {
      font-size: 0.85em;
    }
    .popup__buttons {
      text-align: right;
    }
  }
}
@-webkit-keyframes example {
  from {
    opacity: 0;
    margin-top: -77px;
    transform: scale(1);
  }
  to {
    opacity: 1;
    margin-top: -77px;
    transform: scale(1);
    }
}

/* Standard syntax */
@keyframes example {
  from {
    opacity: 0;
    margin-top: -77px;
    transform: scale(1);
  }
  to {
    opacity: 1;
    margin-top: -77px;
    transform: scale(1);
  }
}
</style>
