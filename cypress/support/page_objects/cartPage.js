class CartPage {

    getInventoryName() {
        return cy.get('.inventory_item_name');
    }
     
    getPrice() {
        return cy.get('.inventory_item_price');
    }
    
    getShoppingCartBadge() {
        return cy.get('.shopping_cart_badge');
    }

}
export default new CartPage();