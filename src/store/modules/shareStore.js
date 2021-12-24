import { SET_TEST_FLAG } from '@/store/mutation-type'

const shareStore = {
	namespaced: true,
	state: () => ({
		testFlag: false,
	}),
	mutations: {
		[SET_TEST_FLAG](state, { flag }) {
			state.testFlag = flag
		},
	},
	actions: {},
	getters: {},
}

export default shareStore
