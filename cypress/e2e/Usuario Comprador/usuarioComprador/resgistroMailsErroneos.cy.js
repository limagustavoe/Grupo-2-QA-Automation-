/*El siguiente test case tiene como objetivo
 verificar que no se puede registar un usuario con mails diferenetes en el sistema.*/

describe('Registro Cliente Comprador de Entradas sin mail correcto', () => {

    beforeEach(() => {

        cy.visit('https://ticketazo.com.ar/')
    })

})
it('Login',()=>{

    cy.mailsDiferentes()

    })