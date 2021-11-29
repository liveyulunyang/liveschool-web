<template>
  <div class="flex text-xs flex-wrap">
    <h5 v-for="(item, index) in userNum" :key="index" class="mr-3 whitespace-no-wrap mb-2 lg:mb-0">{{ item.role }}
      <span class="bg-white rounded-lg px-2 py-1 mx-1">{{ item.num }}</span>
      {{ item.unit }}
    </h5>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      userNum: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>