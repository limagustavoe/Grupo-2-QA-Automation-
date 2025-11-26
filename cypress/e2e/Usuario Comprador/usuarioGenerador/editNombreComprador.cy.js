/*El siguiente test case tiene como objetivo
editar la información de un cliente generador de eventos existente en el sistema.*/

describe('Editar Generador de Eventos Existente', () => {

    beforeEach(() => {
        //cy.viewport('iphone-6')
        cy.visit('https://ticketazo.com.ar/auth/login')
    })

})
it('Login - Cambio de Nombre',()=>{
    const email='gutu3@hotmail.com'
    const password='lavozsigueviva0712$'

    cy.loginCorrecto(email, password)
    cy.cambioDeNombre()

    })