<template >
  <div class="slider-banner relative mx-auto">
    <swiper :options="bannerOption" class="swiper w-full" v-if="bannerData">
      <swiper-slide v-for="item in bannerData" :key="item.image_url">
        <a :href="item.url" target="_blank" class="cursor-pointer img" >
          <img :src="item.image_url" class="object-contain w-full h-auto" :alt="item.name">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
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
        preloadImages: true,
        updateOnImagesReady: true,
        autoplay: {
          delay: 5000
        },
        slidesPerView: 2,
        centeredSlides: true,
        watchOverflow: true,
        loop: true,
        effect: 'slide',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1440: {
            autoplay: {
              delay: 5000
            },
            slidesPerView: 1.5,
            loop: true
          },
          1024: {
            autoplay: {
              delay: 5000
            },
            slidesPerView: 1,
            loop: true
          }
        }
      }
    }
  },
  computed: {
    screenW () {
      return window.screen.width
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.slider-banner {
  max-width: 1920px;
  width: 100%;
  @media (maz-width: 1024px) {
    max-width: 1024px;
  }
  @media (maz-width: 768px) {
    max-width: 768px;
  }
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
  .swiper-slide-prev {
    transition: .3s;
    filter: opacity(.3);
    -webkit-filter: opacity(.3);
    margin: 0;
  }
  .swiper-slide-next {
    transition: .3s;
    filter: opacity(.3);
    -webkit-filter: opacity(.3);
    margin: 0;
  }
}

</style>
