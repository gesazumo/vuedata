<template>
	<v-app>
		<!--
		<lottie :options="defaultOptions" :height="144" :width="144" />
		-->
		<v-main>
			<Header />
			<router-view />
			<Footer />
		</v-main>
	</v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import animationFile from '@/assets/lottie/check.json'

export default {
	components: { Header, Footer },
	name: 'App',

	data() {
		return {
			defaultOptions: { animationData: animationFile },
		}
	},
	methods: {
		handleAnimation: function (anim) {
			this.anim = anim
		},

		stop: function () {
			this.anim.stop()
		},

		play: function () {
			this.anim.play()
		},

		pause: function () {
			this.anim.pause()
		},

		onSpeedChange: function () {
			this.anim.setSpeed(this.animationSpeed)
		},
	},
}
</script>
