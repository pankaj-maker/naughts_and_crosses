const currentPlayerEl = document.querySelector(".current-player");
const gameGrid = document.querySelectorAll(".box");
const resetBtnEl = document.querySelector(".reset-btn");
const gameGridd = document.querySelector(".game");

resetBtnEl.classList.add("active");
// resetBtnEl.addEventListener("click",()=>{
//     resetBtnEl.classList.remove("active")
// });

const color = ["red", "green", "blue", "yellow", "black"];
function handleClick() {
//  const rn = Math.floor(Math.random() * color.length);
  gameGridd.style.background = randomHex();
}
resetBtnEl.addEventListener("click", handleClick);

// function handleClick(el) {
//   el.textContent = currentPlayer;
//   swapPlayer();
// }

function randomHex() {
    const char="0123456789abcdef";
    let hex="#"
    for (let  i= 0; i < 6; i++) {
    const randomchar=char[Math.floor(Math.random()*char.length)];
    hex += randomchar
    }
    return hex
}

gameGrid.forEach((el) => {
  el.addEventListener("click", () => {
    handleClick(el);
  });
});

const player = ["O", "X"];
let currentPlayer;

const randomPlayer = function () {
  const randomNo = Math.floor(Math.random() * 2);
  currentPlayer = player[randomNo];
};
randomPlayer();
currentPlayerEl.textContent = currentPlayer;
console.log(currentPlayer);

const swapPlayer = () => {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
};
