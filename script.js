const roca = document.querySelector('.roca');
const papel = document.querySelector('.papel');
const tijera = document.querySelector('.tijera');

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

humScore.textContent = `Player Score : ${playerScore}`;
compScore.textContent = `Computer Score : ${computerScore}`;

/////////////// FUNCTIONS ////////////////////
function computerPlay() {
    return compSelect[Math.floor(Math.random() * compSelect.length)];
   }


function playRound (playerSelection) {
    let computerSelection = computerPlay();
    let textDiv = document.querySelector('.parag');

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        textDiv.textContent = "It's a tie!";
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        textDiv.textContent = "You win! Rock beats scissors";
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        textDiv.textContent = "You lose! Paper beats rock";
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        textDiv.textContent = "You win! Paper beats rock";
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        textDiv.textContent = "You lose! Scissors beats paper";
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        textDiv.textContent = "You win! Scissors beats paper";
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        textDiv.textContent = "You lose! Rock beats scissors";
    }
}

