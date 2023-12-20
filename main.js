import "./style.css";

const userGuessElement = document.querySelector(".guess");
const checkElement = document.querySelector(".btn.check");
const scoreElement = document.querySelector(".label-score .score");
const highScoreElement = document.querySelector(".label-highscore .highscore");
const messageElement = document.querySelector(".message");
const btnAgainElement = document.querySelector(".btn.again");

let randOmNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkElement.addEventListener("click", function () {
  score -= 1;
  scoreElement.textContent = score;
  if (score < 1) {
    messageElement.textContent = "Oh No! You Lose";
    document.querySelector("body").style.backgroundColor = "red";
    this.disabled = true;
    return;
  }
  const userGuess = parseInt(userGuessElement.value);
  if (userGuess === randOmNumber) {
    messageElement.textContent = "Correct! You win";
    highScore = score > highScore ? score : highScore;
    highScoreElement.textContent = highScore;
    document.querySelector("body").style.backgroundColor = "#60b347";
    this.disabled = true;
    return;
  }
  messageElement.textContent =
    userGuess > randOmNumber ? "To High!" : "To Low!";
});

btnAgainElement.addEventListener("click", () => {
  checkElement.disabled = false;
  randOmNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  scoreElement.textContent = score;
  userGuessElement.value = "";
  messageElement.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
});
