let compChoice;
let humChoice;
let humScore = 0;
let compScore = 0;

function getComputerChoice() {
    let compNum = Math.floor(Math.random() * 3);

    if (compNum === 0) {
        compChoice = 'rock';
    } else if (compNum === 1) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    console.log("Computer Choice: " + compChoice)
}

function getHumanChoice() {
    let humInput = prompt("What is your choice? Rock, Paper, or Scissors");
    if (typeof humInput === 'string') {
        humInput = humInput.toLowerCase();
            if (humInput === 'rock') {
            humChoice = 'rock';
            console.log("Your choice is Rock!");
        }
        else if (humInput === 'paper') {
            humChoice = 'paper';
            console.log("Your choice is Paper!");
        }
        else if (humInput === 'scissors') {
            humChoice = 'scissors';
            console.log("Your choice is Scissors!");
        }
        else {
            console.log("That's not an option!")
            getHumanChoice();
        }   
    }
    else {
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humChoice == 'rock' && compChoice == 'scissors') {
        console.log("You win! Rock beats Scissors.")
        humScore += 1;
    }
    else if (humChoice == 'paper' && compChoice == 'scissors') {
        console.log("You lose! Scissors beats Paper.")
        compScore += 1;
    }
    else if (humChoice == 'scissors' && compChoice == 'scissors') {
        console.log("Tie! You both picked Scissors.")
    }
    else if (humChoice == 'scissors' && compChoice == 'rock') {
        console.log("You lose! Rock beats Scissors.")
        compScore += 1;
    }
    else if (humChoice == 'scissors' && compChoice == 'paper') {
        console.log("You win! Scissors beats Paper.")
        humScore += 1;
    }
    else if (humChoice == 'rock' && compChoice == 'paper') {
        console.log("You lose! Paper beats Rock.")
        compScore += 1;
    }
    else if (humChoice == 'rock' && compChoice == 'scissors') {
        console.log("You win! Rock beats Scissors.")
        humScore += 1;
    }
    else if (humChoice == 'rock' && compChoice == 'rock') {
    console.log("Tie! You both picked Rock.")
    }
    else if (humChoice == 'paper' && compChoice == 'rock') {
        console.log("You win! Paper beats Rock.")
        humScore += 1;
    }
    else if (humChoice == 'Scissors' && compChoice == 'Rock') {
    console.log("You lose! Rock beats Scissors.")
    compScore += 1;
    }
    else if (humChoice == 'paper' && compChoice == 'paper') {
    console.log("Tie! You both picked Paper.")
    }
}

playRound(getHumanChoice(), getComputerChoice());
