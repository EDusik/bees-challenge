// Intellisense
/// <reference types="Cypress" />

import { environment } from "../../src/environments/environment";

Cypress.Commands.add("goToTheHomePage", () => {
	cy.visit("/");
});

Cypress.Commands.add("getCompanies", () => {
	cy.intercept("GET", `${environment.baseUrl}breweries`, "fixture:mockCompanies.json");
});

Cypress.Commands.add("fillForm", () => {
	cy.get('[data-cy="full-name-input"]').type("John Doe");
	cy.get('[data-cy="home-input-checkbox"]').click();
	cy.get('[data-cy="enter-button"]').click();
});

Cypress.Commands.add("requestError", () => {
	cy.intercept("GET", "https://api.openbrewerydb.org/breweries", { statusCode: 500 });
});
