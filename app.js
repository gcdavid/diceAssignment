document.addEventListener("DOMContentLoaded", () => {
  const rollBtn = document.querySelector(".rollButton");
  const player1DiceScore = document.querySelector(".player1Dice");
  const player2DiceScore = document.querySelector(".player2Dice");
  const score1 = document.querySelector(".player1Score");
  const score2 = document.querySelector(".player2Score");
  const winnerContainer = document.querySelector(".winner__container");
  const winner = document.querySelector(".winner");
  const playAgainButton = document.querySelector(".playAgainButton");

  const WINNING_NUMBER = 20;

  rollBtn.addEventListener("click", rollButtonClick);

  function rollButtonClick() {
    // Add the diceRollAnimation class to the dice images
    player1DiceScore.classList.add("diceRollAnimation");
    player2DiceScore.classList.add("diceRollAnimation");

    // Remove the diceRollAnimation class after 1 second
    setTimeout(() => {
      player1DiceScore.classList.remove("diceRollAnimation");
      player2DiceScore.classList.remove("diceRollAnimation");

      // Generate random dice numbers after the animation completes
      let player1Dice = rollDice();
      let player2Dice = rollDice();

      player1DiceScore.src = `img/dice${player1Dice}.png`;
      player2DiceScore.src = `img/dice${player2Dice}.png`;

      let player1TotalScore = +score1.textContent;
      let player2TotalScore = +score2.textContent;

      // Add the previous score to the new dice number
      player1TotalScore += player1Dice;
      player2TotalScore += player2Dice;

      // Check for the winner
      if (player1TotalScore >= WINNING_NUMBER) {
        winnerContainer.style.display = "block";
        winner.textContent = "1";
        rollBtn.style.cursor = "not-allowed";
        rollBtn.removeEventListener("click", rollButtonClick);
        playAgainButton.style.display = "block";
      } else if (player2TotalScore >= WINNING_NUMBER) {
        winnerContainer.style.display = "block";
        winner.textContent = "2";
        rollBtn.style.cursor = "not-allowed";
        rollBtn.removeEventListener("click", rollButtonClick);
        playAgainButton.style.display = "block";
      }

      score1.textContent = player1TotalScore;
      score2.textContent = player2TotalScore;
    }, 1000);
  }

  playAgainButton.addEventListener("click", resetGame);

  function rollDice() {
    // Generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();
    const die = Math.floor(randomDecimal * 6) + 1;
    return die;
  }

  function resetGame() {
    winnerContainer.style.display = "none";
    score1.textContent = 1;
    score2.textContent = 1;
    player1DiceScore.src = `img/dice1.png`;
    player2DiceScore.src = `img/dice1.png`;
    rollBtn.style.cursor = "pointer";
    rollBtn.addEventListener("click", rollButtonClick);
    playAgainButton.style.display = "none";
  }
});
