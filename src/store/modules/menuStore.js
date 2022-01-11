import { SET_MENU } from '@/store/mutation-type'

const menuStore = {
	namespaced: true,
	state: () => ({
		menu: [],
	}),
	mutations: {
		[SET_MENU](state, { menu }) {
			state.menu = [
				...menu,
				{
					path: '',
					redirect: 'main',
				},
				{
					path: 'main',
					name: 'main',
					meta: { isPublic: false },
					component: () => import('@/views/MainA.vue'),
				},
			]
		},
	},
	getters: {},
}

export default menuStore
