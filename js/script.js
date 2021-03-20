let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// <---Target score Intiatialization Section---->
function generateTarget(){
    let target= Math.floor(Math.random() * 10);

    return target;
}

// <----Absolute value math comparison section---->

function compareGuesses(humanGuess, computerGuess, target){

    // generateTarget();
    
if((Math.abs(humanGuess - target)) < (Math.abs(computerGuess - target)) ){
    return true;
}else if((Math.abs(humanGuess - target)) === (Math.abs(computerGuess - target))){
    return true;
}else{
    return false;
}

validate();
 
  }


 // <---Score Update section---->

function updateScore(winner){
if(winner == 'human'){
    humanScore++;
}else{
    computerScore++ ;
}

}


// <----Game Round Counter---->

function advanceRound(winner){
if (winner == winner ){
    currentRoundNumber++;
}

}

//<----- Validate Session---->

const hGuess = document.getElementById('human-guess');

hGuess.addEventListener('input', validate)

function validate(){
hGuess.value === 0;
    if(hGuess.value > 9 || hGuess.value < 0 ){
        alert("Game Input Out Of Range ")
    }else{
        return;
    }
}