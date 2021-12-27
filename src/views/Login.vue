<template>
	<div>
		Login
		<button @click="login">로그인</button>
	</div>
</template>

<script>
export default {
	name: 'Login',
	methods: {
		async login() {
			await this.$store.dispatch('login', {
				accessToken: 'accessToken',
				refreshToken: 'refreshToken',
				userInfo: {},
			})
		},
	},
}
</script>

<style></style>
