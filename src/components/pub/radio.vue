<template>
	<div>
		<v-radio-group v-model="column" column>
			<v-radio label="normal" value=""></v-radio>
			<v-radio label="checked" value=""></v-radio>
			<v-radio label="readonly" value="" readonly></v-radio>
			<v-radio label="disabled" value="" disabled></v-radio>
		</v-radio-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			column: 1,
		}
	},
}
</script>
