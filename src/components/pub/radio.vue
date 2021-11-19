<template>
	<div class="viewpage">
		<v-row>
			<v-col cols="12" sm="6">
				<v-radio-group v-model="column" column>
					<v-radio label="normal" value=""></v-radio>
					<v-radio label="checked" value=""></v-radio>
					<v-radio label="readonly" value="" readonly></v-radio>
					<v-radio label="disabled" value="" disabled></v-radio>
				</v-radio-group>
				<v-radio-group v-model="row" row>
					<v-radio label="normal" value=""></v-radio>
					<v-radio label="disabled" value="" disabled></v-radio>
					<v-radio label="readonly" value="" readonly></v-radio>
					<v-radio
						input-value="true"
						value
						label="checked"
						:on-icon="'mdi-checkbox-blank-circle'"
						:off-icon="'mdi-checkbox-blank-circle-outline gray'"
					></v-radio>
				</v-radio-group>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			column: 1,
			row: 3,
		}
	},
}
</script>
