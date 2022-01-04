import store from '@/store'

const methods = {
	$confirm(msg, btnMsg) {
		return new Promise(reslove => {
			store.dispatch('showConfirm', { reslove, msg, btnMsg })
		})
	},
	$getCmCode(key) {
		return store.getters['commonCodeStore/getCmCode'](key)
	},
	$showError(msg) {
		this.$toasted.error(msg)
	},
	$showInfo(msg) {
		this.$toasted.info(msg)
	},
}

export default methods
