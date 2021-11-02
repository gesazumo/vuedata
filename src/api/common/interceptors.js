export function setInterceptors(instance) {
	instance.interceptors.request.use(
		function (config) {
			// if token이 있으면..
			config.headers.Authorization = 'token'
			return config
		},
		function (error) {
			return Promise.reject(error)
		},
	)

	instance.interceptors.response.use(
		function (response) {
			// jwt 재요청 로직 넣기
			return response
		},
		function (error) {
			return Promise.reject(error)
		},
	)
	return instance
}
