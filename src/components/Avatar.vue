<template>
  <div class="Avatar md:mr-4 relative mb-3 md:mb-0">
    <div class="mugShot-img">
      <img :src="imgUrl" alt="" class="object-contain block">
    </div>
    <a @click.prevent="randomUser" class="absolute right-0 bottom-0 bg-gray-700 rounded-full p-2 border border-white w-10 h-10 text-center cursor-pointer block">
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
        default: ''
      }
    },
  data () {
    return {
      idx: 0,

      imgData: ['pic_stdent_head_01.jpg', 'pic_stdent_head_02.jpg', 'pic_stdent_head_03.jpg', 'pic_stdent_head_04.jpg', 'pic_stdent_head_05.jpg', 'pic_stdent_head_06.jpg']
    }
  },
    computed: {
      imgUrl () {
        let self = this
        if (self.img_url) {
          return self.img_url
        } else {
          return require('@/assets/img/user/' + self.imgData[self.idx])
        }
      }
    },
    methods: {
      randomUser () {
        let self = this

        var myArray = [0, 1, 2, 3, 4, 5]
        var rand = Math.random() * myArray.length | 0
        var rValue = myArray[rand]

        if (rValue === self.idx) {
          self.randomUser()
        } else {
          self.idx = myArray[rand]
        }
      }
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