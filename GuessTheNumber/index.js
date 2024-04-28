const userInput = document.querySelector("#input");
const result = document.querySelector(".result");
let randomNumber = Math.round(Math.random() * 100);
const form = document.querySelector(".form");
const allGuesses = document.querySelector(".all-guesses");
const allGuessArray = [];
const submitButton = document.querySelector(".submitBTN");
const startGameButton = document.querySelector(".startGame");

function a() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if (userInputValue < randomNumber) {
      result.innerText = "Too low!";
    } else if (userInputValue > randomNumber) {
      result.innerText = "Too High!";
    } else {
      result.innerText = "You got it! Congrats!!!";
      startGameButton.disabled = false;
      submitButton.disabled = true;
    }
    allGuessArray.push(userInputValue);
    allGuesses.innerText = "your guesses: " + allGuessArray.join(", ");
    form.reset();
  });

  startGameButton.addEventListener("click", () => {
    allGuesses.innerText = "";
    result.innerText = "";
    startGameButton.disabled = true;
    submitButton.disabled = false;
    randomNumber = Math.round(Math.random() * 100);
  });
}

a();
