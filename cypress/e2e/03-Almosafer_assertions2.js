/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('https://www.almosafer.com/ar');
  cy.get('.cta__button.cta__saudi.btn').click();
});

describe("Test almosafer website", () => {
  it("Make sure the departure date is set to be today's date +1", () => {
    // Wait for the departure date input to be visible
    cy.get('.sc-eSePXt.iygwky').first().should('be.visible').then(() => {
      // Get the current date and calculate the date for tomorrow
      const todayDate = new Date();
      const tomorrowDate = new Date(todayDate);
      tomorrowDate.setDate(todayDate.getDate() + 1);
      // Verify that the selected date matches the expected date
      cy.get('.sc-eSePXt.iygwky').first().should('have.text', tomorrowDate.getDate() + " ");
    });
  });

  it("Make sure the return date is set to be today's date +2", () => {
    cy.get('.sc-eSePXt.iygwky').last().should('be.visible').then(() => {
      const todayDate = new Date();
      const afterTomorrow = new Date(todayDate);
      afterTomorrow.setDate(todayDate.getDate() + 2);
      cy.get('.sc-eSePXt.iygwky').last().should('have.text', afterTomorrow.getDate());
    });
  });

  it("Make sure that the flight class is set to be economy by default", () => {
    cy.get('[data-testid="Header__LanguageSwitch"]').click()
    cy.get('.sc-jWxkHr').should('be.visible').then(() => {
      cy.get('.sc-jWxkHr').should('have.text', 'Economy ');
    });
  });
});
