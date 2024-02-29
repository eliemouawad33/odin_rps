let playerScore = 0;
let computerScore = 0;
        
function playRound(playerSelection) {
    const compChoices = ["rock", "paper", "scissors"];
    const computerSelection = compChoices[Math.floor(Math.random() * compChoices.length)];
    const result = document.getElementById("results");
    const score = document.getElementById("score");

    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result.textContent = `You lose! ${playerSelection} loses to ${computerSelection}`;
    }
    score.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player" : "Computer";
        result.textContent += ` ${winner} wins the game!`;
        playerScore = 0;
        computerScore = 0;
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));



