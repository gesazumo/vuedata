<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>라이브러리 신청 관리</h5>
			<div class="adm-search">
				<v-row>
					<v-col md="3">
						<label>프로젝트 코드</label>
						<v-text-field
							single-line
							outlined
							clearable
						></v-text-field>
					</v-col>
					<v-col md="3">
						<label>프로젝트명</label>
						<v-text-field
							single-line
							outlined
							clearable
						></v-text-field>
					</v-col>
					<v-col md="3">
						<label>신청상태</label>
						<v-select
							:items="items1"
							single-line
							outlined
						></v-select>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="6">
						신청일자
						<date-picker
							v-model="date"
							range
							placeholder="날짜선택"
						/>
					</v-col>
					<v-col md="4"></v-col>
					<v-col md="2">
						<v-btn color="primary" dark>검색하기</v-btn>
					</v-col>
				</v-row>
			</div>
			<div class="item_box">
				<div class="tit">
					<p>총 <span>123</span>개의 라이브러리 목록</p>
				</div>
				<div class="btn">
					<v-btn class="box">엑셀 다운로드</v-btn>
				</div>
				<div class="table_box">
					<v-data-table
						:headers="headers"
						:items="items2"
						:items-per-page="itemsPerPage"
						hide-default-footer
						class="elevation-1"
					>
						<template v-slot:item="row">
							<tr>
								<td>
									{{ row.item.no }}
								</td>
								<td>
									{{ row.item.pj_code }}
								</td>
								<td>
									{{ row.item.pj_name }}
								</td>
								<td>
									<v-select
										:items="items1"
										label="진행"
										single-line
										outlined
										style="width: 200px"
									>
										<template v-slot:append-outer>
											<v-btn color="primary" dark>
												확인
											</v-btn>
										</template>
									</v-select>
								</td>
								<td>
									{{ row.item.team }}
								</td>
								<td>
									{{ row.item.manager }}
								</td>
								<td>
									{{ row.item.reason }}
								</td>
								<td>
									{{ row.item.date }}
								</td>
								<td>
									{{ row.item.admin }}
								</td>
							</tr>
						</template>
					</v-data-table>
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
			<div class="btn_area">
				<button class="delete large">삭제하기</button>
				<button class="edit large">수정하기</button>
				<button class="regit large">등록하기</button>
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
			date: null,
			items1: ['신청중', '진행중', '신청완료'],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '순번',
					align: 'center',
					sortable: false,
					value: 'no',
				},
				{
					text: '프로젝트코드',
					align: 'center',
					sortable: false,
					value: 'pj_code',
				},
				{
					text: '프로젝트명',
					align: 'center',
					sortable: false,
					value: 'pj_name',
				},
				{
					text: '신청상태',
					align: 'center',
					sortable: false,
					value: 'state',
				},
				{
					text: '신청부서',
					align: 'center',
					sortable: false,
					value: 'team',
				},
				{
					text: '신청직원',
					align: 'center',
					sortable: false,
					value: 'manager',
				},
				{
					text: '신청사유',
					align: 'center',
					sortable: false,
					value: 'reason',
				},
				{
					text: '신청일자',
					align: 'center',
					sortable: false,
					value: 'date',
				},
				{
					text: '관리자',
					align: 'center',
					sortable: false,
					value: 'admin',
				},
			],
			items2: [
				{
					no: '5',
					pj_code: 'PROJECT_0001',
					pj_name: '통합 프로젝트',
					state: '',
					team: '경영지원실',
					manager: '김국민',
					reason: '신청',
					date: '2021-00-00',
					admin: '홍길동',
				},
			],
		}
	},
}
</script>
