<template>
	<v-switch
		v-model="switch1"
		:label="`Switch 1: ${switch1.toString()}`"
		color="primary"
	></v-switch>
</template>
<script>
export default {
	data() {
		return {
			switch1: true,
		}
	},
}
</script>
