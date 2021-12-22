<template>
	<div class="adm_wrap">
		<!-- <div id="lnb"></div> -->
		<div class="adm_contents">
			<div class="inner">
				<h5>인사이트 리포트 관리</h5>
				<div class="adm-search-2">
					<ul>
						<li>
							<label>제목</label>
							<v-text-field
								placeholder="제목"
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li>
							<label>등록일</label>
							<date-picker
								v-model="date"
								range
								placeholder="날짜선택"
							/>
						</li>
						<li></li>
					</ul>
					<ul>
						<li>
							<label>구분</label>
							<v-select
								:items="items1"
								label="전체 카테고리"
								single-line
								outlined
							></v-select>
						</li>
						<li>
							<label>Topic</label>
							<v-select
								:items="items2"
								label="전체 Topic"
								single-line
								outlined
							></v-select>
						</li>
						<li></li>
					</ul>
					<ul>
						<li>
							<label>작성자</label>
							<v-text-field
								placeholder=""
								single-line
								outlined
								clearable
							></v-text-field>
						</li>
						<li></li>
						<li>
							<button class="reset">초기화</button>
							<button class="search">검색하기</button>
						</li>
					</ul>
				</div>
				<div class="item_box">
					<div class="tit">
						<p>총 <span>74</span>개의 검색결과가 있습니다.</p>
					</div>
					<div class="table_box">
						<v-data-table
							v-model="selected"
							:headers="headers"
							:items="items3"
							:items-per-page="itemsPerPage"
							:single-select="singleSelect"
							item-key="aaa"
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
