<template id="index-banner">
  <swiper :options="bannerOption" class="swiper" v-if="bannerData">
    <swiper-slide v-for="item in bannerData" :key="item.image_url" class="w-full">
      <a :href="item.url" target="_blank" class="cursor-pointer block" >
        <img :src="item.image_url" class="object-contain w-full h-auto" :alt="item.name">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Array
    }
  },
  components: {
  },
  data () {
    return {
      bannerOption: {
        slidesPerView: 1,
        preloadImages: true,
        updateOnImagesReady: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        centeredSlides: true,
        watchOverflow: true,
        loop: true,
        effect: 'slide',
        autoHeight: true
      }
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
// #index-banner {
  .swiper-container {
    // overflow: visible !important;
    // overflow-y: hidden;
  }
  .swiper-pagination {
    z-index: 99;
  }
  .swiper-pagination {
    // bottom: -40px !important;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    background: #91DAE4;
    width: 20px;
    height: 20px;
    @media (min-width: 768px) {
      width: 15px;
      height: 15px;
    }
  }
  .swiper-pagination-bullet-active {
    background: #2D9AA9;
  }
// }

</style>
