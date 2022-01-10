import { userInstance } from '..'

export const selectAna00301 = param => {
	return userInstance.get(
		'/apianalyze/analenvreq/ana003/selectAna00301',
		param,
	)
}

export const insertAna00301 = param => {
	return userInstance.post(
		'/apianalyze/analenvreq/ana003/insertAna00301',
		param,
	)
}

export const selectAna00601 = param => {
	return userInstance.get(
		'/api/analyze/analenvreq/ana006/selectAna00601',
		param,
	)
}
