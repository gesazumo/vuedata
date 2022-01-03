import store from '@/store'

const methods = {
	$confirm(msg) {
		return new Promise(reslove => {
			store.dispatch('showConfirm', { reslove, msg })
		})
	},
}

export default methods
