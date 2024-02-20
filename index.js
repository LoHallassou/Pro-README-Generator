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
            name: 'contributions',
            message: 'How would one go about making contributions to your project?: ',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How would one go about testing your project?: ',
        },
        {
            type: "list",
            name: "license",
            message: "Please select a license for your project",
            choices: ['AFL-3.0','Apache','Artistic','BSL','BSD','ECL','EPL','EUPL','AGPL','GPL','LGPL','ISC','LPPL','MS-PL','MPL','OSL','PostgreSQL','OFL','NCSA','Unlicense','Zlib']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?: ',
        },

    ])
    .then((answers) => {
        const readMeTemplate = 
        `# ${answers.title}
        
        # Description
        ${answers.description}

        # Installation
        ${answers.installation}

        # Usage
        ${answers.guidlines}

        # How To Contribute
        ${answers.contributions}

        # Tests
        ${answers.testing}

        # Contact-Info
        For any questions you can refer to [github.com/${answers.username}] or ${answers.email}
        `
        fs.writeFile('README.md' , readMeTemplate, (err) => {
            console.log(err);
        })
    }

    )
}

// function call to initialize program
init();
