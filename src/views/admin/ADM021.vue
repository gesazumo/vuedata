<template>
	<div>
		<!-- 필터 -->
		<!-- 퍼블나온거에 리스트만 넣음 -->
		<notice-list :list="list" />
		<div class="adm_contents">
			<div class="inner">
				<v-pagination
					v-model="param.page"
					:length="4"
					prev-icon="mdi-menu-left"
					next-icon="mdi-menu-right"
				></v-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import { getNoticesApi } from '@/api/modules/notieceAPI'
import listMixin from '@/mixin/listMixin'
import NoticeList from '@/components/admin/NoticeList.vue'

export default {
	components: { NoticeList },
	data() {
		return {
			page: 1,
		}
	},
	mixins: [listMixin(getNoticesApi)],
}
</script>

<style></style>
