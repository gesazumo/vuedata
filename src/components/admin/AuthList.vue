<template>
	<div class="board">
		<div class="tit">
			<p>
				총 <span>{{ totalCount }}</span
				>개의 검색결과가 있습니다.
			</p>
		</div>
		<div class="btn_area">
			<v-btn
				color="primary"
				dark
				@click="
					$router.push({
						name: 'adm024',
						params: { seq: selected[0].seq },
					})
				"
			>
				등록하기
			</v-btn>
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
				수정하기
			</v-btn>
		</div>
		<div class="table_box">
			<v-data-table
				v-model="selected"
				:headers="headers"
				item-key="athId"
				:items="authListData"
				show-select
				hide-default-footer
				class="elevation-1"
			>
				<template v-slot:[`item.regDt`]="{ item }">
					{{ formatDate(item.regDt, '-') }}
				</template>
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
		totalCount: Number,
	},
	data() {
		return {
			selected: [],
			headers: [
				{
					text: '구분',
					sortable: true,
					value: 'athTypeNm',
				},
				{
					text: '계열사',
					sortable: true,
					value: 'groupCoNm',
				},
				{
					text: '권한코드ID',
					sortable: true,
					value: 'athId',
				},
				{
					text: '권한명',
					sortable: true,
					value: 'athNm',
				},
				{
					text: '사용여부',
					sortable: true,
					value: 'useYn',
				},
				{
					text: '등록자',
					sortable: true,
					value: 'userNm',
				},
				{
					text: '등록일',
					sortable: true,
					value: 'regDt',
				},
			],
		}
	},
	computed: {
		authListData() {
			return this.list.map(item => {
				return {
					seq: item.seq,
					athTypeNm: item.athTypeNm,
					groupCoNm: item.groupCoNm,
					athId: item.athId,
					athNm: item.athNm,
					useYn: item.useYn,
					regDt: item.regDt,
					userNm: item.userNm,
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
