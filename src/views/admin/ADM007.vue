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
							return-object
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
							return-object
						></v-select>
					</v-col>
					<v-col md="4">
						<div class="label_txt">이름, 사번</div>
						<v-text-field
							single-line
							outlined
							hide-details="auto"
							v-model="name"
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
								v-model="status.select"
							></v-checkbox>
						</div>
					</v-col>
					<v-col></v-col>
					<v-col md="2" align="right">
						<v-btn color="primary" outlined>초기화</v-btn>
						<v-btn color="primary" @click="search()"
							>검색하기</v-btn
						>
					</v-col>
				</v-row>
			</div>
			<div class="item_box">
				<div class="board">
					<div class="tit">
						<p v-if="total != 0">
							총 <span>{{ total }}</span
							>개의 검색결과가 있습니다.
						</p>
						<v-select
							class="list_select"
							single-line
							hide-details="auto"
							v-model="limitSelect"
							:items="limitSelectList"
							item-key="value"
							item-text="title"
							return-object
						>
						</v-select>
					</div>
					<div class="btn_area">
						<v-btn color="primary"> 전체 다운로드 하기 </v-btn>
						<v-btn
							color="primary"
							outlined
							v-if="selectedTableItems.length != 0"
						>
							선택항목 다운로드 하기
						</v-btn>
					</div>
					<div class="table_box">
						<v-data-table
							v-model="selectedTableItems"
							:headers="headers"
							:items="tableItems"
							:items-per-page="limitSelect.value"
							show-select
							hide-default-footer
							class="elevation-1"
							item-key="seq"
						>
							<template v-slot:[`item.statusNm`]="{ item }">
								<v-btn
									color="green darken-1"
									x-small
									v-if="item.statusNm == '로그인 성공'"
								>
									{{ item.statusNm }}
								</v-btn>
								<v-btn
									color="red darken-1"
									x-small
									v-if="item.statusNm == '서비스 오류'"
									>{{ item.statusNm }}</v-btn
								>
								<v-btn
									color="grey darken-1"
									x-small
									v-if="item.statusNm == 'ID,PW 오류'"
								>
									{{ item.statusNm }}
								</v-btn>
							</template>
							<!-- <template v-slot:body>
								<v-btn color="green darken-1" x-small>
									로그인 성공
								</v-btn>
								<v-btn color="red darken-1" x-small
									>서비스 오류</v-btn
								>
								<v-btn color="grey darken-1" x-small>
									ID, PW 오류
								</v-btn>
							</template> -->
						</v-data-table>
					</div>
				</div>
				<div class="paging">
					<v-pagination
						v-model="page"
						:length="1"
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
// import axios from 'axios'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			date: [],
			page: 1,
			pageCount: 0,
			headers: [
				{
					text: 'Status',
					align: 'center',
					sortable: true,
					value: 'statusNm',
				},
				{
					text: '로그인 방식',
					align: 'center',
					sortable: true,
					value: 'loginWayNm',
				},
				{
					text: '구분',
					align: 'center',
					sortable: true,
					value: 'userDcNm',
				},
				{
					text: '접속일시',
					align: 'center',
					sortable: true,
					value: 'connYms',
				},
				{
					text: '접속자',
					align: 'center',
					sortable: true,
					value: 'userNm',
				},
				{
					text: '사번',
					align: 'center',
					sortable: true,
					value: 'userId',
				},
				{
					text: '회사명',
					align: 'center',
					sortable: true,
					value: 'groupCoNm',
				},
				{
					text: '브라우저',
					align: 'center',
					sortable: true,
					value: 'brsrCmt',
				},
			],
			groupSelect: {},
			groupSelectList: [],
			userSelect: {},
			userSelectList: [],
			statusSelectList: [],
			name: '',
			selectedTableItems: [],
			tableItems: [],
			total: 0,
			limitSelect: { title: '10개씩 보기', value: 10 },
			limitSelectList: [
				{ title: '10개씩 보기', value: 10 },
				{ title: '30개씩 보기', value: 30 },
				{ title: '50개씩 보기', value: 50 },
			],
		}
	},
	created() {
		console.log(this.today())
		console.log(this.formatDate(this.today(), '-'))
		console.log(this.groupSelect)
		this.init()
		this.search()
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
			for (let i = 0; i < this.statusSelectList.length; i++)
				this.$set(this.statusSelectList[i], 'select', true)
			console.log(this.statusSelectList)
		},
		search() {
			console.log('SEARCH BUTTON')
			console.log(this.userSelect.cmnCd)
			console.log(this.date[0].replace('-', '').replace('-', ''))
			console.log(this.date[1])
			console.log(this.groupSelect.cmnCd)
			console.log(this.name)
			console.log(this.getStatusSelectArray())
			let temp = {
				count: '6',
				list: [
					{
						seq: 1,
						statusNm: '로그인 성공',
						loginWayNm: 'SSO',
						userDcNm: '일반유저',
						connYms: '2022-01-11 12:31:43',
						userNm: '분석환경관리자',
						userId: 'B0000000',
						groupCoNm: 'KB국민은행',
						brsrCmt: 'Crome',
					},
					{
						seq: 2,
						statusNm: 'ID,PW 오류',
						loginWayNm: '일반',
						userDcNm: '파워유저',
						connYms: '2022-01-12 12:31:43',
						userNm: '분석환경관리자',
						userId: 'B0000000',
						groupCoNm: 'KB국민은행',
						brsrCmt: 'Crome',
					},
					{
						seq: 3,
						statusNm: '로그인 성공',
						loginWayNm: '일반',
						userDcNm: '파워유저',
						connYms: '2022-01-13 12:31:43',
						userNm: '분석환경관리자',
						userId: 'B0000000',
						groupCoNm: 'KB국민은행',
						brsrCmt: 'Crome',
					},
					{
						seq: 4,
						statusNm: '서비스 오류',
						loginWayNm: 'SSO',
						userDcNm: '파워유저',
						connYms: '2022-01-14 12:31:43',
						userNm: '분석환경관리자',
						userId: 'B0000000',
						groupCoNm: 'KB국민은행',
						brsrCmt: 'Crome',
					},
					{
						seq: 5,
						statusNm: 'ID,PW 오류',
						loginWayNm: 'SSO',
						userDcNm: '파워유저',
						connYms: '2022-01-15 12:31:43',
						userNm: '분석환경관리자',
						userId: 'B0000000',
						groupCoNm: 'KB국민은행',
						brsrCmt: 'Crome',
					},
					{
						seq: 6,
						statusNm: '로그인 성공',
						loginWayNm: 'SSO',
						userDcNm: '파워유저',
						connYms: '2022-01-16 12:31:43',
						userNm: '분석환경관리자',
						userId: 'B0000000',
						groupCoNm: 'KB국민은행',
						brsrCmt: 'Crome',
					},
				],
			}
			this.tableItems = temp.list
			this.total = temp.count
			console.log(this.tableItems)
			// axios
			// 	.get('/api/admin/adm007/selectAdm00701List', {
			// 		params: {
			// 			dateFrom: this.date[0]
			// 				.replace('-', '')
			// 				.replace('-', ''),
			// 			dateTo: this.date[1].replace('-', '').replace('-', ''),
			// 			limit: 10,
			// 			page: 1,
			// 			statusList: this.getStatusSelectArray(),
			// 			userDc: this.userSelect.cmnCd,
			// 			userInfo: this.name,
			// 		},
			// 	})
			// 	.then(res => {
			// 		console.log(res.data)
			// 	})
			// 	.catch(err => {
			// 		console.log('err : ' + err)
			// 	})
		},
		getStatusSelectArray() {
			let array = []
			for (let i = 0; i < this.statusSelectList.length; i++) {
				if (this.statusSelectList[i].select) {
					array.push({ status: this.statusSelectList[i].cmnCd })
				}
			}
			return array
		},
	},
}
</script>
