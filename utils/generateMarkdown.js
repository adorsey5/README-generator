
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Unlicense') return ''
  return `![badge](https://img.shields.io/badge/license-${license}-blue.svg)`
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Unlicense') return ''  
  return '- [License](#license)'  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Unlicense') return ''
  return `## License 
  ![badge](https://img.shields.io/badge/license-${license}-blue.svg)
  <br />
  This application is covered by the ${license} license. 
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  *Project:* 
  ${data.description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contribution](#contribution)
  - [Questions](#questions)
  - [Acknowledgments](#acknowledgments)
${renderLicenseLink(data.license)}
 

  ## Installation
  *Steps required to install project and how to get the development environment running:*
   ${data.installation}
  
  ## Usage 
  *Instructions:*
   ${data.usage}

  ## Testing
  ${data.tests}

  ## Contribution
  *Instructions to contribute to the repo*
  ${data.contribution}

  ## Questions
  *Contact me if you have questions*
  - [GitHub Profile](https://github.com/${data.username})
  - [Email](mailto:${data.email})

  ## Acknowledgments
  ${data.acknowledgments}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
