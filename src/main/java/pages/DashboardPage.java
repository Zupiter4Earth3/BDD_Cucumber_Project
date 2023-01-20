package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {
	
	WebDriver driver; 
	 public DashboardPage(WebDriver driver) {
	  this.driver = driver;
	 }
	 
//	 Element Library:
	 @FindBy(how = How.XPATH, using = "//span[text()='Bank & Cash']")
	 WebElement bankAndCashButtonElement;
	 @FindBy(how = How.XPATH, using = "//a[text()='New Account']")
	 WebElement newAccountButtonElement;
	 
	// Methods to interact with the elements
	 
	 public String getPageTitle() {
		  return driver.getTitle();
		  
		 }
	 public void clickBankAndCashButton() {
		 bankAndCashButtonElement.click();
		 try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	 }
	 public void clicNewAccountButton() {
		 newAccountButtonElement.click();
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		 
	 }
	 

}
