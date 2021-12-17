<template>
	<div class="paging">
		<v-pagination
			v-model="page"
			:length="50"
			:total-visible="7"
			color="primary"
		></v-pagination>
	</div>
</template>

<script>
export default {
	data() {
		return {
			page: 1,
		}
	},
}
</script>
