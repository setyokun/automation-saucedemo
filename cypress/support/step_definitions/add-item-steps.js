import {  Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../page_objects/loginPage";
import InventoryPage from "../page_objects/inventoryPage";
import CartPage from "../page_objects/cartPage";
import CheckoutPage from "../page_objects/checkoutPage";
let detailName = '';
let price = '';
let cart = '';

Given('User login on the saucedemo site', () => {
  LoginPage.visit();
  LoginPage.inputUsername().type(Cypress.env('username'));
  LoginPage.inputPassword().type(Cypress.env('password'));
  LoginPage.loginButton().click();
  cy.url().should('include', 'inventory'); 
})

When('User add 1 item to cart', () => { 
  InventoryPage.getItemInventory().click();
  InventoryPage.getDetailsName()
  .invoke('text')         
  .then((text) => {
    detailName = text;      
    cy.log(detailName);
  });
  InventoryPage.getPrice()
  .invoke('text')         
  .then((text) => {
    price = text;      
    cy.log(price);
  });
  InventoryPage.addToCart().click();
  cy.contains('Remove').should('be.visible'); 
  InventoryPage.shoppingCart().click();
})

Then('User should see the same item in the cart page', () => {    
  cy.url().should('include', 'cart'); 
  CartPage.getInventoryName().should('have.text', detailName);
  CartPage.getPrice().should('have.text', price);
})

And('User should see the icon cart increase to {int}', (number) => {    
  CartPage.getShoppingCartBadge()   
  .invoke('text')           
  .then((text) => {
    cart = parseInt(text);       
    expect(cart).to.equal(number);
  });
})

When('User checkout the item selected', () => {    
  CartPage.checkoutButton().click();
  cy.fixture('userData').then((data) => {
    CheckoutPage.inputFirstname().type(data.firstname);
    CheckoutPage.inputLastname().type(data.lastname);
    CheckoutPage.inputPostalCode().type(data.postalCode);
  })
  CheckoutPage.continueButton().click();
  CartPage.getInventoryName().should('have.text', detailName);
  CartPage.getPrice().should('have.text', price);
  CheckoutPage.finishButton().click();
})

Then('User should see the successfully checkout message', () => {    
  cy.contains('Checkout: Complete!').should('be.visible'); 
  cy.contains('Thank you for your order!').should('be.visible'); 
})

