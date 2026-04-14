package Main;

 
import java.io.FileReader;
import java.util.Properties;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;



public class setup {

	 Random number = new Random();
   protected int value = number.nextInt(50);
	public static Properties prop;
	public static String browserName;
	public static String baseURL;
	public static String userName;
	public static String password;
	public static String searchpageurl;
	public static String platform;
	public static String Eventname;
	public static String consolebuilder;
	//public static WebDriver driver;
	public static WebDriver driver;
	public static String Event;
	@BeforeClass
	
	public static void beforeClass() throws Exception {
		
		prop = new Properties();
		FileReader file = new FileReader("src/test/resources/properties/configuration.property");
		prop.load(file);
		prop.getProperty("browser");
		baseURL=prop.getProperty("appURL");
		browserName = prop.getProperty("browser");
		userName=prop.getProperty("userName");		
		password=prop.getProperty("password");
		searchpageurl=prop.getProperty("searchpage");
		Event=prop.getProperty("Eventid");
		Eventname=prop.getProperty("Eventtittle");
		consolebuilder=prop.getProperty("builder_url");
					
		System.out.println("browser value = "+browserName);
		System.setProperty("webdriver.chrome.verboseLogging", "true");
		System.setProperty("wdm.log.level", "DEBUG");
			if(browserName.equals("chrome")){
				//String driverPath = System.getProperty("user.dir") + "\\chromedriver-win64\\chromedriver.exe";
				//System.setProperty("webdriver.chrome.driver", driverPath);ChromeOptions options = new ChromeOptions();
				ChromeOptions options = new ChromeOptions();
			  //  options.addArguments("--headless=new");
			    options.addArguments("--disable-gpu");
			    options.addArguments("--remote-allow-origins=*");

			    driver = new ChromeDriver(options);

			    Thread.sleep(5000);
				
				//driver = new ChromeDriver();	
				
				//driver = new ChromeDriver();
			    //  driver = SelfHealingDriver.create(bdriver);
			    //  System.setProperty("webdriver.chrome.verboseLogging", "true");
					System.setProperty("wdm.log.level", "DEBUG");
					System.setProperty("logging.level.com.epam.healenium", "DEBUG");
					System.out.println("Initiated instance");
					  
		                
			}/*else if(browserName.equals("firefox")){
				System.out.println("Firefox block");
				driver = new FirefoxDriver();
			}else if(browserName.equals("ie")){
				System.setProperty("webdriver.ie.driver", "C:\\Drivers\\ie\\IEDriverServer.exe");
				driver = new InternetExplorerDriver();			
			}*/
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
			driver.manage().window().maximize();
	}
	
	@AfterClass
	public static void afterClass(){
		driver.quit();
	}
}
	
