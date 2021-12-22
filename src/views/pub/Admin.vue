<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>화면제목</h5>
			<div class="adm-search">
				<ul>
					<li>
						<label>검색항목명<span>필수</span></label>
						<v-select
							:items="items"
							label="선택"
							ref="name"
							v-model="name"
							:rules="[
								() => !!name || '입력 항목을 확인해 주세요',
							]"
							:error-messages="'errorMessages'"
							single-line
							outlined
						></v-select>
					</li>
					<li>
						<label>프로젝트 팀원<span>필수</span></label>
						<v-text-field
							placeholder="이름"
							single-line
							outlined
							clearable
						></v-text-field>
					</li>
					<li>
						<label>검색항목명</label>
						<v-text-field
							placeholder="- 없이 번호만"
							single-line
							outlined
							clearable
						></v-text-field>
					</li>
					<li>
						<button class="search">검색</button>
					</li>
				</ul>
			</div>
			<div class="item_box">
				<div class="tit">
					<h5>영역 타이틀(선택)</h5>
					<p>총 <span>120</span>개의 검색결과가 있습니다.</p>
				</div>
				<div class="btn">
					<button class="box">담당자 목록 다운로드</button>
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
			<div class="item_box">
				<div class="tit">
					<h5>디테일 정보(선택)</h5>
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
				<button class="box large">신규</button>
				<button class="secondary large">저장</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			date: null,
			items: [
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
