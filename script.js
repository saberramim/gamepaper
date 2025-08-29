const choices = ["rock", "paper", "scissors"];

// DOM elements
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Determine result
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  // Update UI with choices
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `PLAYER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  // Apply styles and update scores for win/lose
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
