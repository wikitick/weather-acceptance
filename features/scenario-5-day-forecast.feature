@5Day
Feature:
  As a Tourist on holiday
  I want to see 5 days weather conditions 5for my location
  So I can plan my daily trips

  The Weather Forecast will be displayed for the selected location.
  Five days of weather will be shown with each row of weather data prefixed by day and day of month.
  If no data is held for the city entered, no weather data should be shown and an error message displayed.

@first
  Scenario Outline: Generating a new forecast for a city.

    Given I open the Weather forecast app
    When I enter <city> in the city name
    Then I expect a new forecast for <city> to be displayed

    Examples:
      | city       |
      | Dundee     |
      | Aberdeen   |

  Scenario: The forecast will show 5 days prefixed by day.

    Given I open the Weather forecast app
    When I enter Glasgow in the city name
    Then I expect five days to be displayed prefixed by the day of the week
      | Tue   |
      | Wed   |
      | Thu   |
      | Fri   |
      | Sat   |

  Scenario: The forecast will show 5 days prefixed with the day of the month.

    Given I open the Weather forecast app
    When I enter Edinburgh in the city name
    Then I expect five days to be displayed prefixed with the day of the month
      | 20   |
      | 21   |
      | 22   |
      | 23   |
      | 24   |

  Scenario: Where no data is held for the city entered no weather data should be shown.

    Given I open the Weather forecast app
    When I enter Kinross in the city name
    Then I expect an error message to be displayed with no weather forecast summary present
    | Error retrieving the forecast |
