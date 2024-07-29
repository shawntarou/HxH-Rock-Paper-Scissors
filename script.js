let compChoice;
let humChoice;
let humScore = 0;
let compScore = 0;
const humSelect = getHumanChoice();
const compSelect = getComputerChoice();

function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);

    if (compNum === 0) {
        compChoice = 'rock';
    } else if (compNum === 1) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    console.log(compChoice)
}

function getHumanChoice() {
    let humInput = prompt("What is your choice? rock, paper, or scissors");

    if (humInput === 'rock') {
        humChoice = 'rock';
        console.log("Your choice is rock!");
    }
    else if (humInput === 'paper') {
        humChoice = 'paper';
        console.log("Your choice is paper!");
    }
    else if (humInput === 'scissors') {
        humChoice = 'scissors';
        console.log("Your choice is scissors!");
    }
    else {
        console.log("That's not an option!");
        getHumanChoice();
    }
    }

function playRound(humChoice, compChoice) {
    
}

