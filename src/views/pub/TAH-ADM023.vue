<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>문의하기 관리</h5>
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
						<v-col md="4">
							<div class="label_txt">계열사명</div>
							<v-select
								:items="items_02"
								placeholder="전체"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
					</v-row>
					<v-row>
						<v-col md="4">
							<div class="label_txt">Status</div>
							<div class="checkgroup">
								<v-checkbox
									label="답변 대기중"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="답변완료"
									hide-details="auto"
								></v-checkbox>
							</div>
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
							<v-btn color="primary" dark> 답변하기 </v-btn>
							<v-btn color="primary" dark outlined>
								삭제하기
							</v-btn>
						</div>
						<div class="table_box">
							<v-data-table
								:headers="headers"
								:items="items"
								:items-per-page="itemsPerPage"
								:single-select="singleSelect"
								show-select
								hide-default-footer
								class="elevation-1"
							>
								<template v-slot:item="row">
									<tr>
										<td>{{ row.item.singleselect }}</td>
										<td>{{ row.item.a }}</td>
										<td>{{ row.item.b }}</td>
										<td>{{ row.item.c }}</td>
										<td>{{ row.item.d }}</td>
										<td>{{ row.item.e }}</td>
										<td>{{ row.item.f }}</td>
										<td>{{ row.item.g }}</td>
										<td>
											{{ row.item.h }}
											<v-btn
												color="primary"
												dark
												outlined
												small
												>답변하기</v-btn
											>
										</td>
									</tr>
								</template>
							</v-data-table>
						</div>
					</div>
					<div class="paging">
						a<v-pagination
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
					text: 'Status',
					sortable: true,
					value: 'a',
				},
				{
					text: '구분',
					sortable: true,
					value: 'b',
				},
				{
					text: '문의내용',
					sortable: true,
					value: 'c',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'd',
				},
				{
					text: '계열사명',
					sortable: true,
					value: 'e',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'f',
				},
				{
					text: '답변자',
					sortable: true,
					value: 'g',
				},
				{
					text: '답변일',
					sortable: true,
					value: 'h',
				},
			],
			items: [
				{
					a: '대기중',
					b: '포털',
					c: '인사이트 리포트등록문의...',
					d: '김영선',
					e: 'KB국민은행',
					f: '2021-00-00',
					g: '-',
					h: '답변하기',
				},
				{
					a: '완료',
					b: '기타',
					c: '부서변경시 분석환경 반납...',
					d: '조승연',
					e: 'KB금융지주',
					f: '2021-00-00',
					g: '최자영',
					h: '2021-00-00',
				},
			],
		}
	},
}
</script>
