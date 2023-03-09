const choices = document.querySelectorAll('.choice');
const reset = document.getElementById('reset');
const roundResult = document.getElementById('round_result');
const playerScore = document.getElementById('player_score');
const compScore = document.getElementById('comp_score');

let player = 0;
let computer = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function updateScores(result = 'tie') {
    if (result.includes('win')) {
        ++player;
    } else if (result.includes('lose')) {
        ++computer;
    }

    playerScore.innerText = player;
    compScore.innerText = computer;

    if ((player === 5) || (computer === 5)) {
        endGame();
    }
}

function playRound(player) {
    let computer = getComputerChoice();
    let result = "Analyzing round...";

    if (player === computer) {
        result = "It's a tie!";
    } else if (player === 'rock') {
        result = (computer === 'paper')
            ? "You lose! Paper beats Rock."
            : "You win! Rock beats Scissors";
    } else if (player === 'paper') {
        result = (computer === 'scissors')
            ? "You lose! Scissors beats Paper."
            : "You win! Paper beats Rock.";
    } else if (player === 'scissors') {
        result = (computer === 'rock')
            ? "You lose! Rock beats Scissors."
            : "You win! Scissors beats Paper.";
    } else {
        result = "You didn't choose rock, paper or scissors.";
    }

    roundResult.innerText = result;
    updateScores(result);
}

function endGame() {
    let result = (player === 5)
        ? "You won the game! You have proven your skill."
        : "You lost the game! Train harder to become the best.";

    roundResult.innerText = result;
    reset.disabled = false;
}

function resetGame() {
    reset.disabled = true;
    roundResult.innerText = "Choose your weapon!";
    
    player = 0;
    computer = 0;

    updateScores();
}