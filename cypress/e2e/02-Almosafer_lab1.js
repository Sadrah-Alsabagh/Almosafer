/// <reference types="cypress" />

describe("Almosafer Tests", () => {
    it("Test almosafer website", () => {

        // 1. Visit one of the websites randomly
        const websites = ["https://www.almosafer.com/ar", "https://www.almosafer.com/en"];
        const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
        cy.visit(randomWebsite);
        cy.get('.cta__button.cta__saudi.btn').click();

        //2. Click on the 'Hotels Tab'
        cy.get('#uncontrolled-tab-example-tab-hotels').click();

        //3. If current-lang is EN, then randomly type any option of the following (Dubai, Jeddah, Riyadh) If current-lang is AR, then randomly type any option of the following ( دبي, جدة)
        let hotel_search_bar = cy.get('[data-testid="AutoCompleteInput"]');
        if (randomWebsite === websites[0]) {
            const arabicSearch = ["جدة", "دبي"];
            const random_arabic_search = arabicSearch[Math.floor(Math.random() * arabicSearch.length)];
            hotel_search_bar.type(random_arabic_search)

        } else {
            const englishSearch = ["Dubai", "Jeddah", "Riyadh"];
            const random_english_search = englishSearch[Math.floor(Math.random() * englishSearch.length)];
            hotel_search_bar.type(random_english_search)
        }

        // 4. Click on first result from autocomplete list.
        cy.get('[data-testid="AutoCompleteResultItem0"]').click();

        // 5. Randomly select "1 room, 2 adults, 0 children" or "1 room, 1 adult, 0 children" option.
        const random_reservation_select = Math.floor(Math.random() * 2);
        cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(random_reservation_select);

         // 6. press on search hotel. 
    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
    });

});
