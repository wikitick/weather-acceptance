const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
    
    Given(/^I open the Weather forecast app$/, () => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .navigate()
            .waitForElementVisible('@body', 1000)
    });

    Given(/^the following (.*?) for the three hour periods is forecast for (.*?)$/, (weather, city, table) => {

        const list_array = table["rawTable"];

        console.log(weather + " forecast for " + city + " is " + list_array);

    });


    When(/^I enter (.*?) in the city name$/, (city) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .clearValue('@city')
            .setValue('@city', [city, client.Keys.ENTER]);

    });

    When(/^I select (.*?) (?:to display the three hour breakdown|again)?$/, (day) => {

        const weather_forecast_page = client.page.weather_forecast();

        switch (day) {
            case 'Tuesday':
                weather_forecast_page
                    .click('@day1');
                break;
            case 'Wednesday':
                weather_forecast_page
                    .click('@day2');
                break;

        }

    });
    

    Then(/^I expect a (.*?) icon to be displayed for today$/, (weather) => {

        const weather_forecast_page = client.page.weather_forecast();
        
        return weather_forecast_page.assert.attributeEquals('@desc1', 'aria-label', weather);
        
    });

    Then(/^I expect a (.*?) icon to be displayed for Friday$/, (weather) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page.assert.attributeEquals('@desc4', 'aria-label', weather);

    });

    Then(/^I expect a wind speed of (.*?) to be displayed for today$/, (speed) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page.assert.containsText('@wind_speed1', speed);

    });

    Then(/^I expect a high of (.*?) to be displayed for Friday$/, (pressure) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page.assert.containsText('@pressure4', pressure);

    });

    Then(/^I expect the rainfall total of (.*?) to be displayed for Saturday$/, (rainfall) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page.assert.containsText('@rainfall5', rainfall);

    });

    Then(/^I expect a Maximum temperature of (.*?) degrees for Tuesday$/, (max) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page.assert.containsText('@temp_max1', max);

    });

    Then(/^I expect a Minimum temperature of (.*?) degrees for Tuesday$/, (min) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page.assert.containsText('@temp_min1', min);

    });
    

    Then(/^I expect a new forecast for (.*?) to be displayed$/, (cityname) => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .verify.valueContains('@city', cityname)
            .verify.elementPresent('@summary');

    });

    Then(/^I expect five days to be displayed prefixed by the day of the week$/, table => {
        
        const list = table["rawTable"];

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .verify.containsText('@day1', list[0])
            .verify.containsText('@day2', list[1])
            .verify.containsText('@day3', list[2])
            .verify.containsText('@day4', list[3])
            .verify.containsText('@day5', list[4]);

    });

    Then(/^I expect five days to be displayed prefixed with the day of the month$/, table => {

        const list = table["rawTable"];

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .verify.containsText('@date1', list[0])
            .verify.containsText('@date2', list[1])
            .verify.containsText('@date3', list[2])
            .verify.containsText('@date4', list[3])
            .verify.containsText('@date5', list[4]);

    });

    Then(/^I expect an error message to be displayed with no weather forecast summary present$/, table => {

        const error_text = table["rawTable"];
        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .verify.containsText('@error_message', error_text)
            .verify.elementNotPresent('@summary');
    });


    Then(/^I expect the available three hour periods will be displayed$/, (table) => {

        const list_array = table["rawTable"];
        const list_string = list_array.toString();
        
        const weather_forecast_page = client.page.weather_forecast();
        
        return weather_forecast_page
            .verify.containsText('@hour1', list_string.slice(0,4))
            .verify.containsText('@hour2', list_string.slice(5,9))
            .verify.containsText('@hour3', list_string.slice(10,14))
            .verify.containsText('@hour4', list_string.slice(15,19))

            .verify.elementNotPresent('@hour5');

    });

    Then(/^I expect eight x three hour periods will be displayed$/, (table) => {

        const list_array = table["rawTable"];
        const list_string = list_array.toString();

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .verify.containsText('@wed_period1', list_string.slice(0,4))
            .verify.containsText('@wed_period2', list_string.slice(5,9))
            .verify.containsText('@wed_period3', list_string.slice(10,14))
            .verify.containsText('@wed_period4', list_string.slice(15,19))
            .verify.containsText('@wed_period5', list_string.slice(20,24))
            .verify.containsText('@wed_period6', list_string.slice(25,29))
            .verify.containsText('@wed_period7', list_string.slice(30,34))
            .verify.containsText('@wed_period8', list_string.slice(35,39))

            .verify.elementNotPresent('@wed_period9');
        
    });

    Then(/^I expect a three hour breakdown forecast will not be visible$/, () => {

        const weather_forecast_page = client.page.weather_forecast();

        return weather_forecast_page
            .waitForElementNotVisible('@hour1', 10000)
            .waitForElementNotVisible('@hour2', 10000)
            .waitForElementNotVisible('@hour3', 10000)
            .waitForElementNotVisible('@hour4', 10000);

    });
    

});
