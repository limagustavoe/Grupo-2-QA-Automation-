Cypress.Commands.add('loginCorrecto', (email, password) => {
    cy.visit('https://ticketazo.com.ar/auth/login')
    cy.get('[data-cy="input-email"]').type('gutu3@hotmail.com')
    cy.get('[data-cy="input-password"]').type('Lavozsigueviva0712$')
    cy.get('[data-cy="btn-login"]').click()
})

Cypress.Commands.add('cambioDeNombre', () => {
    cy.viewport(1280, 800)
    cy.contains('a', 'Editar Perfil').click() 
   // cy.get('input[placeholder="Ej: Juan Pérez"]').clear().type('Nuevo Nombre')
    cy.get('input[placeholder="Ej: Juan Pérez"]').first().type('Mi nuevo nombre')
    cy.get('[data-cy="btn-save-profile"]').click()

})


//REGISTRO DE USUARIO CLIENTE

//Command para completar datos de usuario cliente
Cypress.Commands.add('completar_datos_cliente', (razon_social, cuit, direccion, telefono) => {
    cy.get('[data-cy="input-razon-social"]').clear().type(razon_social)
    cy.get('[data-cy="input-cuit"]').clear().type(cuit)
    cy.get('[data-cy="input-direccion"]').clear().type(direccion)
    cy.get('[data-cy="input-telefono"]').clear().type(telefono)
})

//Command para completar desplegables de ubicación de cualquier perfil
Cypress.Commands.add('completar_datos_ubicacion', (provincia, localidad) => {
    cy.get('[data-cy="select-provincia"]').clear().type(provincia)
    cy.get('ul > li > span').contains(provincia).click()
    cy.get('[data-cy="select-localidad"]').clear().type(localidad)
    cy.get('ul > li > span').contains(localidad).click()
})

//Command para completar email y password
Cypress.Commands.add('completar_email_password', (email, repemail, password, reppassword) => {
    cy.get('[data-cy="input-email"]').clear().type(email)
    cy.get('[data-cy="input-confirmar-email"]').clear().type(repemail)
    cy.get('[data-cy="input-password"]').clear().type(password)
    cy.get('[data-cy="input-repetir-password"]').clear().type(reppassword)
})

//LOGIN
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://ticketazo.com.ar/auth/login')
    cy.get('[data-cy="input-email"]').clear().type(email)
    cy.get('[data-cy="input-password"]').clear().type(password)
    cy.get('[data-cy="btn-login"]').click()    
  })

  Cypress.Commands.add('validarMenu', (visibles = [], ocultos = []) => {
    visibles.forEach(item => {
      cy.contains(item).should('be.visible')
    })
  
    ocultos.forEach(item => {
      cy.contains(item).should('not.exist')
    })
  })

  //EDITAR PERFIL CLIENTE
  Cypress.Commands.add('editarPerfilOk', () => {
    cy.get('[data-cy="btn-save-profile"]').click()
    cy.contains('¡Perfil actualizado con éxito!').should('be.visible')
  })

  //CONSULTA EVENTOS
  //busqueda por fechas
  Cypress.Commands.add('rangoFechasBusqueda', (fechaInicio, fechaFin) => {
    const [diaIn, mesIn, añoIn] = fechaInicio.split('/');
    const [diaFin, mesFin, añoFin] = fechaFin.split('/');

    cy.get('div[aria-label="día, Fecha de inicio, "]').clear().type(diaIn)
    cy.get('div[aria-label="mes, Fecha de inicio, "]').clear().type(mesIn)
    cy.get('div[aria-label="año, Fecha de inicio, "]').clear().type(añoIn)
    cy.get('div[aria-label="día, Fecha final, "]').clear().type(diaFin)
    cy.get('div[aria-label="mes, Fecha final, "]').clear().type(mesFin)
    cy.get('div[aria-label="año, Fecha final, "]').clear().type(añoFin)
  })

  //seleccion de filtros de busqueda
  Cypress.Commands.add('seleccionFiltrosDesplegables', (desplegable, opcion) => {
    cy.get('button[aria-label='+desplegable+']')
      .scrollIntoView()
      .should('be.visible')
      .click();
    
    cy.get('li[data-key='+opcion+']')
      .scrollIntoView()
      .should('be.visible')
      .click({force: true});
  })

  //obtiene cantidad de eventos que resultaron de la busqueda
  Cypress.Commands.add('obtenerCantidadCardsFiltradas', () => {
    return cy.get('body').then(($body) => {
      const $cards = $body.find('[data-cy^="evento-card"]');
      const cantidad = $cards.length;
  
      if (cantidad > 0) {
        cy.log(`Se encontraron ${cantidad} resultados`);
      } else {
        cy.log('No se encontraron resultados según filtros aplicados');
      }
  
      // Devuelve cantidad para que pueda usarse en un .then()
      return cantidad;
    });
  });

  
  

  

 
