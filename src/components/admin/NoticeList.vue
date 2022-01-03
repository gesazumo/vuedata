<template>
	<div>
		<button @click="doDelete">삭제하기</button>
		<v-data-table
			v-model="selected"
			item-key="seq"
			:headers="headers"
			:items="noticeListData"
			:items-per-page="itemsPerPage"
			show-select
			hide-default-footer
			class="elevation-1"
		>
			<template v-slot:[`item.datefrom`]="{ item }">
				{{ item.datefrom }}
			</template>
		</v-data-table>
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
					value: 'dstic',
				},
				{
					text: '카테고리',
					sortable: true,
					value: 'kategorie',
				},
				{
					text: '제목',
					sortable: true,
					value: 'title',
				},
				{
					text: '시작일',
					sortable: true,
					value: 'datefrom',
				},
				{
					text: '종료일',
					sortable: true,
					value: 'dateto',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'writer',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'datefrom',
				},
				{
					text: '조회수',
					sortable: true,
					value: 'views',
				},
			],
		}
	},
	methods: {
		async doDelete() {
			const result = await this.$confirm('삭제하시겠습니까?')
			console.log(result)
		},
	},
	computed: {
		noticeListData() {
			return this.list.map(item => {
				return {
					seq: item.seq,
					status: '게시중',
					dstic: item.dstic,
					kategorie: item.kategorie,
					title: item.title,
					datefrom: item.startdate,
					dateto: item.enddate,
					writer: '최자영',
					registfrom: item.startdate,
					views: 10,
				}
			})
		},
	},
}
</script>

<style></style>
