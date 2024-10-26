class InventoryPage {
  
    getItemInventory() {
        return cy.get('.inventory_item:nth-child(1) .inventory_item_name');
    }
    
    getDetailsName() {
        return cy.get('.inventory_details_name');
    }

    addToCart() {
      return cy.get('#add-to-cart');
    }

    shoppingCart() {
        return cy.get('.shopping_cart_container');
    }
    
    hamburgerButton() {
        return cy.get('#react-burger-menu-btn');
    }

    getSideMenu() {
        return cy.get('.bm-menu-wrap');
    }

    
}
export default new InventoryPage();