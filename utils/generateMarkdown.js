const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return '![badge](https://img.shields.io/badge/licence-' + license.replace('-', '%15') + '-blue)';
  } else {
    console.log('No license provided');
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    return 'https://choosealicense.com/licenses/' + license.toLowerCase();
  } else {
    console.log('No license provided');
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return 'This application has a license with '[ license.replace()];
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data}

  # ${data.name}

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#github #email)
 
  ## Description:

      ${data.description}

  ## Installation:
      ${data.installation}

  ## Usage:
      ${data.usage}

  ## License:
      ${data.license}

  ## Contributing:
      ${data.contributing}

  ## Tests:
      ${data.tests}

  ## Questions:
      - [GitHub Profile] href="https://github.com/${data.github}"
      - If you have additional questions, please email me at: ${data.email}`;
}

module.exports = generateMarkdown;
