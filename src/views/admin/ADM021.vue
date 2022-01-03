<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>공지사항 관리</h5>
			<notice-filter @search="search" />
			<div class="item_box">
				<div class="table_box">
					<notice-list :list="list" />
					<div class="paging">
						<v-pagination
							v-model="page"
							:length="50"
							:total-visible="7"
							color="primary"
						></v-pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getNoticesApi } from '@/api/modules/notieceAPI'
import listViewMixin from '@/mixin/listViewMixin'
import NoticeList from '@/components/admin/NoticeList.vue'
import NoticeFilter from '@/components/admin/NoticeFilter.vue'

export default {
	components: { NoticeList, NoticeFilter },
	mixins: [listViewMixin(getNoticesApi)],
}
</script>

<style></style>
