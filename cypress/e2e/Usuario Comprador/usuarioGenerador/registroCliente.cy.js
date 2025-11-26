describe('Cliente Comprador', () => {

    beforeEach(() => {
        
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })

})
it('Registro Cliente Comprador',()=>{
    const email='gutu3@hotmail.com'
    const password='lavozsigueviva0712$'

    cy.loginCorrecto(email, password)
    cy.cambioDeTelefono()

    })