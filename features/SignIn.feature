Feature: User Registration

Scenario: Click on Sign in button and Register User
Given I'm on home page
When Click Signin on the landing page
Then Create Account by entering email address
Then Fill personal information
Then Fill address
Then Click Register
Then Validate correct name and surname is displayed on landing screen