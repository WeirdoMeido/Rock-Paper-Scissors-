let playerInitial = 0;
let computerInitial = 0;
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

function game(playerSelection) {

    for (i = 1; i <=5; i++) {
        playRound(playerSelection);
        if (playRound(playerSelection) === 'You win! Rock beats scissors' || playRound(playerSelection) === 'You win! Paper beats rock' || playRound(playerSelection) === 'You win! Scissors beats paper'){
            let playerScore = ++playerInitial;
            return `Good job! Your score is ${playerScore}!`;
        } else if (playRound(playerSelection) === 'You lose! Paper beats rock' || playRound(playerSelection) === 'You lose! Scissors beats paper' || playRound(playerSelection) === 'You lose! Rock beats scissors'){
            let computerScore = ++computerInitial;
            return `Too bad! The computer's score is ${computerScore}!`;
        } else if (playRound(playerSelection) === "It's a tie!"){
            return "Close enough! It's a tie!";
        }
    }
        if (playerScore > computerScore) {
            return "Excellent! You win!";
        }else if (playerScore < computerScore) {
        return "Too bad! You lose!";
    }else {
        return "Try again! It's a tie!";
    }
}