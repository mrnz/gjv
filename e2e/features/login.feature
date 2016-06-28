Feature: Login
	Login test

	Scenario: Log in to app
		Given Wait for app instalation
		Then Go to login screen
		Then Click button with id "login-button"
		Then Put "mrnz@wp.pl" to inptu with id "sign-in-email"
		And Put "kalikali" to inptu with id "sign-in-password"
		Then Click button with id "submit"
	
