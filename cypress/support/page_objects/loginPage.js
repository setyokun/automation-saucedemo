class LoginPage {
  
    visit() {
        cy.visit("https://www.saucedemo.com/");
    }
    
    inputUsername() {
        return cy.get('#user-name');
    }

    inputPassword() {
      return cy.get('#password');
    }

    loginButton() {
      return cy.get('#login-button');
    }
}

export default new LoginPage();