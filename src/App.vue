<template>
	<v-app>
		<v-main>
			아아아아
			<div class="aaa">aaa</div>
			{{ flag }}
			<app-header />
			<router-view />
			<Footer />
			<button @click="setFlag(false)">asdfadsfasdf</button>
		</v-main>
	</v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'

import { mapActions, mapState } from 'vuex'

export default {
	components: { AppHeader, Footer },
	name: 'App',
	data: () => ({
		//
	}),
	computed: {
		...mapState(['flag']),
	},
	methods: {
		...mapActions(['setFlag']),
	},
}
</script>
