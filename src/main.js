import Vue from 'vue'
import App from './App.vue'
import loadRouter from '@/router'
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
import NoData from '@/components/Nodata.vue'
import Toasted from 'vue-toasted'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import LoadingLottie from '@/components/LoadingLottie.vue'
import CheckLottie from '@/components/CheckLottie.vue'

Vue.config.productionTip = false
Vue.component('date-picker', Datepicker)
Vue.component('lottie', Lottie)
Vue.component('no-data', NoData)
Vue.component('LoadingLottie', LoadingLottie)
Vue.component('no-CheckLottie', CheckLottie)

Object.keys(util).forEach(key => (Vue.prototype[key] = util[key]))
Object.keys(constant).forEach(key => (Vue.prototype[key] = constant[key]))
Object.keys(methods).forEach(key => (Vue.prototype[key] = methods[key]))
Vue.use(Toasted, { duration: 1500 })
Vue.component('LoadingLottie', LoadingLottie)
Vue.component('CheckLottie', CheckLottie)

loadRouter().then(router => {
	console.log(router.options.routes)
	new Vue({
		router,
		store,
		vuetify,
		render: h => h(App),
	}).$mount('#app')
})
