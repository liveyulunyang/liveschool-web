<template>
  <div class="w-full bg-white py-2 lg:py-3 flex flex-col justify-between leading-normal border-gray-1">
    <div class="flex flex-wrap textColorblack">
      <div class="w-full px-3 py-3 md:flex mb-2">
        <label class="md:pt-2 md:w-1/5 tracking-wide text-sm mb-2" for="email">
          請選擇學習類型
        </label>
        <div>
        </div>
        <div class="w-full md:w-4/5 flex items-center">
          <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
            單字
          </button>
          <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
            片語
          </button>
          <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
            句子重組
          </button>
          <button class="class__type_btn py-2 px-3 text-lg whitespace-no-wrap mx-1 font-semibold">
            選擇題
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TypeContent",
    props: {},
    computed: {
    }
  }
</script>

<style scoped>

</style>