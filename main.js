import "./style.css";

const userGuessElement = document.querySelector(".guess");
const checkElement = document.querySelector(".btn.check");
const scoreElement = document.querySelector(".label-score .score");
const highScoreElement = document.querySelector(".label-highscore .highscore");
const messageElement = document.querySelector(".message");

let randOmNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore;

checkElement.addEventListener("click", () => {
  const userGuess = parseInt(userGuessElement.value);
  if (userGuess === randOmNumber) {
    messageElement.textContent = "Correct! You win";
    highScore = score > highScore ? score : highScore;
    highScoreElement.textContent = highScore;
    document.querySelector("body").style.backgroundColor = "#60b347";
    return;
  }
  score -= 1;
  scoreElement.textContent = score;
  messageElement.textContent =
    userGuess > randOmNumber ? "To High!" : "To Low!";
});
