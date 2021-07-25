// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const { profile } = require('console');

// TODO: Create an array of questions for user input
const questions =  [{  
        type: 'input',
        name: 'name',
        message: 'What is your project title?',
        // validate user input to ensure title is entered.
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "description",
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "installation",
        message: 'What are the steps required to install your project? (Optional)',
        // validate: descriptionInput => {
        //     if (descriptionInput) {
        //         return true;
        //     } else {
        //         console.log('Please provide a description!');
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: "usage",
        message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: "license",
        message: 'Provide a list of the licenses that the application is covered under.  (Required)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "contributing",
        message: 'Provide your contributing guidelines (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "tests",
        message: 'Provide a test description (Optional)',
        // validate: descriptionInput => {
        //     if (descriptionInput) {
        //         return true;
        //     } else {
        //         console.log('Please provide a description!');
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: "github",
        message: 'Provide your Github name (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: "email",
        message: 'Provide your Email address (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    // Need to add links to the choices
    {
        type: 'checkbox',
        name: "tableOfContents",
        message: 'Provide a table of contents if your README file is long (Optional)',
        choices: [
            'Description', 
            'Installation', 
            'Usage', 
            'License', 
            'Contributing', 
            'Tests', 
            'Questions']
    }  
];


// TODO: Create a function to write README file
function writeFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('README file has been created! Check the dist folder for the output');
        };
    })
};


// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then(data => {
        
        writeFile('README.md', generateMarkdown(data));
    })

};
// Function call to initialize app
init()
   