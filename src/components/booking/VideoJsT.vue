<template>
  <div class="flat-html5-player-wrapper">
    <div class="flat-player" id="player">
      <div class="flat-video-preview-wrapper pointer">
          <video :src="video.url" :poster="video.poster" ref="videoElem" class="flat-video pointer"></video>
      </div>
      <div class="flat-video-footer">
        <div class="flat-video-progressbar pointer" @click="skipVideo">
          <div :style="{width: progressPercentage() + '%'}" class="flat-video-current-progress pointer"></div>
        </div>

        <div class="flat-video-controls">
          <div class="flat-video-controls-left">
            <div>
              <button v-if="isPaused()" @click="play" class="flat-video-control-single">
                <i class="fa fa-fw fa-play"></i>
              </button>
              <button v-if="!isPaused()" @click="pause" class="flat-video-control-single">
                <i class="fa fa-fw fa-pause"></i>
              </button>
            </div>
            <div class="flat-video-volume-rocker">
              <button @click="muteToggle" v-if="isMuted()" class="flat-video-control-single">
                <i class="fa fa-fw fa-volume-off"></i>
              </button>
              <button @click="muteToggle" v-if="!isMuted()" class="flat-video-control-single">
                <i class="fa fa-fw fa-volume-up"></i>
              </button>
              <div class="flat-video-volume-progress pointer" @click="changeVolume">
                <div :style="{ width: volume() + '%' }"
                  class="flat-video-volume-progress-current pointer"></div>
              </div>
              </div>
          </div>
          <div class="flat-video-controls-right">
            <div class="flat-video-time-container">
              <span
                class="flat-video-current-time">{{ formatTime(currentTime()) }}</span><span>/</span><span
                class="flat-video-total-time">{{ formatTime(duration()) }}</span>
            </div>
            <div class="flat-video-buttons-right-wrapper">
              <button v-if="isFullScreen" @click="toggleFullScreen" class="flat-video-control-single">
                <i class="fa fa-fw fa-compress"></i>
              </button>
              <button v-if="!isFullScreen" @click="toggleFullScreen" class="flat-video-control-single">
                <i class="fa fa-fw fa-expand"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VideoJs',
    data () {
      return {
        video: {
          url: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
          poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
        },
        isFullScreen: false
      }
    },
    computed: {
    },
    mounted () {
      let events = [
        'timeupdate',
        'volumechange',
        'seeked',
        'loadedmetadata'
      ];

      events.map(e => {
        this.$refs.videoElem.addEventListener(e, () => {
          this.$forceUpdate()
        })
      })

      this.$refs.videoElem.addEventListener('loadedmetadata', () => {
        this.$refs.videoElem.volume = 0.3;
        this.$forceUpdate()
      })

      this.$refs.videoElem.addEventListener('click', () => {
        if (this.isPaused()) {
          this.play()
        } else {
          this.pause()
        }
      })

      this.$refs.videoElem.addEventListener('dblclick', () => {
        this.toggleFullScreen()
      })
    },

    methods: {
        muteToggle () {
            this.$refs.videoElem.muted = !this.$refs.videoElem.muted
        },

        isMuted () {
            return this.$refs.videoElem ? this.$refs.videoElem.muted : false
        },

        isPaused () {
            return this.$refs.videoElem ? this.$refs.videoElem.paused : true
        },

        play () {
          this.$refs.videoElem.play()
        },

        pause () {
          this.$refs.videoElem.pause()
        },

        currentTime () {
            return this.$refs.videoElem?.currentTime || 0
        },

        duration () {
            return this.$refs.videoElem?.duration || 0
        },

        progressPercentage () {
            return (this.currentTime() / this.duration()) * 100
        },

        formatTime (time) {
          if (!time || !parseInt(time)) {
              return `00:00`;
          }

          let hours, minutes, seconds;
          minutes = Math.floor(((time / 60) % 60)),
              seconds = Math.floor(time % 60),
              hours = Math.floor(time / 60 / 60);

          if (minutes < 10) minutes = `0${minutes}`
          if (seconds < 10) seconds = `0${seconds}`

          return `${hours ? hours + ':' : ''}${minutes}:${seconds}`
        },

        skipVideo (event) {
          let wrapper_offset = event.currentTarget.getBoundingClientRect().left
          let clicked_offset = event.clientX - wrapper_offset;

          let progress_width = (clicked_offset / event.currentTarget.getBoundingClientRect().width) * 100
          let newTime = (this.duration() / 100) * progress_width;

          this.$refs.videoElem.currentTime = newTime

        },

        toggleFullScreen () {
          screenfull.toggle()
          this.isFullScreen = !this.isFullScreen
          this.$forceUpdate()
        },

        changeVolume (event) {
          let wrapper_offset = event.currentTarget.getBoundingClientRect().left
          let clicked_offset = event.clientX - wrapper_offset;
          let volume_bar_width = (clicked_offset / event.currentTarget.getBoundingClientRect().width) * 100
          this.$refs.videoElem.volume = volume_bar_width / 100
        },

        volume () {
          return this.$refs.videoElem ? this.$refs.videoElem.volume * 100 : 0
        }
    }
  }
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer;
}

.flat-html5-player-wrapper {
    display: block;
    // position: absolute;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
}

.flat-player {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.flat-video-preview-wrapper {
    flex: 1;
    overflow: hidden;
}

video.flat-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.flat-video-footer {
    height: 56px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #2e2e2e;
    color: white;
}

.flat-video-progressbar {
    width: 100%;
    height: 6px;
    background-color: white;
}

.flat-video-current-progress {
    height: 100%;
    width: 0%;
    background-color: orangered;
    position: relative;
    &:after {
      position: absolute;
      right: 0;
      top: -4px;
      content: '';
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: orangered;
    }

}

.flat-video-controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    flex: 1;
}

.flat-video-control-single {
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    padding: 5px 15px;
    cursor: pointer;
}

.flat-video-control-single:focus {
    outline: none;
}

.flat-video-controls-left,
.flat-video-controls-right {
    display: flex;
}

.flat-video-volume-rocker {
    display: flex;
    align-items: center;
}

.flat-video-volume-progress {
    width: 100px;
    height: 5px;
    border-radius: 5px;
    background-color: white;
}

.flat-video-volume-progress-current {
    width: 30%;
    height: 100%;
    border-radius: 5px;
    background-color: orangered;
}

.flat-video-time-container {
    line-height: 2;
    font-size: small;
    margin-right: 20px;
    align-items: center;
    display: flex;
}
</style>