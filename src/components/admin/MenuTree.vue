<template>
	<div class="menu_lst">
		<v-row>
			<v-btn small outlined @click="closeAll">모두 접기</v-btn>
			<v-btn small outlined @click="openAll">모두 펼치기</v-btn>
			<v-btn color="primary" small outlined> 등록하기 </v-btn>
		</v-row>
		<v-row v-if="menu.length > 0">
			<v-treeview
				activatable
				:items="menu"
				:open.sync="openList"
				item-key="menuId"
			></v-treeview>
		</v-row>
	</div>
</template>

<script>
import { getMenuApi } from '@/api/modules/initAPI'
export default {
	data() {
		return {
			menu: [],
			openList: [],
		}
	},
	methods: {
		async getMenu() {
			try {
				const { data } = await getMenuApi()
				this.menu = data.list
			} catch (error) {
				console.log(error)
			}
		},
		openAll() {
			const a = this.menu.map(item => {
				return item.menuId
			})
			this.openList = a
		},
		closeAll() {
			this.openList = []
		},
	},
	created() {
		this.getMenu()
	},
}
</script>

<style></style>
