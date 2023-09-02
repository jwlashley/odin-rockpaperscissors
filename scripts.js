function getComputerChoice(){
    const validChoices = ["rock","paper","scissors"];
    return validChoices[Math.floor(Math.random() * validChoices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return draw;
    }
    if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return playerWin;
    }
    if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return playerWin;
    }
    if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return playerWin;
    }
    else {
        computerScore++;
        return playerLose;
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let playerWin = "You win!"
let playerLose = "You Lose!"
let draw = "It's a draw!"

function game() {
    for (let roundCount = 0; roundCount <= 5; roundCount++){
        let playerSelection = prompt("Begin the game by typing 'Rock', 'Paper', or 'Scissors'",).toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score = " + playerScore);
        console.log("Computer's Score = " + computerScore);
    }
    if (playerScore > computerScore){
        console.log("You win!");
    }
    else if (playerScore === computerScore){
        console.log("It's a draw! What a game!");
    }
    else{
        console.log("You lose! Try again!");
    }
}

game();



