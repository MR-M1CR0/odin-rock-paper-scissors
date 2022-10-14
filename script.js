'use strict';

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const result = document.querySelector('div');

const getComputerChoice = function () {
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      const p = document.createElement('p');
      p.innerText = `You Lose! Paper beats Rock Computer Score = ${computerScore} Player Score = ${playerScore}`;
      result.appendChild(p);
      if (computerScore === 5) {
      }
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerScore++;
      const p = document.createElement('p');
      p.innerText = `You Win! Rock beats Scissors Computer Score = ${computerScore} Player Score = ${playerScore}`;
      result.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++;
      const p = document.createElement('p');
      p.innerText = `You Win! Paper beats Rock Computer Score = ${computerScore} Player Score = ${playerScore}`;
      result.appendChild(p);
    } else if (
      playerSelection === 'paper' &&
      computerSelection === 'scissors'
    ) {
      computerScore++;
      const p = document.createElement('p');
      p.innerText = `You Lose! Scissors beat Paper Computer Score = ${computerScore} Player Score = ${playerScore}`;
      result.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      const p = document.createElement('p');
      p.innerText = `You Lose! Rock beats Scissors Computer Score = ${computerScore} Player Score = ${playerScore}`;
      result.appendChild(p);
    } else if (
      playerSelection === 'scissors' &&
      computerSelection === 'paper'
    ) {
      playerScore++;
      const p = document.createElement('p');
      p.innerText = `You Win! Scissors beat Paper Computer Score = ${computerScore} Player Score = ${playerScore}`;
      result.appendChild(p);
    }
  } else {
    const p = document.createElement('p');
    p.innerText = `Tie no one won! Computer Score = ${computerScore} Player Score = ${playerScore}`;
    result.appendChild(p);
  }
};

// const game = function () {
// for (let i = 0; i < 5; i++) {
//   const playerSelection = prompt('Rock-Paper-Scissors!').toLowerCase();
//   const computerSelection = getComputerChoice();
//   console.log(
//     `${playRound(
//       playerSelection,
//       computerSelection
//     )} Computer Score = ${computerScore} Your Score = ${playerScore}`
//   );
// }
//   if (computerScore > playerScore) {
//     console.log('Computer Win!');
//   } else if (playerScore > computerScore) {
//     console.log('Player Win!');
//   } else {
//     console.log('Tie no one Win!');
//   }
// };

// game();

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement('h2');
    h2.innerText = 'Player Win!';
    result.appendChild(h2);
  } else if (computerScore === 5) {
    const h2 = document.createElement('h2');
    h2.innerText = 'Computer Win!';
    result.appendChild(h2);
  }
};

rockButton.addEventListener('click', function () {
  playRound('rock', getComputerChoice());
  checkForWinner(playerScore, computerScore);
});
paperButton.addEventListener('click', function () {
  playRound('paper', getComputerChoice());
  checkForWinner(playerScore, computerScore);
});
scissorsButton.addEventListener('click', function () {
  playRound('scissors', getComputerChoice());
  checkForWinner(playerScore, computerScore);
});
