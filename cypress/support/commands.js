// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js


// This error (uncaught exceptions) was thrown by a cross origin page.
// If you wish to suppress this error you will have to use the cy.origin 
// command to handle the error prior to visiting the page.

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Timed out after waiting') ||
        err.message.includes('X') || 
        err.message.includes('Cannot read properties of null') || 
        err.message.includes('Cannot read properties of undefined') 
        ) {
        cy.log('we expected this error, so lets ignore it and and let the test continue')
        return false;
    }
});