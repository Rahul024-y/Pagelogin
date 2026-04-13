package Main.Steps;

import Main.setup;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import folder.locator;


public class login extends setup {

	@Given("^user is on the webcast page$")
	public void user_is_on_the_webcast_page() throws Throwable {
		driver.get(baseURL);
		
		System.out.println("Processing... Please wait");
		
	 Thread.sleep(30000);
		 System.out.println("Self healing process started");
		 
	}

	@Given("^user enters username$")
	public void user_enters_username() throws Throwable {
		driver.findElement(locator.loginname).clear();
	    driver.findElement(locator.loginname).sendKeys(userName);
	   
	    
	}

	@Given("^user enters password$")
	public void user_enters_password() throws Throwable {
		
		driver.findElement(locator.Passwordname).clear();
	    driver.findElement(locator.Passwordname).sendKeys(password);  
	   
	}

	@Given("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	
		driver.findElement(locator.submitbutton).click();
	}

	private int testid(String string) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Then("^verify user login$")
	public void verify_user_login() throws Throwable {
		driver.findElement((locator.loginverify)).isDisplayed();
	}
	
	

}