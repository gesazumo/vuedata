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

export const createFaqApi = param => {
	const url = '/regFaqConIns'
	const parsedParam = {
		answertext: param.maintext,
		dstic: param.dstic.cmnCd,
		ques: param.ques,
	}
	return adminInstance.post(`${url}`, {
		...parsedParam,
	})
}

export const deleteFaqsApi = param => {
	const url = '/regFaqConDel'
	return adminInstance.post(url, {
		seq: param,
	})
}

export const updateFaqApi = param => {
	const url = '/regFaqConUpd'
	const _param = {
		seq: param.seq,
		answertext: param.maintext,
		dstic: param.dstic,
		ques: param.ques,
	}
	return adminInstance.post(`${url}`, {
		..._param,
	})
}
