<template>
  <div class="z-50">
    <a class="clostBtn flex justify-end items-center text-white py-2 px-3 lg:hidden cursor-pointer" @click="close">關閉視窗<i class="far fa-times-circle text-2xl ml-2"></i></a>
    <ul id="accordion" class="accordion text-left">
      <li class="" v-for="n in 10" :key="n" :class="{ open: n === seletedIdx }">
        <div class="link" @click="seletedIdx = n"><span class="font-light mr-2 chapter">Chapter {{n}}</span><span class=" font-bold">八大詞類五大句型</span><i class="fa fa-chevron-down"></i></div>
        <ul class="submenu" :class="{ block: n === seletedIdx }">
          <li class="flex justify-between items-center px-3" v-for="k in 3" :key="k">
            <div class="w-4/5 flex items-center">
              <a href="#" class="title block relative ">
                <i class="fas fa-lock text-sm chapter"></i>
                <span class="chapter mr-2">Unit {{k}}</span>
                <span class="">八大詞類從零開始學起</span>
              </a>
              <span class="flex items-center justify-center text-white">
                <a class="btn-main mx-1 w-6 h-6 rounded-full flex items-center justify-center text-xs cursor-pointer"><i class="fas fa-download"></i></a>
                <a class="btn-main mx-1 w-6 h-6 rounded-full flex items-center justify-center text-xs cursor-pointer"><i class="far fa-file-alt"></i></a>
              </span>
            </div>
            <span class="text-white">11:11</span>
          </li>
          <!-- <li><a href="#" class="flex justify-between items-center relative"><i class="fas fa-lock text-sm hidden"></i><span>片語與子句秒懂</span><span><i class="fas fa-download"></i><i class="fas fa-file-alt"></i></span><span>11:11</span></a></li>
          <li><a href="#" class="flex justify-between items-center relative"><i class="fas fa-lock text-sm hidden"></i><span>五大基本句型—不及物動詞</span><span>11:11</span></a></li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "VideoJsList",
    // props: ['type','content'],
    data () {
      return {
        seletedIdx: 1
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
      close () {
        let self = this
        self.$emit('close', false)
      }
    }
  }
</script>

<style lang="scss" scoped>
.clostBtn {
  background: #666666;
}
.dropbtn {
  color: white;
  font-size: 16px;
  border: none;
}
/* The container <div> - needed to position the dropup content */
.dropup {
  position: relative;
  display: inline-block;
}

/* Dropup content (Hidden by Default) */
.dropup-content {
  display: none;
  position: absolute;
  bottom: 60px;
  // background: rgba(0,0,0,0.8);
  background: rgb(15, 69, 92, .7);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropup */
.dropup-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  width: 100%;
}

/* Change color of dropup links on hover */
.dropup-content a:hover {
  // background-color: rgb(0, 0, 0)
  background: rgb(15, 69, 92, 1);
}
.accordion {
  height: calc(100%);
  overflow: hidden auto;
  width: 100%;
  // max-width: 360px;
  // margin: 30px auto 20px;
  background: #666666;
  // -webkit-border-radius: 4px;
  // -moz-border-radius: 4px;
  // border-radius: 4px;
}

.accordion .link {
  cursor: pointer;
  display: block;
  padding: 15px;
  color: #ffffff;
  // font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid rgb(255, 255, 255);
  position: relative;
  // -webkit-transition: all 0.4s ease;
  // -o-transition: all 0.4s ease;
  // transition: all 0.4s ease;
  &:hover {
    background: #333333;
  }
}
  .chapter {
    color: #CCCCCC;
  }
// .accordion li:last-child .link { border-bottom: 0; }

.accordion li i.fa-lock {
  position: absolute;
  top: 16px;
  left: 10px;
  font-size: 18px;
  color: #CCCCCC;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.accordion li i.fa-chevron-down {
  position: absolute;
  color: #CCCCCC;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  right: 12px;
  left: auto;
  font-size: 16px;
}

.accordion li.open .link { color: #ffffff; }

// .accordion li.open i { color: #ffffff; }
.fa-lock {
  color: #CCCCCC;
}
.accordion li.open i.fa-chevron-down {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

/**
 * Submenu
 -----------------------------*/


.submenu {
  display: none;
  background: #666666;
  // font-size: 14px;
}

.submenu li { border-bottom: 1px solid #ccc; }

.submenu .title {
  display: block;
  text-decoration: none;
  color: #ffffff;
  padding: 12px;
  padding-left: 30px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
}


// scroll-bar
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>