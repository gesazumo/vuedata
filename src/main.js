import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import util from '@/utils/util'

import '@/assets/css/common.css'
import '@/assets/css/devcommon.css'
import 'vue2-datepicker/index.css'

import constant from './constant'
import Datepicker from 'vue2-datepicker'
import Lottie from 'vue-lottie'
import methods from './methods'

Vue.config.productionTip = false
Vue.component('date-picker', Datepicker)
Vue.component('lottie', Lottie)
Object.keys(util).forEach(key => (Vue.prototype[key] = util[key]))
Object.keys(constant).forEach(key => (Vue.prototype[key] = constant[key]))
Object.keys(methods).forEach(key => (Vue.prototype[key] = methods[key]))

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app')
