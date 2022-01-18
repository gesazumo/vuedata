<template>
	<tbody>
		<tr>
			<th>
				분석 쿼리명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-text-field
					v-model="data.name"
					placeholder="분석 쿼리명을 입력하세요"
					single-line
					clearable
					outlined
					hide-details="auto"
					:rules="quryName_rule"
				></v-text-field>
			</td>
		</tr>
		<tr>
			<th>
				분석 쿼리 설명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-textarea
					v-model="data.desc"
					placeholder="분석 쿼리에 대한 설명을 입력하세요"
					outlined
					hide-details="auto"
					:rules="qurydesc_rule"
				></v-textarea>
			</td>
		</tr>
		<tr>
			<th>
				분석 테이블 ID
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-select
					v-model="data.tableName"
					:items="tables"
					placeholder="분석 테이블 ID를 선택하세요"
					single-line
					outlined
					hide-details="auto"
					:rules="tableId_rule"
				></v-select>
			</td>
		</tr>
		<tr>
			<th>
				분석 테이블 한글명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-text-field
					v-model="data.tableHanglName"
					placeholder="테이블 한글명을 입력하세요"
					outlined
					hide-details="auto"
					:rules="tableHanglName_rule"
				></v-text-field>
			</td>
		</tr>
		<tr>
			<th>
				분석 컬럼명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-text-field
					v-model="data.clmnName"
					placeholder="컬럼명을 입력하세요"
					outlined
					hide-details="auto"
					:rules="clmnName_rule"
				></v-text-field>
			</td>
		</tr>
		<tr>
			<th>
				분석 쿼리
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-textarea
					v-model="data.quryCtnt"
					placeholder="분석 쿼리문을 입력하세요"
					outlined
					hide-details="auto"
					:rules="quryCtnt_rule"
				></v-textarea>
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: ['data', 'tables'],

	data() {
		return {
			quryName_rule: [v => !!v || '분석 쿼리명을 입력해 주세요.'],
			qurydesc_rule: [
				v => !!v || '분석 쿼리에 대한 설명을 입력해 주세요.',
			],
			tableId_rule: [v => !!v || '분석에 사용된 테이블을 선택해 주세요.'],
			tableHanglName_rule: [
				v => !!v || '분석에 사용된 테이블 한글명을 입력해 주세요.',
			],
			clmnName_rule: [v => !!v || '분석 컬럼명을 입력해 주세요.'],
			quryCtnt_rule: [
				v => !!v || '분석에 사용된 쿼리문을 입력해 주세요.',
			],
		}
	},
}
</script>
