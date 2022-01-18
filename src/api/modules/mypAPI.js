import { userInstance } from '..'
import util from '@/utils/util'

// 분석환경신청 결재 상세 조회
export const selectMyp03201 = param => {
	const url = '/mypage/myaprval/myp032/selectMyp03201'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}

// 분석환경신청 결재 등록
export const updateMyp03201 = param => {
	const url = '/mypage/myaprval/myp032/updateMyp03201'
	return userInstance.post(`${url}`, { ...param })
}

// My Project 공유하기 초기값 조회
export const selectMyp01201 = () => {
	const url = '/mypage/myproject/myp012/selectMyp01201'
	return userInstance.get(`${url}`)
}

// My Project 공유하기 프로젝트 선택 조회
export const selectMyp01202 = param => {
	const url = '/mypage/myproject/myp012/selectMyp01202'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}

// My Project 공유하기 분석가 포털 공유 등록
export const insertMyp01201 = param => {
	const url = '/mypage/myproject/myp012/insertMyp01201'
	return userInstance.post(`${url}`, { ...param })
}

// My Project 공유하기 계열사전송 & CI 변환 등록
export const insertMyp01202 = param => {
	const url = '/mypage/myproject/myp012/insertMyp01202'
	return userInstance.post(`${url}`, { ...param })
}

// My Project 공유하기(분석가 포털 공유) 결과 조회
export const selectMyp01301 = param => {
	const url = '/mypage/myproject/myp013/selectMyp01301'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}

// My Project 공유하기(계열사 전송&분석결과 CI 변환) 결과 조회
export const selectMyp01302 = param => {
	const url = '/mypage/myproject/myp013/selectMyp01302'
	const queryString = util.convertUrl(param)
	return userInstance.get(`${url}${queryString}`)
}
