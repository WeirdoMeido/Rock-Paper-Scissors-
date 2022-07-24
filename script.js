const roca = document.querySelector('.roca');
const papel = document.querySelector('.papel');
const tijera = document.querySelector('.tijera');

let textDiv = document.querySelector('.parag');

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


function computerPlay() {
    return compSelect[Math.floor(Math.random() * compSelect.length)];
   }


function playRound (playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        document.querySelector('.parag').textContent = "It's a tie!";
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS') {
        document.querySelector('.parag').textContent = "You win! Rock beats scissors";
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        document.querySelector('.parag').textContent = "You lose! Paper beats rock";
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        document.querySelector('.parag').textContent = "You win! Paper beats rock";
    }
    else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        document.querySelector('.parag').textContent = "You lose! Scissors beats paper";
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        document.querySelector('.parag').textContent = "You win! Scissors beats paper";
    }
    else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        document.querySelector('.parag').textContent = "You lose! Rock beats scissors";
    }
}


/*
function game(playerSelection = prompt("Rock, Paper or Scissors?")) {

        playRound(playerSelection);
        if (playRound(playerSelection) === 'You win! Rock beats scissors' || playRound(playerSelection) === 'You win! Paper beats rock' || playRound(playerSelection) === 'You win! Scissors beats paper'){
            playerScore += 1;
            console.log(`Good job! Your score is ${playerScore}!`);
        } 
        else if (playRound(playerSelection) === 'You lose! Paper beats rock' || playRound(playerSelection) === 'You lose! Scissors beats paper' || playRound(playerSelection) === 'You lose! Rock beats scissors'){
            computerScore += 1;
            console.log(`Too bad! The computer's score is ${computerScore}!`);
        } 
        else {
            console.log("Close enough! It's a tie!");
        }
    }

    for (let i =1; i <= 5; i++) {
        alert(`This is the round numer ${i}!`);
        game(playerSelection = prompt("Rock, Paper or Scissors?"));
    }

    if (playerScore > computerScore) {
        alert("Congratulations! You've beaten the computer!");
    } else if (computerScore > playerScore) {
        alert("What a shame! You've lost!");
    } else {
        alert("It's a tie! Try playing again!~");
    }

    */