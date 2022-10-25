// Intellisense
/// <reference types="Cypress" />

describe("Home", () => {
	beforeEach(() => {
		cy.goToTheHomePage();
	});

	describe("When form is valid", () => {
		it("should redirect to go back to home page", () => {
			cy.fillForm();

			cy.get('[data-cy="full-name"]').contains("John Doe");
			cy.get('*[data-cy="company-"]').should("have.length.of.at.most", 20);

			cy.get('[data-cy="go-back-button"]').click();
			cy.get('[data-cy="form-component"]').should("be.visible");
		});
	});

	describe("When form is invalid", () => {
		it("should button remain disabled", () => {
			cy.get('[data-cy="home-input-checkbox"]').click();
			cy.get('[data-cy="full-name-input"]').type("John");
			cy.get('[data-cy="enter-button"]').should("be.disabled");

			cy.get('[data-cy="full-name-input"]').type(" John Doe Jane Doe John Doe Jane Doe John Doe Jane Doe");
			cy.get('[data-cy="enter-button"]');
			cy.get('[data-cy="enter-button"]').should("be.disabled");
		});
	});
});
