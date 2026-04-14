Feature: 0110_This_feature_file_covers_the_automation_of_widget

@first1
Scenario: 1 login page
Given user is on the webcast page
And user enters username
And user enters password
And user click on login button
Then verify user login
#And user enter event id
#And user click on search
#And user click on webcast
#Then verify user is on overview page
#Given User is on event page
#And user click on console builder
#And Verify user in on console builder page
#And user quit browser

@first2
Scenario: 2 Verify launch console
And user open webcast url pop up
And click on webcast audience url
Then verify user on registration page
And user enters all the information on registration page
And click on 'REGISTER' button
And verify user is on console page

@first002
Scenario: 002_Verify_Twitter_Widget_shows_Grey_Chrome
Given user is on the webcast page
#Then user clicks on create new icon
#And creates OD event type
#Then verify user on overview page
#And clicks on Console Builder tab
#And verify user is on console builder page
And user enters username
And user enters password
And user click on login button
Given User is on event page
And user click on console builder
And Verify user in on console builder page
And clicks on styling icon
And verify styling window opens
And clicks on Chrome Color dropdown
And Selects Grey Chrome from dropdown
And verify Twitter Widget shows Grey Chrome on console builder
And user open webcast url pop up
And click on webcast audience url
Then verify user on registration page
And user enters all the information on registration page
And click on 'REGISTER' button
And verify user is on console page
Then verify Twitter Widget shows Grey Chrome

@first003
Scenario: 003_Verify_Twitter_Widget_shows_Black_Chrome
Given user is on the webcast page
#Then user clicks on create new icon
#And creates OD event type
#Then verify user on overview page
#And clicks on Console Builder tab
#And verify user is on console builder page
And user enters username
And user enters password
And user click on login button
Given User is on event page
And user click on console builder
And Verify user in on console builder page
And clicks on styling icon
And verify styling window opens
And clicks on Chrome Color dropdown
And Selects Black Chrome from dropdown
And verify Twitter Widget shows Black Chrome on console builder
And user open webcast url pop up
And click on webcast audience url
Then verify user on registration page
And user enters all the information on registration page
And click on 'REGISTER' button
And verify user is on console page
Then verify Twitter Widget shows Black Chrome

@first004
Scenario: 005_Verify_Twitter_Widget_shows_Transparent_Chrome
Given user is on the webcast page
#Then user clicks on create new icon
#And creates OD event type
#Then verify user on overview page
#And clicks on Console Builder tab
#And verify user is on console builder page
And user enters username
And user enters password
And user click on login button
Given User is on event page
And user click on console builder
And Verify user in on console builder page
And clicks on styling icon
And verify styling window opens
And clicks on Chrome Color dropdown
And Selects Transparent chrome from dropdown
And verify Twitter Widget shows Transparent Chrome on console builder
And user open webcast url pop up
And click on webcast audience url
Then verify user on registration page
And user enters all the information on registration page
And click on 'REGISTER' button
And verify user is on console page
Then verify Twitter Widget shows Transparen Chrome

@first005
Scenario: 005_Verify_Twitter_Widget_shows_White_Chrome
Given user is on the webcast page
#Then user clicks on create new icon
#And creates OD event type
#Then verify user on overview page
#And clicks on Console Builder tab
#And verify user is on console builder page
And user enters username
And user enters password
And user click on login button
Given User is on event page
And user click on console builder
And Verify user in on console builder page
And clicks on styling icon
And verify styling window opens
And clicks on Chrome Color dropdown
And Selects White Chrome from dropdown
And verify Twitter Widget shows White Chrome on console builder
And user open webcast url pop up
And click on webcast audience url
Then verify user on registration page
And user enters all the information on registration page
And click on 'REGISTER' button
And verify user is on console page
Then verify Twitter Widget shows White Chrome

