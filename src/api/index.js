import axios from 'axios'
// import { setInterceptors } from './common/interceptors'

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	})
}

function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: url,
	})
	// return setInterceptors(instance)
	return instance
}

export const instance = createInstance()
export const adminInstance = createInstanceWithAuth('/api/admin')
export const userInstance = createInstanceWithAuth()
