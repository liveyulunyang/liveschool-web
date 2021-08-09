<template>
  <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-t border-gray-1">
    <div class="flex flex-wrap textColorblack">

      <div class="w-full px-3 py-3 md:flex mb-2">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2" for="email">
          片語 1.
        </label>
        <div>
        </div>
        <div class="w-full md:w-9/12 flex items-center flex-wrap">
          <div class="w-full md:w-2/5 px-1 flex items-center">
            <span class="mr-2">1.</span>
            <div class="w-full">
              <input class="md:mb-2 w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="email" type="email" placeholder="英文單字">
              <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
                id="email" type="email" placeholder="[音標]">
            </div>
          </div>
          <div class="w-full md:w-1/5 px-1 flex items-center">
            <div class="relative text-sm w-full md:w-48 md:mr-2">
              <select class="block appearance-none w-full border border-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
                >
                <option value="31">n.(名詞)</option>
                <option value="31">n.(名詞)</option>
                <option value="31">n.(名詞)</option>
              </select>
              <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-2/5 px-1 flex items-center">
            <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
              id="email" type="email" placeholder="中文標題">
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
      <div class="w-full px-3 py-3 md:flex mb-2">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 opacity-0" for="email">
          片語
        </label>
        <div class="w-full md:w-11/12 flex items-center flex-wrap">
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
      </div>
      <div class="w-full px-3 py-3 md:flex mb-2">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 opacity-0" for="email">
          片語
        </label>
        <div class="w-full md:w-11/12 flex items-center flex-wrap">
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
      <div class="w-full px-3 py-3 md:flex mb-2">
        <label class="md:pt-2 md:w-1/12 tracking-wide text-sm mb-2 opacity-0" for="email">
          片語
        </label>
        <div class="w-full md:w-11/12 flex items-center flex-wrap">
          <div class="w-full px-1 flex items-center">
            <i class="fas fa-circle text-gray-1 mr-2"></i>
            <input class="w-full appearance-none block text-sm border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900" spellcheck="false"
              id="email" type="email" placeholder="輸入片語解析">
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
              id="email" type="email" placeholder="輸入英文例句">
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
              id="email" type="email" placeholder="輸入例句中文翻譯">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Phrase",
    props: {},
    computed: {
    }
  }
</script>

<style scoped>

</style>