
describe('App', () => {
    it('test header', () => {
        cy.visit('/')
        cy.findByText('ThreeJS test').should(
            'contain',
            'ThreeJS test'
        )
    })
})