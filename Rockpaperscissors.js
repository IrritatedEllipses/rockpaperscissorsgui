var compSelect = ""
var playerSelect = ""
var playerScore = ""
var compScore = ""
const playerSc = document.querySelector('.player-score')
const CompSc = document.querySelector(`.computer-score`)
const roundRes = document.querySelector('.choices')
const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorsBtn = document.querySelector('.scissorsBtn')


// Buttons to listen to start of new round
rockBtn.addEventListener('click', () => {
  playerSelect = `rock`;
  gameRound()
});
scissorsBtn.addEventListener('click', () => {
 playerSelect = 'scissors'
  gameRound()
})
paperBtn.addEventListener('click', () => {
  playerSelect = 'paper'
  gameRound()
})

/*Actual game function with all variations accounted for*/
function gameRound() {
  compChoice()
  
  if (compSelect === playerSelect) {
    round = 'tie'

  }
  else if (playerSelect === "rock") {
    if (compSelect === "scissors") {
      round = 'wins';
    }
    else {
      round = 'lose'
    }
  }
  else if (playerSelect === "paper") {
    if (compSelect === "rock") {
      round = 'wins';
    }
    else {
      round = 'lose';
   
    }

  }
  else if (playerSelect === "scissors") {
    if (compSelect === "paper") {
      round = 'wins';
  
    }
    else {
      round = 'lose';
   
    }
  }
  roundResults()
  game()
}

// Final score alert

function game() {
  if (playerScore === 5) {
    alert("After five rounds, a winner is you!")
    playerScore = 0
    compScore = 0
    
  }
  if (compScore === 5) {
    alert("The computer has beaten you like so many others have before.")
    playerScore = 0
    compScore = 0
    
  }
}

// Displays the results of each round and increments the score
function roundResults() {
  if (round === 'tie') {
    roundRes.textContent = `Wow, it's a tie!`

  }
  else if (round === 'wins') {
    roundRes.textContent = `Computer chose ${compSelect} so a winner is you!`
    playerScore++
    displayScores()
    
  }
  else if (round === 'lose') {
    roundRes.textContent = `Did you just lose to a computer? It chose ${compSelect}`
    compScore++
    displayScores()
  }

}

// Little function to display the scores and keep track of them.
function displayScores(){
  playerSc.textContent = `Player Score: ${playerScore}`
  CompSc.textContent = `Computer Score: ${compScore}`
}

/* This section takes a random number from 1 - 9.99 and has the computer select rock, paper, or scissors*/
function compChoice() {
  let oppSelect = Math.random() * 10;
  if (oppSelect < 3) {
    compSelect = "rock";
  }
  else if (oppSelect >= 3 && oppSelect < 6) {
    compSelect = "paper";
  }
  else {
    compSelect = "scissors";
  }

}
