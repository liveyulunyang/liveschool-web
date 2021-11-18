<template>
  <div class="player" ref="player">
    <video class="video-screen mt-0 h-full" preload="auto" :src="url" ref="video" @click.prevent="playVideo"
      type="video/mp4" :poster="postercard" msallowfullscreen webkitallowfullscreen mozallowfullscreen allowfullscreen>
      Sorry, your browser doesn"t support HTML5 video playback.
    </video>
    <div class="controls active w-full flex-col" ref="controls">
      <div class="flex w-full justify-center lg:hidden">
        <input type="range" class="time-bar w-11/12" value="0" min="0" max="" ref="timeBar" @change="updatetimeBar">
      </div>
      <div class="flex items-center w-full justify-around">
        <div class="flex items-center">
          <button class="backward text-lg text-white text-center mx-2" ref="backwardBtn" @click.prevent="backforward">
            <i class="fas fa-step-backward"></i>
          </button>
          <button class="play start text-lg text-white text-center  mx-2" ref="playBtn" @click.prevent="playVideo">
            <i class="fas fa-play" v-if="!isPlay"></i>
            <i class="fas fa-pause" v-else></i>
          </button>
        </div>
        <input type="range" class="time-bar hidden lg:block" value="0" min="0" max="" ref="timeBar" @change="updatetimeBar">
        <time class="time whitespace-no-wrap" ref="time">{{ throughTime }} / {{ timeAll }}</time>
        <button class="fullscreen-button text-2xl text-white text-center mx-2" ref="fullscreenBtn" @click="toggleFullScreen">
          <i class="fas fa-expand"></i>
        </button>
      </div>
    </div>
    <input class="file-chooser invisible hidden" type="file" ref="fileChooser">
  </div>
</template>

