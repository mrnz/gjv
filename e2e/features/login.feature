Feature: Login
	Login test

	Scenario: Open and close sign-in modal
		Given I wait for app to be ready
		Then I check If I am on login screen
		Then Click button with id "open-signin-modal"
		Then I should see element with ID "signin-modal"
		Then Click button with id "close-signin-modal"

# 	Scenario: Open and close sign-up modal
# 		Given I wait for app to be ready
# 		Then I check If I am on login screen
# 		Then Click button with id "open-signup-modal"
# 		Then I should see element with ID "signup-modal"
# 		Then Click button with id "close-signup-modal"

# 	Scenario: Switch sign-in and sign-up modals
# 		Given I wait for app to be ready
# 		Then I check If I am on login screen
# 		Then Click button with id "open-signin-modal"
# 		Then I should see element with ID "signin-modal"
# 		Then Click button with id "switch-modal-to-signup"
# 		Then I should see element with ID "signup-modal"
# 		Then Click button with id "switch-modal-to-signin"
# 		Then I should see element with ID "signin-modal"
# 		Then Click button with id "close-signin-modal"

# 	Scenario: Sign-in validation test
# 		Given I wait for app to be ready
# 		Then I check If I am on login screen
# 		Then Click button with id "open-signin-modal"
# 		And Button with id "submit" should be "disabled"
# 		Then Put "something" to inptu with id "sign-in-email"
# 		And Put "something" to inptu with id "sign-in-password"
# 		And Button with id "submit" should be "enabled"
# 		Then Click button with id "close-signin-modal"

# 	Scenario: Sign-up validation test
# 		Given I wait for app to be ready
# 		Then I check If I am on login screen
# 		Then Click button with id "open-signup-modal"
# 		And Button with id "sign-up-submit" should be "disabled"
# 		Then Put "something" to inptu with id "sign-up-username"
# 		And Button with id "sign-up-submit" should be "disabled"
# 		And Put "something@some.so" to inptu with id "sign-up-email"
# 		And Button with id "sign-up-submit" should be "disabled"
# 		And Put "something" to inptu with id "sign-up-password"
# 		And Button with id "sign-up-submit" should be "enabled"
# 		Then Click button with id "close-signup-modal"


# 	Scenario: Log with email to Application and then log out
# 		Given I wait for app to be ready
# 		Then I check If I am on login screen
# 		Then Click button with id "open-signin-modal"
# 		And Wait for element with id "sign-in-email"
# 		Then Put "mrnz@wp.pl" to inptu with id "sign-in-email"
# 		And Put "kalikali" to inptu with id "sign-in-password"
# 		Then Click button with id "submit"
# 		# And I should see "brands" list
# 		Then I click first element on the list
# 		# And I should see "models" list
# 		Then I click first element on the list
# 		# And I should see "volumes" list	
# 		Then I click first element on the list	
# 		Then Open side menu
# 		And Click button with id "logout-button-side-menu"
# 		Then I check If I am on login screen
