<template>
	<div class="board">
		<div class="tit">
			<p>총 <span>00</span>개의 검색결과가 있습니다.</p>
		</div>
		<div class="btn_area">
			<v-btn
				color="primary"
				dark
				@click="$router.push({ name: 'adm026' })"
			>
				등록하기
			</v-btn>
			<v-btn
				color="primary"
				dark
				outlined
				@click="doDelete"
				v-if="selected.length >= 1"
			>
				삭제하기
			</v-btn>
			<v-btn color="primary" dark outlined v-if="selected.length == 1">
				수정하기
			</v-btn>
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
				<template v-slot:no-data>
					<no-data />
				</template>
			</v-data-table>
		</div>
	</div>
</template>

<script>
import { deleteFaqsApi } from '@/api/modules/faqAPI'
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
				const { data } = await deleteFaqsApi(seqList)
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