<script>
  export default {
    name: "VideoJs",
    data () {
      return {
        isPlay: false,
        throughTime: null,
        timeAll: null,

        setIntervalTime: null,

        isMouseDown: false
      }
    },
    computed: {
      url () {
        return 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4'
      },
      postercard () {
        return 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
      }
    },
    mounted () {
      this.$refs.video.oncanplay = () => {
        this.setVideoData()
        // window.addEventListener('keydown', this.onKeyDown())
      }
    },
    beforeDestroy () {
        clearInterval(this.setIntervalTime)
    },
    methods: {
      timer () {
        let self = this
        self.setIntervalTime = setInterval(() => {
          self.updateCurrentTime()
        }, 500)
      },
      stopTime () {
        if (this.setIntervalTime) {
          clearInterval(this.setIntervalTime)
        }
      },
      setVideoData () {
        let self = this
        let video = self.$refs.video
        let timeBar = self.$refs.timeBar
        let timeCounter = self.$refs.time

        let seconds = Math.floor(video.duration % 60)
        let minutes = Math.floor(video.duration / 60)
        seconds = seconds >= 10 ? seconds : '0' + seconds
        let timeTotal = `${minutes}:${seconds}`
        timeBar.max = video.duration
        timeCounter.innerText = `0:00 / ${timeTotal}`
        self.timeAll = `${minutes}:${seconds}`

        self.updateCurrentTime()

      },
      updateCurrentTime () {
        let self = this
        let video = self.$refs.video
        let timeBar = self.$refs.timeBar
        let timeCounter = self.$refs.time
        let seconds = Math.floor(video.currentTime % 60);
        let minutes = Math.floor(video.currentTime / 60);
        seconds = seconds >= 10 ? seconds : '0' + seconds;
        timeCounter.innerText = `${minutes}:${seconds} / ${self.timeAll}`

        timeBar.value = video.currentTime
        self.throughTime = `${minutes}`
      },
      playVideo() {
        let self = this
        let video = self.$refs.video
        if (!video.readyState >= 2) return

        if (video.paused) {
          video.play()
          self.isPlay = true
          this.timer()
        } else {
          video.pause()
          self.isPlay = false
          self.stopTime()
        }
      },
      backforward () {
        let self = this
        let video = self.$refs.video
        video.currentTime = 0
      },
      toggleFullScreen () {
        let self = this
        let player = self.$refs.player
        player.requestFullscreen ? player.requestFullscreen() :
          player.mozRequestFullscreen ? player.mozRequestFullscreen() :
          player.webkitRequestFullscreen ? player.webkitRequestFullscreen() :
          player.msRequestFullscreen ? player.msRequestFullscreen() :
          console.error('fullscreen is not available');

        document.exitFullscreen ? document.exitFullscreen() :
          document.mozExitFullscreen ? document.mozExitFullscreen() :
          document.webkitExitFullscreen ? document.webkitExitFullscreen() :
          document.msExitFullscreen ? document.msExitFullscreen() :
          console.error('cannot exit fullscreen mode');

        setVideoSize();
      },

      setVideoSize() {
        let self = this
        let player = self.$refs.player
        let video = self.$refs.video
        const aspectRatio = video.offsetWidth / video.offsetHeight;
        const d = document;
        controls.style.width = player.offsetWidth + 'px';
        if (video.offsetHeight >= player.clientHeight) {
          video.style.width = window.innerHeight * aspectRatio + 'px';
        } else {
          video.style.width = player.offsetWidth + 'px';
        }
        const margin = (player.offsetHeight - video.offsetHeight) / 2 + 'px';
        video.style.marginTop = margin;
      },
      updatetimeBar () {
        let self = this
        let video = self.$refs.video
        let timeBar = self.$refs.timeBar

        video.currentTime = timeBar.value

        // if (!isMouseDown && e.type === 'mousemove') return
      },
      onKeyDown (e) {
        console.log(e)
        // switch(e.key) {
        //   case 'ArrowLeft':
        //   case 'ArrowRight':
        //     skip(e)
        //     break
        //   case 'ArrowUp':
        //   case ' ':
        //     playVideo(e)
        //     break;
        // }
      },
      skip (e) {
        let self = this
        e.preventDefault()
        let timeBar = self.$refs.timeBar
        switch(e.key) {
          case 'ArrowLeft':
            video.currentTime -= 10
            break;
          case 'ArrowRight':
            video.currentTime += 10
            break;
        }
        timeBar.value = video.currentTime
      },

      onMouseDown () {
        this.isMouseDown = true
        showUI()
      },

      onMouseUp () {
        let self = this
        let video = self.$refs.video
        this.isMouseDown = false
        if (!this.isPlay) return

        video.play()
      }
      // videoPlayer () {
      //   let self = this
      //   const controls = self.$refs.controls,
      //         fileChooser = self.$refs.fileChooser,
      //         fullscreen = self.$refs.fullscreenBtn,
      //         playButton = self.$refs.playBtn,
      //         backwarButton = self.$refs.backwardBtn,
      //         player = self.$refs.player,
      //         timeCounter = self.$refs.time,
      //         timeBar = self.$refs.timeBar,
      //         video = self.$refs.video

      //   let isMouseDown     = false,
      //       timeTotal       = 0,
      //       uiTimeout       = '',
      //       videoStatus     = 'paused'

      //   function onKeyDown(e) {
      //     switch(e.key) {
      //       case 'ArrowLeft':
      //       case 'ArrowRight':
      //         skip(e);
      //         break;
      //       case 'ArrowUp':
      //       case ' ':
      //         playVideo(e);
      //         break;
      //     }
      //     showUI()
      //   }

      //   function showUI () {
      //     if (uiTimeout) clearTimeout(uiTimeout);
      //     controls.classList.add('active')
      //     video.style.cursor = 'default'
      //   }

      //   function hideUI () {
      //     if (uiTimeout) clearTimeout(uiTimeout);
      //     if (video.paused) return;

      //     uiTimeout = setTimeout(() => {
      //       controls.classList.remove('active');
      //       setTimeout(() => video.style.cursor = 'none', 1000);
      //     }, 2000)
      //   }

      //   function onMouseDown () {
      //     isMouseDown = true;
      //     showUI();
      //   }

      //   function onMouseUp () {
      //     isMouseDown = false;
      //     if (videoStatus === 'paused') return;

      //     hideUI();
      //     video.play();
      //   }

      //   function updatePlayState() {
      //     video.paused ?
      //       (playButton.classList.add('start'), playButton.classList.remove('pause')) :
      //       (playButton.classList.add('pause'), playButton.classList.remove('start'))

      //     video.paused ? showUI() : hideUI()
      //     video.paused ? self.isPlay = false : self.isPlay = true
      //   }

      //   const updatetimeBar = (e) => {
      //     if (!isMouseDown && e.type === 'mousemove') return;

      //     video.currentTime = timeBar.value;
      //     if (!isMouseDown) return;

      //     video.pause();
      //     showUI();
      //     hideUI();
      //   }

      //   function updateCurrentTime() {
      //     let seconds = Math.floor(video.currentTime % 60);
      //     let minutes = Math.floor(video.currentTime / 60);
      //     seconds = seconds >= 10 ? seconds : '0' + seconds;
      //     timeCounter.innerText = `${minutes}:${seconds} / ${timeTotal}`;
      //     if (isMouseDown) return;

      //     timeBar.value = video.currentTime
      //   }

      //   function backforward () {
      //     video.currentTime = 0
      //   }

      //   function playVideo(e) {
      //     e.preventDefault();
      //     if (!video.readyState >= 2) return;

      //     if (video.paused) {
      //       video.play();
      //       videoStatus = 'playing';
      //     } else {
      //       video.pause()
      //       videoStatus = 'paused';
      //     }
      //   }

      //   function skip(e) {
      //     e.preventDefault();
      //     switch(e.key) {
      //       case 'ArrowLeft':
      //         video.currentTime -= 10;
      //         break;
      //       case 'ArrowRight':
      //         video.currentTime += 10;
      //         break;
      //     }
      //     timeBar.value = video.currentTime;
      //   }

      //   function toggleFullScreen () {
      //     player.requestFullscreen ? player.requestFullscreen() :
      //       player.mozRequestFullscreen ? player.mozRequestFullscreen() :
      //       player.webkitRequestFullscreen ? player.webkitRequestFullscreen() :
      //       player.msRequestFullscreen ? player.msRequestFullscreen() :
      //       console.error('fullscreen is not available');

      //     document.exitFullscreen ? document.exitFullscreen() :
      //       document.mozExitFullscreen ? document.mozExitFullscreen() :
      //       document.webkitExitFullscreen ? document.webkitExitFullscreen() :
      //       document.msExitFullscreen ? document.msExitFullscreen() :
      //       console.error('cannot exit fullscreen mode');

      //     setVideoSize();
      //   }

      //   function selectVideoFile() {
      //     const file = this.url;
      //     const fileUrl = URL.createObjectURL(file)
      //     video.type = file.type;
      //     video.src = fileUrl + '#t=.5';
      //     video.poster = '';
      //     video.play();
      //     videoStatus = 'playing';
      //     setTimeout(() => setVideoData(), 50);
      //   }

      //   function setVideoSize() {
      //     const aspectRatio = video.offsetWidth / video.offsetHeight;
      //     const d = document;
      //     controls.style.width = player.offsetWidth + 'px';
      //     if (video.offsetHeight >= player.clientHeight) {
      //       video.style.width = window.innerHeight * aspectRatio + 'px';
      //     } else {
      //       video.style.width = player.offsetWidth + 'px';
      //     }
      //     const margin = (player.offsetHeight - video.offsetHeight) / 2 + 'px';
      //     video.style.marginTop = margin;
      //   }

      //   function setVideoData() {
      //     if (video.readyState) {
      //       let seconds = Math.floor(video.duration % 60);
      //       let minutes = Math.floor(video.duration / 60);
      //       seconds = seconds >= 10 ? seconds : '0' + seconds;
      //       timeTotal = `${minutes}:${seconds}`;
      //       timeBar.max = video.duration;
      //       timeCounter.innerText = `0:00 / ${timeTotal}`;
      //       updateCurrentTime();
      //     }
      //     setVideoSize()
      //   }

      //   setVideoData()

      //   controls.addEventListener('mousemove', () => { showUI(), hideUI() })
      //   controls.addEventListener('mouseout', hideUI);

      //   controls.childNodes.forEach(control => control.addEventListener('mousedown', onMouseDown))
      //   controls.childNodes.forEach(control => control.addEventListener('mouseup', onMouseUp));
      //   controls.childNodes.forEach(control => control.addEventListener('touchstart', onMouseDown))
      //   controls.childNodes.forEach(control => control.addEventListener('touchend', onMouseUp))

      //   fileChooser.addEventListener('change', selectVideoFile)

      //   fullscreen.addEventListener('click', toggleFullScreen)

      //   playButton.addEventListener('click', playVideo)
      //   backwarButton.addEventListener('click', backforward)

      //   player.addEventListener('fullscreenchange', setVideoSize)
      //   player.addEventListener('msfullscreenchange', setVideoSize)

      //   timeBar.addEventListener('change', updatetimeBar);
      //   timeBar.addEventListener('mousemove', updatetimeBar)

      //   video.addEventListener('mouseup', playVideo)
      //   video.addEventListener('touchend', playVideo)
      //   video.addEventListener('loadedmetadata', setVideoData)
      //   video.addEventListener('play', updatePlayState)
      //   video.addEventListener('pause', updatePlayState)
      //   video.addEventListener('timeupdate', updateCurrentTime)
      //   video.addEventListener('mouseout', hideUI);
      //   video.addEventListener('dblclick', toggleFullScreen);
      //   video.addEventListener('mousemove', () => { showUI(), hideUI() })

      //   window.addEventListener('keydown', onKeyDown)
      //   window.addEventListener('keyup', hideUI)
      //   window.addEventListener('resize', setVideoSize)
      //   window.addEventListener('mouseup', onMouseUp)
      // }
    }
  }
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
}

