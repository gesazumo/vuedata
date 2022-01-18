<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>권한 조회</h5>
			<auth-filter @search="search" :parentParam="param" />
			<div class="item_box">
				<loading-lottie v-if="loading" />
				<auth-list
					v-if="!loading"
					:list="list"
					@search="search"
					:totalCount="totalCount"
				/>
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
import AuthList from '@/components/admin/AuthList.vue'
import AuthFilter from '@/components/admin/AuthFilter.vue'
import listViewMixin from '@/mixin/listViewMixin'
import { getAuthListApi } from '@/api/modules/authAPI'
export default {
	components: {
		AuthList,
		AuthFilter,
	},
	mixins: [
		listViewMixin(getAuthListApi, {
			athNm: null,
			athType: null,
			groupCoCd: null,
			useYn: null,
			page: 1,
		}),
	],
}
</script>

<style></style>
