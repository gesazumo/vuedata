<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>자료실 조회</h5>
			<div class="adm-search">
				<v-row>
					<v-col md="4">
						<div class="label_txt">제목</div>
						<v-text-field
							v-model="subject"
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
							placeholder="전체 카테고리"
							outlined
							hide-details="auto"
							:items="selectGroupItems"
							item-text="title"
							item-value="value"
							v-model="selectGroup"
							:rules="groupRules"
						></v-select>
					</v-col>
					<v-col></v-col>
					<v-col md="2" align="right">
						<v-btn color="primary" dark outlined @click="init()"
							>초기화</v-btn
						>
						<v-btn color="primary" dark @click="search()"
							>검색하기</v-btn
						>
					</v-col>
				</v-row>
			</div>
			<div class="item_box">
				<div class="board">
					<div class="tit">
						<p v-if="total > 0">
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
							@change="changeLimitSelect"
							return-object
						>
						</v-select>
					</div>
					<div class="btn_area">
						<v-btn color="primary" dark> 등록하기 </v-btn>
						<v-btn
							color="primary"
							dark
							outlined
							v-if="selectedTableItems.length > 0"
						>
							삭제하기
						</v-btn>
						<v-btn
							color="primary"
							dark
							outlined
							v-if="selectedTableItems.length == 1"
						>
							수정하기
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
						></v-data-table>
					</div>
				</div>
				<div class="paging">
					<v-pagination
						v-model="page"
						:length="pageCount"
						:total-visible="7"
						color="primary"
						@input="clickPageChange"
					></v-pagination>
				</div>
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
			subject: '',
			date: [],
			selectGroup: '',
			page: 1,
			total: 0,
			pageCount: 0,
			selectGroupItems: [],
			groupRules: [v => !!v || '카테고리를 선택해 주세요.'],
			headers: [
				{
					text: '카테고리',
					sortable: true,
					value: 'kategorienm',
				},
				{
					text: '버전',
					sortable: true,
					value: 'version',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'sysRegiEmpid',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'req',
				},
			],
			selectedTableItems: [],
			tableItems: [],
			limitSelect: { title: '10개씩 보기', value: 10 },
			limitSelectList: [
				{ title: '10개씩 보기', value: 10 },
				{ title: '30개씩 보기', value: 30 },
				{ title: '50개씩 보기', value: 50 },
			],
		}
	},
	created() {
		this.init()
		this.search()
	},
	methods: {
		init() {
			this.subject = ''
			this.date = [
				moment().subtract(1, 'months').format('YYYY-MM-DD'),
				moment().format('YYYY-MM-DD'),
			]
			this.selectGroup = { title: '전체', value: '99' }
			this.selectGroupItems = [
				{ title: '전체', value: '99' },
				{ title: '분석가 포털 사용자 매뉴얼', value: '01' },
				{ title: '분석환경 사용자 매뉴얼', value: '02' },
			]
		},
		search() {
			console.log('-------------SEARCH-------------')
			console.log('-------------subject-------------')
			console.log(this.subject)
			console.log('-------------datePicker-------------')
			console.log(
				'from : ' + this.date[0].replace('-', '').replace('-', ''),
			)
			console.log(
				'to : ' + this.date[1].replace('-', '').replace('-', ''),
			)
			console.log('-------------SelectBox-------------')
			console.log('title : ' + this.selectGroup.title)
			console.log('value : ' + this.selectGroup.value)
			let tempGroup = null
			if (this.selectGroup.value === '99') {
				tempGroup = null
			} else {
				tempGroup = this.selectGroup.value
			}
			axios
				.get('/api/admin/getReferenceCon', {
					params: {
						datefrom: this.date[0]
							.replace('-', '')
							.replace('-', ''),
						dateto: this.date[1].replace('-', '').replace('-', ''),
						kategorie: tempGroup,
						limit: this.limitSelect.value,
						page: this.page,
						title: this.subject,
					},
				})
				.then(res => {
					console.log(res.data)
					this.total = res.data.count
					this.tableItems = res.data.list
					this.pageCount = Math.ceil(
						res.data.count / this.limitSelect.value,
					)
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},
		clickPageChange(value) {
			console.log(value)
			this.page = value
			this.search()
		},
		changeLimitSelect() {
			this.page = 1
			this.search()
		},
	},
}
</script>
