//Declare the Choice variables 
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('results')
let userChoice
let computerChoice
let results
//Picking up all buttons
const possibleChoices = document.querySelectorAll('button')

 
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) //or use 3 cuz the lenght of possible choices is 3
  if (randomNumber === 1 ) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2 ) {
    computerChoice = 'Paper'
  }
  if (randomNumber === 3) {
    computerChoice = 'Scissors'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if ( computerChoice === userChoice) {
  results = 'its a draw'
  }
  if (computerChoice === 'Rock' && userChoice === 'Paper') {
    results = 'You Win'
  }
  if (computerChoice === 'Parper' && userChoice === 'Rock') {
    results = 'You Lose'
  }
  if (computerChoice === 'Scissors' && userChoice === 'Paper') {
    results = 'You Lose'
  }
  if (computerChoice === 'Paper' && userChoice === 'Scissors') {
    results = 'You Win'
  }
  if (computerChoice === 'Rock' && userChoice === 'Scissors') {
    results = 'You Lose'
  }
  if (computerChoice === 'Scissors' && userChoice === 'Rock') {
    results = 'You Win'
  }
  resultsDisplay.innerHTML = results
}
  
