import { SET_TOKEN, SET_USER_INFO } from '@/store/mutation-type'

const userStore = {
	state: {
		accessToken: null,
		refreshToken: null,
		userInfo: {
			name: null,
			companyName: null,
			department: null,
			employeeNum: null,
		},
	},
	mutations: {
		[SET_TOKEN](state, { accessToken, refreshToken }) {
			state.accessToken = accessToken
			state.refreshToken = refreshToken
		},
		[SET_USER_INFO](state, { userInfo }) {
			state.userInfo = userInfo
		},
	},
	actions: {
		async login({ commit }, { accessToken, refreshToken, userInfo }) {
			commit(SET_TOKEN, { accessToken, refreshToken })
			commit(SET_USER_INFO, { userInfo })
		},
	},
}

export default userStore
