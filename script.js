let compSelect = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return compSelect[Math.floor(Math.random() * compSelect.length)];
   }


function playRound (playerSelection) {

    let computerSelection = computerPlay();

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
return "It's a tie!";
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        return "You win! Rock beats scissors";
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        return "You lose! Paper beats rock";
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        return "You win! Paper beats rock";
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        return "You lose! Scissors beats paper";
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        return "You win! Scissors beats paper";
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        return "You lose! Rock beats scissors";
    }
}
