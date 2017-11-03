@test
Feature: Authentication

  Scenario: Successful Login
    Given I am on the "http://demowebshop.tricentis.com/tricentis" web page
    When I click "Log in" link from the breadcrumbs
    And I fill in "Email" with "jackie.custodio@planittesting.test"
    And I fill in "Password" with "Tosca1234!"
    And I click on the "Log in" button
    Then I should see "Welcome to the new Tricentis store!" message
    And I should see the "Log out" link
