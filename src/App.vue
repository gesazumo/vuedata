<template>
	<v-app>
		<loading-lottie />
		<check-lottie />
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
import LoadingLottie from './components/LoadingLottie.vue'
import CheckLottie from './components/CheckLottie.vue'

export default {
	components: { Header, Footer, LoadingLottie, CheckLottie },
	name: 'App',
}
</script>
