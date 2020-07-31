const fs = require('fs');
const inquirer = require('inquirer');
console.log(inquirer);
const generateMarkdown = require('./utils/generateMarkdown');

// const promptUser = () => {
//     return inquirer.prompt([

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project.'
        },
        {
            type: 'list',
            name: 'table',
            message: 'Would you like to include a table of contents?',
            choices: [
                "A",
                "B"
            ]
        },
        {
            type: 'input',
            name: 'install',
            message: 'How can someone install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this application used?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license for this project:',
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: 'list',
            name: 'contribution',
            message: 'Would you like others to contribute to this project?',
            choices: [

            ]
        },
        {
            type: 'input',
            name: 'testConfirm',
            message: 'Would you like to include any test examples for your project?',
            default: false
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test examples for your project.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.'
        }
    ];

// promptUser().then(answers => console.log(answers));

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data) {
// function to write README file
fs.writeFile('README.md', generateMarkdown(data), err => {
    if (err) throw err;
    console.log("File has been generated.");
    });
  })
};


// // function to write README file
// function writeToFile(fileName, data) {
// }

// function call to initialize program
init();
