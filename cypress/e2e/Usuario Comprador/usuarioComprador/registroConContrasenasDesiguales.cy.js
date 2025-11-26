/*El siguiente test case tiene como objetivo
 verificar que no se puede registar un usuario cuando las contraseñas no coinciden en el formulario de registro.*/

describe('Registro Cliente Comprador de con contraseñas desiguales', () => {

    beforeEach(() => {

        cy.visit('https://ticketazo.com.ar/')
    })

})
it('Login',()=>{

    cy.contrasenasDesiguales()

    })