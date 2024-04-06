document.addEventListener("DOMContentLoaded", () => {
  const rollBtn = document.querySelector(".rollButton");
  const player1DiceScore = document.querySelector(".player1Dice");
  const player2DiceScore = document.querySelector(".player2Dice");

  rollBtn.addEventListener("click", () => {
    let player1Dice = rollDice();
    let player2Dice = rollDice();

    player1DiceScore.src = `img/dice${player1Dice}.png`;
    player2DiceScore.src = `img/dice${player2Dice}.png`;
  });

  function rollDice() {
    //Generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();

    const die = Math.floor(randomDecimal * 6) + 1;

    return die;
  }
});
