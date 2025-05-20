#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Github username where repo exists
let username = 'daminebenq';
try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json')));
  const repoUrl = packageJson.repository?.url || '';
  const match = repoUrl.match(/github\.com[\/:]([^\/]+)\/cucumber-math/);
  if (match && match[1]) {
    username = match[1];
  }
} catch (e) {
  // Use default username if error
}

// Log the report URL
console.log('\n\n');
console.log('='.repeat(80));
console.log('HTML Report generated successfully!');
console.log('-'.repeat(80));
console.log('Local report: file://' + path.resolve(__dirname, '..', 'reports', 'cucumber-report.html'));
console.log('GitHub Pages: https://' + username + '.github.io/cucumber-math/cucumber-report.html');
console.log('='.repeat(80));
console.log('\n');