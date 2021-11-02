<template>
  <h2 class="text-xl ading-none text-black-1 mr-2 font-bold">{{ title }}</h2>
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