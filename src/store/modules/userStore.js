import {
	SET_TOKEN,
	SET_USER_INFO,
	INIT_USER_STATE,
} from '@/store/mutation-type'
import router from '@/router'

const initState = {
	accessToken: null,
	refreshToken: null,
	userInfo: {
		name: null,
		companyName: null,
		department: null,
		employeeNum: null,
	},
}

const userStore = {
	state: { ...initState },
	mutations: {
		[SET_TOKEN](state, { accessToken, refreshToken }) {
			state.accessToken = accessToken
			state.refreshToken = refreshToken
		},
		[SET_USER_INFO](state, { userInfo }) {
			state.userInfo = userInfo
		},
		[INIT_USER_STATE](state, { initState }) {
			state.userInfo = initState.userInfo
			state.accessToken = initState.accessToken
			state.refreshToken = initState.refreshToken
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
			commit(SET_TOKEN, { accessToken, refreshToken })
			commit(SET_USER_INFO, { userInfo })
			router.push('/')
		},
		async logout({ commit }) {
			commit(INIT_USER_STATE, { initState })
			router.push('/login')
		},
	},
}

export default userStore
