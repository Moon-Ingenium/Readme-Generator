const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is you project title?",
        name: "projectName"
    },
    {
        type: "input",
        message: "What is you project Description?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install the program?",
        name: "install"
    },
    {
        type: "input",
        message: "What is your usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "What is your contribution guidelines?",
        name: "guidelines"
    },
    {
        type: "input",
        message: "What are your test instructions?",
        name: "test"
    },
    {
        type: "list",
        message: "What license did you use?",
        choices: ["Apache License 2.0", "MIT", "GPL"],
        name: "license"

    },
    {
        type: "input",
        message: "What is your Github profile?",
        name: "git"
    },
{
    type: "input",
    message: "What is your email address?",
    name: "email"
}
];

inquirer
    .prompt(questions)
    .then(function (response) {
        console.log(response);

        // const output = mkardown(response);
        // writeToFile(output);
        writeToFile(generateMarkdown(response));
    }
    );

// function to write README file


function writeToFile(data) {

    // format example
  
    fs.writeFile("readme.md", data, function (err) {
        if (err) {
            throw err;
        }
    }
    );

    // function to initialize program
    function init() {

    }

    // function call to initialize program
    init();
}
