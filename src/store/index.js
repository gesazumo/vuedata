import Vue from 'vue'
import Vuex from 'vuex'
import { SET_FLAG } from './mutation-type'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		flag: true,
	},
	mutations: {
		[SET_FLAG](state, { flag }) {
			state.flag = flag
		},
	},
	actions: {
		setFlag({ commit }, value) {
			commit(SET_FLAG, { flag: value })
		},
	},
	modules: {},
})
