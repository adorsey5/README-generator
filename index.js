// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const promptQuestions = 
            [{
                type: 'input',
                name: 'title',
                message: 'What is your project title? (Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide your project title');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description of your project (Required):',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide a description of your project!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Provide installation instructions for your project:',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please enter installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Provide instructions on how to use the project:',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide usage instructions');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'contributor',
                message: 'Would you like others to contribute to your project?',
                default: false
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Provide instructions for how to contribute to this project. (Required)',
                validate: userInput => {
                    if (userInput) {
                    return true;
                    } else {
                    console.log('You need to enter instructions!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide testing instructions:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'If you would like to include a license, select one. Use the arrow keys to move, and press Enter to select:',
                choices: ['MIT', 'GPLv3', 'ISC', 'PPDL', 'Perl', 'Unlicense']
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub username:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Provide your e-mail address:',
            },

            {
                type: "input",
                name: "acknowledgments",
                message:"Please list any collaborators, or third party assets that assisted with your project's development.",
                validate: (userInput) => {
                  if (userInput) {
                    return true;
                  } else {
                    console.log("Please enter any collaborators, or third party assets that assisted with your project's development."
                    );
                    return false;
                  }
                },
              },
            ]

// TODO: Create a function to write README file

function writeToFile(answers) {
    fs.writeFile("./templateREADME.md", generateMarkdown(answers), (err) => {
      if (err) throw new Error(err);
        console.log(answers)
      console.log(
        "README created!"
      );
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(promptQuestions)
  .then((answers) => {
    writeToFile(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();