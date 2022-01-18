<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>코드 조회</h5>
				<div class="adm-search">
					<v-row>
						<v-col md="4">
							<div class="label_txt">코드명</div>
							<v-text-field
								v-model="cmnGroupNm"
								placeholder="코드명을 입력하세요"
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
								:items="$getCmCode('TAH000083')"
								item-text="cmnCdNm"
								item-value="cmnCd"
								v-model="cmnGroupType"
								placeholder="카테고리를 선택하세요"
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
					<div class="tit" v-if="itemList.length > 0">
						<p>
							총 <span>{{ itemList.length }}</span
							>개의 테이블 목록이 있습니다.
						</p>
						<v-select
							:items="itemCount"
							item-text="str"
							item-value="val"
							class="list_select"
							value="10"
							single-line
							hide-details="auto"
							@change="moreCount($event)"
						>
						</v-select>
					</div>
					<div class="btn_area">
						<v-btn color="primary" @click="Insert()">
							등록하기
						</v-btn>
						<v-btn
							color="primary"
							outlined
							@click="Modify()"
							:disabled="gf_btnModify(this.checkselected)"
						>
							수정하기
						</v-btn>
					</div>
					<div class="table_box">
						<template>
							<v-data-table
								v-model="checkselected"
								:headers="headers"
								:items="itemList"
								:single-expand="singleExpand"
								:single-select="singleSelect"
								:expanded.sync="expanded"
								item-key="cmnGroupCd"
								show-select
								show-expand
								class="elevation-1"
								:items-per-page="itemsPerPage"
								hide-default-footer
								:page.sync="page"
								@page-count="pageCount = $event"
								@item-expanded="expandRow"
							>
								<template v-slot:expanded-item="{ headers }">
									<td :colspan="headers.length">
										<table>
											<tr>
												<td>그룹코드 ID</td>
												<td>코드 ID</td>
												<td>코드명</td>
												<td>사용여부</td>
												<td>디스플레이 순서</td>
												<td>등록자</td>
												<td>등록일</td>
											</tr>
											<tr
												v-for="(item2, index) in dtList"
												:key="index"
											>
												<td>{{ item2.cmnGroupCd }}</td>
												<td>{{ item2.groupCd }}</td>
												<td>{{ item2.groupNm }}</td>
												<td>{{ item2.useYn }}</td>
												<td>{{ item2.groupSort }}</td>
												<td>{{ item2.regUserNm }}</td>
												<td>{{ item2.regDt }}</td>
											</tr>
										</table>
									</td>
								</template>
								<template v-slot:no-data>
									<v-alert :value="true">
										조회된 데이터가 없습니다.
									</v-alert>
								</template>
							</v-data-table>
						</template>
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
			</div>
		</div>
	</v-app>
</template>
<script>
import moment from 'moment'
import axios from 'axios'

export default {
	data() {
		return {
			date: '',
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			singleExpand: true,
			expanded: [],
			checkselected: [], // 체크박스

			cmnGroupNm: '', // 코드명
			cmnGroupType: '', // 구분

			itemList: [], // 목록
			dtList: [], // 상세목록
			searchKey: {},
			searchYn: false,
			itemCount: [
				{ str: '10개씩보기', val: '10' },
				{ str: '15개씩보기', val: '15' },
				{ str: '30개씩보기', val: '30' },
				{ str: '50개씩보기', val: '50' },
			],

			headers: [
				{
					text: '구분',
					align: 'center',
					sortable: true,
					value: 'cmnGroupTypeNm',
				},
				{
					text: '그룹코드ID',
					align: 'center',
					sortable: true,
					value: 'cmnGroupCd',
				},
				{
					text: '그룹코드명',
					align: 'center',
					sortable: true,
					value: 'cmnGroupNm',
				},
				{
					text: '등록자',
					align: 'center',
					sortable: true,
					value: 'regUserNm',
				},
				{
					text: '등록일',
					align: 'center',
					sortable: true,
					value: 'regDt',
				},
				{
					text: '상세보기',
					width: '90px',
					align: 'center',
					value: 'data-table-expand',
				},
			],
		}
	},

	methods: {
		onSearch() {
			this.searchYn = true
			this.searchKey = {
				page: '1', // 현재 페이지
				limit: '100', // 최대페이지
				cmnGroupNm: this.cmnGroupNm, // 코드명
				cmnGroupType: this.cmnGroupType, // 구분
				startDt: this.date[0], // 시작일자
				endDt: this.date[1], // 종료일자
			}
			axios
				.get('/api/admin/CodeMgtList', {
					params: this.searchKey,
				})
				.then(res => {
					this.itemList = res.data.list
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		expandRow(item) {
			this.dtList = [] // 초기화
			axios
				.get('/api/admin/CodeMgtLRList', {
					params: { cmnGroupCd: item.item.cmnGroupCd },
				})
				.then(res => {
					this.dtList = res.data.list
					// this.dtList = item
				})
				.catch(err => {
					console.log('err : ' + err)
				})
		},

		Insert() {
			this.gf_router('adm020', {
				searchKey: this.searchKey,
				searchKey2: this.searchYn,
			})
		},

		Modify() {
			this.gf_router('adm020', {
				cmnGroupCd: this.checkselected[0].cmnGroupCd,
				searchKey: this.searchKey,
				searchKey2: this.searchYn,
			})
		},

		moreCount(val) {
			this.itemsPerPage = Number(val)
		},
	},

	created() {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
		this.date = [
			moment().subtract(1, 'months').format('YYYY-MM-DD'),
			moment().format('YYYY-MM-DD'),
		]
	},
}
</script>
