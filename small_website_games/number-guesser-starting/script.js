let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10)
}

const compareGuesses = (humanGuess,computerGuess,targetNumber) =>
 Math.abs(humanGuess-targetNumber)<=Math.abs(computerGuess-targetNumber) ?  true :  false
        
function updateScore(winner){
    if(winner==='human'){
        humanScore ++;
    }
    else{
        computerScore++;
    }

}

function advanceRound(){
    currentRoundNumber++;
}