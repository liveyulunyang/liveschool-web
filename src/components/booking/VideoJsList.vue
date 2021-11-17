<template>
  <div class="z-50">
    <SupplementLearning v-if="isOpen" v-on:toggle="toggle" />
    <a class="clostBtn flex justify-end items-center text-white py-2 px-3 lg:hidden cursor-pointer" @click="close">關閉視窗<i class="far fa-times-circle text-2xl ml-2"></i></a>
    <ul id="accordion" class="accordion text-left">
      <li class="" v-for="n in 20" :key="n" :class="{ open: n === seletedIdx }">
        <div class="link" @click="seletedIdx = n"><span class="font-light mr-2 text-gray-light-0">Chapter {{n}}</span><span class=" font-bold">八大詞類五大句型</span><i class="fa fa-chevron-down"></i></div>
        <ul class="submenu" :class="{ block: n === seletedIdx }">
          <li class="flex justify-between items-center px-3" v-for="k in 3" :key="k">
            <div class="w-4/5 flex items-center">
              <a href="#" class="title block relative ">
                <i class="fas fa-lock text-sm text-gray-light-0"></i>
                <span class="text-gray-light-0 mr-2">Unit {{k}}</span>
                <span class="">八大詞類從零開始學起</span>
              </a>
              <span class="flex items-center justify-center text-white">
                <a class="btn-main mx-1 w-6 h-6 rounded-full flex items-center justify-center text-xs cursor-pointer"><i class="fas fa-download"></i></a>
                <a class="btn-main mx-1 w-6 h-6 rounded-full flex items-center justify-center text-xs cursor-pointer" @click="isOpen = true"><i class="far fa-file-alt"></i></a>
              </span>
            </div>
            <span class="text-white">11:11</span>
          </li>
          <!-- <li><a href="#" class="flex justify-between items-center relative"><i class="fas fa-lock text-sm hidden"></i><span>片語與子句秒懂</span><span><i class="fas fa-download"></i><i class="fas fa-file-alt"></i></span><span>11:11</span></a></li>
          <li><a href="#" class="flex justify-between items-center relative"><i class="fas fa-lock text-sm hidden"></i><span>五大基本句型—不及物動詞</span><span>11:11</span></a></li> -->
        </ul>
      </li>
    </ul> = true
  </div>
</template>

<script>
  import SupplementLearning from '@/components/booking/SupplementLearning'
  export default {
    name: "VideoJsList",
    // props: ['type','content'],
    data () {
      return {
        seletedIdx: 1,
        isOpen: false
      }
    },
    components: {
      SupplementLearning
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      close () {
        let self = this
        self.$emit('close', false)
      },
      toggle (close) {
        this.isOpen = close
      }
    }
  }
</script>

<style lang="scss" scoped>
// clostBtn
.clostBtn {
  background: #666666;
}
.text-gray-light-0 {
  color: #CCCCCC;
}

.accordion {
  height: calc(100%);
  overflow: hidden auto;
  width: 100%;
  background: #666666;
  .link {
    cursor: pointer;
    display: block;
    padding: 15px;
    color: #ffffff;
    font-weight: 700;
    border-bottom: 1px solid rgb(255, 255, 255);
    position: relative;
    &:hover {
      background: #333333;
    }
  }
  li {
    i.fa-lock {
      position: absolute;
      top: 16px;
      left: 10px;
      font-size: 18px;
      color: #CCCCCC;
      -webkit-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }
    i.fa-chevron-down {
      position: absolute;
      color: #CCCCCC;
      -webkit-transition: all 0.4s ease;
      -o-transition: all 0.4s ease;
      transition: all 0.4s ease;
      right: 12px;
      left: auto;
      font-size: 16px;
    }
    li.open i.fa-chevron-down {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    li.open .link { color: #ffffff; }
    .submenu {
      display: none;
      background: #666666;
      li {
        border-bottom: 1px solid #ccc;
      }
      .title {
        display: block;
        text-decoration: none;
        color: #ffffff;
        padding: 12px;
        padding-left: 30px;
        -webkit-transition: all 0.25s ease;
        -o-transition: all 0.25s ease;
        transition: all 0.25s ease;
      }
    }

  }
}

// scroll-bar
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>