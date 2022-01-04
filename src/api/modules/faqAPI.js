import { adminInstance } from '..'
import util from '@/utils/util'

export const getFaqApi = param => {
	const url = '/getFaqCon'
	const parsedParam = {
		ques: param.ques,
		dstic: param.dstic.value,
	}
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}
