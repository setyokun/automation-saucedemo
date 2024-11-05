class CheckoutPage {

    inputFirstname() {
        return cy.get('#first-name');
    }

    inputLastname() {
        return cy.get('#last-name');
    }

    inputPostalCode() {
        return cy.get('#postal-code');
    }
     
    continueButton() {
        return cy.get('#continue');
    }

    finishButton() {
        return cy.get('#finish');
    }

}
export default new CheckoutPage();