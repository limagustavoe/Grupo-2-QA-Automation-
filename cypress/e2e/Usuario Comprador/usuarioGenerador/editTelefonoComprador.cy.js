/*El siguiente test case tiene como objetivo
editar el nuumero de teléfono de un cliente generador de eventos existente en el sistema.*/

describe('Editar Cliente Generador de Eventos Existente', () => {

    beforeEach(() => {
        
        cy.visit('https://ticketazo.com.ar/auth/login')
    })

})
it('Login - Cambio de Teléfono',()=>{
    const email='gutu3@hotmail.com'
    const password='lavozsigueviva0712$'

    cy.loginCorrecto(email, password)
    cy.cambioDeTelefono()

    })