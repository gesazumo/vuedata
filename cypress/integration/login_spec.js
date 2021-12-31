/* eslint-disable no-undef */
describe('Login Test', () => {
	it('Login without ID/PW', () => {
		cy.visit('http://localhost:8080')

		cy.contains('로그인').click().url().should('include', '/main')
	})
})
