<template>
	<tbody>
		<tr>
			<th>
				대시보드명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-text-field
					v-model="data.name"
					placeholder="대시보드명을 입력하세요"
					outlined
					hide-details="auto"
					:rules="dshbName_rule"
				></v-text-field>
			</td>
		</tr>
		<tr>
			<th>
				대시보드 설명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-textarea
					v-model="data.desc"
					placeholder="대시보드 설명을 입력하세요"
					outlined
					hide-details="auto"
					:rules="dshbDesc_rule"
				></v-textarea>
			</td>
		</tr>
		<tr>
			<th>
				대시보드 URL
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-textarea
					v-model="data.url"
					placeholder="대시보드 URL을 입력하세요"
					outlined
					hide-details="auto"
					:rules="dshbUrl_rule"
				></v-textarea>
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: ['data'],

	data() {
		return {
			dshbName_rule: [v => !!v || '대시보드명을 입력해 주세요.'],
			dshbDesc_rule: [
				v => !!v || '대시보드에 대한 설명을 입력해 주세요.',
			],
			dshbUrl_rule: [v => !!v || '대시보드 URL을 입력해 주세요.'],
		}
	},
}
</script>
