<template>
	<lottie
		:options="defaultOptions"
		:height="96"
		:width="96"
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
			this.anim.setSpeed(1.5)
		},
	},
}
</script>

<style></style>
