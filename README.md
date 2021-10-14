# Readme Generator

## Description 

This command line app generates a professional README.md for your project.
It will prompt for the title of your project, a description, installation instructions, how to use it, 
guidelines for contributions, testing and examples, your Github username and an email one can contact you.

It uses the npm Inquirer package to ask questions and receive input. It also uses the Node File System module 
to write that data to a file. There is a file called generateMarkdown.js which generates the entire 
readme file using the user's input and template literals. In this same file it generates a license badge, and 
license links.

Here is a video tutorial: [Tutorial](https://watch.screencastify.com/v/RIT5XGo9sfw1s0jCkwA3)

## Table of Contents

* [Techonologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Code Snippet](#code-snippet)
* [Questions](#questions)
* [Author Links](#author-links)

## Technologies Used

- JavaScript - programming language used for this app
- Node.js - runtime environment
- Inquirer - CLI for Node.js
- Git - version control
- Github - where the repository is hosted
- Visual Studio Code - text editor
- Screencastify - for recording video

## Installation

- Download from Github
- Use your command-line to get to the project directory
- Install the required dependencies with ```npm install```
- Run the app with ```node index.js```

## Usage

Simply answer each prompt. Press enter to submit your input or to open your default text editor. 
For the text editor questions, close the editor when you are done. Inquirer will save whatever information 
you type in there. For the license question, use the arrow keys and press enter.

## Code Snippet

JavaScript code that is basically the whole app
```
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
        })
        .catch((err) => console.log(err))
}
```

## Questions

Have any questions? My Github and email:

[My Github Link](https://github.com/mushymane)  
Email: mushymanee@gmail.com

## Author Links
[LinkedIn](https://www.linkedin.com/in/luigilantin/)
