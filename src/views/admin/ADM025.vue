<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>FAQ 관리</h5>
			<faq-filter @search="search" :parentParam="param" />
			<div class="item_box">
				<loading-lottie v-if="loading" />
				<faq-list :list="list" v-if="!loading" @search="search" />
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
import FaqFilter from '@/components/admin/FaqFilter.vue'
import FaqList from '@/components/admin/FaqList.vue'
import listViewMixin from '@/mixin/listViewMixin'
import { getFaqApi } from '@/api/modules/faqAPI'
export default {
	components: { FaqFilter, FaqList },
	mixins: [
		listViewMixin(getFaqApi, {
			ques: null,
			dstic: { cmnCd: '01', cmnCdNm: '전체' },
		}),
	],
}
</script>

<style></style>
