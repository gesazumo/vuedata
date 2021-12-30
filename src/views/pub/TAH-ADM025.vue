<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>FAQ 관리</h5>
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
						<v-col md="5"></v-col>
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
					<v-btn color="primary" dark large outlined>
						수정하기
					</v-btn>
					<v-btn color="primary" dark large> 등록하기 </v-btn>
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
			items_01: [
				'전체',
				'포털 이용',
				'데이터 권한 신청',
				'분석환경 활용',
				'기타',
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
					text: '제목',
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
				{
					text: '조회수',
					sortable: true,
					value: 'e',
				},
			],
			items: [
				{
					a: '포털',
					b: '포털 회원가입은 어떻게 하나요?',
					c: '최자영',
					d: '2021-00-00',
					e: '80',
				},
				{
					a: '데이터',
					b: '마이데이커 사업자가 아닌 경우에도 권한신청을 할 수 ...',
					c: '최자영',
					d: '2021-00-00',
					e: '79',
				},
				{
					a: '분석환경',
					b: 'AWS접속을 위한 방화벽은 어떻게 하나요?',
					c: '최자영',
					d: '2021-00-00',
					e: '20',
				},
			],
		}
	},
}
</script>
