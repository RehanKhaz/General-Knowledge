#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgYellow.white("Welcome to this Quiz. This quiz will be all about the General Questions regarding Pakistan. This will be so helpful for me as well you for your knowledge. This Quiz will contain 10 questions."));
let i = 0;
let userAnswer = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: "Enter your name:",
    },
    {
        name: "firstQuestion",
        type: "list",
        message: "Who was the first Prime Minister of Pakistan? ",
        choices: [
            "Allama Iqbal",
            "Sir Syed Ahmed Khan",
            "Liaquat Ali Khan",
            "Quaid-e-Azam",
        ],
    },
    {
        name: "secondQuestion",
        type: "list",
        message: "Who is considered as the poet of East? ",
        choices: ["Ghalib", "Allama Iqbal", "John Elia ", "Ahmed Faraz"],
    },
    {
        name: "thirdQuestion",
        type: "list",
        message: "In Pakistan, the first election was held in which year? ",
        choices: [1970, 1971, 1972, 1973],
    },
    {
        name: "forthQuestion",
        type: "list",
        message: "The constitutional name of Pakistan is:",
        choices: [
            "Islamistan",
            "Democratic State of Pakistan",
            "Islamic Republic of Pakistan",
            "Republic of Pakistan",
        ],
    },
    {
        name: "fifthQuestion",
        type: "list",
        message: "Which country was seperated from Pakistan in 1971?",
        choices: ["Bangladesh", "India", "Nepal ", "Afghanistan"],
    },
    {
        name: "sixthQuestion",
        type: "list",
        message: "This province of Pakistan is known as Bab-ul-Islam:",
        choices: ["Sindh", "Punjab", "Balouchistan ", "KPK"],
    },
    {
        name: "seventhQuestion",
        type: "list",
        message: "The name Pakistan was suggested by:",
        choices: [
            "Molana Muhammad Ali Johar",
            "Choudhary Rehmat Ali Khan",
            "Quaid-e-Azam",
            "Sir Syed Ahmed Khan",
        ],
    },
    {
        name: "eighthQuestion",
        type: "list",
        message: "The first constitution in Pakistan was passed in which year? ",
        choices: [1947, 1950, 1955, 1956],
    },
    {
        name: "ninthQuestion",
        type: "list",
        message: "Who is considered as the mother of nation? ",
        choices: [
            "Khadija Mastoor",
            "Maryam Nawaz",
            "Muniba Mazari",
            "Fatima Ali Jinah",
        ],
    },
    {
        name: "tenthQuestion",
        type: "list",
        message: "Two nation theory was represented by:",
        choices: [
            "Allama Iqbal",
            "Quaid-e-Azam",
            "Sir Syed Ahmed Khan",
            "Ahmed Faraz",
        ],
    },
]);
if (userAnswer.firstQuestion === "Liaquat Ali Khan") {
    i++;
}
if (userAnswer.secondQuestion === "Allama Iqbal") {
    i++;
}
if (userAnswer.thirdQuestion === 1970) {
    i++;
}
if (userAnswer.forthQuestion === "Islamic Republic of Pakistan") {
    i++;
}
if (userAnswer.fifthQuestion === "Bangladesh") {
    i++;
}
if (userAnswer.sixthQuestion === "Sindh") {
    i++;
}
if (userAnswer.seventhQuestion === "Choudhary Rehmat Ali Khan") {
    i++;
}
if (userAnswer.eighthQuestion === 1956) {
    i++;
}
if (userAnswer.ninthQuestion === "Fatima Ali Jinah") {
    i++;
}
if (userAnswer.tenthQuestion === "Sir Syed Ahmed Khan") {
    i++;
}
if (i === 0) {
    console.log(`Unfortunately ${userAnswer.Name}! your all answers are incorrect. You should get some basic knowledge about Pakistan.`);
}
else if (i === 1) {
    console.log(chalk.blue.bgWhiteBright(`${userAnswer.Name}! your ${i} answer is correct.`));
}
else if (i > 1 && i < 10) {
    console.log(chalk.blue.bgWhiteBright(`${userAnswer.Name}! your ${i} answers are correct.`));
}
else if (i === 10) {
    console.log(`Fantastic ${userAnswer.Name}! your all answers are correct. You know a lot about Pakistan.`);
}
console.log(chalk.red.underline(" \tPAKISTAN ZINDABAD"));
