<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>메뉴관리</h5>
			<menu-tree @clickMenu="clickMenu" />
			<menu-detail :menuId="activeMenuId" />
		</div>
	</div>
</template>

<script>
import MenuTree from '@/components/admin/MenuTree.vue'
import MenuDetail from '@/components/admin/MenuDetail.vue'
export default {
	components: {
		MenuTree,
		MenuDetail,
	},
	methods: {
		clickMenu(nodeId) {
			console.log(nodeId)
			this.activeMenuId = nodeId
		},
	},
	data() {
		return {
			activeMenuId: 'TAH-EXP000',
		}
	},
}
</script>

<style></style>
