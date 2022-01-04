import { userInstance } from '..'

export const selectAna00301 = param => {
	return userInstance.post('analyze/analenvreq/ana003/selectAna00301', param)
}

export const insertAna00301 = param => {
	return userInstance.post('analyze/analenvreq/ana003/insertAna00301', param)
}
