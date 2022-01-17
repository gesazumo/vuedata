<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>포털 접속 이력</h5>
			<div class="adm-search">
				<v-row>
					<v-col md="4">
						<div class="label_txt">
							구분
							<v-tooltip
								right
								content-class="secondary tooltip-right"
							>
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
										포털 사용자 구분 정의를 확인하세요.
									</p>
									<span>
										[일반유저] 분석환경 사용안함<br />
										[파워유저] 분석환경 신청하여 사용중
									</span>
								</div>
							</v-tooltip>
						</div>
						<v-select
							single-line
							outlined
							hide-details="auto"
							v-model="userSelect"
							:items="userSelectList"
							item-text="cmnCdNm"
							item-value="cmnCd"
						></v-select>
					</v-col>
					<v-col md="4">
						<div class="label_txt">접속일</div>
						<div>
							<date-picker
								v-model="date"
								valueType="format"
								range
								placeholder="기간 선택"
							/>
						</div>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="4">
						<div class="label_txt">계열사</div>
						<v-select
							single-line
							outlined
							hide-details="auto"
							v-model="groupSelect"
							:items="groupSelectList"
							item-text="cmnCdNm"
							item-value="cmnCd"
						></v-select>
					</v-col>
					<v-col md="4">
						<div class="label_txt">이름, 사번</div>
						<v-text-field
							single-line
							outlined
							hide-details="auto"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="6">
						<div class="label_txt">Status</div>
						<div class="checkgroup">
							<v-checkbox
								v-for="status in statusSelectList"
								v-bind:key="status.cmnCd"
								:label="status.cmnCdNm"
								:value="status.cmnCd"
								v-model="statusSelectList"
							></v-checkbox>
						</div>
					</v-col>
					<v-col></v-col>
					<v-col md="2" align="right">
						<v-btn color="primary" outlined>초기화</v-btn>
						<v-btn color="primary">검색하기</v-btn>
					</v-col>
				</v-row>
			</div>
			<div class="item_box">
				<div class="board">
					<div class="tit">
						<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
						<v-select
							label="10개씩 보기"
							class="list_select"
							single-line
							hide-details="auto"
						>
						</v-select>
					</div>
					<div class="btn_area">
						<v-btn color="primary"> 전체 다운로드 하기 </v-btn>
						<v-btn color="primary" outlined>
							선택항목 다운로드 하기
						</v-btn>
					</div>
					<div class="table_box">
						<v-data-table
							:headers="headers"
							:items-per-page="itemsPerPage"
							:single-select="singleSelect"
							show-select
							hide-default-footer
							class="elevation-1"
						>
							<template v-slot:body>
								<v-btn color="green darken-1" x-small>
									로그인 성공
								</v-btn>
								<v-btn color="red darken-1" x-small
									>서비스 오류</v-btn
								>
								<v-btn color="grey darken-1" x-small>
									ID, PW 오류
								</v-btn>
							</template>
						</v-data-table>
					</div>
				</div>
				<div class="paging">
					<v-pagination
						v-model="page"
						:length="50"
						:total-visible="7"
						color="primary"
					></v-pagination>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import DatePicker from 'vue2-datepicker'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			date: [],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			singleSelect: false,
			selected: [],
			headers: [
				{
					text: 'Status',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '로그인 방식',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '구분',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '접속일시',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '접속자',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '사번',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '회사명',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '브라우저',
					align: 'center',
					sortable: true,
					value: '',
				},
			],
			groupSelect: '',
			groupSelectList: [],
			userSelect: '',
			userSelectList: [],
			statusSelectList: [],
		}
	},
	created() {
		console.log(this.today())
		console.log(this.formatDate(this.today(), '-'))
		this.init()
	},
	methods: {
		init() {
			this.date = [
				this.formatDate(this.addMonth(-1), '-'),
				this.formatDate(this.today(), '-'),
			]
			console.log(this.$getCmCode('TAH000001'))
			console.log(this.$getCmCode('TAH000084'))
			console.log(this.$getCmCode('TAH000085'))
			// this.groupSelectList = this.$getCmCode('TAH000001')
			this.initGroupSelect()
			this.initUserSelect()
			this.initStatusSelect()
		},
		initGroupSelect() {
			this.groupSelectList.push({ cmnCdNm: '전체', cmnCd: '' })
			this.groupSelectList.push(...this.$getCmCode('TAH000001'))
			console.log(this.groupSelectList)
			this.groupSelect = { cmnCdNm: '전체', cmnCd: '' }
		},
		initUserSelect() {
			this.userSelectList.push({ cmnCdNm: '전체', cmnCd: '' })
			this.userSelectList.push(...this.$getCmCode('TAH000084'))
			console.log(this.userSelectList)
			this.userSelect = { cmnCdNm: '전체', cmnCd: '' }
		},
		initStatusSelect() {
			this.statusSelectList = this.$getCmCode('TAH000085')
			console.log(this.statusSelectList)
		},
	},
}
</script>
