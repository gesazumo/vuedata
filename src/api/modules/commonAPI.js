import { userInstance } from '..'
import util from '@/utils/util'

// get 거래
export const getAxios = (url, param) => {
	//const url = '/admin/meta/getWordList'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}

// post 거래
export const postAxios = (url, param) => {
	//const url = '/analyze/analenvreq/ana003/insertAna00301'
	return userInstance.post(`${url}`, { ...param })
}
