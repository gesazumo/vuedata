const listViewMixin = (apiFuc, initParam) => {
	return {
		data() {
			return {
				list: [],
				page: 1,
				param: { ...initParam },
				totalCount: '0',
			}
		},
		methods: {
			async doApiFuc(param) {
				try {
					const { data } = await apiFuc(param)
					console.log(data)
					this.list = data.list
					this.totalCount = data.count
					this.page = Number(data.parameters.page)
				} catch (error) {
					console.log(error)
				}
			},
			search(param = this.param) {
				this.param = { ...param }
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
