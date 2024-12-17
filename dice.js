const roll1Btn = document.getElementById("roll1");
const roll2Btn = document.getElementById("roll2");
const resetBtn = document.getElementById("reset");
const dice = document.getElementById("dice");
const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");
const winnerDisplay = document.getElementById("winner");

let Player1Score = 0;
let Player2Score = 0;

roll1Btn.addEventListener("click", () => {
  Player1Score = Math.floor(Math.random() * 6) + 1;
  dice.textContent = `${Player1Score}`;
  score1Display.textContent = Player1Score;
  roll1Btn.disabled = true;
  roll2Btn.disabled = false;
});

roll2Btn.addEventListener("click", () => {
  Player2Score = Math.floor(Math.random() * 6) + 1;
  dice.textContent = `${Player2Score}`;
  score2Display.textContent = Player2Score;
  roll2Btn.disabled = true;

  // Determine the winner
  if (Player1Score > Player2Score) {
    winnerDisplay.textContent = "🏆 Player 1 Wins!";
  } else if (Player2Score > Player1Score) {
    winnerDisplay.textContent = "🏆 Player 2 Wins!";
  } else {
    winnerDisplay.textContent = "🤝 It's a Tie!";
  }
});

resetBtn.addEventListener("click", () => {
  Player1Score = 0;
  Player2Score = 0;
  score1Display.textContent = "0";
  score2Display.textContent = "0";
  dice.textContent = "";
  winnerDisplay.textContent = "";
  roll1Btn.disabled = false;
  roll2Btn.disabled = true;
});
