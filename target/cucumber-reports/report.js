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
  "name": "Validate Ascension Logo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user should see \"ascension\" in the url",
  "keyword": "Then "
});
formatter.match({
  "location": "AscensionSteps.user_should_see_in_the_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see \"Ascension\" in the title",
  "keyword": "And "
});
formatter.match({
  "location": "AscensionSteps.user_should_see_in_the_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate  Ascension Logo displays",
  "keyword": "Then "
});
formatter.match({
  "location": "AscensionSteps.validate_Ascension_Logo_displays()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});