Feature: Dynamic Cucumber Mathematics

  Scenario Outline: Let's eat vegetables!
    Given I start with <initial> <vegetable>s
    When I consume <consumed> <vegetable>s
    Then I should have <remaining> <vegetable><suffix> left

    Examples:
      | vegetable | initial | consumed | remaining | suffix |
      | cucumber  | 5       | 4        | 1         |        |
      | carrot    | 10      | 12       | -2        | s      |
      | tomato    | 8       | 3        | 5         | es     |
      | lettuce   | 3       | 2        | 1         |        |

  Scenario Outline: Let's make different salads!
    Given I start with <cucumbers> cucumbers and <carrots> carrots
    When I prepare a salad using <used_cucumbers> cucumbers and <used_carrots> carrots
    Then I should have <remaining_cucumbers> cucumber<cucumber_suffix> left
    And I should have <remaining_carrots> carrot<carrot_suffix> left
    And I should have 1 salad ready

    Examples:
      | cucumbers | carrots | used_cucumbers | used_carrots | remaining_cucumbers | remaining_carrots | cucumber_suffix | carrot_suffix |
      | 8         | 5       | 3              | 2            | 5                   | 3                 | s               | s             |
      | 10        | 8       | 4              | 3            | 6                   | 5                 | s               | s             |
      | 3         | 2       | 2              | 1            | 1                   | 1                 |                 |               |