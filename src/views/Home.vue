<template>
	<div class="about">
		여기가 홈
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
