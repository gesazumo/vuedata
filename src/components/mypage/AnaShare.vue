<template>
	<tbody>
		<tr>
			<th>
				공유 범위
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
							분석 결과물의 공유 범위를 선택할 수 있습니다.
						</p>
						<span>
							[그룹 전체 대상 공유] 포털의 Explore 메뉴를 통해 전
							그룹사 직원이 조회 가능<br />
							[계열사내 공유] 분석가가 속한 회사의 직원만 조회
							가능
						</span>
					</div>
				</v-tooltip>
			</th>
			<td colspan="3">
				<v-radio-group
					row
					v-model="radio.shareRang"
					hide-details="auto"
				>
					<v-radio
						v-for="item in TAH000035"
						:key="item.cmnCd"
						:label="item.cmnCdNm"
						:value="item.cmnCd"
						@click="ShareRangSelect"
					>
					</v-radio>
				</v-radio-group>
			</td>
		</tr>
		<tr>
			<th>공유 카테고리</th>
			<td colspan="3">
				<v-radio-group
					row
					v-model="radio.shareCgry"
					hide-details="auto"
				>
					<v-radio
						v-for="item in TAH000036"
						:key="item.cmnCd"
						:label="item.cmnCdNm"
						:value="item.cmnCd"
					>
					</v-radio>
				</v-radio-group>
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: ['radio'],

	data() {
		return {
			TAH000035: [], // 분석공유범위코드
			TAH000036: [], // 분석공유카테고리코드

			// shareCgry: 'SC1',

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
		this.TAH000035 = this.$getCmCode('TAH000035')
		this.TAH000036 = this.$getCmCode('TAH000036')

		console.log('공유하기 created')
	},

	methods: {
		ShareRangSelect() {
			this.$emit('InitMdelRegiCd')
		},
	},
}
</script>
