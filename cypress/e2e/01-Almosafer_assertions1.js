///reference types ="cypress"/>

beforeEach(() => {
    cy.visit('https://www.almosafer.com/ar');
    cy.get('.cta__button.cta__saudi.btn').click();

  });
  
  describe("Test almosafer website", () => {
    it("Make sure that the default currency is SAR", () => {
      cy.get('[data-testid="Header__CurrencySelector"]').invoke("text").should("include","SAR");

    });
    it("Make sure that the default langauge is Arabic", () => {
      cy.get('[data-testid="Header__LanguageSwitch"]').should("contain","English");

    });

    it("Make sure that the flight tab is clicked by default ", () => {
      cy.get('#uncontrolled-tab-example-tab-flights').should('have.class', 'active');

    });
  });
  


