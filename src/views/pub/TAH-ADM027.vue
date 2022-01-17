<template>
	<v-app>
		<div class="adm_contents">
			<div class="inner">
				<h5>인사이트 리포트 관리</h5>
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
								label="전체 카테고리"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
						<v-col md="4">
							<div class="label_txt">Topic</div>
							<v-select
								label="전체 Topic"
								single-line
								outlined
								hide-details="auto"
							></v-select>
						</v-col>
					</v-row>
					<v-row>
						<v-col md="4">
							<div class="label_txt">작성자</div>
							<v-text-field
								single-line
								outlined
								clearable
							></v-text-field>
						</v-col>
						<v-col></v-col>
						<v-col md="2" align="right">
							<v-btn color="primary" outlined>초기화</v-btn>
							<v-btn color="primary">검색하기</v-btn>
						</v-col>
					</v-row>
				</div>

				<div class="item_box">
					<div class="tit">
						<p>총 <span>74</span>개의 검색결과가 있습니다.</p>
						<v-select
							label="10개씩 보기"
							class="list_select"
							single-line
							hide-details="auto"
						>
						</v-select>
					</div>
					<div class="btn_area">
						<v-btn color="primary" dark> 등록하기 </v-btn>
						<v-btn color="primary" dark outlined> 삭제하기 </v-btn>
						<v-btn color="primary" dark outlined> 수정하기 </v-btn>
					</div>
					<div class="table_box">
						<v-data-table
							:headers="headers"
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
			date: null,
			items1: [
				'카테고리:전체',
				'트렌드 리포트',
				'전문가 리포트',
				'뉴스레터',
			],
			items2: [
				'Tppic:전체',
				'머신러닝/딥러닝',
				'인공지능',
				'클라우드',
				'데이터',
				'디지털',
				'자동화/협업',
			],
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			singleSelect: false,
			selected: [],
			headers: [
				{
					text: '구분',
					align: 'center',
					sortable: false,
					value: 'aaa',
				},
				{ text: '카테고리', align: 'center', value: 'category' },
				{ text: 'Topic', align: 'center', value: 'topic' },
				{ text: '제목', align: 'center', value: 'subject' },
				{ text: '작성자', align: 'center', value: 'writer' },
				{ text: '등록일', align: 'center', value: 'date' },
				{ text: '좋아요', align: 'center', value: 'good' },
				{ text: '조회수', align: 'center', value: 'hit' },
			],
			items3: [
				{
					aaa: '메인',
					category: '트렌트 리포트',
					topic: '머신러닝/딥러닝',
					subject: '뱅킹, 서비스로 연결하다',
					writer: '김국민',
					date: '2021-00-00',
					good: '12',
					hit: '22',
				},
				{
					aaa: '일반',
					category: '트렌트 리포트',
					topic: '머신러닝/딥러닝',
					subject: '뱅킹, 서비스로 연결하다',
					writer: '김국민',
					date: '2021-00-00',
					good: '12',
					hit: '22',
				},
				{
					aaa: '일반',
					category: '뉴스레터',
					topic: '머신러닝/딥러닝',
					subject: '뱅킹, 서비스로 연결하다',
					writer: '김국민',
					date: '2021-00-00',
					good: '12',
					hit: '22',
				},
				{
					aaa: '메인',
					category: '전문가 리포트',
					topic: '머신러닝/딥러닝',
					subject: '뱅킹, 서비스로 연결하다',
					writer: '김국민',
					date: '2021-00-00',
					good: '12',
					hit: '22',
				},
				{
					aaa: '메인',
					category: '트렌트 리포트',
					topic: '머신러닝/딥러닝',
					subject: '뱅킹, 서비스로 연결하다',
					writer: '김국민',
					date: '2021-00-00',
					good: '12',
					hit: '22',
				},
				{
					aaa: '메인',
					category: '트렌트 리포트',
					topic: '머신러닝/딥러닝',
					subject: '뱅킹, 서비스로 연결하다',
					writer: '김국민',
					date: '2021-00-00',
					good: '12',
					hit: '22',
				},
			],
		}
	},
}
</script>
