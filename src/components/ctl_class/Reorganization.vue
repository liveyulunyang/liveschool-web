<template>
  <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-t border-gray-1">
    <div class="flex flex-wrap textColorblack">

      <div class="w-full px-3 py-3 md:flex mb-2">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="email">
          句子重組 1.
        </label>
        <div class="w-full md:w-9/12 flex items-center flex-wrap">
          <div class="w-full flex items-center flex-wrap mb-2">
            <div class="w-full md:w-4/5 px-1 flex items-center">
              <i class="fas fa-external-link-alt text-gray-1 mr-2"></i>
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="email" type="email" placeholder="補充說明url">
            </div>
            <div class="w-full md:w-1/5 flex items-center">
              <a href="" class="block px-3 mr-3">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fas fa-upload"></i>
                </label>
                <input id="file-upload" type="file"/>
              </a>
              <span>cover.jpg</span>
              <a href="" class="block p-2"><i class="fas fa-times"></i></a>
            </div>
          </div>
          <div class="w-full flex items-center flex-wrap">
            <div class="w-full md:w-4/5 px-1 flex items-center">
              <i class="fas fa-volume-up text-gray-1 mr-2"></i>
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="email" type="email" placeholder="音檔url">
            </div>
            <div class="w-full md:w-1/5 flex items-center">
              <a href="" class="block px-3 mr-3">
                <label for="file-upload" class="custom-file-upload">
                  <i class="fas fa-upload"></i>
                </label>
                <input id="file-upload" type="file"/>
              </a>
              <span>cover.jpg</span>
              <a href="" class="block p-2"><i class="fas fa-times"></i></a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-2/12 flex items-center justify-center md:pl-2">
          <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
            <i class="fas fa-check"></i>儲存</button>
          <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
            <i class="fas fa-times"></i>取消修改</button>
        </div>
        <!-- <div class="w-full md:w-1/5 flex items-center justify-center md:pl-2">
          <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
            <i class="fas fa-plus"></i>新增單元
          </button>
          <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
            <i class="fas fa-edit"></i>
          </button>
          <button class="button-verified py-2 px-2 rounded w-full text-sm whitespace-no-wrap md:mx-1">
            <i class="fas fa-trash-alt"></i>
          </button>
          <a href="" class="block px-1">
            <i class="fas fa-bars mb-0"></i>
          </a>
        </div> -->
      </div>


      <div class="w-full px-3 py-3 md:flex">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 opacity-0" for="email">
          片語
        </label>
        <div class="w-full md:w-10/12 flex items-center flex-wrap">
          <div class="w-1/2 md:w-1/5 px-1 flex items-center mb-2" v-for="n in 10" :key="n">
            <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
              :id="n" type="text" placeholder="輸入句子段落">
          </div>
        </div>
        <div class="w-full md:w-1/12 flex items-end">
          <div class="w-full px-1 flex items-center">
            <a href="" class="block p-2"><i class="fas fa-plus-circle text-xl"></i></a>
            <a href="" class="block p-2"><i class="fas fa-minus-circle text-xl"></i></a>
          </div>
        </div>
      </div>
      <div class="w-full px-3 py-3 md:flex mb-2">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 opacity-0" for="email">
          片語
        </label>
        <div class="w-full md:w-11/12 flex items-center flex-wrap">
          <div class="w-full px-1 flex items-center">
            <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
              id="email" type="email" placeholder="輸入正確答案">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Reorganization",
    props: {},
    computed: {
    }
  }
</script>

<style scoped>

</style>