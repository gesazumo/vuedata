<template>
	<div class="adm_wrap">
		<div id="lnb"></div>
		<div class="adm_contents">
			<div class="inner">
				<h5>라이브러리 신청 관리</h5>
				<div class="adm-search">
					<ul>
						<li>
							<label>프로젝트코드</label>
							<v-text-field
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li>
							<label>프로젝트명</label>
							<v-text-field
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li>
							<label>신청상태</label>
							<v-select
								:items="items2"
								label=""
								placeholder="전체"
								single-line
								outlined
							></v-select>
						</li>
						<li></li>
					</ul>

					<ul>
						<li>
							<label>신청일자</label>
							<date-picker
								v-model="date"
								range
								placeholder="날짜선택"
							/>
						</li>
						<li></li>
						<li></li>
						<li>
							<v-btn color="primary">검색하기</v-btn>
						</li>
					</ul>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>123</span>개의 검색결과가 있습니다.</p>
					</div>
					<div class="btn">
						<v-btn class="box">엑셀 다운로드</v-btn>
					</div>
					<div class="table_box">
						<v-data-table
							:headers="headers"
							:items="items1"
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
										{{ row.item.aa }}
									</td>
									<td>
										{{ row.item.bb }}
									</td>
									<td>
										<v-select
											:items="items2"
											single-line
											outlined
										></v-select>
										<v-btn> 확인 </v-btn>
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
			items2: ['진행', '진행완료'],
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
				{ text: '프로젝트코드', align: 'center', value: 'aa' },
				{ text: '프로젝트명', align: 'center', value: 'bb' },
				{ text: '신청상태', align: 'center', value: 'cc' },
				{
					text: '신청부서',
					align: 'center',
					value: 'dd',
				},
				{ text: '신청직원', align: 'center', value: 'ee' },
				{ text: '신청사유', align: 'center', value: 'ff' },
				{ text: '신청일자', align: 'center', value: 'gg' },
				{ text: '관리자', align: 'center', value: 'hh' },
			],
			items1: [
				{
					no: '5',
					aa: 'PROJECT_0001',
					bb: '통합 프로젝트',
					cc: '',
					dd: '',
					ee: '',
					ff: '',
					gg: '',
					hh: '',
				},
			],
		}
	},
}
</script>
