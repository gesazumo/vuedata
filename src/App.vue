<template>
	<router-view />
</template>
<script>
export default {
	async created() {
		try {
			await this.$store.dispatch('commonCodeStore/fetchCmCode')
		} catch (error) {
			this.$showError(
				this.apiErrorMsg_Pink + ' : 공통코드 받아오기 실패!',
			)
			console.log('commonCodeStore/fetchCmCode :' + error)
		}
	},
}
</script>
