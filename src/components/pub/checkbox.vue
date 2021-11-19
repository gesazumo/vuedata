<template>
	<div>
		<v-checkbox label="normal"></v-checkbox>
		<v-checkbox input-value="true" value label="checked"></v-checkbox>
		<v-checkbox
			input-value="true"
			value
			disabled
			label="readonly"
		></v-checkbox>
		<v-checkbox value disabled label="disabled"></v-checkbox>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checkbox: true,
		}
	},
}
</script>
