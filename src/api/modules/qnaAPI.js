import { adminInstance } from '..'
import util from '@/utils/util'

export const getQnaApi = param => {
	const url = '/getQaCon'
	const parsedParam = {
		company: param.company.cmnCd,
		datefrom: param.datefrom,
		dateto: param.dateto,
		dstic: param.dstic.cmnCd,
		status: param.status.cmnCd,
		title: param.title,
	}
	console.log(param)
	console.log(parsedParam)
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}
