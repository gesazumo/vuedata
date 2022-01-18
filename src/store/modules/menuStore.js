import {
	SET_MENU_TREE,
	OPEN_ALL,
	CLOSE_ALL,
	CLICK_NODE,
	SET_ACTIVE_NODE,
	SET_TREE_LOADING,
	SET_DETAIL_LOADING,
	SET_UPDATE_MODE,
} from '@/store/mutation-type'
import { getMenuApi, getMenuDetail } from '@/api/modules/initAPI'
import Vue from 'vue'
import constant from '@/constant'
import { updateMenuApi } from '@/api/modules/menuAPI'

const menuStore = {
	namespaced: true,
	state: () => ({
		menuTree: [],
		openList: [],
		activeNodeId: {
			cmnCd: 'TAH-EXP000',
			cmnCdNm: 'common',
		},
		activeNode: null,
		detailLoading: false,
		treeLoading: false,
		updateMode: false,
	}),
	mutations: {
		[SET_MENU_TREE](state, { menuTree }) {
			state.menuTree = menuTree
		},
		[OPEN_ALL](state) {
			state.openList = state.menuTree.map(item => {
				return item.menuId
			})
		},
		[CLOSE_ALL](state) {
			state.openList = []
		},
		[CLICK_NODE](state, { menuId }) {
			state.activeNodeId = menuId
		},
		[SET_ACTIVE_NODE](state, { node }) {
			state.activeNode = node
		},
		[SET_DETAIL_LOADING](state, { flag }) {
			state.detailLoading = flag
		},
		[SET_TREE_LOADING](state, { flag }) {
			state.detailLoading = flag
		},
		[SET_UPDATE_MODE](state, { flag }) {
			state.updateMode = flag
		},
	},
	actions: {
		async getMenuTree({ commit }) {
			commit(SET_TREE_LOADING, { flag: true })
			try {
				const { data } = await getMenuApi()
				commit(SET_MENU_TREE, { menuTree: data.list })
			} catch (error) {
				console.log(error)
				Vue.toasted.show(constant.apiErrorMsg)
			} finally {
				commit(SET_TREE_LOADING, { flag: false })
			}
		},
		async getMenuNode({ commit }, { menuId }) {
			commit(SET_DETAIL_LOADING, { flag: true })
			commit(SET_UPDATE_MODE, { flag: false })
			try {
				const { data } = await getMenuDetail(menuId)
				commit(SET_ACTIVE_NODE, { node: data.list[0] })
			} catch (error) {
				console.log(error)
				Vue.toasted.show(constant.apiErrorMsg)
			} finally {
				commit(SET_DETAIL_LOADING, { flag: false })
			}
		},
		async updateMenuNode({ commit, dispatch }, { param }) {
			commit(SET_DETAIL_LOADING, { flag: true })
			try {
				const { data } = await updateMenuApi(param)
				console.log(data)
				dispatch('getMenuTree')
				dispatch('getMenuNode', { menuId: param.menuId })
			} catch (error) {
				console.log(error)
				Vue.toasted.show(constant.apiErrorMsg)
			}
		},
	},
	getters: {
		getMenuSortArray: state => {
			const sortArray = []

			let arrayLength = state.menuTree.length
			if (state.activeNode.menuLevel != 1) {
				const index = state.menuTree.findIndex(
					item => item.menuId == state.activeNode.menuUpperId,
				)
				arrayLength = state.menuTree[index].children.length
			}

			for (let i = 0; i < arrayLength; i++) {
				const value = i + 1
				sortArray.push(value)
			}
			return sortArray
		},
		getParentUrl: state => {
			if (state.activeNode.menuLevel == 1) return null
			const index = state.menuTree.findIndex(
				item => item.menuId == state.activeNode.menuUpperId,
			)
			if (index != -1) return state.menuTree[index].menuUrl
		},
	},
}

export default menuStore
