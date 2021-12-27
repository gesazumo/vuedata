import Vue from 'vue'
import Vuex from 'vuex'
import shareStore from './modules/shareStore'
import userStore from './modules/userStore'
import createPersistedState from 'vuex-persistedstate'

const userState = createPersistedState({
	paths: ['userStore'],
})

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		shareStore: shareStore,
		userStore: userStore,
	},
	plugins: [userState],
})
