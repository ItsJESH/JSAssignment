let computerNumber = 0;
let totalGuesses = 0;

function startGame() {
  const start = parseInt(document.getElementById("start-range").value);
  const end = parseInt(document.getElementById("end-range").value);

  if (isNaN(start) || isNaN(end) || start >= end) {
    alert("Please enter a valid range.");
    return;
  }

  computerNumber = Math.floor(Math.random() * (end - start + 1)) + start;
  document.getElementById("comp-guess").innerText = computerNumber;
  document.getElementById("comp-guess-section").style.display = "block";
  document.getElementById("player-guess-section").style.display = "block";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("comp-guess").classList.remove("revealed");
  totalGuesses = 0; // Reset the guesses
}

function checkGuess() {
  const playerGuess = parseInt(document.getElementById("player-guess").value);

  if (isNaN(playerGuess)) {
    alert("Please enter a valid number.");
    return;
  }

  totalGuesses++;
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.style.display = "block";
  if (playerGuess > computerNumber) {
    feedbackElement.innerText = "Your guess is too high!";
  } else if (playerGuess < computerNumber) {
    feedbackElement.innerText = "Your guess is too low!";
  } else {
    feedbackElement.style.display = "none";
    document.getElementById("player-guess-section").style.display = "none";
    document.getElementById("comp-guess").classList.add("revealed");
    showWinMessage();
  }
}

function showWinMessage() {
  const winMessage = document.getElementById("win-message");
  winMessage.style.display = "block";

  // Generate confetti
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);

    // Remove confetti after animation ends
    setTimeout(() => confetti.remove(), 3000);
  }
}

function getRandomColor() {
  const colors = ["#00d2be", "#ffffff", "#1a1a1a", "#ff4d4d"];
  return colors[Math.floor(Math.random() * colors.length)];
}
