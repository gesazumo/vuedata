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
		getCmCodeNm: state => (key, cmnCd) => {
			return state.cmCode[key].filter(item => item.cmnCd == cmnCd)[0]
				.cmnCdNm
		},
		getCmCodeVal: state => (key, cmnCdNm) => {
			return state.cmCode[key].filter(item => item.cmnCdNm == cmnCdNm)[0]
				.cmnCd
		},
		cmCodeExist: state => {
			return state.cmCode
		},
	},
}

export default commonCodeStore
