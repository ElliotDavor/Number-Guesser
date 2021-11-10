
//JavaScript functions to power a small guessing game


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// code to generate the new secret target number.
const generateTarget=( )=>Math.floor(Math.random())

const compareGuesses=(humanGuess,computerGuess,secretTargetGuess)=>{
const TruthyFalsy=()=>{
  return 'Human user should win'
}
};

const updateScore=()=>{
  humanScore +=1;
};

const advanceRound=()=>{
  currentRoundNumber +=1
}

updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);
