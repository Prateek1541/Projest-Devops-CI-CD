async function submitGuess(){

  const guess = document.getElementById("guessInput").value;

  const response = await fetch("/guess", {

    method: "POST",

    headers:{
      "Content-Type":"application/json"
    },

    body: JSON.stringify({
      guess:Number(guess)
    })
  });

  const data = await response.json();

  let message="";

  if(data.result==="correct"){
    message="🎉 Correct! New number generated.";
  }
  else if(data.result==="higher"){
    message="📈 Try Higher!";
  }
  else{
    message="📉 Try Lower!";
  }

  document.getElementById("result").innerText = message;

}