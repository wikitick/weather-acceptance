@3Hour
Feature:
  As a Tourist on holiday
  I want to see the Daily Summary broken into three hour periods
  So that I can plan my day trips to make the most of the weather

  Selecting any Daily Summary row will open the remaining three hour periods for that day.
  Selecting any day currently showing the breakdown into three hour periods will return to the daily summary row.

  Scenario: Selecting a Daily Summary row forecast will reveal the available three hour breakdown for that day.

    Given I open the Weather forecast app
    When I select Tuesday to display the three hour breakdown
    Then I expect the available three hour periods will be displayed
    | 1300 | 1600 | 1900 | 2200 |

  Scenario: Selecting a future Daily Summary row will reveal the day broken into eight three hour periods.

    Given I open the Weather forecast app
    When I select Wednesday to display the three hour breakdown
    Then I expect eight x three hour periods will be displayed
      | 0100 | 0400 | 0700 | 1000 | 1300 | 1600 | 1900 | 2200 |

  Scenario: Selecting a day currently showing a three hour breakdown forecast will return to the Daily Summary display

    Given I open the Weather forecast app
    And I select Tuesday to display the three hour breakdown
    When I select Tuesday again
    Then I expect a three hour breakdown forecast will not be visible

