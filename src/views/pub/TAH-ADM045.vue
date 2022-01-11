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
								:items="items_01"
								placeholder="전체 카테고리"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
						<v-col></v-col>
						<v-col md="2" align="right">
							<v-btn color="primary" dark outlined>초기화</v-btn>
							<v-btn color="primary" dark>검색하기</v-btn>
						</v-col>
					</v-row>
				</div>
				<div class="item_box">
					<div class="board">
						<div class="tit">
							<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
						</div>
						<div class="btn_area">
							<v-btn color="primary" dark> 등록하기 </v-btn>
							<v-btn color="primary" dark outlined>
								삭제하기
							</v-btn>
							<v-btn color="primary" dark outlined>
								수정하기
							</v-btn>
						</div>
						<div class="table_box">
							<v-data-table
								v-model="selected"
								:headers="headers"
								:items="items"
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
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			items_01: [
				'전체',
				'포털 이용',
				'데이터 권한 신청',
				'분석환경 활용',
				'기타',
				'피드백',
			],
			items_02: [
				'전체',
				'KB금융지주',
				'KB국민은행',
				'KB증권',
				'KB손해보험',
				'KB국민카드',
				'푸르덴셜생명',
				'KB캐피탈',
				'KB생명보험',
				'KB저축은행',
			],
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '카테고리',
					sortable: true,
					value: 'a',
				},
				{
					text: '상세구분',
					sortable: true,
					value: 'b',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'c',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'd',
				},
			],
			items: [
				{
					a: '마이데이터',
					b: '공통업권',
					c: '최자영',
					d: '2021-00-00',
				},
				{
					a: '특화데이터',
					b: '지식그래프',
					c: '최자영',
					d: '2021-00-00',
				},
				{
					a: '마이데이터',
					b: '전자금융업권',
					c: '최자영',
					d: '2021-00-00',
				},
				{
					a: '마이데이터',
					b: '할부금융업권',
					c: '최자영',
					d: '2021-00-00',
				},
				{
					a: '마이데이터',
					b: '카드업권',
					c: '최자영',
					d: '2021-00-00',
				},
			],
		}
	},
}
</script>
