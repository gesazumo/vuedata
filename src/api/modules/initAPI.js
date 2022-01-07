import { userInstance } from '..'

export const getCmCodeApi = () => {
	const url = '/common/selectCom00001'
	return userInstance.get(`${url}`)
}
