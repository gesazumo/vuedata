const listMixin = param => {
	return {
		data() {
			return {
				initParam: { ...param, datefrom: null, dateto: null },
				param: { ...param, datefrom: null, dateto: null },
			}
		},
		computed: {
			registDate: {
				get() {
					return [this.param.datefrom, this.param.dateto]
				},
				set(value) {
					this.param.datefrom = value[0]
					this.param.dateto = value[1]
				},
			},
		},
		methods: {
			doSearch() {
				this.$emit('search', { ...this.param })
			},
			doInit() {
				this.param = { ...this.initParam }
			},
		},
	}
}

export default listMixin
