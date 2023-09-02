function getComputerChoice(){
    const validChoices = ["rock","paper","scissors"];
    return validChoices[Math.floor(Math.random() * validChoices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return("Draw! You both chose: " + playerSelection)
    }
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return("You win! rock beats scissors!")
    }
    if (playerSelection === "paper" && computerSelection === "rock"){
        return("You Win! paper beats rock!")
    }
    if (playerSelection === "scissors" && computerSelection === "paper"){
        return("You win! scissors beats paper!")
    }
    else {
        return ("You lose! " + computerSelection + " beats " + playerSelection + "!")
    }
}

const playerSelection = prompt("Begin the game by typing 'Rock', 'Paper', or 'Scissors'").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));