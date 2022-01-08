import { adminInstance } from '..'
import util from '@/utils/util'

export const getQnaApi = param => {
	const url = '/getQaCon'
	const parsedParam = {
		company: param.company.cmnCd,
		datefrom: param.datefrom,
		dateto: param.dateto,
		dstic: param.dstic,
		status1: String(param.status1),
		status2: String(param.status2),
		title: param.title,
		page: param.page,
	}
	console.log(param)
	console.log(parsedParam)
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}

export const getQnaDetailApi = seq => {
	const url = '/getQaConDetail'
	return adminInstance.get(`${url}?seq=${seq}`)
}
