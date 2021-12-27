import { SET_TOKEN, SET_USER_INFO } from '@/store/mutation-type'
import router from '@/router'

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
			console.log(accessToken)
			state.accessToken = accessToken
			state.refreshToken = refreshToken
		},
		[SET_USER_INFO](state, { userInfo }) {
			state.userInfo = userInfo
		},
	},
	getters: {
		getAccessToken: state => {
			return state.accessToken
		},
		getRefreshToken: state => {
			return state.refreshToken
		},
	},
	actions: {
		async login({ commit }, { accessToken, refreshToken, userInfo }) {
			console.log('login')
			commit(SET_TOKEN, { accessToken, refreshToken })
			commit(SET_USER_INFO, { userInfo })
			router.push('/')
		},
		async logout({ commit }) {
			console.log('logout')
			commit(SET_TOKEN, { accessToken: null, refreshToken: null })
			commit(SET_USER_INFO, {
				userInfo: {
					name: null,
					companyName: null,
					department: null,
					employeeNum: null,
				},
			})
			router.push('/login')
		},
	},
}

export default userStore
