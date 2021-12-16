<template>
	<v-app>
		<lottie :options="defaultOptions" :height="200" :width="200" />
		<calendar />
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
import Calendar from './components/pub/calendar.vue'
import animationFile from '@/assets/lottie/social-network.json'

export default {
	components: { Header, Footer, Calendar },
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
