<template>
	<lottie
		:options="defaultOptions"
		:height="200"
		:width="200"
		v-on:animCreated="handleAnimation"
	/>
</template>

<script>
import animationFile from '@/assets/lottie/check.json'

export default {
	name: 'CheckLottie',
	data() {
		return {
			defaultOptions: { animationData: animationFile },
		}
	},
	methods: {
		handleAnimation: function (anim) {
			this.anim = anim
			this.anim.setSpeed(1)
		},
	},
}
</script>

<style></style>
