<template>
	<v-app>
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
							<div class="label_txt">계열사</div>
							<v-select
								:items="items_02"
								placeholder="전체"
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
					<div class="tit">
						<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
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
					<v-btn
						color="primary"
						dark
						large
						outlined
						@click="dialog = true"
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

								<v-btn
									color="primary"
									dark
									@click="dialog = false"
								>
									삭제하기
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
					<v-btn color="primary" dark large> 답변하기 </v-btn>
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
			dialog: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			items_01: ['전체', '마이데이터', '특화데이터', 'Feature Store'],
			items_02: [
				'전체',
				'그룹공통',
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
					text: '구분',
					sortable: true,
					value: 'a',
				},
				{
					text: '계열사',
					sortable: true,
					value: 'b',
				},
				{
					text: '테이블명',
					sortable: true,
					value: 'c',
				},
				{
					text: '테이블한글명',
					sortable: true,
					value: 'd',
				},
				{
					text: '버전',
					sortable: true,
					value: 'e',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'f',
				},
				{
					text: '등록일시',
					sortable: true,
					value: 'g',
				},
			],
			items: [
				{
					a: '마이데이터',
					b: '그룹공통',
					c: 'TCTAHES01',
					d: '마이데이터 가입자 정보',
					e: '1',
					f: '최자영',
					g: '2021-00-00 00:00:00',
				},
				{
					a: '특화데이터',
					b: '공통업권',
					c: 'TCTAHES02',
					d: '마이데이터 해지 이력',
					e: '1',
					f: '최자영',
					g: '2021-00-00 00:00:00',
				},
				{
					a: 'Feature Store',
					b: '그룹공통',
					c: 'TCTAHES06',
					d: '전송요구 신청이력',
					e: '1',
					f: '최자영',
					g: '2021-00-00 00:00:00',
				},
			],
		}
	},
}
</script>
