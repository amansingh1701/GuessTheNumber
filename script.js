//Glpbal Variable
let correctNumber=getRandomNumber();
let guesses=[];

//When the index.html loads this function willload by default
window.onload=function(){
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

function playGame(){
    let numberGuess=document.getElementById('number-guess').value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

function initGame(){
correctNumber=getRandomNumber();
guesses=[]; 
document.getElementById("result").innerHTML="";
displayHistory();
document.querySelector('.number-guess').value='';}

function getRandomNumber(){
    let wN=Math.floor(Math.random() * (100 - 1) +1 );
    return wN;
}

function displayResult(numberGuess){
    if(numberGuess>correctNumber)
    showNumberAbove();
    else if(numberGuess<correctNumber)
    showNumberBelow();
    else if(numberGuess==correctNumber)
    showYouWon();
}

function getDialog(dialogType, text){
let dialog;
switch(dialogType){
    case "warning":
        dialog="<div class='alert alert-warning' role='alert'>";
        break;
    case "won":
        dialog="<div class='alert alert-success' role='alert'> ";
        break;
}
dialog+=text;
dialog+="</div>";
return dialog;
}


function showYouWon(){
    const text="Great, you guessed it right!";
    let dialog=getDialog('won', text);
    document.getElementById("result").innerHTML=dialog;
}
function showNumberAbove(){
    const text="No! Your guess is too high";
    let dialog=getDialog('warning', text);
    document.getElementById("result").innerHTML=dialog;
}
function showNumberBelow(){
    const text="No! Your guess is too low";
    let dialog=getDialog('warning', text);
    document.getElementById("result").innerHTML=dialog;
}

function displayHistory(){
    let index=guesses.length-1; 
    let list="<ul class='list-group'>";
    while(0<=index){
        list+="<li class='list-group-item'>"
        +'You have guessed '+guesses[index]+"</li>";
        index--;
    }
    list+='</ul>';
    document.getElementById("history").innerHTML =list;
}

function saveGuessHistory(guess){
    guesses.push(guess);
}