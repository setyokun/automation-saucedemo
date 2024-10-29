import {  Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../page_objects/loginPage";
import InventoryPage from "../page_objects/inventoryPage";
import CartPage from "../page_objects/cartPage";
let storedText = '';

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
    storedText = text;      
    cy.log(storedText);
  });
  InventoryPage.addToCart().click();
  cy.contains('Remove').should('be.visible'); 
  InventoryPage.shoppingCart().click();
})

Then('User should see the same item in the cart page', () => {    
  cy.url().should('include', 'cart'); 
  CartPage.getInventoryName().should('have.text', storedText);
})

And('User should see the icon cart increase to {int}', (number) => {    
  CartPage.getShoppingCartBadge()   
  .invoke('text')           
  .then((text) => {
    storedText = parseInt(text);       
    expect(storedText).to.equal(number);
  });
})

