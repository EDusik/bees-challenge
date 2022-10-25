// Intellisense
/// <reference types="Cypress" />
import companies from "../fixtures/mockCompanies.json";

describe("Companies", () => {
	describe("When user click delete button", () => {
		it("should delete first company", () => {
			cy.goToTheHomePage();

			cy.fillForm();
			cy.get(".company").should("have.length", 20);
			cy.get(`[data-cy="company-delete-button-${companies[0].id}"]`).click();
			cy.get(".company").should("have.length", 19);
		});
	});

	describe("When user click Enter", () => {
		it("should add new tag", () => {
			cy.goToTheHomePage();

			cy.fillForm();

			cy.get(`[data-cy="company-add-button-${companies[0].id}"]`).click();
			cy.get(`[data-cy="company-add-more-input-${companies[0].id}"]`).type("new tag").trigger("keydown", {
				key: "Enter"
			});
			cy.get(`[data-cy="company-${companies[0].id}"]`).contains("new tag");
		});
	});

	describe("When user click add more button", () => {
		it("should add new tag", () => {
			cy.goToTheHomePage();

			cy.fillForm();

			cy.get(`[data-cy="company-add-button-${companies[0].id}"]`).click();
			cy.get(`[data-cy="company-add-more-input-${companies[0].id}"]`).type("new tag");
			cy.get(`[data-cy="company-add-button-${companies[0].id}"]`).click();
			cy.get(`[data-cy="company-${companies[0].id}"]`).contains("new tag");
		});
	});

	describe("When an API error occurred", () => {
		it("should show error message", () => {
			cy.intercept("GET", "https://api.openbrewerydb.org/breweries", { statusCode: 500 });
			cy.goToTheHomePage();
			cy.fillForm();
			cy.get('[data-cy="error-message"]').should("be.visible");
		});
	});
});
