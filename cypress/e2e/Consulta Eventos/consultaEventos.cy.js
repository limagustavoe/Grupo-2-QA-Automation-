describe('Consulta, Busqueda y Filtrado de Eventos', () => {
    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/')
        cy.viewport('macbook-16')
      })

    it('ID 68 - Consultar eventos publicados', () => {
        cy.get('[data-cy^="evento-card"]').its('length').should('be.lte', 12)
        cy.get('[data-cy^="evento-card"]').each(() => {
            cy.get('[data-cy^="evento-titulo"]').should('exist');
            cy.get('[data-cy^="evento-fecha"]').should('exist');
            cy.get('[data-cy^="evento-horario"]').should('exist');
            cy.get('[data-cy^="btn-ver-evento"]').should('exist');
          });
    })

    it('ID 69 - Buscar eventos publicados por nombre', () => {
        const busqueda = 'a';
      
        cy.get('input[placeholder="Busca tu próxima función!"]').as('search');
        cy.get('@search').type(busqueda);
      
        cy.get('[data-cy^="evento-card"]').each(($card) => {
          cy.wrap($card)
            .find('[data-cy^="evento-titulo"]')
            .invoke('text')
            .then((texto) => {
              expect(texto.toLowerCase()).to.contain(busqueda);
            });
        });
      });
    
    it('ID 77 - Limpiar filtros', () => {
      //Filtra por los campos
      cy.seleccionFiltrosDesplegables('Provincia', '14')
      cy.seleccionFiltrosDesplegables('Localidad', '1401401003')
      cy.seleccionFiltrosDesplegables('Categoría', 'Recital')
      cy.rangoFechasBusqueda('11/12/2025', '01/01/2026')   
      cy.get('input[placeholder="Busca tu próxima función!"]').clear().type('Rock')
      
      //Guarda la cantidad de eventos que devolvió el filtrado
      cy.obtenerCantidadCardsFiltradas().then((cantidadFiltrada) => {
        cy.log(`Cantidad antes de limpiar: ${cantidadFiltrada}`);
    
        // Limpiar filtros
        cy.contains('Limpiar filtros').click();
    
        // Valida que después de limpiar la cantidad de eventos sea igual o mayor a lo filtrado
        cy.get('[data-cy^="evento-card"]')
          .its('length')
          .then((cantidadDespues) => {
            expect(cantidadDespues).to.be.gte(cantidadFiltrada)
          });
      });
   
      //Chequea que los filtros estén vacíos
      cy.get('input[placeholder="Busca tu próxima función!"]').should('have.value', '')
      cy.get('div[aria-label="Fecha de inicio"]').should('have.text', 'dd/mm/aaaa')
      cy.get('div[aria-label="Fecha final"]').should('have.text', 'dd/mm/aaaa')
      cy.get('button[aria-label="Categoría"]').should('contain', 'Categoría')
      cy.get('button[aria-label="Provincia"]').should('contain', 'Provincia')
      cy.get('button[aria-label="Localidad"]').should('not.exist')
    })

    it('ID 78 - Consultar detalles del evento', () => {
      cy.get('[data-cy^="btn-ver-evento"]').first().click()
      cy.get('section[role="dialog"]').should('be.visible')
      cy.contains('Adquirir entrada')
      cy.contains('Cómo llegar')
      cy.contains('Eventos similares')
       
    })
    
    it('ID 79 - Búsqueda sin resultados', () => {
      cy.get('input[placeholder="Busca tu próxima función!"]').clear().type('Recital')
      cy.contains('No se encontraron resultados para la búsqueda, por favor intente con otra búsqueda')
    })
})
