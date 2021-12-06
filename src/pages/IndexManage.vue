<template>
  <main class="flex items-start p-6">
    <div class="flex flex-col w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <Title :title="'首頁管理'" />
      </div>
      <div class="flex justify-between items-center">
        <TabComponent :tag="tag" :tagArr="tagArr" v-on:tagIdx="tagIdx" />
        <button class="px-4 py-2 btn-red text-white  text-sm rounded whitespace-no-wrap" v-if="tag === 0" @click="addBanner()">
          <i class="fas fa-plus mr-1"></i>新增banner
        </button>
      </div>

      <section v-if="tag === 0">
        <div class="row flex">

          <div class="w-full">
            <draggable
              :list="bannerList"
              :disabled="!enabled"
              class="list-group"
              ghost-class="ghost"
              :move="checkMove"
              @start="dragging = true"
              @end="dragging = false"
            >
              <div class="flex justify-between flex-wrap bg-white py-6 px-6 mb-4 hover:bg-gray-300 shadow-lg" v-for="(item, index) in bannerList" :key="index">
                <div class="w-full md:w-3/5 text-left mb-3 md:mb-0">
                  <div class="flex items-center justify-between">
                    <img src="@/assets/img/Rectangle 116.png" alt="">
                    <p>2021-05-26 15:03:25</p>
                    <p>Leo/李奧{{ item.id }}</p>
                    <p>pic_main_bg_04.jpg</p>
                  </div>
                </div>
                <div class="w-full md:w-1/5 flex justify-end items-center">

                <div class="w-1/2">
                  <button @click="del(0)"
                    class="mx-1 table-btn-actions rounded"
                    >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>

                  <a class="flex flex-col justify-between cursor-pointer py-3 px-3">
                    <img src="@/assets/img/icons/line_bar.png" alt="" class="py-2">
                    <img src="@/assets/img/icons/line_bar.png" alt="" class="py-2">
                    <img src="@/assets/img/icons/line_bar.png" alt="" class="py-2">
                    <img src="@/assets/img/icons/line_bar.png" alt="" class="py-2">
                    <img src="@/assets/img/icons/line_bar.png" alt="" class="py-2">
                  </a>
                </div>
              </div>
            </draggable>
          </div>

          <!-- <rawDisplayer class="w-3/12" :value="bannerList" title="List" /> -->
        </div>
      </section>
      <section v-if="tag === 1">
        <div class="flex bg-white items-center px-6 py-3 mb-4">
          <h4 class="mr-4 font-bold">選擇課程種類</h4>
          <div class="relative text-sm">
            <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 leading-tight focus:outline-none bg-white focus:border-gray-900" id="role"
              >
              <option value="">LiveTalk</option>
            </select>
            <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="bg-white py-6 mb-2 md:mb-4">
          <div class="w-full px-3 md:flex mb-4">
            <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="name">
              課程介紹
            </label>
            <div class="w-full md:w-9/12 flex items-center">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name" type="text" placeholder="請輸入url">
            </div>
            <div class="w-full md:w-2/12 flex items-center">
              <a href="" class="block px-1 lg:px-3 lg:mr-1 xl:mr-3">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fas fa-upload"></i>
                </label>
                <input id="file-upload" type="file"/>
              </a>
              <div class="flex items-center">
                <span>cover.jpg</span>
                <a href="" class="block p-2 text-3xl"><i class="fas fa-times"></i></a>
              </div>
            </div>
          </div>
          <div class="w-full px-3 md:flex bg-white">
            <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="name">
              最新消息
            </label>
            <div class="w-full md:w-9/12 flex items-center">
              <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="name" type="text" placeholder="請輸入url">
            </div>
            <div class="w-full md:w-2/12 flex items-center">
              <a href="" class="block px-1 lg:px-3 lg:mr-1 xl:mr-3">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fas fa-upload"></i>
                </label>
                <input id="file-upload" type="file"/>
              </a>
              <div class="flex items-center">
                <span>cover.jpg</span>
                <a href="" class="block p-2 text-3xl"><i class="fas fa-times"></i></a>
              </div>
            </div>
          </div>
        </div>
        <drag_class class="mb-4" />
      </section>
      <section v-if="tag === 2">
        <div class="w-full px-3 mb-2 lg:mb-4 lg:flex bg-white py-6 items-center">
          <label class="lg:pt-2 lg:w-1/12 tracking-wide text-sm mb-2" for="name">
            影片連結
          </label>
          <div class="w-full lg:w-9/12 flex items-center">
            <input class="appearance-none border-gray-500 focus:border-gray-900 block w-full text-sm border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="name" type="text" placeholder="請輸入url">
          </div>
          <div class="w-full lg:w-2/12 flex items-center">
            <a href="" class="block px-1 lg:px-3 lg:mr-1 xl:mr-3">
              <label for="file-upload" class="custom-file-upload">
                <i class="fas fa-upload"></i>
              </label>
              <input id="file-upload" type="file"/>
            </a>
            <div class="flex items-center">
              <span>cover.jpg</span>
              <a href="" class="block p-2 text-3xl"><i class="fas fa-times"></i></a>
            </div>
          </div>
        </div>
      </section>
      <section v-if="tag === 3">
        <Drag_Teacher class="mb-4" />
      </section>
    </div>
  </main>
</template>

<script>
  import Title from '@/components/Title'
  import TabComponent from '@/components/Tab'
  import drag_class from '@/components/modules/drag_class'
  import Drag_Teacher from '@/components/modules/drag_teachers'
  import draggable from 'vuedraggable'
  export default {
    name: "IndexManage",
    components: {
      draggable,
      Title,
      TabComponent,
      drag_class,
      Drag_Teacher
    },
    data () {
      return {
        tag: 0,
        tagArr: [
          { name: '首頁banner' },
          { name: '課程介紹與消息' },
          { name: '成功見證' },
          { name: '專業師資' }
        ],

      enabled: true,
      bannerList: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Jean", id: 4 }
      ],
      dragging: false
      }
    },
    computed: {
      draggingInfo() {
        return this.dragging ? "under drag" : "";
      }
    },
    methods: {
      tagIdx (tagIdx) {
        this.tag = tagIdx
      },

      del(id) {
        console.log(id)
        this.$swal.fire({
          title: '確認要刪除此筆資料?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '刪除',
          cancelButtonText: '取消',
          customClass: {
            title: 'font-bold text-2xl text-black',
            actions: 'btns',
            confirmButton: 'btn btn-confirm',
            cancelButton: 'btn btn-cancel'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire({
              icon: 'success',
              title: '刪除成功!',
              text: '您所選擇的檔案已刪除',
              confirmButtonColor: '#808080',
              confirmButtonText: 'OK',
              customClass: {
                title: 'font-bold text-2xl text-black',
                htmlContainer: 'text-sm',
                actions: 'btns',
                confirmButton: 'px-10'
              }
            })
          }
        })
      },

      addBanner () {
        this.$router.push({ name: 'AddBanner' })
      },
      checkMove () {}
    }
  }
</script>
<style scoped>
  input[type="file"] {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
  }
  .custom-file-upload {
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    color: white;
    background: #0F455C;
    border-radius: 8px;
  }

.buttons {
  margin-top: 35px;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>