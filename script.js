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
    console.log("Computer Choice: " + compChoice.charAt(0).toUpperCase() + compChoice.substring(1));
}

function getHumanChoice() {
    let humInput = prompt("What is your choice? Rock, Paper, or Scissors");
    if (typeof humInput === 'string') {
        humInput = humInput.toLowerCase();
            if (humInput === 'rock') {
            humChoice = 'rock';
            console.log("> Your choice is Rock!");
        }
        else if (humInput === 'paper') {
            humChoice = 'paper';
            console.log("> Your choice is Paper!");
        }
        else if (humInput === 'scissors') {
            humChoice = 'scissors';
            console.log("> Your choice is Scissors!");
        }
        else {
            console.log("> That's not an option!")
            getHumanChoice();
        }   
    }
    else {
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humChoice == compChoice) {
        console.log("It's a Tie!");
    }
    else {
        switch(humChoice){
            case 'rock':
                compChoice == 'scissors' ? (console.log("You Win! Rock beats Scissors!"), humScore += 1) 
                : (console.log("You Lose! Paper beats Rock!"), compScore += 1);
                break;
            case 'paper':
                compChoice == 'rock' ? (console.log("You Win! Paper beats Rock!"), humScore += 1) : 
                (console.log("You Lose! Scissors beats Paper!"), compScore += 1);
                break;
            case 'scissors':
                compChoice == 'paper' ? (console.log("You Win! Scissors beats Paper!"), humScore += 1) :
                (console.log("You lose! Rock beats Scissors!"), compScore += 1);
                break;
        }       
    }
    }

function playGame() {
    for (let i = 0; i < 4; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("The current score is: " + humScore + " - " + compScore);
    }
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Final Score: " + humScore + " - " + compScore)
    if (humScore > compScore) {
        console.log("Congrats! You win the game!")
    } else if (humScore < compScore) {
        console.log("You lost to a computer? You suck!")
    } else {
        console.log("The game is a tie!")
    }
}

playGame();
