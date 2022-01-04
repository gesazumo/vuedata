import store from '@/store'

const methods = {
	$confirm(msg, btnMsg) {
		return new Promise(reslove => {
			store.dispatch('showConfirm', { reslove, msg, btnMsg })
		})
	},
	$getCmCode(key) {
		return store.getters.getCmCode(key)
	},
	// todo 토스트 띄우기 메소드
}

export default methods
