<template>
  <div class="ClassModule overflow-hidden relative h-full flex-col justify-between web bg-library shadow-lg">
    <a class="cursor-pointer" @click="checkRouter">
      <div class="outer overflow-hidden">
        <div class="flag absolute top-0 text-white z-50 bg-second-red px-2 py-2 text-xl font-semibold">
          <span>3點</span>
        </div>
        <div class="inner mx-auto absolute w-full h-full">
          <img
            class="w-full h-full block object-cover"
            src="@/assets/img/home/class.png"
          >
        </div>

      </div>

      <div class="flex-grow flex flex-col justify-between py-4 px-3">
        <div class="w-full flex flex-col justify-between leading-normal">
          <div class="tag flex text-white text-xs mb-4">
            <span class="px-2 py-1 bg-class-purple-01 mx-1 rounded">親子教養</span>
            <span class="px-2 py-1 bg-class-purple-02 mx-1 rounded">單字應用</span>
          </div>

          <div class="flex justify-between mb-2 font-bold" v-if="classType === 'talk'">
            <p class="text-main">2021.11.28</p>
            <p class="text-class-red-02">16:00~16:40</p>
          </div>

          <div class="itemName mb-2">
            <div class="title text-left tracking-wider">
              <p class="text-class-red-02 font-bold text-lg" v-if="classType === 'teacher'">每週一堂，每堂90分鐘，每期10堂課</p>
              <h5 class="whitespace-pre-wrap font-bold mb-1 text-2xl">老師希望你別再說錯的 英語易混淆字！</h5>
              <h6 class="whitespace-pre-wrap">精準剖析多益文法考點！</h6>
              <p class="text-class-red-02 font-bold text-lg mt-1" v-if="classType === 'class'">限期優惠8點，原價11點</p>
            </div>
            <div class="book">
              <hr class="my-3">
              <div class="flex justify-between mb-2 font-bold items-center">
                <p class="text-main" v-if="classType === 'teacher'">同學 5/30 人</p>
                <p class="text-main" v-if="classType === 'talk'">名額：６　正取：6　備取﹕0</p>
                <div v-if="classType === 'class'" class="text-left">
                  <p class="text-main">課時 788 分鐘</p>
                  <p class="text-main">同學 888 人</p>
                </div>
                <!-- <button class="btn-red py-3 px-6 rounded text-lg whitespace-no-wrap text-center font-bold text-white" v-if="classType === 'talk' || classType === 'class'">
                  預約
                </button> -->
                <button class="bg-class-blue py-3 px-6 rounded text-lg whitespace-no-wrap text-center font-bold text-white" v-if="classType === 'talk' || classType === 'class'">
                  候補
                </button>
                <button class="btn-red py-3 px-6 rounded text-lg whitespace-no-wrap text-center font-bold text-white" v-if="classType === 'teacher'">
                  3,450 元
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
/* eslint-disable no-unused-expressions */
// import axios from 'axios'
export default {
  name: 'ClassModule',
  props: {
  },
  data () {
    return {
    }
  },
  mixins: [
  ],
  computed: {
    classType () {
      return this.$route.params.type
    }
  },
  methods: {
    checkRouter () {
      if (this.$route.params.type === 'talk') {
        this.$router.push({name: 'classPreviewTalk', params: { id: '1' } })
      } else if (this.$route.params.type === 'class') {
        this.$router.push({name: 'classPreview', params: { id: '1' } })
      } else if (this.$route.params.type === 'teacher') {
        this.$router.push({name: 'classPreviewTeacher', params: { id: '1' } })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .web {
    &:hover {
      img {
        transform: scale(1.2);
        transform-origin: center;
      }
    }
  }
  .ClassModule {
    .progressiveImg {
      overflow: visible;
    }
    .item_borderB {
      border-bottom-width: 1px !important;
    }
    .outer {
      position: relative;
      width: 100%;
      background:white;
      display: block;
      .flag {
        position: relative;
        left: 5%;
        &:before {
          position: absolute;
          right: 0;
          bottom: -13px;
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 13px 0px 0 24px;
          border-color: #FC5649 transparent transparent transparent;
        }
        &:after {
          position: absolute;
          left: 0;
          bottom: -13px;
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 13px 24px 0 0px;
          border-color: #FC5649 transparent transparent transparent;
        }
      }
      &:after {
        content: "";
        display: block;
        padding-bottom: 70%;
        margin-bottom: 10px;
      }
      .inner {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        img {
          transition: .3s;
        }
      }
    }
    .itemName {
      .title {
        h5 {
          color: black;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: normal;
        }
        h6 {
          color: #999999;
        }
      }
      .book {
        hr {
          border-color: #999999;
        }
        p {
          color: #999999;
        }
      }
    }
    .level {
      p {
        color: #5F5F5F;
      }
    }
  }
  .bg-library {
    background-color: #F7F7F5;
  }
</style>
