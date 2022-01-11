import { getCmCodeApi } from '@/api/modules/initAPI'
import constant from '@/constant'
import { SET_CM_CODE } from '../mutation-type'

const commonCodeStore = {
	namespaced: true,
	state: {
		cmCode: null,
	},
	mutations: {
		[SET_CM_CODE](state, { cmCode }) {
			state.cmCode = cmCode
		},
	},
	actions: {
		async fetchCmCode({ commit }) {
			const { data } = await getCmCodeApi()
			const cmCode = {
				...data.CmCode,
				notiCmCodeDstic: [...constant.notiCmCodeDstic],
				notiCmCodeKate: [...constant.notiCmCodeKate],
				notiCmCodePosting: [...constant.notiCmCodePosting],
			}
			commit(SET_CM_CODE, { cmCode: cmCode })
		},
	},
	getters: {
		getCmCode: state => key => {
			return state.cmCode[key]
		},
		cmCodeExist: state => {
			return state.cmCode
		},
	},
}

export default commonCodeStore
