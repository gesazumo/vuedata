<template>
	<div>
		pub
		<comp1 />
		<comp2 />
		<comp3 />
	</div>
</template>

<script>
import comp1 from '@/components/pub/comp1.vue'
import comp2 from '@/components/pub/comp2.vue'
import comp3 from '@/components/pub/comp3.vue'

export default {
	name: 'Pub',
	components: { comp1, comp2, comp3 },
}
</script>

<style></style>
