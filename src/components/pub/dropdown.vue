<template>
	<div>
		<v-select
			v-model="select"
			:hint="`${select.state}`"
			:items="items"
			item-text="state"
			label="Select"
			persistent-hint
			return-object
			solo
		></v-select>
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
