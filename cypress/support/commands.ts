// Intellisense
/// <reference types="Cypress" />

import { environment } from "../../src/environments/environment";

Cypress.Commands.add("goToTheHomePage", () => {
	cy.visit("/");
});

Cypress.Commands.add("getCompanies", () => {
	cy.intercept("GET", `${environment.baseUrl}breweries`, "fixture:mockCompanies.json");
});