input[type=range] {
  -webkit-appearance: none;
  align-self: center;
  background: rgb(255, 255, 255);
  height: 8px;
  opacity: .7;
  outline: none;
  border-radius: 5px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: #FF4040;
  cursor: pointer;
  height: 15px;
  width: 15px;
  border-radius: 50%;
}

input[type=range]::-moz-range-thumb {
  background: #FF4040;
  border: none;
  border-radius: 0;
  cursor: pointer;
  height: 20px;
  width: 20px;
}

input[type=range]::-moz-range-track {
  background: rgb(231, 231, 231);
  border: none;
  width: 100%;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: white;
  border: none;
  cursor: pointer;
  color: black;
  font-weight: 600;
  outline: none;
  text-align: center;
  text-align-last: center;
  width: 2.5rem;
}

option {
  background: rgb(78, 78, 78);
  color: white;
  outline:none;
  text-align: center;
  text-align-last: center;
}

.player {
  margin: 0 auto;
  margin-bottom: 0;
  // height: 100%;
  .controls {
    // * {
    //   opacity: .9;
    //   transition: opacity .2s;
    // }
    background: rgba(0, 0, 0, 0.5);
    border-top: 5px solid rgba(0, 0, 0, 0.02);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    display: flex;
    height: 70px;
    justify-content: space-around;
    opacity: 0;
    margin: 0;
    transition-property: opacity, visibility;
    transform: translateY(70px);
    visibility: hidden;
    width: 100%;
    align-items: center;
    transition: 0.4s;
    @media (max-width: 1024px) {
      transform: translateY(-70px);
    }
    // &:hover {
    //   * {
    //     opacity: 1;
    //   }
    // }
  }
  &:hover {
    .controls {
      transform: translateY(-70px);
    }
  }
}

