<template>
	<div class="menu_lst">
		<v-row>
			<v-btn small outlined @click="closeAll">모두 접기</v-btn>
			<v-btn small outlined @click="openAll">모두 펼치기</v-btn>
			<v-btn color="primary" small outlined> 등록하기 </v-btn>
		</v-row>
		<v-row>
			<v-treeview
				activatable
				@update:active="clickMenu"
				:items="$store.state.menuStore.menuTree"
				:open.sync="$store.state.menuStore.openList"
				item-key="menuId"
			></v-treeview>
		</v-row>
	</div>
</template>

<script>
import { CLOSE_ALL, OPEN_ALL, CLICK_NODE } from '@/store/mutation-type'
export default {
	data() {
		return {
			menu: [],
			openList: [],
		}
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
