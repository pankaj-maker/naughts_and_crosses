import winning from "./winning";

const headingEl = document.querySelector(".heading");
const currentPlayerEl = document.querySelector(".current-player");
const boxesEl = document.querySelectorAll(".box");
const resetBtnEl = document.querySelector(".reset-btn");

const player = ["O", "X"];
let cuurPlayer;
let gameGrid;

function randomPlayer() {
  const newPlayer = Math.floor(Math.random() * 2);
  cuurPlayer = player[newPlayer];
}
function swapPlayer() {
  const newPlayer = cuurPlayer === player[0] ? player[1] : player[0];
  cuurPlayer = newPlayer;
}

function startGame() {
  gameGrid = new Array(9).fill("");
  resetBtnEl.classList.remove("active");
  randomPlayer();
  currentPlayerEl.textContent = cuurPlayer;
}
startGame();
function checkWinner() {
  winning.forEach((chance) => {
    const [c1, c2, c3] = chance;
    if (
      gameGrid[c1] &&
      gameGrid[c2] &&
      gameGrid[c3] &&
      gameGrid[c1] === gameGrid[c2] &&
      gameGrid[c2] === gameGrid[c3]
    ) {
      boxesEl.forEach((box) => (box.style.pointerEvents = "none"));
      resetBtnEl.classList.add("active");
      boxesEl[c1].classList.add("green");
      boxesEl[c2].classList.add("green");
      boxesEl[c3].classList.add("green");

      headingEl.textContent = `${gameGrid[c1]} won!`;
      currentPlayerEl.textContent = `${gameGrid[c1]}won!`;
    }
   
  });

  const x = gameGrid.every((el) => el !== "");
  if (x && !headingEl.textContent.includes("won")) {
    headingEl.textContent = "Match Draw";
    resetBtnEl.classList.add("active");
  }
}

function handleClick(index) {
  if (gameGrid[index] === "") {
    boxesEl[index].textContent = cuurPlayer;
    boxesEl[index].style.pointerEvents = "none";
    gameGrid[index] = cuurPlayer;
    checkWinner();
    currentPlayerEl.textContent = cuurPlayer;
    swapPlayer();
  }
}
boxesEl.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

resetBtnEl.addEventListener("click", () => {
  startGame();
  headingEl.textContent = "Noughts & Crosses";
  boxesEl.forEach((box) => {
    box.classList.remove("green");
    box.textContent = "";
    box.style.pointerEvents = "auto";
  });
});
