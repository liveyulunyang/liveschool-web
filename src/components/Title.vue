<template>
  <h2 class="text-xl text-left text-black-1 mr-2 font-bold mb-2 lg:mb-0">{{ title }}</h2>
</template>

<script>
  export default {
    name: "Title",
    props: {
      title: {
        type: String,
        require: true,
        default: '標題'
      }
    }
  }
</script>