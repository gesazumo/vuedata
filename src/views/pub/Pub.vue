<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<div>KB금융 마이데이터</div>
			</v-col>
		</v-row>
		<compbtn />
		<compinput />
		<compcheck />
		<compradio />
		<comptooltip />
		<comptextarea />
		<comppaging />
	</v-container>
</template>

<script>
import compbtn from '@/components/pub/compbtn.vue'
import compinput from '@/components/pub/compinput.vue'
import compcheck from '@/components/pub/compcheck.vue'
import compradio from '@/components/pub/compradio.vue'
import comptooltip from '@/components/pub/comptooltip.vue'
import comptextarea from '@/components/pub/comptextarea.vue'
import comppaging from '@/components/pub/comppaging.vue'
export default {
	components: {
		compbtn,
		compinput,
		compcheck,
		compradio,
		comptooltip,
		comptextarea,
		comppaging,
	},
}
</script>

<style></style>
