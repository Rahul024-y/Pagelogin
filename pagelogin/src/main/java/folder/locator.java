package folder;

import org.openqa.selenium.By;

public class locator {

	public static By ClickOnHtml5BuilderTab = By.xpath("//*[@id='subNavULWrapper']/ul/li[8]/div/a");
	public static By styleIconOnBuilderPage = By.xpath("//*[@class='header-controls']/i[@class='icon builder-icons-gear-setting styling-icon']");

	public static By topsubNavHtml5Builder = By.linkText("CONSOLE BUILDER");
	public static By frameSwitchOnBuilder = By.id("builder-iframe");
		public static By deleteIcon = By.cssSelector("div[class*='dropdown open'] ul li[class='delete']");
	public static By confirmDeletePopup = By.cssSelector(".modal-content .builder-modal-header");
	public static By deleteMessage = By.cssSelector(".modal-content-wrapper span");
	public static By yesButton = By
			.cssSelector(".builder-confirm-modal-footer button[class*='builder-button-primary']");
	public static By noButton = By
			.cssSelector(".builder-confirm-modal-footer button[class*='builder-button-secondary']");

	
	public static By loginname = By.id("username");
	public static By Passwordname = By.id("password");
	public static By submitbutton = By.xpath("//span[contains(text(),'Login')]");
	public static By loginverify = By.xpath("//span[@class='css-1ca9der ehw7d8w0']");
			
	public static By widgetFromMenuDoc(String widgetName) {
		return By.cssSelector("div[class*='widget-icons-sprite'] i[class*='"+widgetName+"']");
	}
	
	
}