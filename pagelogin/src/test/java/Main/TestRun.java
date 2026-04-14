package Main;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(format = {"html:target/reports/folder/.html","json:target/cucumber.json"}, dryRun =false, tags= {"@first1"} , features={"classpath:Featurefile"})

public class TestRun {


	@BeforeClass
	public static void setup() throws Exception{
		setup.beforeClass();
	}
	
	//@AfterClass
    public static void tearDown(){
	setup.afterClass();
	
	}
}

