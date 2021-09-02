
<template>
	<main class="flex flex-wrap p-3 xl:p-6">
		<h1 class="text-xl ading-none text-black-1 mr-2 font-bold">課程分類管理</h1>

    <section class="w-full mt-2 min-h-screen px-3 lg:px-6 py-4">
      <div class="flex justify-between mb-4">
        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-chevron-left"></i>回上層
            </Button>
          </li>
          <!-- <li class='py-2 px-4 flex items-center justify-center mx-1'>LiveTalk 直播課 / 課程主題 </li> -->
        </ul>

        <ul class='flex cursor-pointer text-sm'>
          <li class='py-2 mr-1'>
            <Button @click="$router.back(-1)" class="px-4 py-2 bg-primary-normal text-white hover:bg-primary-light text-sm rounded whitespace-no-wrap">
              <i class="fas fa-plus"></i>新增分類
            </Button>
          </li>
        </ul>
      </div>
      <div v-if="isData">
        <div class="text-NotoSansRegular textColorblack mx-auto">
          <div class="w-full flex flex-wrap leading-normal mb-1">
            <div class="w-full px-3 py-3 md:flex mb-2 md:mb-3 bg-white" v-for="n in 10" :key="n">
              <div class="md:w-9/12 md:pt-2">
                <p class="text-left tracking-wide text-lg mb-2 md:mb-0" for="email">
                  Come to Live
                </p>
              </div>
              <div class="w-full md:w-3/12 flex items-center justify-end md:pl-2">
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-folder-open"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="bg-gray-900 text-white py-2 px-3 rounded text-sm whitespace-no-wrap mx-1">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>

      <NoData v-else />

    </section>
	</main>
</template>

<script>
/* eslint-disable no-console */
  import 'vue2-datepicker/index.css';
  import NoData from '@/components/NoData'
  import Pagination from "@/components/modules/Pagination";
  export default {
    name: "Classification",
    components: {
      NoData,
      Pagination
    },
    data () {
      return {
        isData: true,

        tag: 1
      }
    },
    mounted() {

    },
    methods: {
			cropSuccess(imgDataUrl) {
				console.log('-------- crop success --------')
				this.imgDataUrl = imgDataUrl
			},
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------')
				console.log(jsonData);
				console.log('field: ' + field);
			},
			cropUploadFail(status, field){
				console.log('-------- upload fail --------')
				console.log(status)
				console.log('field: ' + field)
			}
    }
  }
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  #fileInput {
    display: none !important;
  }
  .tag {
    background: #CCCCCC;
    color: #808080;
  }
  .tagActive {
    background: white;
    color: black;
  }
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
    background: #4D4D4D;
    border-radius: 8px;
  }
  .mx-datepicker {
    width: 100%;
  }
  .class__type_btn {
    color: #4D4D4D;
    border: 1px solid gray;
    transition: .3s;
  }
  .class__type_btn:hover {
    background: #4D4D4D;
    color: #ffffff;
    border: 1px solid gray;
  }
</style>