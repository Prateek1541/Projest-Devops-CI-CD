const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const grid = 20;

let snake = [{x:200,y:200}];

let dx = grid;
let dy = 0;

let score = 0;
let gameRunning = true;

let speed = 120;

let highScore = localStorage.getItem("snakeHighScore") || 0;

document.getElementById("highScore").innerText =
"High Score: " + highScore;

let food = randomFood();

function randomFood(){

  return {
    x: Math.floor(Math.random()*20)*grid,
    y: Math.floor(Math.random()*20)*grid
  };

}

function draw(){

  ctx.clearRect(0,0,400,400);

  const head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy
  };

  if(head.x<0 || head.y<0 || head.x>=400 || head.y>=400){
    endGame();
    return;
  }

  for(let part of snake){

    if(part.x===head.x && part.y===head.y){
      endGame();
      return;
    }

  }

  snake.unshift(head);

  if(head.x===food.x && head.y===food.y){

    score++;

    document.getElementById("score").innerText =
    "Score: " + score;

    food = randomFood();

    /* speed increases every 5 points */

    if(score % 5 === 0 && speed > 60){

      speed -= 10;
      restartLoop();

    }

  }
  else{
    snake.pop();
  }

  /* draw food */

  ctx.fillStyle="red";
  ctx.fillRect(food.x,food.y,grid,grid);

  /* glowing snake */

  ctx.shadowColor="#00ff88";
  ctx.shadowBlur=10;

  ctx.fillStyle="#00ff88";

  snake.forEach(part=>{
    ctx.fillRect(part.x,part.y,grid,grid);
  });

  ctx.shadowBlur=0;

}

let gameInterval = setInterval(draw,speed);

function restartLoop(){

  clearInterval(gameInterval);
  gameInterval = setInterval(draw,speed);

}

function endGame(){

  gameRunning=false;

  clearInterval(gameInterval);

  document.getElementById("gameOver").innerText =
  "💀 Game Over";

  if(score > highScore){

    localStorage.setItem("snakeHighScore",score);

  }

}

document.addEventListener("keydown", e=>{

  if(e.key==="ArrowUp" && dy===0){
    dx=0; dy=-grid;
  }

  if(e.key==="ArrowDown" && dy===0){
    dx=0; dy=grid;
  }

  if(e.key==="ArrowLeft" && dx===0){
    dx=-grid; dy=0;
  }

  if(e.key==="ArrowRight" && dx===0){
    dx=grid; dy=0;
  }

});

function restartGame(){

  snake=[{x:200,y:200}];

  dx=grid;
  dy=0;

  score=0;

  speed=120;

  document.getElementById("score").innerText="Score: 0";
  document.getElementById("gameOver").innerText="";

  gameRunning=true;

  restartLoop();

}

/* MOBILE SWIPE CONTROLS */

let startX=0;
let startY=0;

canvas.addEventListener("touchstart", e=>{

  e.preventDefault();

  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;

},{passive:false});

canvas.addEventListener("touchend", e=>{

  e.preventDefault();

  let endX = e.changedTouches[0].clientX;
  let endY = e.changedTouches[0].clientY;

  let diffX = endX - startX;
  let diffY = endY - startY;

  if(Math.abs(diffX) > Math.abs(diffY)){

    if(diffX>0 && dx===0){
      dx=grid; dy=0;
    }

    else if(dx===0){
      dx=-grid; dy=0;
    }

  }else{

    if(diffY>0 && dy===0){
      dx=0; dy=grid;
    }

    else if(dy===0){
      dx=0; dy=-grid;
    }

  }

},{passive:false});