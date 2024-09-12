const currentPlayerEl=document.querySelector(".current-player");
const gameGrid=document.querySelectorAll(".box");


function handleClick(el){
    el.textContent=currentPlayer
    swapPlayer();
    
}

gameGrid.forEach((el)=>{
el.addEventListener("click",()=>{
    handleClick(el)
})
})

const player=["O","X"];
let currentPlayer;

const randomPlayer=function(){
    const randomNo=Math.floor(Math.random()*2)
    currentPlayer=player[randomNo]
}
randomPlayer();
currentPlayerEl.textContent=currentPlayer;
console.log(currentPlayer);





const swapPlayer=()=>{
    if(currentPlayer==="X"){
        currentPlayer= "O"
    }else{
        currentPlayer= "X"
    }
}


