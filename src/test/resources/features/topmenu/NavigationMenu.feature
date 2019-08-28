@navigation
Feature: Navigation menu options

  As user i want to use top menu for navigation

  Background:
   # Given user is on the landing page
    Given user logs in as a "driver"



  Scenario: Login as a driver and navigate to the Vehicles
    Then user navigates to "Fleet" and "Vehicles"
    And user verifies that "Cars" page name is displayed

  Scenario: Login as driver and navigate to the Vehicle Odometer
    Then user navigates to "Fleet" and "Vehicle Odometer"
    And user verifies that "Vehicles Odometers" page name is displayed

  Scenario: Login as driver and navigate to the Vehicle Costs
    Then user navigates to "Fleet" and "Vehicle Costs"
    And user verifies that "Vehicle Costs" page name is displayed