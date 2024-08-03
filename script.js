let compChoice;
let humChoice;
let humScore = 0;
let compScore = 0;

const announceText = document.getElementById("announceText");
const yourChoiceText = document.getElementById("yourChoiceText");
const compChoiceText = document.getElementById("compChoiceText");

const rockImg = new Array("images/gon-rock.jpg","images/gon-rock-2.jpg");
const scissorsImg = new Array("images/gon-scissors.jpg","images/gon-scissors-2.jpg");
const paperImg = new Array("images/gon-paper.jpg","images/gon-paper-2.jpg","images/gon-paper-3.jpg");

const winImg = new Array("images/win-1.jpg","images/win-2.jpg");
const loseImg = new Array("images/lose-1.jpg","images/lose-2.jpg")



const imgContainer = document.getElementById("imgContainer");




function displayImg(imagePick, displayDiv, imageSize) {
    outputImg = document.createElement("img");
    outputImg.setAttribute("src", getRandomImg(imagePick));
    outputImg.setAttribute("width", "auto");
    outputImg.setAttribute("height",imageSize + "px");
    displayDiv.appendChild(outputImg);
}

function getRandomImg(image) {
    const randomNum = Math.floor(Math.random() * image.length);
    const randomImg = image[randomNum];
    return(randomImg);
}



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
    compChoiceText.textContent = "Computer Choice: " + compChoice.charAt(0).toUpperCase() + compChoice.substring(1)
}

function getHumanChoice(choice) {
    let humInput = choice;
    if (typeof humInput === 'string') {
        humInput = humInput.toLowerCase();
            if (humInput === 'rock') {
            humChoice = 'rock';
            console.log("> Your choice is Rock!");
            yourChoiceText.textContent = "> Your choice is Rock!"
            displayImg(rockImg, imgContainer, 300);
        }
        else if (humInput === 'paper') {
            humChoice = 'paper';
            console.log("> Your choice is Paper!");
            yourChoiceText.textContent = "> Your choice is Paper!"
            displayImg(paperImg, imgContainer, 300);
        }
        else if (humInput === 'scissors') {
            humChoice = 'scissors';
            console.log("> Your choice is Scissors!");
            yourChoiceText.textContent = "> Your choice is Scissors!"
            displayImg(scissorsImg, imgContainer, 300);
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
        announceText.textContent = "It's a Tie!";
    }
    else {
        switch(humChoice){
            case 'rock':
                compChoice == 'scissors' ? (console.log("You Win! Rock beats Scissors!", 
                announceText.textContent = "You Win! Rock beats Scissors!"), 
                humScore += 1) 
                : (console.log("You Lose! Paper beats Rock!"), 
                announceText.textContent = "You Lose! Paper beats Rock!",
                compScore += 1);
                break;
            case 'paper':
                compChoice == 'rock' ? (console.log("You Win! Paper beats Rock!"),
                announceText.textContent = "You Win! Paper beats Rock!",
                humScore += 1) : 
                (console.log("You Lose! Scissors beats Paper!"), 
                announceText.textContent = "You Lose! Scissors beats Paper!",
                compScore += 1);
                break;
            case 'scissors':
                compChoice == 'paper' ? (console.log("You Win! Scissors beats Paper!"), 
                announceText.textContent = "You Win! Scissors beats Paper!",
                humScore += 1) :
                (console.log("You lose! Rock beats Scissors!"), 
                announceText.textContent = "You lose! Rock beats Scissors!",
                compScore += 1);
                break;
        }       
    }
    }


////////////////////////////////////////
// OLD LOGIC FOR PLAYING WITH CONSOLE//
//////////////////////////////////////
// function playGame() {
//     for (let i = 0; i < 4; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log("The current score is: " + humScore + " - " + compScore);
//     }
//     playRound(getHumanChoice(), getComputerChoice());
//     console.log("Final Score: " + humScore + " - " + compScore)
//     if (humScore > compScore) {
//         console.log("Congrats! You win the game!")
//     } else if (humScore < compScore) {
//         console.log("You lost to a computer? You suck!")
//     } else {
//         console.log("The game is a tie!")
//     }
// }
// playGame();

const rockButton = document.getElementById("rockButton");
const scissorsButton = document.getElementById("scissorsButton");
const paperButton = document.getElementById("paperButton");
const score = document.getElementById("score")
const gameOverDisplay = document.getElementById("gameOverDisplay")

function csDisplay() {
    score.textContent = ("The current score is: " + humScore + " - " + compScore);
}

function fsDisplay() {
    document.getElementById("buttons").remove();
    score.remove();
    announceText.remove();
    yourChoiceText.remove();
    compChoiceText.remove();
    fsScore = document.createElement('h1');
    fsScore.style = "color: red;"
    console.log("Final Score: " + humScore + " - " + compScore);
    fsScore.textContent = "Final Score: " + humScore + " - " + compScore;
    finalText = document.createElement('h1');
    if (humScore > compScore) {
        console.log("Congrats! You win the game!")
        finalText.textContent = "Congrats! You win the game!";
        displayImg(winImg, gameOverDisplay, 500);
    } else {
        console.log("You lost to a computer? You suck!")
        finalText.textContent = "You lost to a computer? You suck!";
        displayImg(loseImg, gameOverDisplay, 500);
    }
    document.getElementById("gameOverDisplay").appendChild(fsScore);
    document.getElementById("gameOverDisplay").appendChild(finalText);
}

function scoreCheck() {
    if (humScore == 5 || compScore == 5){
    fsDisplay();
    }
    else {csDisplay();}
}





rockButton.addEventListener("click", () => {
    playRound(getHumanChoice("rock"), getComputerChoice());
    console.log("The current score is: " + humScore + " - " + compScore);
    scoreCheck();
});
scissorsButton.addEventListener("click", () => {
    playRound(getHumanChoice("scissors"), getComputerChoice());
    console.log("The current score is: " + humScore + " - " + compScore);
    scoreCheck();
});
paperButton.addEventListener("click", () => {
    playRound(getHumanChoice("paper"), getComputerChoice());
    console.log("The current score is: " + humScore + " - " + compScore);
    scoreCheck();
});
