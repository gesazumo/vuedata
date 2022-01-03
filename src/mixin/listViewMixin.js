const listViewMixin = (apiFuc, param) => {
	return {
		data() {
			return {
				list: [],
				page: 1,
				param: { ...param, page: 1 },
				totalCount: 0,
			}
		},
		methods: {
			async doApiFuc(param) {
				try {
					const { data } = await apiFuc(param)
					console.log(data)
					this.list = data.list
					this.totalCount = data.count
					this.page = data.page
				} catch (error) {
					console.log(error)
				}
			},
			search(param) {
				this.doApiFuc(param)
			},
		},
		created() {
			const _param = this.param
			this.doApiFuc(_param)
		},
		watch: {
			'param.page'() {
				const _param = this.param
				this.doApiFuc(_param)
			},
		},
	}
}

export default listViewMixin
