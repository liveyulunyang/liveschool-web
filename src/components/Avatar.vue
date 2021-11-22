<template>
  <div class="Avatar md:mr-4 relative mb-3 md:mb-0">
    <div class="mugShot-img">
      <img :src="img_url" alt="" class="object-contain block">
    </div>
    <a class="absolute right-0 bottom-0 bg-gray-700 rounded-full p-2 border border-white w-10 h-10 text-center cursor-pointer">
      <i class="fas fa-redo-alt text-white"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Avatar",

    props: {
      img_url: {
        type: String,
        default: require('@/assets/img/teacherDefault.svg')
      }
    },

    computed: {
    }
  }
</script>

<style scoped>
  .mugShot-img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
  }
</style>