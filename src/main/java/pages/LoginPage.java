package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	WebDriver driver; 
	 public LoginPage(WebDriver driver) {
	  this.driver = driver;
	 }
	 // Element Library
	 @FindBy(how = How.XPATH, using = "//input[@id='username']")
	 WebElement userNameElement;
	 @FindBy(how = How.XPATH, using = "//input[@id='password']")
	 WebElement passwordElement;
	 @FindBy(how = How.XPATH, using = "//button[@name='login']")
	 WebElement signInButtonElement;

	 // Methods to interact with the elements
	 public void enterUserName(String user_name) {
	  userNameElement.sendKeys(user_name);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	 }
	 public void enterPassword(String user_password) {
	  passwordElement.sendKeys(user_password);
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	 }
	 public void clickSignInButton() {
	  signInButtonElement.click();
	  try {
		Thread.sleep(3000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	 }
	

}
