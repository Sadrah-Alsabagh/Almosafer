/// <reference types="cypress" />

describe("Almosafer Tests", () => {
  it("Test almosafer website", () => {
    cy.visit("https://www.almosafer.com/en");
    cy.get('.cta__button.cta__saudi.btn').click();

    //1. Click on the 'Hotels Tab'
    cy.get('#uncontrolled-tab-example-tab-hotels').click();

    //2. Randomly type any option of the following ("dubai","jeddah","amman")
    let hotel_search_bar = cy.get('[data-testid="AutoCompleteInput"]');
    const englishSearch = ["dubai", "jeddah", "amman"];
    const random_english_search = englishSearch[Math.floor(Math.random() * englishSearch.length)];
    hotel_search_bar.type(random_english_search)

    //3. Click on first result from autocomplete list.
    cy.get('[data-testid="AutoCompleteResultItem0"]').click();

    //4. Click on fsearch hotel button.
    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();

    // Wait the website until finish loas all data
    cy.wait(20000);

    //5. Filter the result based on the price "lowest-to high."
    cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click();

    // 6. Assert that the first result is lower than the last result. 
    cy.get(".Price__Value")
      .first()
      .invoke('text')
      .then((lowestValueText) => {
        cy.get(".Price__Value")
          .last()
          .invoke('text')
          .then((highestValueText) => {
            const lowestValue = parseFloat(lowestValueText);
            const highestValue = parseFloat(highestValueText);

            //compare the values
            // expect(lowestValue).to.be.lessThan(highestValue);
            cy.wrap(lowestValue).should('be.lessThan', highestValue);

          });
      });

  });

});
