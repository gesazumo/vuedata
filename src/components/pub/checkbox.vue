<template>
	<div class="viewpage">
		<v-row>
			<v-col cols="12" sm="6">
				<v-checkbox label="normal"></v-checkbox>
				<v-checkbox
					input-value="true"
					value
					label="checked"
				></v-checkbox>
				<v-checkbox
					input-value="true"
					value
					disabled
					label="readonly"
				></v-checkbox>
				<v-checkbox value disabled label="disabled"></v-checkbox>
				<v-checkbox
					input-value="true"
					value
					label="checked"
					:on-icon="'mdi-checkbox-marked-circle-outline'"
					:off-icon="'mdi-checkbox-marked-circle-outline gray'"
				></v-checkbox>
			</v-col>
		</v-row>
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
