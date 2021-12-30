import store from '@/store'

export function setInterceptors(instance) {
	instance.interceptors.request.use(
		function (config) {
			const token = store.getters.getAccessToken
			if (token) {
				config.headers.Authorization = `Bearer ${token}`
			}
			return config
		},
		function (error) {
			return Promise.reject(error)
		},
	)

	instance.interceptors.response.use(
		function (response) {
			// if.. 401이면 jwt refresh token 재요청 로직 넣기
			return response
		},
		function (error) {
			return Promise.reject(error)
		},
	)
	return instance
}
