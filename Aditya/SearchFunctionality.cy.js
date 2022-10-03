describe('Search Functionality', () => {
    
    it('Verify the search field is visible or not', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').should('be.visible')
        
    });

    it('Verify the enter key is working or not inside the search box', () => {

        cy.visit('http://165.232.180.98/')
    
            cy.get('#woocommerce-product-search-field-0').type('nikon').type('{enter}')
        
    });

    it('Verify search field is generating the correct result for correct keywords', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Lowepro Pro Roller x300 AW').type('{enter}')
        cy.title().should('eq','Lowepro Pro Roller x300 AW – Qapitol QA')
    });


    it('Verify search that it generating the result for wrong keywords', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('i phone').type('{enter}')
        cy.get('.woocommerce-info').should('be.visible')
    });

    it('Verify the product count is present or not ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('nikon').type('{enter}')
        cy.get(':nth-child(2) > .woocommerce-result-count').should('be.visible')
        
    });

    it('Verify the error message for the wrong input', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Car').type('{enter}')

        cy.get('.woocommerce-info').should('be.visible')
        
    });

    it('Verify the error message for the wrong input', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Car').type('{enter}')
        cy.get('.woocommerce-info').should('have.text','No products were found matching your selection.')
        
    });

    it('Without enter anything inside the search box press enter', () => {
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('{enter}')
        cy.title().should('eq','Qapitol QA – WooCommerce')
    });

    it('Verify the search field accept any special char or not', () => {
        
        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('*%$').type('{enter}')
        

    });

    it('Verify the search field accept space at the beginning ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('   LoweproProTactic350 AW').type('{enter}')
        cy.title().should('eq','Lowepro ProTactic 350 AW – Qapitol QA')
        
    });

    it('Verify the search field accept space at the end ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('LoweproProTactic350 AW     ').type('{enter}')
        cy.title().should('eq','Lowepro ProTactic 350 AW – Qapitol QA')
        
    });
    it('Verify the search field accept space at the middle ', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('Lowepro     Pro    Tactic 350 AW').type('{enter}')
        cy.title().should('eq','Lowepro ProTactic 350 AW – Qapitol QA')

    });

    it('Search product with category', () => {

        cy.visit('http://165.232.180.98/')
        cy.get('#woocommerce-product-search-field-0').type('bag').type('{enter}')
        cy.get('.woocommerce-info')
        // Element should not be visible
        
    });

    it('Verify the mouse click is working or not inside the search field ', () => {

        cy.visit('http://165.232.180.98/')

        cy.get('#woocommerce-product-search-field-0').type('nikon')
        cy.get(':nth-child(1) > .site-search > .widget > .woocommerce-product-search').trigger('mousedown')
        cy.title().should('eq','Search Results for “nikon” – Qapitol QA')     
 
    });



    

    


});
