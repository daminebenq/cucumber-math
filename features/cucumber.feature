Feature: Cucumber Mathematics

  Scenario: Let’s eat cucumbers!
    Given I start with 5 cucumbers
    When I consume 4 cucumbers
    Then I should have 1 cucumber left

  Scenario: Let’s eat carrots!
    Given I start with 10 carrots
    When I consume 12 carrots
    Then I should have -2 carrots left

  Scenario: Let’s make a salad!
    Given I start with 8 cucumbers and 5 carrots
    When I prepare a salad using 3 cucumbers and 2 carrots
    Then I should have 5 cucumbers left
    And I should have 3 carrots left
    And I should have 1 salad ready