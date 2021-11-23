<template>
  <div class="fixed top-0 left-0 w-full h-screen z-10">
    <img :src="src" alt="" class="w-full h-auto object-contain">
  </div>
</template>

<script>
  export default {
    name: "Cheer",
    computed: {
      src () {
        return require('@/assets/img/frontend/ANI_08_ok.gif') + '?' + new Date().getTime()
      }
    }
  }
</script>

<style scoped>

</style>