import Vue from 'vue'
import Vuex from 'vuex'
import shareStore from './modules/shareStore'
import userStore from './modules/userStore'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		shareStore: shareStore,
		userStore: userStore,
	},
})
