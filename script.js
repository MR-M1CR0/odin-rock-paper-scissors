'use strict';

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = function () {
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerScore++;
      return `You Lose! Paper beats Rock`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerScore++;
      return `You Win! Rock beats Scissors`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++;
      return `You Win! Paper beats Rock`;
    } else if (
      playerSelection === 'paper' &&
      computerSelection === 'scissors'
    ) {
      computerScore++;
      return `You Lose! Scissors beat Paper`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      computerScore++;
      return `You Lose! Rock beats Scissors`;
    } else if (
      playerSelection === 'scissors' &&
      computerSelection === 'paper'
    ) {
      playerScore++;
      return `You Win! Scissors beat Paper`;
    }
  } else {
    return `Tie no one won!`;
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock-Paper-Scissors!').toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(
      `${playRound(
        playerSelection,
        computerSelection
      )} Computer Score = ${computerScore} Your Score = ${playerScore}`
    );
  }
  if (computerScore > playerScore) {
    console.log('Computer Win!');
  } else if (playerScore > computerScore) {
    console.log('Player Win!');
  } else {
    console.log('Tie no one Win!');
  }
};

game();
