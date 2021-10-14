// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
// change some of these to editor
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'This command line app will generate a README.md for you. What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Now describe your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use it and provide an example:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
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
function writeToFile(fileName, data) {
    let genMarkdown = markdown(data);
    fs.writeFile(fileName, genMarkdown, (err) => {
        err ? console.log(err) : console.log("Serving up your README");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
        })
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();
