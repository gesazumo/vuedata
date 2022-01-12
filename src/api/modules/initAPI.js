import util from '@/utils/util'
import { userInstance, adminInstance } from '..'

export const getCmCodeApi = () => {
	const url = '/common/selectCom00001'
	return userInstance.get(`${url}`)
}

export const getMenuApi = () => {
	const url = '/getMenuTree'
	return adminInstance.get(`${url}`)
}

export const getMenuDetail = id => {
	const url = '/getMenuList'
	const queryString = util.convertUrl({ menuId: id })
	return adminInstance.get(`${url}${queryString}`)
}
