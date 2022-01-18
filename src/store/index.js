import Vue from 'vue'
import Vuex from 'vuex'
import shareStore from './modules/shareStore'
import userStore from './modules/userStore'
import commonCodeStore from './modules/commonCodeStore'
import createPersistedState from 'vuex-persistedstate'
import {
	CANCEL_CONFIRM,
	OK_CONFIRM,
	SHOW_CONFIRM,
	SET_GLOBAL_LOADING,
} from './mutation-type'
import menuStore from './modules/menuStore'

const userState = createPersistedState({
	paths: ['userStore'],
})

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		confirm: false,
		confirmRes: null,
		confirmMsg: '',
		confirmBtnMsg: '',
		globalLoading: false,
	},
	mutations: {
		[SHOW_CONFIRM](state, { reslove, msg, btnMsg }) {
			state.confirmRes = reslove
			state.confirmMsg = msg
			state.confirmBtnMsg = btnMsg
			state.confirm = true
		},
		[OK_CONFIRM](state) {
			state.confirmMsg = ''
			state.confirmBtnMsg = ''
			state.confirmRes && state.confirmRes(true)
			state.confirmRes = null
			state.confirm = false
		},
		[CANCEL_CONFIRM](state) {
			state.confirmMsg = ''
			state.confirmBtnMsg = ''
			state.confirmRes && state.confirmRes(false)
			state.confirmRes = null
			state.confirm = false
		},
		[SET_GLOBAL_LOADING](state, { flag }) {
			state.globalLoading = flag
		},
	},
	actions: {
		showConfirm({ commit }, { reslove, msg, btnMsg }) {
			commit(SHOW_CONFIRM, { reslove, msg, btnMsg })
		},
	},
	modules: {
		shareStore: shareStore,
		userStore: userStore,
		commonCodeStore: commonCodeStore,
		menuStore: menuStore,
	},
	plugins: [userState],
})
