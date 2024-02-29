
function playGame () {
    let player = (prompt("Please enter your choice: "));

    if (player !== "rock" && player !== "paper" && player !== "scissors") {
        return "Invalid input. Please enter rock, paper, or scissors.";
    }
        
    let compChoices = ["rock", "paper", "scissors"];
    let comp = compChoices[Math.floor(Math.random() * 3)];

    if (player === comp) {
        return "It's a tie!";
    } else if (player === "rock" && comp === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (player === "paper" && comp === "rock") {
        return "You win! Paper beats Rock";
    } else if (player === "scissors" && comp === "paper") {
        return "You win! Scissors beats Paper";
    } else if (player === "rock" && comp === "paper") {
        return "You lose! Rock loses to Paper";
    } else if (player === "paper" && comp === "scissors") {
        return "You lose! Paper loses to Scissors";
    } else if (player === "scissors" && comp === "rock") {
        return "You lose! Scissors loses to Rock";
    }
}

for (let i = 0; i < 5; i++) {
    console.log(playGame());
}

