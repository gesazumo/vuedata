<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>테이블 관리</h5>
			<div class="adm-search">
				<v-row>
					<v-col md="4">
						<div class="label_txt">제목</div>
						<v-text-field
							placeholder="제목"
							single-line
							outlined
							clearable
							hide-details="auto"
						></v-text-field>
					</v-col>
					<v-col md="4">
						<div class="label_txt">등록일</div>
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
						<div class="label_txt">구분</div>
						<v-select
							:items="selectGb"
							item-text="str"
							item-value="value"
							value="A"
							single-line
							outlined
						></v-select>
					</v-col>
					<v-col md="4">
						<div class="label_txt">계열사</div>
						<v-select
							:items="selectSub"
							item-text="str"
							item-value="value"
							value="01"
							single-line
							outlined
							hide-details="auto"
						></v-select>
					</v-col>
					<v-col></v-col>
					<v-col md="2" align="right">
						<v-btn color="primary" dark outlined>초기화</v-btn>
						<v-btn color="primary" dark @click="onSearch()"
							>검색하기</v-btn
						>
					</v-col>
				</v-row>
			</div>
			<div class="item_box">
				<div class="table_box">
					<v-data-table
						v-model="checkselected"
						:headers="headers"
						:items="itemList"
						:single-select="singleSelect"
						:items-per-page="itemsPerPage"
						item-key="tblId"
						show-select
						hide-default-footer
						class="elevation-1"
						:page.sync="page"
						@page-count="pageCount = $event"
					>
						<template v-slot:no-data>
							<v-alert :value="true">
								조회된 데이터가 없습니다.
							</v-alert>
						</template>
					</v-data-table>
				</div>
				<div class="paging">
					<v-pagination
						v-model="page"
						:length="pageCount"
						:total-visible="7"
						color="primary"
						v-if="pageCount > 1"
					></v-pagination>
				</div>
			</div>
			<div class="btn_area">
				<button
					class="edit large"
					@click="Modify()"
					:disabled="gf_btnModify(this.checkselected)"
				>
					수정하기
				</button>
				<button class="regit large" @click="Insert()">등록하기</button>
			</div>
		</div>
	</div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import moment from 'moment'
import axios from 'axios'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			dialog: false,
			date: [],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			checkselected: [], // 체크박스
			itemList: [], // jsonData
			selectGb: [], // 구분
			selectSub: [], // 계열사
			searchKey: {},
			headers: [
				{
					text: '구분',
					align: 'center',
					sortable: true,
					value: 'dtCgryNm',
				},
				{
					text: '계열사',
					align: 'center',
					sortable: true,
					value: 'groupCoNm',
				},
				{
					text: '테이블명',
					align: 'center',
					sortable: true,
					value: 'tblId',
				},
				{
					text: '테이블한글명',
					align: 'center',
					sortable: true,
					value: 'tblHanglName',
				},
				{
					text: '버전',
					align: 'center',
					sortable: true,
					value: 'lastVsnno',
				},
				{
					text: '등록자',
					align: 'center',
					sortable: true,
					value: 'sysLastEmpid',
				},
				{
					text: '등록일시',
					align: 'center',
					sortable: true,
					value: 'sysLastPrcssYms',
				},
				{
					text: '그룹회사코드',
					align: ' d-none',
					sortable: true,
					value: 'groupCoCd',
				},
			],
			items: [],
		}
	},

	methods: {
		onSearch() {
			this.searchKey = {
				// inTblHanglName: '수신', // 테이블명
				// inFrDt: this.date[0], // 시작일자
				// inToDt: this.date[1], // 종료일자
				// inDtCgry: '', // 구분
				// inGroupCoCd: '', // 계열사
			}
			axios
				.get('/api/admin/meta/getTblList', {
					params: this.searchKey,
				})
				.then(res => {
					console.log(JSON.stringify(res))
					this.itemList = res.data.list
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		Insert() {
			this.gf_router('adm006', {
				searchKey: this.searchKey,
			})
		},

		Modify() {
			this.gf_router('adm006', {
				inGroupCoCd: this.checkselected[0].groupCoCd,
				inTblId: this.checkselected[0].tblId,
				searchKey: this.searchKey,
			})
		},
	},

	created() {
		this.subject = ''
		this.date = [
			moment().subtract(1, 'months').format('YYYY-MM-DD'),
			moment().format('YYYY-MM-DD'),
		]
		this.selectGb = [
			{ str: '마이데이터', value: 'A' },
			{ str: '특화데이터', value: 'B' },
			{ str: 'Feature Store', value: 'C' },
		]
		this.selectSub = [
			{ str: '공통업권', value: '01' },
			{ str: '은행업권', value: '02' },
			{ str: '카드업권', value: '03' },
			{ str: '금융투자업권', value: '04' },
			{ str: '보험업권', value: '05' },
			{ str: '전자금융업권', value: '06' },
			{ str: '할부금융업권', value: '07' },
			{ str: '보증보험업권', value: '08' },
			{ str: '통신업권', value: '09' },
			{ str: 'P2P업권', value: '10' },
		]
	},
}
</script>
