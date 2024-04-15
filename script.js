let scorePlayer = 0;
let scoreComputer = 0;
let computerSelection;

const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");

rock.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    updateScore();
});
paper.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    updateScore();
});
scissors.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    updateScore();
});

const dashboard = document.createElement("div");
dashboard.classList.add("dashboard")
const main = document.querySelector("main");
dashboard.textContent = "Choose one";
dashboard.style.width = "300px";
dashboard.style.height = "150px";
dashboard.style.backgroundColor = "#7498b6";
dashboard.style.marginLeft = "auto";
dashboard.style.marginRight = "auto";
dashboard.style.marginTop = "20px"
dashboard.style.borderRadius = "8px";
main.appendChild(dashboard);

const restart = document.createElement("button");
restart.classList.add("restart-button");
restart.textContent = "Restart game";
main.appendChild(restart);

restart.addEventListener("click", () => {
    location.reload();
});

function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = options[random];
    dashboard.textContent = "Computer chose: " + computerChoice;
    return computerChoice;
}

function playRound (player, computer) {
    if (player === computer) {
        dashboard.innerHTML = "Computer choice: " + computer.charAt(0).toUpperCase() + computer.slice(1) + "<br>Tie!<br>Player score: " + scorePlayer + "<br>Computer score: " + scoreComputer;
    } else if (
        (player === "rock" && computer === "scissors") || 
        (player === "paper" && computer === "rock") || 
        (player === "scissors" && computer === "paper")
    ) {
        scorePlayer++;
        dashboard.innerHTML = "Computer choice: " + computer.charAt(0).toUpperCase() + computer.slice(1) + "<br>You Win! " + player.charAt(0).toUpperCase() + player.slice(1) + " beats " + computer.charAt(0).toUpperCase() + computer.slice(1) + "<br>Player score: " + scorePlayer + "<br>Computer score: " + scoreComputer;
    } else {
        scoreComputer++;
        dashboard.innerHTML = "Computer choice: " + computer.charAt(0).toUpperCase() + computer.slice(1) + "<br>You Lose! " + computer.charAt(0).toUpperCase() + computer.slice(1) + " beats " + player.charAt(0).toUpperCase() + player.slice(1) + "<br>Player score: " + scorePlayer + "<br>Computer score: " + scoreComputer;
    }
}

function updateScore () {
    if (scorePlayer == 5) {
        dashboard.textContent = "Player Wins!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    } else if (scoreComputer == 5) {
        dashboard.textContent = "Computer Wins!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}