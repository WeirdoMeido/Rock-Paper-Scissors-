const roca = document.querySelector('.roca');
const papel = document.querySelector('.papel');
const tijera = document.querySelector('.tijera');
const btn = document.querySelector('.btn');

let humScore = document.querySelector('.pScore');
let compScore = document.querySelector('.cScore');

roca.addEventListener('click', () => {
    playRound('ROCK');
});

papel.addEventListener('click', () => {
    playRound('PAPER');
});

tijera.addEventListener('click', () => {
    playRound('SCISSORS');
});

let playerScore = 0, computerScore = 0;
let compSelect = ['Rock', 'Paper', 'Scissors'];

btn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    humScore.textContent = `Player Score : ${playerScore}`;
    compScore.textContent = `Computer Score : ${computerScore}`;
    document.querySelector('.parag').textContent = "Make your selection";
})

humScore.textContent = `Player Score : ${playerScore}`;
compScore.textContent = `Computer Score : ${computerScore}`;

/////////////// FUNCTIONS ////////////////////
function computerPlay() {
    return compSelect[Math.floor(Math.random() * compSelect.length)];
   }


function playRound (playerSelection) {
    let computerSelection = computerPlay();
    let textDiv = document.querySelector('.parag');

    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        textDiv.textContent = "It's a tie!";
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        textDiv.textContent = "You win! Rock beats scissors";
        playerScore += 1;
        humScore.textContent = `Player Score : ${playerScore}`;
        compScore.textContent = `Computer Score : ${computerScore}`;
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        textDiv.textContent = "You lose! Paper beats rock";
        computerScore += 1;
        humScore.textContent = `Player Score : ${playerScore}`;
        compScore.textContent = `Computer Score : ${computerScore}`;
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        textDiv.textContent = "You win! Paper beats rock";
        playerScore += 1;
        humScore.textContent = `Player Score : ${playerScore}`;
        compScore.textContent = `Computer Score : ${computerScore}`;
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        textDiv.textContent = "You lose! Scissors beats paper";
        computerScore += 1;
        humScore.textContent = `Player Score : ${playerScore}`;
        compScore.textContent = `Computer Score : ${computerScore}`;
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        textDiv.textContent = "You win! Scissors beats paper";
        playerScore += 1;
        humScore.textContent = `Player Score : ${playerScore}`;
        compScore.textContent = `Computer Score : ${computerScore}`;
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        textDiv.textContent = "You lose! Rock beats scissors";
        computerScore += 1;
        humScore.textContent = `Player Score : ${playerScore}`;
        compScore.textContent = `Computer Score : ${computerScore}`;
    }

    if (playerScore === 5) {
        textDiv.textContent = "Good job! You've won against the computer!";
    }
    else if (computerScore === 5) {
        textDiv.textContent = "Too bad! You've lost against the computer!";
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}