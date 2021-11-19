<template>
	<div class="viewpage">
		<v-row>
			<v-col cols="12" sm="6">
				normal
				<v-select
					v-model="select"
					:items="items"
					label=""
					placeholder="선택하세요"
					single-line
					outlined
				></v-select>
				disabled
				<v-select
					v-model="select"
					:items="items"
					disabled
					label="Disabled"
					single-line
					outlined
				></v-select>
				readonly
				<v-select
					v-model="select"
					:items="items"
					readonly
					label="readonly"
					single-line
					outlined
				></v-select>
				selected
				<v-select
					v-model="select"
					:items="items"
					item-text="state"
					label=""
					return-object
					placeholder="선택하세요"
					single-line
					outlined
				></v-select>
				error messages
				<v-select
					v-model="select"
					:items="items"
					ref="name"
					:rules="[() => !!name || '옵션을 선택하세요']"
					:error-messages="errorMessages"
					placeholder="옵션을 선택하세요"
					single-line
					outlined
				></v-select>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data: () => ({
		select: { state: 'Option2' },
		items: ['Option1', 'Option2', 'Option3', 'Option4'],
	}),
}
</script>
<style></style>
