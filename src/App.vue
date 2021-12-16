<template>
	<v-app>
		<lottie
			:options="defaultOptions"
			:height="200"
			:width="200"
			v-on:animCreated="handleAnimation"
		/>
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
import animationFile from '@/assets/lottie/social-network.json'

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
			this.anim.setSpeed(1)
		},
	},
}
</script>
