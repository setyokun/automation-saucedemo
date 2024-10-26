Feature: Add Item Flow 

  @addItem
  Scenario: Add 1 item to cart and verify that item is added to cart
    Given User login on the saucedemo site
    When User add 1 item to cart
    Then User should see the same item in the cart page
    And User should see the icon cart increase to 1