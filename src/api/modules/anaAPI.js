import { userInstance } from '..'
import util from '@/utils/util'

// 분석환경신청 초기값 조회
export const selectAna00301 = () => {
	const url = '/analyze/analenvreq/ana003/selectAna00301'
	return userInstance.get(`${url}`)
}

// 분석환경신청 등록
export const insertAna00301 = param => {
	const url = '/analyze/analenvreq/ana003/insertAna00301'
	return userInstance.post(`${url}`, { ...param })
}

// 분석환경신청 결과 조회
export const selectAna00401 = param => {
	const url = '/analyze/analenvreq/ana004/selectAna00401'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}

// 프로젝트 팀원 조회
export const selectAna00501 = param => {
	const url = '/analyze/analenvreq/ana005/selectAna00501'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}

// 프로젝트 생성 확인
export const selectAna00601 = param => {
	const url = '/analyze/analenvreq/ana006/selectAna00601'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}
