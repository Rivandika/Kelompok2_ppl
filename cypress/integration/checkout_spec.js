context('Cypress Sort', () => {
    it('Login Skenario', () => {
        cy.visit('https://www.saucedemo.com') 
        cy.get('#user-name').type('standard_user') 
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click() 
    })
    it('Sort', ()=>{
        // test case add to cart
        // cy.get('[data-test=product_sort_container]').select('za') // klik sort
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_badge')
        cy.get('.shopping_cart_link').click()
        
    })
    it('Checkout', () => {
         
        cy.get('#user-name').type('standard_user') 
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click() 
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('.shopping_cart_badge')
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test=checkout]').click()
        cy.get('[data-test=firstName]').type('Rivandika')
        cy.get('[data-test=lastName]').type('Daffa')
        cy.get('[data-test=postalCode]').type('123')
        cy.get('[data-test=continue]').click()
        cy.get('[data-test=finish]').click()
    })
})