import { adminInstance } from '..'
import util from '@/utils/util'

export const getFaqApi = param => {
	const url = '/getFaqCon'
	const parsedParam = {
		datefrom: param.datefrom,
		dateto: param.dateto,
		ques: param.ques,
		dstic: param.dstic.cmnCd,
	}
	console.log(parsedParam)
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}
