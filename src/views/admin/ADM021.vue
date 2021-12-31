<template>
	<div class="adm_contents">
		<div class="inner">
			<h5>공지사항 관리</h5>
			<notice-filter @search="search" />
			<!-- 퍼블나온거에 리스트만 넣음 -->
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
import listMixin from '@/mixin/listMixin'
import NoticeList from '@/components/admin/NoticeList.vue'
import NoticeFilter from '@/components/admin/NoticeFilter.vue'

export default {
	components: { NoticeList, NoticeFilter },
	data() {
		return {
			page: 1,
		}
	},
	mixins: [listMixin(getNoticesApi)],
	methods: {
		search(param) {
			console.log(param)
		},
	},
}
</script>

<style></style>
