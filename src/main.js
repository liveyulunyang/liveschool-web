import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue';
import { Icon } from 'leaflet';
import '@/assets/css/tailwind.css';
import '@/assets/css/main.css';
import '@/assets/css/checkbox.css';
import 'leaflet/dist/leaflet.css';

import router from './router';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

import VCalendar from 'v-calendar'

Vue.use(VCalendar)
Vue.use(VueSweetalert2)

import VueI18n from 'vue-i18n'
// import zh from './i18n/zh'
// import en from './i18n/en'
// import cn from './i18n/cn'
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

Vue.config.productionTip = false

delete Icon.Default.prototype._getIconUrl;

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



