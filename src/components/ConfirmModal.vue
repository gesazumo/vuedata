<template>
	<v-dialog v-model="confirm" max-width="350">
		<v-card align="center">
			<v-card-title class="text-subtitle-1">
				{{ confirmMsg }}
			</v-card-title>
			<v-card-text></v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn color="primary" dark outlined @click="no()">
					취소
				</v-btn>

				<v-btn color="primary" dark @click="ok()">
					{{ confirmBtnMsg }}
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { CANCEL_CONFIRM, OK_CONFIRM } from '@/store/mutation-type'

export default {
	computed: {
		...mapState(['confirm', 'confirmMsg', 'confirmBtnMsg']),
	},
	methods: {
		...mapMutations({ ok: OK_CONFIRM, no: CANCEL_CONFIRM }),
	},
}
</script>

<style></style>
