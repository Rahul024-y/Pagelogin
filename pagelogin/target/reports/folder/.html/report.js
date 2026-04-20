$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "0110_This_feature_file_covers_the_automation_of_widget",
  "description": "",
  "id": "0110-this-feature-file-covers-the-automation-of-widget",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "1 login page",
  "description": "",
  "id": "0110-this-feature-file-covers-the-automation-of-widget;1-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@first1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the webcast page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_is_on_the_webcast_page()"
});
formatter.result({
  "duration": 25937737200,
  "status": "passed"
});
formatter.match({
  "location": "login.user_enters_username()"
});
formatter.result({
  "duration": 1201932300,
  "status": "passed"
});
formatter.match({
  "location": "login.user_enters_password()"
});
formatter.result({
  "duration": 227885900,
  "status": "passed"
});
formatter.match({
  "location": "login.user_click_on_login_button()"
});
formatter.result({
  "duration": 164118500,
  "status": "passed"
});
});