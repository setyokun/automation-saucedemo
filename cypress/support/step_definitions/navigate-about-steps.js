import { When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../page_objects/inventoryPage";

When('User click on hamburger button', () => { 
  InventoryPage.hamburgerButton().click();
})

And('User navigate to {string}', (text) => {   
  InventoryPage.getSideMenu().contains(text).click();
})

Then('User should see about the {string}', (siteName) => {  
  cy.url().should('include', siteName); 
})

