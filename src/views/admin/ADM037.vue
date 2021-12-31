<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>오픈소스 라이브러리 관리</h5>
			<div class="adm-search-2">
				<v-row>
					<v-col md="4">
						<label>제목</label>
						<v-text-field
							placeholder="제목"
							v-model="subject"
							single-line
							outlined
							clearable
							hide-details="auto"
						></v-text-field>
					</v-col>
					<v-col md="4">
						<label>등록일</label>
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
						<label>구분</label>
						<v-select
							v-model="select"
							:items="selectItems"
							item-text="title"
							item-value="value"
							single-line
							outlined
							hide-details="auto"
							return-object
						></v-select>
					</v-col>
					<v-col md="4">
						<label> Status </label>
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
									<v-icon>mdi-help-circle</v-icon>
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
									오픈소스 라이브러리 반입 현황 확인
								</p>
								<span>
									[접수완료] 오픈소스 라이브러리 반입 신청
									접수<br />
									[보안점검중] 운영자가 라이브러리 파일 업로드
									후 보안점검 진행중인 상태<br />
									[취약점 발견] 보안점검중 취약점이 발견되어
									반입이 불가한 상태<br />
									[반입완료] 보언점검 완료 후 Private
									Repository로 반입된 상태
								</span>
							</div>
						</v-tooltip>
						<div class="checkgroup">
							<v-checkbox
								v-model="checkbox[0]"
								label="접수완료"
								hide-details="auto"
							></v-checkbox>
							<v-checkbox
								v-model="checkbox[1]"
								label="점검중"
								hide-details="auto"
							></v-checkbox>
							<v-checkbox
								v-model="checkbox[2]"
								label="취약점 발견"
								hide-details="auto"
							></v-checkbox>
							<v-checkbox
								v-model="checkbox[3]"
								label="반입완료"
								hide-details="auto"
							></v-checkbox>
						</div>
					</v-col>
					<v-col md="3" align="right">
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
				<div class="tit" v-if="items_02.length > 0">
					<p>
						총 <span>{{ items_02.length }}</span
						>개의 검색결과가 있습니다.
					</p>
				</div>
				<div class="table_box">
					<v-data-table
						v-model="selectedItems"
						:headers="headers"
						:items="items_02"
						show-select
						:items-per-page="itemsPerPage"
						:single-select="false"
						item-key="seq"
						hide-default-footer
						class="elevation-1"
						:page.sync="page"
						@page-count="pageCount = $event"
					>
						<template v-slot:[`item.date_02`]="{ item }">
							<span v-if="item.date_02 === '보안점검중'">
								{{ item.date_02 }}
							</span>
							<span
								style="color: red"
								v-else-if="item.date_02 === '반입불가'"
							>
								{{ item.date_02 }}
							</span>
							<v-btn
								v-else-if="item.date_02 === '반입하기'"
								color="primary"
								dark
								outlined
								small
								@click="bringLibrary(item.seq)"
								>반입하기</v-btn
							>
							<span v-else>
								{{ item.date_02 }}
							</span>
						</template>
					</v-data-table>
					<div class="paging">
						<v-pagination
							v-model="page"
							:length="pageCount"
							:total-visible="7"
							color="primary"
						></v-pagination>
					</div>
				</div>
			</div>
			<div class="btn_area">
				<v-btn
					color="primary"
					dark
					large
					outlined
					@click="dialog = true"
					v-if="selectedItems.length > 0"
				>
					삭제하기
				</v-btn>
				<v-dialog v-model="dialog" max-width="350">
					<v-card align="center">
						<v-card-title class="text-subtitle-1">
							선택 항목을 삭제하시겠습니까?
						</v-card-title>
						<v-card-text></v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>

							<v-btn
								color="primary"
								dark
								outlined
								@click="dialog = false"
							>
								취소
							</v-btn>

							<v-btn color="primary" dark @click="dialog = false">
								삭제하기
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
				<v-btn
					v-if="selectedItems.length == 1"
					color="primary"
					dark
					large
					outlined
				>
					수정하기
				</v-btn>
				<v-btn color="primary" dark large @click="submit()">
					등록하기
				</v-btn>
			</div>
			<span>selected : {{ selectedItems.length }}</span>
		</div>
	</div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
