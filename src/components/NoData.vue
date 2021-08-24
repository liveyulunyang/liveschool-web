
<template>
  <div class="w-full flex justify-center items-center mt-32 mb-4">
    <p class="noDataText">{{ text }}!</p>
  </div>
</template>

<script>
/* eslint-disable no-console */
  export default {
    name: "NoData",
    props: {
      text: {
        type: String,
        default: '目前還未建立任何內容喔'
      }
    }
  }
</script>
<style>
  .noDataText {
    color: #CCCCCC;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2em;
    line-height: 56px;
  }
</style>