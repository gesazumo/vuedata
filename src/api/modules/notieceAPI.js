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
		status1: String(param.status1),
		status2: String(param.status2),
		status3: String(param.status3),
	}
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}

export const getNoticeDetailApi = seq => {
	const url = '/getNoticeConDetail'
	return adminInstance.get(`${url}?seq=${seq}`)
}

export const deleteNoticesApi = param => {
	const url = '/regNoticeConDel'
	return adminInstance.post(url, {
		seq: param,
	})
}

export const updateNoticesApi = param => {
	const url = '/regNoticeConUpd'
	const parsedParam = {
		seq: param.seq,
		dstic: param.dstic,
		enddate: util.formatDate(param.enddate, ''),
		eventend: util.formatDate(param.eventend, ''),
		kategorie: param.kategorie,
		maintext: param.maintext,
		posting: param.posting,
		startdate: util.formatDate(param.startdate, ''),
		title: param.title,
	}
	return adminInstance.post(`${url}`, {
		...parsedParam,
	})
}

export const createNoticesApi = param => {
	const url = '/regNoticeConIns'
	const parsedParam = {
		dstic: param.dstic,
		enddate: util.formatDate(param.enddate, ''),
		eventend: util.formatDate(param.eventend, ''),
		kategorie: param.kategorie,
		maintext: param.maintext,
		posting: param.posting,
		startdate: util.formatDate(param.startdate, ''),
		title: param.title,
	}
	return adminInstance.post(`${url}`, {
		...parsedParam,
	})
}
