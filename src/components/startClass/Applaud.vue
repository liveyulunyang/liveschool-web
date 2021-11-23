<template>
  <div class="fixed top-0 left-0 w-full h-screen z-10">
    <img :src="src" alt="" class="w-full h-auto object-contain">
    <audio autoplay loop>
      <source src="@/assets/sounds/Applaud.mp3" type="audio/ogg">
      <source src="@/assets/sounds/Applaud.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
  export default {
    name: "Applaud",
    computed: {
      src () {
        return require('@/assets/img/frontend/ANI_06_ok.gif') + '?' + new Date().getTime()
      }
    }
  }
</script>

<style scoped>

</style>