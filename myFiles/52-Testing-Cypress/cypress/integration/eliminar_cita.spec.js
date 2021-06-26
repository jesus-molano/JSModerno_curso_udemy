/// <reference types="cypress"/>

describe('Llenar los campos del form y elimina la cita', () => {
	it('Agrega una cita correctamente', () => {
		cy.visit('/index.html');
		cy.get('[id="mascota"]').type('Alay');
		cy.get('[id="propietario"]').type('Jesus');
		cy.get('[id="telefono"]').type('676485672');
		cy.get('[id="fecha"]').type('2021-07-03');
		cy.get('[id="hora"]').type('12:20');
		cy.get('[id="sintomas"]').type('Vomitos');
		cy.get('button').should('have.class', 'btn-primary').click();
		cy.get('.alert') // mala practica clases or id
			.should('have.class', 'alert-success')
			.invoke('text')
			.should('equals', 'Se agregó correctamente');
		cy.get('[data-cy="citas-heading"]')
			.invoke('text')
			.should('equal', 'Administra tus Citas');
		// cy.screenshot();
	});

	it('Elimina la cita correctamente', () => {
		cy.get('.btn-danger').click();
	});
});
