@daily
Feature:
  As a Tourist on holiday
  I want to see a Daily Summary of the weather highlighting the predominant weather conditions for that day
  So that I can select which day suits which activity

  The Daily Summary will show a weather icon, max, min temp, wind speed, direction, rainfall and barometric pressure.
  The Daily Summary will be produced from the 3 hour data.
  The Daily Summary for the current day will use the data from the current 3 hour time period
  The Daily Summary for future days will use the predominant 3 hour data value for that day.

  Background:
    Given I open the Weather forecast app

  Scenario: The Daily Summary for today will display the current weather condition

    Given the following conditions for the three hour periods is forecast for Glasgow
      | Rain | Clouds | Clouds | Clouds |
    When I enter Glasgow in the city name
    Then I expect a Rain icon to be displayed for today

  Scenario: The Daily Summary for today will display the current wind speed

    Given the following conditions for the three hour periods is forecast for Aberdeen
      | 3kph | 4kph | 3kph | 2kph |
    When I enter Aberdeen in the city name
    Then I expect a wind speed of 3kph to be displayed for today

  Scenario: The Daily Summary for future dates will display the predominant weather condition for that day

    Given the following conditions for the three hour periods is forecast for Aberdeen
      | Clear | Clear | Clear | Clear | Clear | Rain | Rain | Rain |
    When I enter Aberdeen in the city name
    Then I expect a Clear icon to be displayed for Friday

  Scenario: The Daily Summary for future dates will use the predominant weather pressure for that day

    Given the following pressure for the three hour periods is forecast for Aberdeen
      | 1007mb | 1008mb | 1009mb | 1011mb | 1010mb | 1008mb | 1006mb | 1003mb |
    When I enter Aberdeen in the city name
    Then I expect a high of 1011mb to be displayed for Friday

  Scenario: The Daily Summary will display the Maximum temperature

    When I enter Perth in the city name
    Then I expect a Maximum temperature of 14 degrees for Tuesday

  Scenario: The Daily Summary will display the Minimum temperature

    When I enter Perth in the city name
    Then I expect a Minimum temperature of 5 degrees for Tuesday

  Scenario: The aggregate rainfall for the day will be shown on the Daily Summary

    Given the following rainfall for the three hour periods is forecast for Glasgow
      | 3mm | 3mm | 12mm | 10mm | 8mm | 1mm | 1mm | 2mm |
    When I enter Glasgow in the city name
    Then I expect the rainfall total of 40mm to be displayed for Saturday

