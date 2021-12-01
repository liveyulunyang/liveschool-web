<template>
<div class="slider-teachers relative">
  <swiper :options="Teachersoption" class="swiper" v-if="bannerData">
    <swiper-slide v-for="item in bannerData" :key="item.image_url">
      <div class="mugShot relative mx-auto mb-6">
        <div class="mugShot-img">
          <img src="@/assets/img/home/teacher_ex.png" alt="" class="object-contain block">
        </div>
        <a class="absolute bg-blue-main-dark rounded-full border-2 border-white text-center cursor-pointer btn-volume flex justify-center items-center">
          <i class="fas fa-volume-up text-white"></i>
        </a>
      </div>
      <div class="text-main text-center font-bold">
        <h4 class="text-xl lg:text-2xl font-bold mb-1">Bradley</h4>
        <h4 class="text-xl lg:text-2xl font-semibold">專業中師</h4>
      </div>
    </swiper-slide>
  </swiper>
    <div class="swiper-button-next swiper-button-next-banner focus:outline-none cursor-pointer hidden xl:block mt-0"></div>
    <div class="swiper-button-prev swiper-button-prev-banner focus:outline-none cursor-pointer hidden xl:block mt-0"></div>
</div>
</template>

<script>
export default {
  name: 'Teachers',
  props: {
    bannerData: {
      type: Array
    }
    // img_url: {
    //   type: String,
    //   default: require('@/assets/img/teacherDefault.svg')
    // }
  },
  components: {
  },
  data () {
    return {
      Teachersoption: {
        slidesPerView: 4,
        spaceBetween: 20,
        preloadImages: true,
        updateOnImagesReady: true,
        // autoplay: {
        //   delay: 5000
        // },
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
            // autoplay: {
            //   delay: 5000
            // },
            slidesPerView: 3,
            // loop: true
          },
          576: {
            // autoplay: {
            //   delay: 5000
            // },
            slidesPerView: 2,
            // loop: true
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
  .slider-teachers {
    .mugShot {
        width: 100%;
        height: 100%;
        max-width: 250px;
        max-height: 250px;
      .mugShot-img {
        border-radius: 50%;
        overflow: hidden;
      }
      .btn-volume {
        right: 2%;
        bottom: 2%;
        width: 70px;
        height: 70px;
        @media (max-width: 1024px) {
          width: 60px;
          height: 60px;
        }
        .fa-volume-up {
          font-size: 30px;
          @media (max-width: 1024px) {
            font-size: 24px;
          }
        }
      }
    }
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
