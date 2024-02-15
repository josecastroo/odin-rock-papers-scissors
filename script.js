
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();




function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection) {

    let scorePlayer = 0;
    let scoreComputer = 0;

    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "scissors")) {
        scorePlayer++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        scoreComputer++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "Tie!";
    }
}



console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));