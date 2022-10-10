Feature: Ascension HomePage Functionality

  Background:
    Given user navigates to "https://healthcare.ascension.org/"

  @Smoke
  Scenario: Validate Ascension Logo

    Then  user should see "ascension" in the url
    And   user should see "Ascension" in the title
    Then   validate  Ascension Logo displays

  @Regression
  Scenario: Validate main menu items
    Then user should see menu items display with their texts
      | SPECIALTY CARE | FIND A LOCATION | FIND A DOCTOR | SCHEDULE AN APPOINTMENT |

  @Regression
  Scenario: Validate specialty care
    When user clicks on "SPECIALTY CARE"
    Then validate "Specialty Care" is displayed
