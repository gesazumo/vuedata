const listMixin = () => {
	return {
		props: {
			parentParam: {
				type: Object,
			},
		},
		data() {
			return {
				initParam: {
					...this.parentParam,
					datefrom: null,
					dateto: null,
				},
				param: { ...this.parentParam, datefrom: null, dateto: null },
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
				console.log(this.param)
				const _param = {
					...this.param,
					datefrom: this.formatDate(this.param.datefrom, ''),
					dateto: this.formatDate(this.param.dateto, ''),
				}
				this.$emit('search', { ..._param })
			},
			doInit() {
				this.param = { ...this.initParam }
			},
		},
	}
}

export default listMixin
