// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
  <br />

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Acknowledgments](#acknowledgments)
  - [Contribution](#contribution)
  - [Questions](#questions)
 
  ## Description 
  *Project:* 
  ${data.description}

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

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
  <br />
  This application is covered by the ${data.license} license. 
  
`;
}

module.exports = generateMarkdown;
