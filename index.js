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
            message: 'What are the guidelines on how to ?: ',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How would one go about testing your project?: ',
        },
        {
            type: 'input',
            name: 'info',
            message: 'What is Your Project Title?: ',
        },
        {
            type: 'input',
            name: 'info',
            message: 'What is Your Project Title?: ',
        }
    ])
    .then((answers) => {
        console.log(answers);
        console.log(answers.woosh);
        fs.writeFile('README.md' , potentialFile, (err) => {
            console.log(err);
        })
    }

    )
}

// function call to initialize program
init();
