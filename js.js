let playerScore = 0;
let computerScore = 0;
let result = '';

function getComputerChoice() {
  choiceArr = ['Rock', 'Paper', 'Scissors'];
  return (newArr = choiceArr[Math.floor(Math.random() * choiceArr.length)]);
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return (result = 'tie');
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')
  ) {
    return (result = 'player wins');
  } else {
    return (result = 'computer wins');
  }
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection, computerSelection, result;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt();
    computerSelection = getComputerChoice();
    console.log(
      `User selection ${playerSelection},Computer selection ${computerSelection}`
    );
    result = playRound(playerSelection, computerSelection);
    if (result === 'player wins') {
      playerScore++;
    } else if (result === 'computer wins') {
      computerScore++;
    }
    console.log(`Score : Player${playerScore} and Computer${computerScore}`);
  }
  if (playerScore > computerScore) {
    return 'Player has won best of 5';
  } else {
    return 'Computer has won best of 5';
  }
}

console.log(game());
