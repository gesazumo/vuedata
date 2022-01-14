<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>결재라인 조회</h5>
				<div class="adm-search">
					<v-row>
						<v-col md="4">
							<div class="label_txt">결재라인명</div>
							<v-text-field
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
								outlined
								hide-details="auto"
								:items="item1"
								v-model="item"
								:rules="item1Rules"
							></v-select>
						</v-col>
						<v-col md="4">
							<div class="label_txt">계열사명</div>
							<v-select
								placeholder="계열사명을 선택하세요"
								outlined
								hide-details="auto"
								:items="item2"
								v-model="item"
								:rules="item2Rules"
							></v-select>
						</v-col>
					</v-row>
					<v-row>
						<v-col md="4">
							<div class="label_txt">사용여부</div>
							<v-select
								placeholder="전체"
								outlined
								hide-details="auto"
								:items="item3"
								v-model="item"
								:rules="item3Rules"
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
							<v-select
								label="10개씩 보기"
								class="list_select"
								single-line
								hide-details="auto"
								:items="item4"
							>
							</v-select>
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
								:headers="headers"
								:items="items"
								:items-per-page="itemsPerPage"
								:single-select="singleSelect"
								show-select
								hide-default-footer
								class="elevation-1"
							></v-data-table>
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

			date: '',
			menu: '',
			item: '',

			singleSelect: false,
			selected: [],
			item1: [
				'전체',
				'메타관리',
				'데이터 권한',
				'분석 환경',
				'My Dataset 업로드',
				'계열사 전송',
				'CI 변환 신청',
			],
			item2: [
				'전체',
				'공통',
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
			item3: ['전체', 'Yes', 'No'],
			item4: ['10개씩 보기', '30개씩 보기', '50개씩 보기'],
			item1Rules: [v => !!v || '카테고리를 선택해 주세요.'],
			item2Rules: [v => !!v || '계열사를 선택해 주세요.'],
			item3Rules: [v => !!v || '사용여부를 선택해 주세요.'],
			headers: [
				{
					text: '구분',
					sortable: true,
					value: '1',
				},
				{
					text: '계열사',
					sortable: true,
					value: '2',
				},
				{
					text: '권한코드 ID',
					sortable: true,
					value: '3',
				},
				{
					text: '권한명',
					sortable: true,
					value: '4',
				},
				{
					text: '사용여부',
					sortable: true,
					value: '5',
				},
				{
					text: '등록자',
					sortable: true,
					value: '6',
				},
				{
					text: '등록일',
					sortable: true,
					value: '7',
				},
			],
			items: [
				{
					1: '통합',
					2: '공통',
					3: 'ADMIN-CMN-AUTH-001',
					4: '통합 관리자',
					5: 'Y',
					6: '최자영',
					7: '2022-00-00',
				},
				{
					1: '일반',
					2: 'KB국민은행',
					3: 'ADMIN-KBO-AUTH-002',
					4: '계열사 관리자(은행)',
					5: 'Y',
					6: '최자영',
					7: '2022-00-00',
				},
				{
					1: '일반',
					2: '푸르덴셜생명',
					3: 'ADMIN-KPO-AUTH-009',
					4: '계열사 관리자(푸르덴셜)',
					5: 'Y',
					6: '최자영',
					7: '2022-00-00',
				},
			],
		}
	},
}
</script>
