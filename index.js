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
            type: 'input',
            name: 'installation',
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
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors for this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test included?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What do I do if I have an issue?'
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
fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
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
