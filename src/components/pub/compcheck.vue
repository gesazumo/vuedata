<template>
	<v-container>
		<v-row>
			<v-col cols="3">
				<v-checkbox label="normal"></v-checkbox>
			</v-col>
			<v-col cols="3">
				<v-checkbox
					input-value="true"
					value
					label="checked"
				></v-checkbox>
			</v-col>
			<v-col cols="3">
				<v-checkbox
					input-value="true"
					value
					disabled
					label="readonly"
				></v-checkbox>
			</v-col>
			<v-col cols="3">
				<v-checkbox value disabled label="disabled"></v-checkbox>
			</v-col>
		</v-row>
	</v-container>
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
