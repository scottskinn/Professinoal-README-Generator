const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return '![Github license](https://img.shields.io/badge/licence-' + license + '-blue.svg)';
  } else {
    console.log('No license provided');
    return '';
  }
};

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
};
// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {  
  return `
# ${data.name}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Description

  ${data.description}

## Installation

  ${data.installation}

## Usage

  ${data.usage}

## Contributing

  ${data.contributing}

## License

  ${data.license}

  ${renderLicenseBadge(data.license)}

## Tests

  ${data.tests}

## Questions

Github: [${data.github}](https://github.com/${data.github}/)

Email: [${data.email}](mailto:${data.email})
`};

module.exports = generateMarkdown;
