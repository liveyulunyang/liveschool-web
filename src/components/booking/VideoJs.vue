<template>
    <div id="videoPlayer">
        <div class="audio">
          <div id="videoPlayer_instructions">
            <video id="my_video_1" class="video-js vjs-big-play-centered"
              controls="true" preload="auto"
              poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              data-setup='{ "aspectRatio":"640:267", "playbackRates": [0.7, 1, 1.5] }'>
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type='video/mp4' />
            </video>
          </div>
        </div>
    </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
  export default {
    name: "VideoJs",
    // props: ['type','content'],
    computed: {
      url () {
        return 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4'
      },
      postercard () {
        return 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
      }
    },
    mounted () {
      this.videoPlayer()
    },
    methods: {
      videoPlayer () {
        videojs(document.getElementById('my_video_1'))
        // document.querySelector('.vjs-control-bar').setAttribute('style', 'opacity:1 !important;')
      }
    }
  }
</script>

<style lang="scss">
.video-mode-play-bar {
  background: rgb(15, 69, 92, .7);
}
.video-mode-play-bar .player-video {
  position: relative;
}
.progess-bar-num {
  z-index: 999;
}
.progess-bar-bg {
  background: rgba(255, 255, 255, 0.3);
}
#videoPlayer {
  // .content {
    .audio {
      width: 100%;
      // max-width: 400px;
      height: 100%;
      #videoPlayer_instructions {
        width: 100%;
        height: 100%;
      }
      .closeVideo {
        cursor: pointer;
        position: absolute;
        max-width: 40px;
        max-height: 40px;
        right: 8px;
        top: 8px;
        border: 1px solid #ffffff;
        border-radius: 50%;
        padding: 4px;
        border: 1px solid #000000;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  // }
    #videoPlayer_instructions textarea {
      width: 100%;
      height: 100px;
    }
    .video-js .vjs-control-bar {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      opacity: 1 !important;
    }
    $primary-foreground-color: #fff;
    $primary-background-color: #2B333F;
    $center-big-play-button: false;

  .video-js {
    font-size: 10px;
    color: $primary-foreground-color;
    // height: 260px;
    height: 100%;
    width: 100%;
  }
  .vjs-default-skin .vjs-big-play-button {
    font-size: 3em;

    $big-play-width: 3em;
    $big-play-height: 1.5em;

    line-height: $big-play-height;
    height: $big-play-height;
    width: $big-play-width;

    border: 0.06666em solid $primary-foreground-color;
    border-radius: 0.3em;

    @if $center-big-play-button {
      left: 50%;
      top: 50%;
      margin-left: -($big-play-width / 2);
      margin-top: -($big-play-height / 2);
    } @else {
      left: 0.5em;
      top: 0.5em;
    }
  }

  .video-js .vjs-control-bar,
  .video-js .vjs-big-play-button,
  .video-js .vjs-menu-button .vjs-menu-content {
    background-color: $primary-background-color;
    background-color: rgba($primary-background-color, 0.7);
  }
  $slider-bg-color: lighten($primary-background-color, 33%);

  .video-js .vjs-slider {
    background-color: $slider-bg-color;
    background-color: rgba($slider-bg-color, 0.5);
  }

  .video-js .vjs-volume-level,
  .video-js .vjs-play-progress,
  .video-js .vjs-slider-bar {
    background: $primary-foreground-color;
  }

  .video-js .vjs-load-progress {
    background: lighten($slider-bg-color, 25%);
    background: rgba($slider-bg-color, 0.5);
  }
  .video-js .vjs-load-progress div {
    background: lighten($slider-bg-color, 50%);
    background: rgba($slider-bg-color, 0.75);
  }
}
</style>