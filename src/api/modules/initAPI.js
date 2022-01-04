import constant from '@/constant'

export const getCmCodeApi = () => {
	return {
		cmCode: {
			notiCmCodeDstic: [...constant.notiCmCodeDstic],
			notiCmCodeKate: [...constant.notiCmCodeKate],
			faqCmCodeDstic: [...constant.faqCmCodeDstic],
			qnaCmCodeStatus: [...constant.qnaCmCodeStatus],
			qnaCmCodeDstic: [...constant.qnaCmCodeDstic],
			commCmcodeCompany: [...constant.commCmcodeCompany],
		},
	}
}
