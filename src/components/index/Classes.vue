<template>
  <div class="slider-classes relative">
    <swiper :options="Classesoption" class="swiper" v-if="bannerData">
      <swiper-slide v-for="item in bannerData" :key="item.image_url">
        <ClassModule class="shadow-lg" />
      </swiper-slide>
    </swiper>
      <div class="swiper-button-next swiper-button-next-banner focus:outline-none cursor-pointer hidden xl:block mt-0"></div>
      <div class="swiper-button-prev swiper-button-prev-banner focus:outline-none cursor-pointer hidden xl:block mt-0"></div>
  </div>
</template>

<script>
import ClassModule from './ClassModule'
export default {
  name: 'Classes',
  props: {
    bannerData: {
      type: Array
    }
  },
  components: {
    ClassModule
  },
  data () {
    return {
      Classesoption: {
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: true,
        updateOnImagesReady: true,
        centeredSlides: false,
        watchOverflow: true,
        loop: true,
        effect: 'slide',
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 2
          },
          576: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .slider-classes {
    .swiper-button-next-banner {
      right: -3em !important;
      background-image: url('~@/assets/img/home/arrow_right.png');
      background-size: contain;
      background-size: 15px 30px;
      background-position: center;
      // width: 6vw;
      height: 100%;
      transform: translateY(-50%);
    }
    .swiper-button-prev-banner {
      left: -3em !important;
      background-image: url('~@/assets/img/home/arrow_left.png');
      background-size: contain;
      background-size: 15px 30px;
      background-position: center;
      // width: 6vw;
      height: 100%;
      transform: translateY(-50%);
    }
  }
</style>
