let player1Score = 0;
let player2Score = 0;
let roundPlayed = false;
let player1Choice = null;
let player2Choice = null;

function playRound(playerChoice, playerNum) {
  // check if round has already been played
  if (roundPlayed) {
    return;
  }

  // set player choice
  if (playerNum === 1) {
    player1Choice = playerChoice;
  } else {
    player2Choice = playerChoice;
  }

  // check if both players have made a choice
  if (player1Choice && player2Choice) {
    roundPlayed = true;

    // determine winner and update result text
    let winner = getWinner(player1Choice, player2Choice);
    let resultText = '';
    if (winner === 'tie') {
      resultText = "It's a tie!";
    } else {
      let winningPlayer = (winner === 1) ? 'Player 1' : 'Player 2';
      resultText = `${winningPlayer} wins!`;
      if (winningPlayer === 'Player 1') {
        player1Score++;
      } else {
        player2Score++;
      }
    }
    document.getElementById('results').textContent = resultText;
    document.getElementById("player1-score").textContent = "Player 1: " + player1Score;
    document.getElementById("player2-score").textContent = "Player 2: " + player2Score;
  }
}

function getWinner(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return 'tie';
  } else if (player1Choice === 'rock') {
    if (player2Choice === 'paper') {
      return 2;
    } else {
      return 1;
    }
  } else if (player1Choice === 'paper') {
    if (player2Choice === 'scissors') {
      return 2;
    } else {
      return 1;
    }
  } else if (player1Choice === 'scissors') {
    if (player2Choice === 'rock') {
      return 2;
    } else {
      return 1;
    }
  }
}
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    roundPlayed = false;
    player1Choice = null;
    player2Choice = null;
    document.getElementById("results").innerHTML = "";
    document.getElementById("player1-score").innerHTML = "Player 1: " + player1Score;
    document.getElementById("player2-score").innerHTML = "Player 2: " + player2Score;
  }
  