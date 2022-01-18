import { adminInstance } from '..'
import util from '@/utils/util'

export const getAuthListApi = param => {
	const url = '/adm017/selectAdm017List'
	const parsedParam = {
		athNm: param.athNm,
		athType: param.athType?.cmnCd,
		groupCoCd: param.groupCoCd?.cmnCd,
		useYn: param.useYn?.cmnCd,
		dateFrom: param.datefrom,
		dateTo: param.dateto,
		page: param.page,
	}
	console.log(parsedParam)
	const queryString = util.convertUrl(parsedParam)
	return adminInstance.get(`${url}${queryString}`)
}

export const createAuthApi = param => {
	const url = '/adm017/insertAdm017'
	const parsedParam = {
		athDesc: param.athDesc,
		athId: param.athId,
		athNm: param.athNm,
		athType: param.athType,
		groupCoCd: param.groupCoCd,
		sysEmpid: param.sysEmpid,
		useYn: param.useYn,
		userList: param.userList,
	}
	return adminInstance.post(`${url}`, {
		...parsedParam,
	})
}

export const updateAuthApi = param => {
	const url = '/adm017/updateAdm017'
	const _param = {
		athDesc: param.athDesc,
		athId: param.athId,
		athNm: param.athNm,
		athType: param.athType,
		groupCoCd: param.groupCoCd,
		sysEmpid: param.sysEmpid,
		useYn: param.useYn,
		userList: param.userList,
	}
	return adminInstance.post(`${url}`, {
		..._param,
	})
}

export const getAuthDetailApi = athId => {
	const url = '/adm017/selectAdm018'
	return adminInstance.get(`${url}?athId=${athId}`)
}

export const getAuthIdApi = groupCoCd => {
	const url = '/adm017/selectAdm017NextKey'
	return adminInstance.get(`${url}?groupCoCd=${groupCoCd}`)
}
