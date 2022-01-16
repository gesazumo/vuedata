const listViewMixin = (apiFuc, initParam) => {
	return {
		data() {
			return {
				loading: false,
				list: [],
				page: 1,
				param: { ...initParam, page: 1 },
				totalCount: '0',
			}
		},
		methods: {
			async doApiFuc(param) {
				try {
					const { data } = await apiFuc(param)
					console.log(data)
					this.loading = true
					this.list = data.list
					this.totalCount = data.count
					this.page = Number(data.parameters.page)
				} catch (error) {
					this.$showError(this.apiErrorMsg)
					console.log(error)
				} finally {
					this.loading = false
				}
			},
			search(param = this.param) {
				this.param = { ...param, page: 1 }
				const _param = this.param
				this.doApiFuc(_param)
			},
		},
		created() {
			const _param = this.param
			this.doApiFuc(_param)
		},
		watch: {
			page(value) {
				const _param = { ...this.param, page: value }
				this.doApiFuc(_param)
			},
		},
	}
}

export default listViewMixin
