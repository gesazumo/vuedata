<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>공지사항 관리</h5>
			<notice-filter @search="search" :parentParam="param" />
			<div class="item_box">
				<notice-list
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
import { getNoticesApi } from '@/api/modules/notieceAPI'
import listViewMixin from '@/mixin/listViewMixin'
import NoticeList from '@/components/admin/NoticeList.vue'
import NoticeFilter from '@/components/admin/NoticeFilter.vue'

export default {
	components: { NoticeList, NoticeFilter },
	mixins: [
		listViewMixin(getNoticesApi, {
			title: null,
			dstic: '1',
			kategorie: '01',
			status1: true,
			status2: true,
			status3: true,
			page: 1,
		}),
	],
}
</script>

<style></style>
