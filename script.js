const cells = document.querySelectorAll("td");
const resetButton = document.querySelector("#reset-button");
const winningMessageDiv = document.querySelector("#winning-message");
const winningMessageText = document.querySelector("#winning-message-text");
const playerTurnSpan = document.querySelector("#player-turn");
const messageParagraph = document.querySelector("#message");

let currentPlayer = "X";

for (const cell of cells) {
  cell.addEventListener("click", handleClick);
}

resetButton.addEventListener("click", resetGame);

function handleClick(event) {
  const cell = event.target;

  if (cell.textContent) {
    return;
  }

  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());
  if (checkForWin()) {
    endGame(`Player ${currentPlayer} wins!`);
  } else if (checkForDraw()) {
    endGame("It's a draw!");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerTurnSpan.textContent = currentPlayer;
  }
}
function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkForDraw() {
  for (const cell of cells) {
    if (!cell.textContent) {
      return false;
    }
  }
  return true;
}

function endGame(message) {
  winningMessageText.textContent = message;
  winningMessageDiv.style.display = "block";
  for (const cell of cells) {
    cell.removeEventListener("click", handleClick);
  }
}

function resetGame() {
  for (const cell of cells) {
    cell.textContent = "";
    cell.classList.remove("x", "o");
    cell.addEventListener("click", handleClick);
  }
  winningMessageDiv.style.display = "none";
  currentPlayer = "X";
  playerTurnSpan.textContent = currentPlayer;
  messageParagraph.textContent = "";
}
// Get the hamburger menu and the navbar
var hamburger = document.querySelector('.hamburger');
var navbar = document.querySelector('.navbar');

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', function() {
  // Toggle the 'active' class on both the hamburger menu and the navbar
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
});


