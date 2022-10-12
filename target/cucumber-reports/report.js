$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ascension.feature");
formatter.feature({
  "name": "Ascension HomePage Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://healthcare.ascension.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate main menu items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user should see menu items display with their texts",
  "rows": [
    {
      "cells": [
        "SPECIALTY CARE",
        "FIND A LOCATION",
        "FIND A DOCTOR",
        "SCHEDULE AN APPOINTMENT"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AscensionSteps.user_should_see_menu_items_display_with_their_texts(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://healthcare.ascension.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specialty care",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on \"SPECIALTY CARE\"",
  "keyword": "When "
});
formatter.match({
  "location": "AscensionSteps.user_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate \"Specialty Care\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AscensionSteps.validate_is_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://healthcare.ascension.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate hero placeHolder menu items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "validate hero placeHolder menu items are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AscensionSteps.validateHeroPlaceHolderMenuItemsAreDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"FIND A DOCTOR\"",
  "keyword": "When "
});
formatter.match({
  "location": "AscensionSteps.user_clicks_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Find a Doctor\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AscensionSteps.userShouldSee(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});