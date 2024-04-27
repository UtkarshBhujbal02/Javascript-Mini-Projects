const count = document.querySelector(".count");
const minusButton = document.querySelector(".decBTN");
const plusButton = document.querySelector(".incBTN");
const changeBy = document.querySelector(".inputNum");
const resett = document.querySelector(".resetBTN");

plusButton.addEventListener("click", () => {
  const countValue = parseInt(count.innerText);
  const changeByValue = parseInt(changeBy.value);

  count.innerText = countValue + changeByValue;
});

minusButton.addEventListener("click", () => {
  const countValue = parseInt(count.innerText);
  const changeByValue = parseInt(changeBy.value);

  count.innerText = countValue - changeByValue;
});

resett.addEventListener("click", () => {
  count.innerText = 0;
});
