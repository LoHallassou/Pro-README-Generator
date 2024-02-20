const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    
];

const readMEQs = (question) => {
    for (let i = 0; i < questions.length; i++) {
        return question[i];
      }
    }

// function to write README file
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is Your Project Title?: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project? ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?: ',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the guidelines on how to use it?: ',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How would one go about testing your project?: ',
        },

    ])
    .then((answers) => {
        const readMeTemplate = 
        `# ${answers.title}
        
        # Description

        # Installation

        # Usage

        # How To Contribute

        # Tests
        `
        fs.writeFile('README.md' , readMeTemplate, (err) => {
            console.log(err);
        })
    }

    )
}

// function call to initialize program
init();
