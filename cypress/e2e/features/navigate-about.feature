Feature: Navigate Item

  @navigateAbout
  Scenario: Navigate to About and verify if it successfully navigated or not
    Given User login on the saucedemo site
    When User click on hamburger button
    And User navigate to 'About'
    Then User should see about the 'saucelabs'