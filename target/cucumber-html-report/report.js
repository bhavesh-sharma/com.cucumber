$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/MyApplication.feature");
formatter.feature({
  "name": "Test facebook smoke scenatios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open Safari and start application",
  "keyword": "Given "
});
formatter.step({
  "name": "I entered valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "bhavesh1.gmail.com",
        "password1"
      ]
    },
    {
      "cells": [
        "bhavesh2.gmail.com",
        "password2"
      ]
    },
    {
      "cells": [
        "bhavesh3.gmail.com",
        "password3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open Safari and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.open_Safari_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I entered valid \"bhavesh1.gmail.com\" and \"password1\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.i_entered_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open Safari and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.open_Safari_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I entered valid \"bhavesh2.gmail.com\" and \"password2\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.i_entered_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open Safari and start application",
  "keyword": "Given "
});
formatter.match({
  "location": "SmokeTest.open_Safari_and_start_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I entered valid \"bhavesh3.gmail.com\" and \"password3\"",
  "keyword": "When "
});
formatter.match({
  "location": "SmokeTest.i_entered_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});