import moment from 'moment'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			subject: '',
			date: [],
			select: '',
			dialog: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			selectItems: [],
			checkbox: [],
			selected: [],
			selectedItems: [],
			headers: [
				{
					text: '구분',
					sortable: true,
					value: 'type',
				},
				{
					text: 'Status',
					sortable: true,
					value: 'status',
				},
				{
					text: '라이브러리명',
					sortable: true,
					value: 'libname',
				},
				{
					text: '버전',
					sortable: true,
					value: 'ver',
				},
				{
					text: 'Project ID',
					sortable: true,
					value: 'projectid',
				},
				{
					text: '신청자',
					sortable: true,
					value: 'writer',
				},
				{
					text: '신청일',
					sortable: true,
					value: 'date_01',
				},
				{
					text: '관리자',
					sortable: true,
					value: 'admin_name',
				},
				{
					text: '반입일',
					sortable: true,
					value: 'date_02',
				},
			],
			items_02: [
				{
					seq: 1,
					type: 'Anaconda',
					status: '접수완료',
					libname: 'Redshift Connector',
					ver: '2.0.900',
					projectid: 'PROJ-0001',
					writer: '조경범',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '반입하기',
				},
				{
					seq: 2,
					type: 'Python',
					status: '보안점검중',
					libname: 'Ggplot2',
					ver: '2.2.1',
					projectid: 'PROJ-0004',
					writer: '김영선',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '보안점검중',
				},
				{
					seq: 3,
					type: 'R',
					status: '취약점 발견',
					libname: 'Car',
					ver: '3.0-12',
					projectid: 'PROJ-0005',
					writer: '김영선',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '반입불가',
				},
				{
					seq: 4,
					type: 'Python',
					status: '반입완료',
					libname: 'Pandas',
					ver: '1.3.4',
					projectid: 'PROJ-0006',
					writer: 'N/A',
					date_01: '2021-00-00',
					admin_name: '최자영',
					date_02: '2021-00-00',
				},
			],
		}
	},
	created() {
		this.init()
	},
	methods: {
		search() {
			console.log('-------------SEARCH-------------')
			console.log('-------------subject-------------')
			console.log(this.subject)
			console.log('-------------datePicker-------------')
			console.log('from : ' + this.date[0])
			console.log('to : ' + this.date[1])
			console.log('-------------groupSelectBox-------------')
			console.log('title : ' + this.select.title)
			console.log('value : ' + this.select.value)
			console.log('-------------checkboxArray-------------')
			console.log(this.createCheckboxArray())
		},
		createCheckboxArray() {
			let checkboxArray = []
			for (let i = 0; i < this.checkbox.length; i++) {
				if (this.checkbox[i] == true) {
					checkboxArray.push(i)
				}
			}
			return checkboxArray
		},
		init() {
			this.subject = ''
			this.date = [
				moment().subtract(1, 'months').format('YYYY-MM-DD'),
				moment().format('YYYY-MM-DD'),
			]
			this.select = { title: '전체', value: '99' }
			this.selectItems = [
				{ title: '전체', value: '99' },
				{ title: 'Python', value: '01' },
				{ title: 'R', value: '02' },
				{ title: 'Anaconda', value: '03' },
				{ title: '기타', value: '04' },
			]
			this.checkbox = [true, true, true, true]
		},
		submit() {
			console.log('-------------SUBMIT-------------')
			console.log(this.selectedItems)
		},
		bringLibrary(seq) {
			this.$router.push({ path: '/admin/adm038', query: { seq: seq } })
		},
	},
}
</script>
