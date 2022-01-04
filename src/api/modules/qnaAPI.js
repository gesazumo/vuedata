import { adminInstance } from '..'
import util from '@/utils/util'

export const getQnaApi = param => {
	const url = '/getQaCon'
	const parsedParam = {
		company: param.company,
		datefrom: param.datefrom,
		dateto: param.dateto,
		dstic: param.dstic,
		status: param.status,
		title: param.title,
	}
	console.log(parsedParam)
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}
