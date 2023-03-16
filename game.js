const choices = document.querySelectorAll('.choice');
const resetBtn = document.getElementById('reset');
const roundResult = document.getElementById('round_result');
const playerScore = document.getElementById('player_score');
const compScore = document.getElementById('comp_score');

let player = 0;
let computer = 0;
let finished = false;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function updateScores(result) {
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

function playRound(playerChoice) {
    if (finished) return;

    let computerChoice = getComputerChoice();
    let result = "Analyzing round...";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (playerChoice === 'rock') {
        result = (computerChoice === 'paper')
            ? "You lose! Paper beats Rock."
            : "You win! Rock beats Scissors";
    } else if (playerChoice === 'paper') {
        result = (computerChoice === 'scissors')
            ? "You lose! Scissors beats Paper."
            : "You win! Paper beats Rock.";
    } else if (playerChoice === 'scissors') {
        result = (computerChoice === 'rock')
            ? "You lose! Rock beats Scissors."
            : "You win! Scissors beats Paper.";
    } else {
        result = "You didn't choose rock, paper or scissors.";
    }

    roundResult.innerText = result;
    updateScores(result);
    console.log(`${player} or ${computer}`);
}

function endGame() {
    let result = (player === 5)
        ? "You won the game! You have proven your skill."
        : "You lost the game! Train harder to become the best.";

    roundResult.innerText = result;
    resetBtn.disabled = false;
    finished = true;

    removeAnimation();
}

function resetGame() {
    player = 0;
    computer = 0;

    roundResult.innerText = "Choose your weapon!";
    resetBtn.disabled = true;
    finished = false;

    updateScores('tie');
    addAnimation();
}

function removeAnimation() {
    for(let choice of choices) {
        choice.classList.remove("choice");
        choice.style.opacity = "0.6";
    }
}

function addAnimation() {
    for(let choice of choices) {
        choice.classList.add("choice");
        choice.style.opacity = "1";
    }
}