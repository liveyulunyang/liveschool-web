<template>
  <section class="h-full">
    <div class="ClassModule overflow-hidden relative h-full flex-col justify-between web hidden sm:flex bg-library shadow-lg">
      <a class="cursor-pointer">
        <div class="outer overflow-hidden">
          <div class="inner mx-auto absolute w-full h-full">

            <img
              class="w-full h-full block object-cover"
              src="@/assets/img/home/class.png"
            >

          </div>

        </div>
      </a>
      <div class="flex-grow flex flex-col justify-between py-4 px-3">
        <div class="w-full flex flex-col justify-between leading-normal">
          <div class="tag flex text-white text-xs mb-4">
            <span class="px-2 py-1 bg-class-purple-01 mx-1 rounded-lg">親子教養</span>
            <span class="px-2 py-1 bg-class-purple-02 mx-1 rounded-lg">單字應用</span>
          </div>

          <div class="itemName mb-2">
            <div class="title text-left tracking-wider">
              <h5 class="whitespace-pre-wrap font-bold mb-1 text-2xl">老師希望你別再說錯的 英語易混淆字！</h5>
              <h6 class="whitespace-pre-wrap">精準剖析多益文法考點！</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
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
  },
  methods: {
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
