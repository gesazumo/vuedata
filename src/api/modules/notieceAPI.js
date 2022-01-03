import { adminInstance } from '..'
import util from '@/utils/util'

export const getNoticesApi = param => {
	const url = '/getNoticeCon'
	const parsedParam = {
		datefrom: param.datefrom,
		dateto: param.dateto,
		dstic: param.dstic,
		kategorie: param.kategorie,
		page: param.page,
		title: param.title,
	}
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}

export const deleteNoticesApi = param => {
	const url = '/regNoticeConDel'
	console.log(param, url)
}

export const updateNoticesApi = param => {
	const url = '/regNoticeConUpd'
	console.log(param, url)
}

export const createNoticesApi = param => {
	const url = '/regNoticeConIns'
	console.log(param, url)
}
