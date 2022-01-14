import { adminInstance } from '..'

export const updateMenuApi = param => {
	const url = '/menuUpdate'
	return adminInstance.post(`${url}`, {
		userList: [{ ...param }],
	})
}
