<template>
	<tbody>
		<tr>
			<th>모델 구분</th>
			<td colspan="3">
				<v-radio-group
					row
					v-model="data.anlsMdelCd"
					hide-details="auto"
				>
					<v-radio
						v-for="item in TAH000037"
						:key="item.cmnCd"
						:label="item.cmnCdNm"
						:value="item.cmnCd"
						@click="MdelCdSelect"
					>
					</v-radio>
				</v-radio-group>
			</td>
		</tr>
		<tr>
			<th>모델 등록 구분</th>
			<td colspan="3">
				<v-radio-group
					row
					v-model="data.anlsMdelRegiCd"
					hide-details="auto"
				>
					<v-radio
						v-for="item in TAH000038"
						:key="item.cmnCd"
						:label="item.cmnCdNm"
						:value="item.cmnCd"
						@click="MdelRegiCdSelect"
					>
					</v-radio>
				</v-radio-group>
			</td>
		</tr>
		<tr v-if="data.anlsMdelRegiCd == '02'">
			<th>기등록 분석모델</th>
			<td colspan="3">
				<v-select
					placeholder="기등록 분석모델을 선택하세요"
					single-line
					outlined
					hide-details="auto"
				></v-select>
			</td>
		</tr>
		<tr>
			<th>
				모델명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-text-field
					placeholder="모델명을 입력하세요"
					single-line
					clearable
					outlined
					hide-details="auto"
				></v-text-field>
			</td>
		</tr>
		<tr>
			<th>
				모델설명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-textarea
					placeholder="모델에 대한 설명을 입력하세요"
					outlined
					hide-details="auto"
				></v-textarea>
			</td>
		</tr>
		<tr>
			<th>모델버전</th>
			<td>1.0</td>
		</tr>
		<tr>
			<th>
				분석 언어
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-row>
					<div
						class="mr-3 mb-2"
						v-for="item in TAH000039"
						v-bind:key="item.cmnCd"
					>
						<v-col>
							<v-checkbox
								v-model="item.select"
								hide-details="false"
								:label="item.cmnCdNm"
							></v-checkbox>
							<v-text-field
								v-if="item.cmnCdNm != '기타'"
								placeholder="버전을 입력하세요"
								single-line
								outlined
								hide-details="auto"
							></v-text-field>
							<v-text-field
								v-if="item.cmnCdNm == '기타'"
								placeholder="분석에 사용된 언어를 입력하세요"
								single-line
								outlined
								hide-details="auto"
								style="width: 300px"
							></v-text-field>
						</v-col>
					</div>
				</v-row>
			</td>
		</tr>
		<tr>
			<th>
				분석 알고리즘
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-row>
					<div v-for="item in TAH000040" v-bind:key="item.cmnCd">
						<v-col>
							<v-checkbox
								v-model="item.select"
								hide-details="false"
								:label="item.cmnCdNm"
							></v-checkbox>
							<v-text-field
								v-if="item.cmnCdNm == '기타'"
								placeholder="분석에 사용된 알고리즘을 입력하세요"
								single-line
								outlined
								hide-details="auto"
								style="width: 300px"
							></v-text-field>
						</v-col>
					</div>
				</v-row>
			</td>
		</tr>
		<tr>
			<th>
				대표 Dataset
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
							분석에 사용된 대표 Dataset을 공유할 수 있습니다.
						</p>
						<span>
							포털을 통해 공유시 사용자들은 Sample Data만 확인 할
							수 있으며 다운로드 불가능
						</span>
					</div>
				</v-tooltip>
			</th>
			<td colspan="3">
				<v-select
					placeholder="대표 Dataset을 선택하세요"
					single-line
					outlined
					hide-details="auto"
				></v-select>
			</td>
		</tr>
		<tr>
			<th>
				분석코드
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-select
					placeholder="분석코드 파일을 선택하세요"
					single-line
					outlined
					hide-details="auto"
				></v-select>
				<v-data-table
					:headers="headers"
					hide-default-footer
					class="elevation-1"
				></v-data-table>
			</td>
		</tr>
		<tr>
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
					placeholder="모델 파일을 선택하세요"
					single-line
					outlined
					hide-details="auto"
				></v-select>
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: ['data'],

	data() {
		return {
			TAH000037: [], // 분석모델코드
			TAH000038: [], // 분석모델등록코드
			TAH000039: [], // 분석언어코드
			TAH000040: [], // 분석알고리즘코드

			date: null,
			isSelecting: '',
			dragging: false,
			file: '',
			headers: [
				{
					text: '파일명',
					align: 'center',
					sortable: false,
					value: '',
				},
			],
		}
	},

	created() {
		this.TAH000037 = this.$getCmCode('TAH000037')
		this.TAH000038 = this.$getCmCode('TAH000038')
		this.TAH000039 = this.$getCmCode('TAH000039')
		this.TAH000040 = this.$getCmCode('TAH000040')

		console.log('공유하기 created')
	},

	methods: {
		MdelCdSelect() {
			this.$emit('InitMdelRegiCd')
		},

		MdelRegiCdSelect() {},
	},
}
</script>
