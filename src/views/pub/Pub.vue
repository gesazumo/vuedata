<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<div>KB금융 마이데이터</div>
				<compbtn />
				<compinput />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import compbtn from '@/components/pub/compbtn.vue'
import compinput from '@/components/pub/compinput.vue'
export default {
	components: { compbtn, compinput },
}
</script>

<style></style>
