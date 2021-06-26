/// <reference types="cypress" />

// OJO CON PRETTIER❗

describe('CArga la pagina principal', () => {
	it('Carga la pagina principal', () => {
		// Le decimos a cypress el proyecto a testear
		cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');
		// Verifica si existe un elemento
		cy.get('[data-cy="title-proyect"]').should('exist');
		// Verifica si existe un elemento y su texto
		cy.contains(
			'[data-cy="title-proyect"]',
			'Administrador de Pacientes de Veterinaria'
		);
		// Verifica tal cual el texto HTML
		cy.get('[data-cy="telefono"]').invoke('text').should('equal', 'Teléfono:');

		cy.get('[data-cy="citas-heading"]')
			.invoke('text')
			.should('equal', 'No hay Citas, comienza creando una'); //or not-equal
	});
});
