/// <references types="cypress"/>

it('google test', function() {
    cy.visit('https://google.com')
    cy.get(' .gLFyf').type('Automation Step by step{enter}')
    cy.wait(4000)
    cy.contains('Videos').click()
})

it.only('login test', function(){
    cy.visit('https://www.saucedemo.com/')
})