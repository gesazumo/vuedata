<template>
	<div class="board">
		<div class="tit">
			<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
		</div>
		<div class="btn_area">
			<v-btn color="primary" dark> 답변하기 </v-btn>
			<v-btn color="primary" dark outlined> 삭제하기 </v-btn>
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
				<template v-slot:item="row">
					<tr>
						<td>{{ row.item.singleselect }}</td>
						<td>{{ row.item.a }}</td>
						<td>{{ row.item.b }}</td>
						<td>{{ row.item.c }}</td>
						<td>{{ row.item.d }}</td>
						<td>{{ row.item.e }}</td>
						<td>{{ row.item.f }}</td>
						<td>{{ row.item.g }}</td>
						<td>
							{{ row.item.h }}
							<v-btn color="primary" dark outlined small
								>답변하기</v-btn
							>
						</td>
					</tr>
				</template>
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
					text: '문의내용',
					sortable: true,
					value: 'qatext',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'reqemp',
				},
				{
					text: '계열사명',
					sortable: true,
					value: 'company',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'req',
				},
				{
					text: '답변자',
					sortable: true,
					value: 'answeremp',
				},
				{
					text: '답변일',
					sortable: true,
					value: 'answerdate',
				},
			],
		}
	},
	computed: {
		qnaListData() {
			return this.list.map(item => {
				return {
					seq: item.seq,
					status: item.status,
					dstic: item.dstic,
					qatext: item.qatext,
					reqemp: '등록자',
					company: item.company,
					req: item.req,
					answeremp: '답변자',
					answerdate: '1991-08-05',
				}
			})
		},
	},
}
</script>

<style></style>
