<template>
	<div class="menu_lst">
		<v-row>
			<v-btn small outlined @click="closeAll">모두 접기</v-btn>
			<v-btn small outlined @click="openAll">모두 펼치기</v-btn>
		</v-row>
		<v-row>
			<loading-lottie v-if="treeLoading" />
			<v-treeview
				v-if="!treeLoading"
				activatable
				@update:active="clickMenu"
				:items="$store.state.menuStore.menuTree"
				:open.sync="$store.state.menuStore.openList"
				item-key="menuId"
				item-text="menuNm"
			></v-treeview>
		</v-row>
	</div>
</template>

<script>
import { CLOSE_ALL, OPEN_ALL, CLICK_NODE } from '@/store/mutation-type'
import { mapState } from 'vuex'
export default {
	data() {
		return {
			menu: [],
			openList: [],
		}
	},
	computed: {
		...mapState({
			treeLoading: state => state.menuStore.treeLoading,
		}),
	},
	methods: {
		clickMenu(node) {
			this.$store.commit(`menuStore/${CLICK_NODE}`, { menuId: node[0] })
		},
		async getMenuTree() {
			await this.$store.dispatch('menuStore/getMenuTree')
		},
		openAll() {
			this.$store.commit(`menuStore/${OPEN_ALL}`)
		},
		closeAll() {
			this.$store.commit(`menuStore/${CLOSE_ALL}`)
		},
	},
	created() {
		this.getMenuTree()
	},
}
</script>

<style></style>
