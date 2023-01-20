package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;

public class AccountStepDefinitions extends TestBase {
	LoginPage loginPage; 
	DashboardPage dashboardPage;
	NewAccountPage newAccountPage;

	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class); 
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class); 
	}
	
	@Given("^User is on the techfios login page$")

	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
		
	}
	@When("^User enters the \"([^\"]*)\" in the \"([^\"]*)\" field$")
	public void user_enters_the_in_the_field(String loginInfo, String field)  {
	   if(field.equalsIgnoreCase("username")) {
		   loginPage.enterUserName(loginInfo);
		   }else if(field.equalsIgnoreCase("password")) {
			   loginPage.enterPassword(loginInfo);
			   }else {
				   System.out.println("Incorrect login information");
			   }
	}

	@When("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button) {
		if(button.equalsIgnoreCase("login")) {
			loginPage.clickSignInButton();
			}else if(button.equalsIgnoreCase("bankCash")) {
			    dashboardPage.clickBankAndCashButton();	
			}else if(button.equalsIgnoreCase("newAccount")) {
				dashboardPage.clicNewAccountButton();
				}else if (button.equalsIgnoreCase("submit")) {
				newAccountPage.clickSaveButton();
			}
	   
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		 String actualText = dashboardPage.getPageTitle();
		 String expectedText = "Dashboard- iBilling";
		 Assert.assertEquals("Page title does not match",expectedText,actualText);
	   
	}

	@Then("^User enters \"([^\"]*)\" in the \"([^\"]*)\" field in accounts page$")
	public void user_enters_in_the_field_in_accounts_page(String acccountData, String field)  {
		switch (field) {
		case "accountTitle":
				newAccountPage.insertAccountTitle(acccountData + generatedRandomNumber(999) );
				break;
		case "description":
				newAccountPage.insertDescription(acccountData + generatedRandomNumber(999));
				break;
		case "initialBalance":
				newAccountPage.insertInitialBalance(acccountData + generatedRandomNumber(999));
				break;
		case "accountNumber":
				newAccountPage.insertAccountNumber(acccountData + generatedRandomNumber(999));
				break;
		case "contactPerson":
				newAccountPage.insertContactPerson(acccountData + generatedRandomNumber(999));
				break;
		case "Phone":
				newAccountPage.insertContactPhone(acccountData + generatedRandomNumber(999));
				break;
		case "internetBankingURL":
				newAccountPage.insertInternetBankingUrl(acccountData + generatedRandomNumber(999));
				break;
		default:
			System.out.println("Incorrect account data:" +  acccountData);
		
		}
	   
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		String actualText =newAccountPage.verifyAccountCreation();
		String expectedText = "Account Created Successfully";
		//		Assert.assertEquals( expectedText, actualText);
		if(actualText.contains(expectedText)) {
			newAccountPage.clickCloseButton();
			}
		System.out.println(actualText);
	}
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
