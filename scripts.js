function getComputerChoice(){
    const validChoices = ["rock","paper","scissors"];
    return validChoices[Math.floor(Math.random() * validChoices.length)]
}

console.log(getComputerChoice())