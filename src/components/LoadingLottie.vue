<template>
	<lottie
		:options="defaultOptions"
		:height="24"
		:width="60"
		v-on:animCreated="handleAnimation"
	/>
</template>

<script>
import animationFile from '@/assets/lottie/loading.json'

export default {
	name: 'LoadingLottie',
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
