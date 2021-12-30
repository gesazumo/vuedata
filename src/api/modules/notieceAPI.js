import { adminInstance } from '..'
import util from '@/utils/util'

export const getNoticesApi = param => {
	const url = 'getNoticeCon'
	const queryString = util.convertUrl(param)
	return adminInstance.get(`${url}${queryString}`)
}
