<template>
	<v-app>
		<v-main>
			<app-header />
			<router-view />
			<Footer />
		</v-main>
	</v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: { AppHeader, Footer },
	name: 'App',

	data: () => ({
		//
	}),
}
</script>
