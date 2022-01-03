import Vue from 'vue'
import Vuex from 'vuex'
import shareStore from './modules/shareStore'
import userStore from './modules/userStore'
import createPersistedState from 'vuex-persistedstate'
import { CANCEL_CONFIRM, OK_CONFIRM, SHOW_CONFIRM } from './mutation-type'

const userState = createPersistedState({
	paths: ['userStore'],
})

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		confirm: false,
		confirmRes: null,
		confirmMsg: '',
	},
	mutations: {
		[SHOW_CONFIRM](state, { reslove, msg }) {
			state.confirmRes = reslove
			state.confirmMsg = msg
			state.confirm = true
		},
		[OK_CONFIRM](state) {
			state.confirmMsg = ''
			state.confirmRes && state.confirmRes(true)
			state.confirmRes = null
			state.confirm = false
		},
		[CANCEL_CONFIRM](state) {
			state.confirmMsg = ''
			state.confirmRes && state.confirmRes(false)
			state.confirmRes = null
			state.confirm = false
		},
	},
	actions: {
		showConfirm({ commit }, { reslove, msg }) {
			commit(SHOW_CONFIRM, { reslove, msg })
		},
	},
	modules: {
		shareStore: shareStore,
		userStore: userStore,
	},
	plugins: [userState],
})
