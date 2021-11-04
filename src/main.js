import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import util from '@/utils/util'

import '@/assets/css/common.css'
import '@/assets/css/devcommon.css'

Vue.config.productionTip = false

Object.keys(util).forEach(key => (Vue.prototype[key] = util[key]))

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app')
