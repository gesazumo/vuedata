<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>문의하기 관리</h5>
			<qna-filter @search="search" :parentParam="param" />
			<div class="item_box">
				<loading-lottie v-if="loading" />
				<qna-list :list="list" v-if="!loading" @search="search" />
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
import methods from '@/methods'

const initDistic = methods.$getCmCode('TAH000051')[0].cmnCd
const initStatus = methods.$getCmCode('TAH000052')[0].cmnCd
const initCompany = methods.$getCmCode('TAH000002')[0].cmnCd
export default {
	components: { QnaFilter, QnaList },
	mixins: [
		listViewMixin(getQnaApi, {
			title: null,
			dstic: initDistic,
			status: initStatus,
			company: initCompany,
			status1: true,
			status2: false,
		}),
	],
}
</script>

<style></style>
