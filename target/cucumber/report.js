$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cusername\u003e\" in the \"username\" field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"\u003cpassword\u003e\" in the \"password\" field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"\u003caccountTitle\u003e\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"\u003cdescription\u003e\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cinitialBalance\u003e\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003caccountNumber\u003e\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003ccontactPerson\u003e\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cPhone\u003e\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Favorite",
        "Checking",
        "500",
        "123456",
        "Pigeon",
        "9876543",
        "https://www.pnc.com/en/personal-banking.html"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2170060400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\" in the \"username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the \"abc123\" in the \"password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters \"Favorite\" in the \"accountTitle\" field in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters \"Checking\" in the \"description\" field in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"500\" in the \"initialBalance\" field in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"123456\" in the \"accountNumber\" field in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"Pigeon\" in the \"contactPerson\" field in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"9876543\" in the \"Phone\" field in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"https://www.pnc.com/en/personal-banking.html\" in the \"internetBankingURL\" field in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountStepDefinitions.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 1100833800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "username",
      "offset": 44
    }
  ],
  "location": "AccountStepDefinitions.user_enters_the_in_the_field(String,String)"
});
formatter.result({
  "duration": 3098543900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    },
    {
      "val": "password",
      "offset": 33
    }
  ],
  "location": "AccountStepDefinitions.user_enters_the_in_the_field(String,String)"
});
formatter.result({
  "duration": 3075443600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 16
    }
  ],
  "location": "AccountStepDefinitions.user_clicks_on(String)"
});
formatter.result({
  "duration": 4067699000,
  "status": "passed"
});
formatter.match({
  "location": "AccountStepDefinitions.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 8541400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "AccountStepDefinitions.user_clicks_on(String)"
});
formatter.result({
  "duration": 3068270900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "AccountStepDefinitions.user_clicks_on(String)"
});
formatter.result({
  "duration": 3812937100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Favorite",
      "offset": 13
    },
    {
      "val": "accountTitle",
      "offset": 31
    }
  ],
  "location": "AccountStepDefinitions.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3092539000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 13
    },
    {
      "val": "description",
      "offset": 31
    }
  ],
  "location": "AccountStepDefinitions.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3081894500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 13
    },
    {
      "val": "initialBalance",
      "offset": 26
    }
  ],
  "location": "AccountStepDefinitions.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3104525600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 13
    },
    {
      "val": "accountNumber",
      "offset": 29
    }
  ],
  "location": "AccountStepDefinitions.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3106453600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pigeon",
      "offset": 13
    },
    {
      "val": "contactPerson",
      "offset": 29
    }
  ],
  "location": "AccountStepDefinitions.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3089034300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543",
      "offset": 13
    },
    {
      "val": "Phone",
      "offset": 30
    }
  ],
  "location": "AccountStepDefinitions.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3090147800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.pnc.com/en/personal-banking.html",
      "offset": 13
    },
    {
      "val": "internetBankingURL",
      "offset": 67
    }
  ],
  "location": "AccountStepDefinitions.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3097538300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "AccountStepDefinitions.user_clicks_on(String)"
});
formatter.result({
  "duration": 4079843000,
  "status": "passed"
});
formatter.match({
  "location": "AccountStepDefinitions.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 103024300,
  "status": "passed"
});
formatter.after({
  "duration": 16768139800,
  "status": "passed"
});
});