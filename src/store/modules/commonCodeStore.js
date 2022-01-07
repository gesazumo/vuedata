import { getCmCodeApi } from '@/api/modules/initAPI'
import { SET_CM_CODE } from '../mutation-type'

const commonCodeStore = {
	namespaced: true,
	state: {
		cmCode: {},
	},
	mutations: {
		[SET_CM_CODE](state, { cmCode }) {
			state.cmCode = cmCode
		},
	},
	actions: {
		async fetchCmCode({ commit }) {
			const { data } = await getCmCodeApi()
			commit(SET_CM_CODE, { cmCode: data.CmCode })
		},
	},
	getters: {
		getCmCode: state => key => {
			return state.cmCode[key]
		},
	},
}

export default commonCodeStore
