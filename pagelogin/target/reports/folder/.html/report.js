$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "0110_This_feature_file_covers_the_automation_of_widget",
  "description": "",
  "id": "0110-this-feature-file-covers-the-automation-of-widget",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "1 login page",
  "description": "",
  "id": "0110-this-feature-file-covers-the-automation-of-widget;1-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@first1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the webcast page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "verify user login",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_the_webcast_page()"
});
formatter.result({
  "duration": 38305536700,
  "status": "passed"
});
formatter.match({
  "location": "login.user_enters_username()"
});
formatter.result({
  "duration": 181838600,
  "status": "passed"
});
formatter.match({
  "location": "login.user_enters_password()"
});
formatter.result({
  "duration": 98464200,
  "status": "passed"
});
formatter.match({
  "location": "login.user_click_on_login_button()"
});
formatter.result({
  "duration": 97773600,
  "status": "passed"
});
formatter.match({
  "location": "login.verify_user_login()"
});
formatter.result({
  "duration": 30477328700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027css-1ca9der ehw7d8w0\u0027]\"}\n  (Session info: chrome\u003d147.0.7727.56)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.28\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d9d61510a4d8ebe67c1077b86eeef386, findElement {using\u003dxpath, value\u003d//span[@class\u003d\u0027css-1ca9der ehw7d8w0\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 147.0.7727.56, chrome: {chromedriverVersion: 147.0.7727.56 (b28eac7a1a97..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:59804}, goog:processID: 14524, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:59804/devtoo..., se:cdpVersion: 147.0.7727.56, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d9d61510a4d8ebe67c1077b86eeef386\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat Main.Steps.login.verify_user_login(login.java:51)\r\n\tat ✽.Then verify user login(Featurefile/login.feature:9)\r\n",
  "status": "failed"
});
});