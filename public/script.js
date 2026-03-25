const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const grid = 20;

let snake = [{x:200,y:200}];

let dx = grid;
let dy = 0;

let score = 0;
let gameRunning = true;

let highScore = localStorage.getItem("snakeHighScore") || 0;

document.getElementById("highScore").innerText =
"High Score: " + highScore;

let food = {
  x: Math.floor(Math.random()*20)*grid,
  y: Math.floor(Math.random()*20)*grid
};

function gameLoop(){

  if(!gameRunning) return;

  ctx.clearRect(0,0,400,400);

  const head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy
  };

  if(head.x < 0 || head.y < 0 || head.x >= 400 || head.y >= 400){
    endGame();
    return;
  }

  for(let part of snake){
    if(part.x === head.x && part.y === head.y){
      endGame();
      return;
    }
  }

  snake.unshift(head);

  if(head.x === food.x && head.y === food.y){

    score++;

    document.getElementById("score").innerText =
    "Score: " + score;

    food = {
      x: Math.floor(Math.random()*20)*grid,
      y: Math.floor(Math.random()*20)*grid
    };

  }else{
    snake.pop();
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x,food.y,grid,grid);

  ctx.fillStyle = "lime";

  snake.forEach(part => {
    ctx.fillRect(part.x,part.y,grid,grid);
  });

}

function endGame(){

  gameRunning = false;

  document.getElementById("gameOver").innerText =
  "💀 Game Over";

  if(score > highScore){

    localStorage.setItem("snakeHighScore",score);

  }

}

document.addEventListener("keydown", e => {

  if(e.key === "ArrowUp" && dy === 0){
    dx = 0; dy = -grid;
  }

  if(e.key === "ArrowDown" && dy === 0){
    dx = 0; dy = grid;
  }

  if(e.key === "ArrowLeft" && dx === 0){
    dx = -grid; dy = 0;
  }

  if(e.key === "ArrowRight" && dx === 0){
    dx = grid; dy = 0;
  }

});

function restartGame(){

  snake = [{x:200,y:200}];

  dx = grid;
  dy = 0;

  score = 0;

  gameRunning = true;

  document.getElementById("score").innerText = "Score: 0";
  document.getElementById("gameOver").innerText = "";

}

setInterval(gameLoop,120);

/* Mobile Swipe Controls */

let startX = 0;
let startY = 0;

canvas.addEventListener("touchstart", function(e){

  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;

});

canvas.addEventListener("touchend", function(e){

  let endX = e.changedTouches[0].clientX;
  let endY = e.changedTouches[0].clientY;

  let diffX = endX - startX;
  let diffY = endY - startY;

  if(Math.abs(diffX) > Math.abs(diffY)){

    if(diffX > 0 && dx === 0){
      dx = grid; dy = 0;
    }else if(dx === 0){
      dx = -grid; dy = 0;
    }

  }else{

    if(diffY > 0 && dy === 0){
      dx = 0; dy = grid;
    }else if(dy === 0){
      dx = 0; dy = -grid;
    }

  }

});