.player:fullscreen .video-screen {
  background: rgb(38, 38, 39)
}

.player:fullscreen .file-chooser {
  transform: translateY(500%);
}

.file-chooser {
  color: white;
  cursor: pointer;
  height: 50px;
  transform: translateY(-50%);
}

.video-screen {
  background: rgb(188,188,188);
  display: block;
  object-fit: cover;
  margin: 0 auto;
  transition: opacity .5s;
  width: 100%;
}

// button
.controls.active {
  opacity: 1;
  visibility: visible;
}

.fullscreen-button {
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  &:focus {
    outline: none;
    transform: scale(1.2);
  }
}

.play {
  align-self: center;
  &:focus {
    outline: none;
  }
}
.backward {
  height: 45px;
  width: 45px;
  border-radius: 99%;
  background: #333333;
  &:focus {
    outline: none;
  }
}
.play.start {
  height: 45px;
  width: 45px;
  border-radius: 99%;
  background: #333333;
}

.play.pause {
  height: 45px;
  width: 45px;
  border-radius: 99%;
  background: #333333;
}

.time-bar {
  width: 60%;
}

.time {
  align-self: center;
  color: white;
  font-size: 1rem;
  line-height: 24px;
  min-width: 135px;
  opacity: .9;
}

::-webkit-media-controls {
  display: none;
}

@media only screen and (max-width: 900px) {
  .player {
    margin: 0;
    max-width: 100vw;
    max-height: 100vh;
  }

  .controls {
    justify-content: space-evenly;
  }

  .controls * {
    margin: 0;
    margin-left: 8px;
  }

  .controls {
    margin: 0;
  }

  .time {
    font-size: 18px;
    font-weight: 400;
    max-width: 14%;
    min-width: 10%;
    width: 10%;
  }

  .time-bar {
    width: 100%;
  }

  .file-chooser {
    display: none;
  }
}
</style>