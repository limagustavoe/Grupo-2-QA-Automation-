/*El siguiente test case tiene como objetivo
cambiar el nombre de usuario del usuario cliente generador de eventos existente en el sistema.*/

describe('Editar Cliente Generador de Eventos Existente', () => {

    beforeEach(() => {
        //cy.viewport('iphone-6')
        cy.visit('https://ticketazo.com.ar/auth/login')
    })

})
it('Login - Cambiar Nombre de Usuario',()=>{
    const email='gutu3@hotmail.com'
    const password='lavozsigueviva0712$'

    cy.loginCorrecto(email, password)
    cy.cambiarNombreUsuario()

    })