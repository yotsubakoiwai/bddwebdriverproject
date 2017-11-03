$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Authentication",
  "description": "",
  "id": "authentication",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.before({
  "duration": 6573494340,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login",
  "description": "",
  "id": "authentication;successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the \"http://demowebshop.tricentis.com/tricentis\" web page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click \"Log in\" link from the breadcrumbs",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I fill in \"Email\" with \"jackie.custodio@planittesting.test\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I fill in \"Password\" with \"Tosca1234!\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the \"Log in\" button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see \"Welcome to the new Tricentis store!\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the \"Log out\" link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/tricentis",
      "offset": 13
    }
  ],
  "location": "Login.navigateToWebPage(String)"
});
formatter.result({
  "duration": 5000291470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 9
    }
  ],
  "location": "Login.clickLinkFromTheBreadcrumbs(String)"
});
formatter.result({
  "duration": 945810004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 11
    },
    {
      "val": "jackie.custodio@planittesting.test",
      "offset": 24
    }
  ],
  "location": "Login.fillInWith(String,String)"
});
formatter.result({
  "duration": 358472924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "Tosca1234!",
      "offset": 27
    }
  ],
  "location": "Login.fillInWith(String,String)"
});
formatter.result({
  "duration": 209179936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 16
    }
  ],
  "location": "Login.clickOnTheButton(String)"
});
formatter.result({
  "duration": 2759525295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to the new Tricentis store!",
      "offset": 14
    }
  ],
  "location": "Login.messageDisplayed(String)"
});
formatter.result({
  "duration": 160592753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 18
    }
  ],
  "location": "Login.linkDisplayed(String)"
});
formatter.result({
  "duration": 105911844,
  "status": "passed"
});
formatter.after({
  "duration": 2346350040,
  "status": "passed"
});
});