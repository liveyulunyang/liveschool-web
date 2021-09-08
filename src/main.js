import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue';
import { Icon } from 'leaflet';
import '@/assets/css/tailwind.css';
import '@/assets/css/main.css';
import '@/assets/css/table.css';
import '@/assets/css/checkbox.css';
import 'leaflet/dist/leaflet.css';

import router from './router';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

import VCalendar from 'v-calendar'

Vue.use(VCalendar)
// import myUpload from 'vue-image-crop-upload/upload-2.vue'
// Vue.use(myUpload)
Vue.use(VueSweetalert2)


Vue.config.productionTip = false


// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



