<template>
	<div class="board">
		<div class="tit">
			<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
		</div>
		<div class="btn_area">
			<v-btn
				color="primary"
				dark
				v-if="selected.length == 1"
				@click="
					$router.push({
						name: 'adm024',
						params: { seq: selected[0].seq },
					})
				"
			>
				답변하기
			</v-btn>
			<v-btn color="primary" dark outlined @click="doDelete">
				삭제하기
			</v-btn>
		</div>
		<div class="table_box">
			<v-data-table
				v-model="selected"
				:headers="headers"
				item-key="seq"
				:items="qnaListData"
				show-select
				hide-default-footer
				class="elevation-1"
			>
				<template v-slot:no-data>
					<no-data />
				</template>
			</v-data-table>
		</div>
	</div>
</template>

<script>
import { deleteQnaApi } from '@/api/modules/qnaAPI'
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
					company: item.companynm,
					req: item.req,
					answeremp: '답변자',
					answerdate: '1991-08-05',
				}
			})
		},
	},
	watch: {
		list() {
			this.selected = []
		},
	},
	methods: {
		async doDelete() {
			if (
				!(await this.$confirm(
					'선택 항목을 삭제하시겠습니까?',
					'삭제하기',
				))
			)
				return
			try {
				const seqList = this.selected.map(item => {
					return item.seq
				})
				const { data } = await deleteQnaApi(seqList)
				console.log(data)
				this.$showInfo('삭제되었습니다.')
				this.$emit('search')
				this.selected = []
			} catch (error) {
				this.$showError(this.apiErrorMsg_Blue)
				console.log('deleteQnaApi :' + error)
			}
		},
	},
}
</script>

<style></style>
