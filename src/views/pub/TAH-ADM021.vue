<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>공지사항 관리</h5>
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
							<v-radio-group row hide-details="auto">
								<v-radio label="일반"> </v-radio>
								<v-radio label="메인"> </v-radio>
							</v-radio-group>
						</v-col>
						<v-col md="4">
							<div class="label_txt">카테고리</div>
							<v-radio-group row hide-details="auto">
								<v-radio label="공지사항"> </v-radio>
								<v-radio label="이벤트"> </v-radio>
							</v-radio-group>
						</v-col>
					</v-row>
					<v-row>
						<v-col md="4">
							<div class="label_txt">Status</div>
							<div class="checkgroup">
								<v-checkbox
									label="게시중"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="대기중"
									hide-details="auto"
								></v-checkbox>
								<v-checkbox
									label="종료"
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
					<div class="tit">
						<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
					</div>
					<div class="btn_area">
						<v-btn color="primary" dark> 등록하기 </v-btn>
						<v-btn
							color="primary"
							dark
							outlined
							@click="dialog = true"
						>
							삭제하기
						</v-btn>
						<v-btn color="primary" dark outlined> 수정하기 </v-btn>
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
						></v-data-table>
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

			singleSelect: false,
			selected: [],
			headers: [
				{
					text: 'Status',
					sortable: true,
					value: 'status',
				},
				{
					text: '구분',
					sortable: true,
					value: 'type',
				},
				{
					text: '카테고리',
					sortable: true,
					value: 'category',
				},
				{
					text: '제목',
					sortable: true,
					value: 'subject',
				},
				{
					text: '시작일',
					sortable: true,
					value: 'startdate',
				},
				{
					text: '종료일',
					sortable: true,
					value: 'enddate',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'writer',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'date',
				},
				{
					text: '조회수',
					sortable: true,
					value: 'hit',
				},
			],
			items: [
				{
					status: '게시중',
					type: '메인',
					category: '공지사항',
					subject: '크롬 브라우저 설치 안내',
					startdate: '2021-00-00',
					enddate: '2021-00-00',
					writer: '최자영',
					date: '2021-00-00',
					hit: '80',
				},
				{
					status: '대기중',
					type: '일반',
					category: '이벤트',
					subject: '분석 아이디어 포럼 이벤트 안내',
					startdate: '2021-00-00',
					enddate: '2021-00-00',
					writer: '최자영',
					date: '2021-00-00',
					hit: '80',
				},
				{
					status: '종료',
					type: '일반',
					category: '공지사항',
					subject: '포털 서비스 관련 피드백을 기다립니다.',
					startdate: '2021-00-00',
					enddate: '2021-00-00',
					writer: '최자영',
					date: '2021-00-00',
					hit: '80',
				},
			],
		}
	},
}
</script>
