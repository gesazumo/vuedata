<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>마이데이터, 특화데이터 컨텐츠 조회</h5>
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
								single-line
								outlined
								hide-details="auto"
							></v-select>
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
							<v-btn color="primary"> 등록하기 </v-btn>
							<v-btn color="primary" outlined> 삭제하기 </v-btn>
							<v-btn color="primary" outlined> 수정하기 </v-btn>
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
	</v-app>
</template>
<script>
import DatePicker from 'vue2-datepicker'

export default {
	components: {
		DatePicker,
	},
	data() {
		return {
			date: '',
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,

			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '카테고리',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '상세구분',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '등록자',
					align: 'center',
					sortable: true,
					value: '',
				},
				{
					text: '등록일',
					align: 'center',
					sortable: true,
					value: '',
				},
			],
		}
	},
}
</script>
