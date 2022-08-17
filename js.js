function getComputerChoice() {
  choiceArr = ['Rock', 'Paper', 'Sissors'];
  return (newArr = choiceArr[Math.floor(Math.random() * choiceArr.length)]);
}

const playerSelection = prompt(' Rock , Paper or Sissors?');
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound() {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Sissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Sissors' && computerSelection == 'Paper')
  ) {
    return playerScore++, 'player wins';
  } else {
    return computerScore++, 'computer wins';
  }
}
playRound();
console.log(playerSelection);
console.log(playerScore);
console.log(computerSelection);
console.log(computerScore);
console.log(playRound());

function game() {
  
}
