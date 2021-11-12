<template>
	<v-container>
		<v-radio-group v-model="radioGroup">
			<v-radio
				v-for="n in 3"
				:key="n"
				:label="`Option ${n}`"
				:value="n"
			></v-radio>
		</v-radio-group>

		<v-radio-group v-model="column" column>
			<v-radio label="Option 1" value="radio-1"></v-radio>
			<v-radio label="Option 2" value="radio-2"></v-radio>
		</v-radio-group>

		<v-radio-group v-model="row" row>
			<v-radio label="normal" value=""></v-radio>
			<v-radio label="checked" value=""></v-radio>
			<v-radio label="readonly" value="" readonly></v-radio>
			<v-radio label="disabled" value="" disabled></v-radio>
		</v-radio-group>
	</v-container>
</template>
<script>
export default {
	data() {
		return {
			radioGroup: 1,
			column: null,
			row: 1,
		}
	},
}
</script>
