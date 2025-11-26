Cypress.Commands.add("registroComprador", (dni, email, telefono, contrasena) => {
  //cy.viewport(1280, 720);
  cy.visit('https://ticketazo.com.ar/auth/registerUser')
  cy.get('[data-cy="input-nombres"]').clear().type('Carlos Alberto')
  cy.get('[data-cy="input-apellido"]').clear().type('Altavista')
  cy.get('[data-cy="input-telefono"]').type(telefono)
  cy.get('[data-cy="input-dni"]').clear().type(dni)
  cy.get('input[data-cy="select-provincia"]').should('be.visible').click()
  cy.get('input[data-cy="select-provincia"]').type('Cordoba')
  cy.contains('[role="option"]', 'Córdoba').click()
  cy.get('[data-cy="select-localidad"]').type('Santa')
  cy.get('ul').contains('Santa Rosa de Calamuchita').click()
  cy.get('div[aria-label="día, "]').type('12071990')
  //cy.get('[data-cy="input-fecha-nacimiento"]').type('12/07/1990')
  cy.get('[data-cy="input-email"]').clear().type(email)
  cy.get('[data-cy="input-confirmar-email"]').clear().type(email)
  cy.get('[data-cy="input-password"]').clear().type(contrasena)
  cy.get('[data-cy="input-repetir-password"]').clear().type(contrasena)
  cy.get('[data-cy="btn-registrarse"]').click()
  cy.url().should('include', 'ticketazo.com.ar')
  
});



