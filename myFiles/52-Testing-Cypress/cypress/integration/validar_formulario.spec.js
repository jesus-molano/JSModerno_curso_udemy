/// <reference types="cypress"/>
describe('Validacion de formulario', () => {
	it('Submit al form y mostrar alerta=>ERROR', () => {
		cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');
		cy.get('[data-cy="formulario"]').submit();
		cy.get('.alert') // mala practica clases or id
			.should('have.class', 'alert-danger')
			.invoke('text')
			.should('equals', 'Todos los campos son Obligatorios');
	});
});
