let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = options[random];
    console.log("Computer chose: " + computerChoice);
    return computerChoice;
}

function playRound (player, computer) {
    if (player === computer) {
        return "Tie!\nPlayer score: " + scorePlayer + "\nComputer score: " + scoreComputer;
    } else if (
        (player === "rock" && computer === "scissors") || 
        (player === "paper" && computer === "rock") || 
        (player === "scissors" && computer === "paper")
    ) {
        scorePlayer++;
        return "You Win! " + player.charAt(0).toUpperCase() + player.slice(1) + " beats " + computer.charAt(0).toUpperCase() + computer.slice(1) + "\nPlayer score: " + scorePlayer + "\nComputer score: " + scoreComputer;
    } else {
        scoreComputer++;
        return "You Lose! " + computer.charAt(0).toUpperCase() + computer.slice(1) + " beats " + player.charAt(0).toUpperCase() + player.slice(1) + "\nPlayer score: " + scorePlayer + "\nComputer score: " + scoreComputer;
    }
}

function playGame() {
    for (let i = 0; scorePlayer < 3 && scoreComputer < 3; i++) {

        let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection));
    }

    if (scorePlayer > scoreComputer) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
}

playGame();