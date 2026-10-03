let randomNumber=Math.floor(Math.random()*100)+1;

let attempts=0;

function checkGuess(){
    const guessInput=document.getElementById("guessInput");
    const message=document.getElementById("message");
    const attemptsDisplay=document.getElementById("attempts");

    const guess=Number(guessInput.value);

    if(guess<1||guess>100 || guessInput.value===""){
        message.textContent="Please enter a number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent=attempts;

    if(guess===randomNumber){
        message.textContent=`Correct! The Number was ${randomNumber}.`;
    }else if(guess<randomNumber){
        message.textContent="Too low! Try a higher number.";
    }else{
        message.textContent="Too high! Try a lower number.";
    }
}

//Start new game
function resetGame(){
    randomNumber=Math.floor(Math.random()*100)+1;
    attempts=0;

    document.getElementById("attempts").textContent="0";

    document.getElementById("message").textContent="New game started!";

    document.getElementById("guessInput").value="";
}

