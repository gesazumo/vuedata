<template>
	<v-container>
		<div class="text-center">
			<v-pagination
				v-model="page"
				:length="15"
				:total-visible="7"
			></v-pagination>
		</div>
	</v-container>
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
<style>
button[type='button'] .v-pagination__navigation {
	height: 32px !important;
	width: 32px !important;
	min-width: 0 !important;
	max-width: 32px !important;
}

ul li button:first-child {
	width: 32px !important;
	min-width: 0 !important;
}
</style>
