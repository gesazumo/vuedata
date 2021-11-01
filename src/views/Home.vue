<template>
	<div class="about">
		<h1>This is an home page</h1>
		<home-component />
	</div>
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue'
export default {
	components: { HomeComponent },
	name: 'Home',
}
</script>
