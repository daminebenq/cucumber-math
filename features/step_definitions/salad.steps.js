const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');

// Initialize the inventory object to keep track of available vegetables and salads
let inventory = {};

// Reset inventory before each scenario
Before(function() {
  inventory = {};
});

// Generic step for starting with any vegetable
Given('I start with {int} {word}', function (count, vegetable) {
  // Remove trailing 's' if present
  const vegType = vegetable.replace(/s$/, '');
  inventory[vegType] = count;
});

// Set starting amount of both cucumbers and carrots
Given('I start with {int} cucumbers and {int} carrots', function (cuc, car) {
  inventory.cucumber = cuc;
  inventory.carrot = car;
});

// Generic step for consuming any vegetable
When('I consume {int} {word}', function (count, vegetable) {
  // Remove trailing 's' if present
  const vegType = vegetable.replace(/s$/, '');
  inventory[vegType] -= count;
});

// Prepare a salad using specific numbers of cucumbers and carrots
When('I prepare a salad using {int} cucumbers and {int} carrots', function (cuc, car) {
  inventory.cucumber -= cuc;
  inventory.carrot -= car;
  inventory.salad = (inventory.salad || 0) + 1;
});

// Generic step for checking remaining vegetables
Then('I should have {int} {word} left', function (expected, vegetable) {
  // Remove trailing 's' or 'es' if present
  const vegType = vegetable.replace(/e?s$/, '');
  assert.strictEqual(inventory[vegType], expected);
});

// Assert number of prepared salads
Then('I should have {int} salad ready', function (expected) {
  assert.strictEqual(inventory.salad, expected);
});