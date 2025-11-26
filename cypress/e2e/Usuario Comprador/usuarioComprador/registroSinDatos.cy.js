/*El siguiente test case tiene como objetivo
registrar el cliente comprador de entradas en el formulario de registro, sin los datos obligatorios.*/

describe('Registrar Cliente Comprador de Entradas sin datos obligatorios', () => {

    beforeEach(() => {

        cy.visit('https://ticketazo.com.ar/')
    })

})
it('Login',()=>{

    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="btn-registrarse"]').click()

    })