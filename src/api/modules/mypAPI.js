import { userInstance } from '..'
import util from '@/utils/util'

// 분석환경 결재 상세
export const selectMyp03201 = param => {
	const url = '/mypage/myaprval/myp032/selectMyp03201'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}

export const updateMyp03501 = param => {
	const url = '/mypage/myaprval/myp032/updateMyp03501'
	return userInstance.post(`${url}`, { ...param })
}
