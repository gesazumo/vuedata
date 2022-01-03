<template>
	<div class="board">
		<div class="tit">
			<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
		</div>
		<div class="btn_area">
			<v-btn color="primary" dark> 등록하기 </v-btn>
			<v-btn color="primary" dark outlined @click="doDelete">
				삭제하기
			</v-btn>
			<v-btn color="primary" dark outlined> 수정하기 </v-btn>
		</div>
		<div class="table_box">
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
	</div>
</template>

<script>
import { deleteNoticesApi } from '@/api/modules/notieceAPI'
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
			this.$emit('search')
			if (!(await this.$confirm('삭제하시겠습니까?', '삭제하기'))) return
			try {
				const { data } = await deleteNoticesApi(this.selected)
				console.log(data)
			} catch (error) {
				this.$toasted.error(this.apiErrorMsg_Blue)
				console.log(error)
			}
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
