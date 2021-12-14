import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import util from '@/utils/util'

import '@/assets/css/common.css'
import '@/assets/css/devcommon.css'
import constant from './constant'

Vue.config.productionTip = false

Object.keys(util).forEach(key => (Vue.prototype[key] = util[key]))
Object.keys(constant).forEach(key => (Vue.prototype[key] = constant[key]))

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app')
