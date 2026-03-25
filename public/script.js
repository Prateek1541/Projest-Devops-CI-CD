const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const grid = 20;

let snake = [{x:200,y:200}];
let dx = grid;
let dy = 0;

let food = {
  x: Math.floor(Math.random()*20)*grid,
  y: Math.floor(Math.random()*20)*grid
};

let score = 0;

function gameLoop(){

  ctx.clearRect(0,0,400,400);

  const head = {x:snake[0].x+dx, y:snake[0].y+dy};

  snake.unshift(head);

  if(head.x===food.x && head.y===food.y){

    score++;
    document.getElementById("score").innerText="Score: "+score;

    food={
      x: Math.floor(Math.random()*20)*grid,
      y: Math.floor(Math.random()*20)*grid
    };

  }else{
    snake.pop();
  }

  ctx.fillStyle="red";
  ctx.fillRect(food.x,food.y,grid,grid);

  ctx.fillStyle="lime";

  snake.forEach(part=>{
    ctx.fillRect(part.x,part.y,grid,grid);
  });

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
  document.getElementById("score").innerText="Score: 0";

}

setInterval(gameLoop,100);