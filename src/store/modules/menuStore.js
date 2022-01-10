import { SET_MENU } from '@/store/mutation-type'
import { getMenuApi } from '@/api/modules/initAPI'
import util from '@/utils/util'

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
	actions: {
		async setMenu({ commit }) {
			try {
				const { data } = await getMenuApi()

				commit(SET_MENU, { menu: util.formatMenu(data.list) })
			} catch (err) {
				this.$showError('메뉴불러오기 실패!')
			}
		},
	},
	getters: {},
}

export default menuStore
