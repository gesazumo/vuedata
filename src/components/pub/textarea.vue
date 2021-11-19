<template>
	<v-textarea
		solo
		name=""
		label="내용을 입력하세요"
		clearable
		clear-icon="mdi-close"
		v-model="user_desc"
		:rules="user_desc_rule"
	></v-textarea>
</template>
<script>
export default {
	data() {
		return {
			user_desc: '',
			user_desc_rule: [v => !!v || '내용을 입력하세요'],
		}
	},
}
</script>
<style></style>
