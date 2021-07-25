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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(license) {
//     return 'https://choosealicense.com/licenses/' + license.toLowerCase();
//   } else {
//     console.log('No license provided');
//     return '';
//   }
// }


// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}
// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license) {
//     return 'This application has a license with '[license.replace()];
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `

  # ${data.name}
  ${renderLicenseBadge(data.license)}

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Question](#github)
 
  ## Description:

      ${data.description}

  ## Installation:
      ${data.installation}

  ## Usage:
      ${data.usage}

  ## Contributing:
      ${data.contributing}

  ## Tests:
      ${data.tests}

  ## Question:
  [${data.github}](https://github.com/${data.github}/).
  

  [${data.email}](mailto:${data.email})
      - If you have additional questions, please email me at: <a href="mailto:${data.email}"></a>;
`};

module.exports = generateMarkdown;
