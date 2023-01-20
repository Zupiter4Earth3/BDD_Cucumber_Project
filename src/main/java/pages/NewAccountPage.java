package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage {
	WebDriver driver; 
	 public NewAccountPage(WebDriver driver) {
	  this.driver = driver;
	 }
//	 Element list:
	 @FindBy(how = How.XPATH, using = "//h5[contains(text(),'Add New Account')]")
	 WebElement addNewAccountHeaderElement;
	 @FindBy(how = How.XPATH, using = "//input[@id='account']")
	 WebElement accountTitleElement;
	 @FindBy(how = How.XPATH, using = "//input[@id='description']")
	 WebElement descriptionElement;
	 @FindBy(how = How.XPATH, using = "//input[@id='balance']")
	 WebElement initialBalanceElement;
	 @FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	 WebElement accountNumberElement;
	 @FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	 WebElement contactPersonElement;
	 @FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	 WebElement contactPhonelement;
	 @FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	 WebElement internetBankingUrlElement;
	 @FindBy(how = How.XPATH, using = "//button[contains(text(),' Submit')]")
	 WebElement saveButtonElement;
	 @FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]")
	 WebElement accountCreatedSuccessfullyElement;
	 @FindBy(how = How.XPATH, using = "//div/div[1]/div[3]/div[1]/button")
	 WebElement closeButtonElement;
	 // Methods to interact with the elements
	 
//	 public void verifyAddNewAccountHeaderText() {
//		 addNewAccountHeaderElement.getText();
//	 }
	 public void insertAccountTitle(String account_title) {
		 accountTitleElement.sendKeys(account_title);
		 try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	 }
	 public void insertDescription(String description) {
		 descriptionElement.sendKeys(description);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	 }
	 public void insertInitialBalance(String balacne) {
		 initialBalanceElement.sendKeys(balacne);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	 }
	 public void insertAccountNumber(String account_number) {
		 accountNumberElement.sendKeys(account_number);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	 }
	 public void insertContactPerson(String contact_person) {
		 contactPersonElement.sendKeys(contact_person);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	 }
	 
	 public void insertContactPhone(String contact_phone) {
		 contactPhonelement.sendKeys(contact_phone);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	 }
	 public void insertInternetBankingUrl(String banking_url) {
		internetBankingUrlElement.sendKeys(banking_url);
		 try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
	 }
	 public void clickSaveButton() {
			saveButtonElement.click();
			 try {
					Thread.sleep(3000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
		 }
	 public String verifyAccountCreation() {
		 return accountCreatedSuccessfullyElement.getText();
	 }
	 public void clickCloseButton() {
		 closeButtonElement.click();
	 }
	 
	 
	 
	 

}
