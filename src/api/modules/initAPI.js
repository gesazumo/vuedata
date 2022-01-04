import constant from '@/constant'

export const getCmCodeApi = () => {
	return {
		cmCode: {
			notiCmCodeDstic: [...constant.notiCmCodeDstic],
			notiCmCodeKate: [...constant.notiCmCodeKate],
		},
	}
}
