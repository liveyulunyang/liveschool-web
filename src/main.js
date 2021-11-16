import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue';
import { Icon } from 'leaflet';
import '@/assets/css/tailwind.css';
import '@/assets/css/main.scss';
import '@/assets/css/checkbox.css';
import '@/assets/css/sweatalert.scss';
import 'leaflet/dist/leaflet.css';
import '@/assets/css/popup.scss';
import '@/assets/css/radioBox.scss';

import router from './router';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

import VCalendar from 'v-calendar'

Vue.use(VCalendar)
Vue.use(VueSweetalert2)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
let locale = 'zh'

const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh': require('@/i18n/zh.json'),
    'en': require('@/i18n/en.json'),
    'cn': require('@/i18n/cn.json')
  }
})
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import 'swiper/dist/css/swiper.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
// Vue.use(VueAwesomeSwiper)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')



