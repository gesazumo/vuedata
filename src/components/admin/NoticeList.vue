<template>
	<div>
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
</template>

<script>
export default {
	props: {
		list: [],
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

<style></style>
