const board = document.getElementById("board");
const status = document.getElementById("status");

let cells = [];
let gameState = ["","","","","","","","",""];
let gameActive = true;

function createBoard(){

  board.innerHTML="";
  cells=[];

  for(let i=0;i<9;i++){

    const cell=document.createElement("div");

    cell.classList.add("cell");

    cell.dataset.index=i;

    cell.addEventListener("click",handleMove);

    board.appendChild(cell);

    cells.push(cell);
  }

}

function handleMove(e){

  const index=e.target.dataset.index;

  if(gameState[index]!=="" || !gameActive) return;

  gameState[index]="X";

  e.target.innerText="X";

  if(checkWinner("X")){
    status.innerText="You win 🎉";
    gameActive=false;
    return;
  }

  aiMove();

}

function aiMove(){

  const empty = gameState
    .map((v,i)=>v===""?i:null)
    .filter(v=>v!==null);

  if(empty.length===0) return;

  const move = empty[Math.floor(Math.random()*empty.length)];

  gameState[move]="O";

  cells[move].innerText="O";

  if(checkWinner("O")){
    status.innerText="AI wins 🤖";
    gameActive=false;
  }

}

function checkWinner(player){

  const winCombos=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winCombos.some(combo =>
    combo.every(i=>gameState[i]===player)
  );

}

function restartGame(){

  gameState=["","","","","","","","",""];
  gameActive=true;
  status.innerText="";
  createBoard();

}

createBoard();