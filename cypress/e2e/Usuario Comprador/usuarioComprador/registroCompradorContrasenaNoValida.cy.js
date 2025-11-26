/*El siguiente test case tiene como objetivo
registrar el funcionamiento del formulario del cliente comprador
con contraseña que no cumple con los requisitos.*/

describe('Registro Cliente Comprador de con contraseñas desiguales', () => {

    beforeEach(() => {

        cy.visit('https://ticketazo.com.ar/')
    })

})
it('Login',()=>{

    cy.contrasenaSinRequisitos()

    })