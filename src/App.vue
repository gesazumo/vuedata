<template>
	<v-app>
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

export default {
	components: { Header, Footer, Calendar },
	name: 'App',
	data: () => ({}),
	computed: {},
	methods: {},
}
</script>
