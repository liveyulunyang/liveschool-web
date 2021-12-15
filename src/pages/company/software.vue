<template>
  <main class="flex items-start">
    <div class="flex flex-col p-6 w-full">
      <div class="mb-4 flex justify-between items-center flex-wrap">
        <div class="flex">
          <Title :title="'軟體下載'" />
        </div>
      </div>
      <div class="content container">
        <h4 class="text-2xl mb-4 font-bold">軟體</h4>
        <div class="flex flex-wrap mb-10">
          <div class="w-1/2 md:w-1/3 p-2">
            <a class="block" href="https://zoom.us/download#client_4meeting" target="_blank">
              <img src="@/assets/img/company/zoom_icon.png" alt="" class="mx-auto mb-1">
              <p>Zoom</p>
            </a>
          </div>
          <div class="w-1/2 md:w-1/3 p-2">
            <a class="block" href="https://www.teamviewer.com/tw/download/windows/" target="_blank">
              <img src="@/assets/img/company/teamviewer_icon.png" alt="" class="mx-auto mb-1">
              <p>TeamViewer</p>
            </a>
          </div>
          <div class="w-1/2 md:w-1/3 p-2">
            <a class="block" href="https://www.google.com.tw/chrome/" target="_blank">
              <img src="@/assets/img/company/chrome_icon.png" alt="" class="mx-auto mb-1">
              <p>Chrome</p>
            </a>
          </div>
        </div>
        <h4 class="text-2xl mb-4 font-bold">測試工具</h4>
        <div class="flex flex-wrap">
          <div class="w-1/2 md:w-1/3 p-2">
            <a class="block" href="https://zoom.us/test" target="_blank">
              <img src="@/assets/img/company/zoom_icon.png" alt="" class="mx-auto mb-1">
              <p>視訊/耳麥測試</p>
            </a>
          </div>
          <div class="w-1/2 md:w-1/3 p-2">
            <a class="block" href="https://www.speedtest.net/" target="_blank">
              <img src="@/assets/img/company/icon_speed.png" alt="" class="mx-auto mb-1">
              <p>網路連線</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Title from '@/components/Title'
  export default {
    name: 'QA',
    components: {
      Title
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style>
</style>