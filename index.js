// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// change some of these to editor
const questions = [
    {
        type: 'input',
        name: 'description',
        message: 'This command line app will generate a README.md for you. Start by describing your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your project and provide an example:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['Apache License 2.0', 'GNU GPLv2', 'GNU GPLv3', 'MIT', 'ISC']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines on how other developers can contribute to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide any tests and examples on how to run them:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email where others can contact you:'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
