#Feature: Test facebook smoke scenatios
#
#	Scenario: Test login with valid credentials
#Given Open Safari and start application
#When I entered valid username and password
#Then User should be able to login successfully
Feature: Test facebook smoke scenatios

  Scenario Outline: Test login with valid credentials
    Given Open Safari and start application
    When I entered valid "<username>" and "<password>"
    Then User should be able to login successfully

    Examples: 
      | username           | password  |
      | bhavesh1.gmail.com | password1 |
      | bhavesh2.gmail.com | password2 |
      | bhavesh3.gmail.com | password3 |
