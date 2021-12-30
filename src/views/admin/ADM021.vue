<template>
	<div>
		{{ list }}
		{{ page }}
		{{ totalCount }}
	</div>
</template>

<script>
import { getNoticesApi } from '@/api/modules/notieceAPI'

export default {
	data() {
		return {
			list: [],
			totalCount: 0,
			page: 1,
		}
	},
	methods: {
		async getNotices() {
			try {
				const { data } = await getNoticesApi()
				this.list = data.list
			} catch (error) {
				console.log(error)
			}
		},
	},
	created() {
		this.getNotices()
	},
}
</script>

<style></style>
