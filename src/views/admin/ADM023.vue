<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>문의하기 관리</h5>
			<qna-filter @search="search" :parentParam="param" />
			<div class="item_box">
				<qna-list :list="list" />
				<div class="paging">
					<v-pagination
						v-model="page"
						:length="Math.ceil(totalCount / 10)"
						:total-visible="10"
						color="primary"
					></v-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import QnaFilter from '@/components/admin/QnaFilter.vue'
import QnaList from '@/components/admin/QnaList.vue'
import listViewMixin from '@/mixin/listViewMixin'
import { getQnaApi } from '@/api/modules/qnaAPI'
export default {
	components: { QnaFilter, QnaList },
	mixins: [
		listViewMixin(getQnaApi, {
			title: null,
			dstic: { cmnCd: '01', cmnCdNm: '포털' },
			status: { cmnCd: '1', cmnCdNm: '대기중' },
			company: { cmnCd: 'KFG', cmnCdNm: 'KB금융지주' },
		}),
	],
}
</script>

<style></style>
