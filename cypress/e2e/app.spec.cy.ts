
describe('App', () => {
    it('test header', () => {
        cy.visit('/')
        cy.findByTestId('main-component').should('be.visible')
    })
})