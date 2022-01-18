<template>
	<tbody>
		<tr v-if="shareMod == 'SM2'">
			<th>
				모델 파일
				<span class="asterisk">필수</span>
				<v-tooltip right content-class="secondary tooltip-right">
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							v-bind="attrs"
							v-on="on"
							icon
							style="background: none !important"
						>
							<i class="fas fa-question-circle"></i>
						</v-btn>
					</template>
					<div>
						<p
							class="title"
							style="
								color: #fff !important;
								font-size: 16px !important;
							"
						>
							전송할 모델파일 결과물이 있는 폴더를 지정할 수
							있습니다.
						</p>
						<span>
							업로드 전 폴더 전체를 Zip 파일로 압축해야 함.
						</span>
					</div>
				</v-tooltip>
			</th>
			<td colspan="3">
				<v-select
					v-model="data.modelFileName"
					:items="modelFiles"
					placeholder="모델 파일을 선택하세요"
					single-line
					outlined
					hide-details="auto"
					:rules="modelFiles_rule"
				></v-select>
			</td>
		</tr>
		<tr v-if="shareMod == 'SM3'">
			<th rowspan="2">
				테이블
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-select
					v-model="data.tableName"
					:items="tables"
					placeholder="테이블을 선택하세요"
					single-line
					outlined
					hide-details="auto"
					:rules="table_rule"
				></v-select>
			</td>
		</tr>
		<tr v-if="shareMod == 'SM3'">
			<td colspan="3">
				<v-col md="3">
					<p class="pt-2 pr-2">/ 컬럼명</p>
					<v-select
						v-model="data.tableClmnName"
						:items="tableClmns"
						placeholder="컬럼명을 선택하세요"
						single-line
						outlined
						hide-details="auto"
						:rules="tableClmn_rule"
					></v-select>
				</v-col>
			</td>
		</tr>
		<tr>
			<th>
				요청 사유
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-textarea
					v-model="data.aprvalDmndCtnt"
					placeholder="요청 사유를 입력하세요"
					outlined
					hide-details="auto"
					:rules="dmndCtnt_rule"
				></v-textarea>
			</td>
		</tr>
		<tr>
			<th>결재자</th>
			<td colspan="3">
				{{
					this.aprvalInfo != null ? this.aprvalInfo.aprvalPsnInfo : ''
				}}
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: [
		'shareMod',
		'aprvalInfo',
		'modelFiles',
		'tables',
		'tableClmns',
		'data',
	],

	data() {
		return {
			modelFiles_rule: [v => !!v || '모델 파일을 선택해 주세요.'],
			table_rule: [
				v => !!v || '다운로드할 테이블(데이터)을 선택해 주세요.',
			],
			tableClmn_rule: [
				v => !!v || 'CI 변환에 필요한 컬럼명을 선택해 주세요.',
			],
			dmndCtnt_rule: [v => !!v || '요청 사유를 선택해 주세요.'],
		}
	},

	created() {
		console.log('계열사전송,CI 변환 created')
	},

	methods: {},
}
</script>
