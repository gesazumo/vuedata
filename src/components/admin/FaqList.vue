<template>
	<div class="board">
		<div class="tit">
			<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
		</div>
		<div class="btn_area">
			<v-btn color="primary" dark> 등록하기 </v-btn>
			<v-btn color="primary" dark outlined> 삭제하기 </v-btn>
			<v-btn color="primary" dark outlined> 수정하기 </v-btn>
		</div>
		<div class="table_box">
			<v-data-table
				v-model="selected"
				item-key="seq"
				:headers="headers"
				:items="faqListData"
				show-select
				hide-default-footer
				class="elevation-1"
			>
			</v-data-table>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		list: [],
		totalCount: String,
	},
	data() {
		return {
			selected: [],
			headers: [
				{
					text: '카테고리',
					sortable: true,
					value: 'dstic',
				},
				{
					text: '제목',
					sortable: true,
					value: 'ques',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'reqemp',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'registfrom',
				},
				{
					text: '조회수',
					sortable: true,
					value: 'views',
				},
			],
		}
	},
	computed: {
		faqListData() {
			return this.list.map(item => {
				return {
					seq: item.seq,
					dstic: item.dstic,
					ques: item.ques,
					reqemp: item.reqemp,
					registfrom: item.sysFrstPrcssYms,
					views: 0,
				}
			})
		},
	},
}
</script>

<style></style>
