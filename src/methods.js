import store from '@/store'

const methods = {
	$confirm(msg, btnMsg) {
		return new Promise(reslove => {
			store.dispatch('showConfirm', { reslove, msg, btnMsg })
		})
	},
}

export default methods
