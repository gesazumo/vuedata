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
				@click="$router.push({ name: 'adm022' })"
			>
				등록하기
			</v-btn>
			<v-btn
				color="primary"
				dark
				outlined
				@click="doDelete"
				v-if="this.selected.length != 0"
			>
				삭제하기
			</v-btn>
			<v-btn
				color="primary"
				dark
				outlined
				v-if="selected.length == 1"
				@click="
					$router.push({
						name: 'adm0221',
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
				item-key="seq"
				:headers="headers"
				:items="noticeListData"
				show-select
				hide-default-footer
				@click:row="handleClick"
				class="elevation-1"
			>
				<template v-slot:no-data>
					<no-data />
				</template>
				<template v-slot:[`item.datefrom`]="{ item }">
					{{ formatDate(item.datefrom, '-') }}
					{{ item.seq }}
				</template>
				<template v-slot:[`item.dateto`]="{ item }">
					{{ formatDate(item.dateto, '-') }}
				</template>
				<template v-slot:[`item.registfrom`]="{ item }">
					{{ formatDate(item.registfrom, '-') }}
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
	methods: {
		handleClick(item) {
			this.$router.push({ name: 'adm0221', params: { seq: item.seq } })
		},
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
				const { data } = await deleteNoticesApi(seqList)
				console.log(data)
				this.$showInfo('삭제되었습니다.')
				this.$emit('search')
			} catch (error) {
				this.$showError(this.apiErrorMsg_Blue)
				console.log('deleteNoticesApi :' + error)
			}
		},
	},
	computed: {
		noticeListData() {
			return this.list.map(item => {
				return {
					seq: item.seq,
					status: '게시중',
					dstic: item.dstic == '1' ? '일반' : '메인',
					kategorie: item.kategorie == '01' ? '공지사항' : '이벤트',
					title: item.title,
					datefrom: item.startdate,
					dateto: item.enddate,
					writer: '데이터안와',
					registfrom: item.sysFrstPrcssYms,
					views: 10,
				}
			})
		},
	},
}
</script>

<style></style>
