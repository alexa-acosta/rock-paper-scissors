const choices = document.querySelectorAll('.choice');
const reset = document.querySelector('.reset');
const roundDiv = document.querySelector('.round');
let player = 0;
let computer = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function tally(verdict) {
    if (verdict.includes('win')) {
        player++;
    } else if (verdict.includes('lose')) {
        computer++;
    }
}

function updateScores() {
    const playerDiv = document.querySelector('.player-score');
    const compDiv = document.querySelector('.comp-score');

    playerDiv.innerText = `${player}`;
    compDiv.innerText = `${computer}`;
}

function endGame() {
    roundDiv.innerText = (player === 5)
        ? `You won the game! Congratulations!`
        : `You lost the game! Better luck next time!`;

    choices.forEach((choice) => {
        choice.disabled = true;
    });
}

function resetGame() {
    roundDiv.innerText = "Choose!";

    choices.forEach((choice) => {
        choice.disabled = false;
    });

    player = 0;
    computer = 0;
    updateScores();
}

function playRound(pChoice, cChoice) {
    let verdict = "Analyzing round...";

    if (pChoice === cChoice) {
        verdict = "It's a tie!";
    } else if (pChoice === 'rock') {
        verdict = (cChoice === 'paper') 
            ? "You lose! Paper beats Rock." 
            : "You win! Rock beats Scissors.";
    } else if (pChoice === 'paper') {
        verdict = (cChoice === 'scissors') 
            ? "You lose! Scissors beats Paper." 
            : "You win! Paper beats Rock.";
    } else if (pChoice === 'scissors') {
        verdict = (cChoice === 'rock') 
            ? "You lose! Rock beats Scissors." 
            : "You win! Scissors beats Paper.";
    } else { // not valid choice
        verdict = "You didn't choose rock, paper or scissors.";
    }

    tally(verdict);
    updateScores();
    roundDiv.innerText = `${verdict}`;

    return (player > computer) ? player : computer;
}

choices.forEach((choice) => {
    choice.addEventListener('click', (ev) => {
        let pChoice = ev.target.dataset.value;
        let cChoice = getComputerChoice();
        let lead = playRound(pChoice, cChoice);

        if (lead === 5) {
            endGame();
        }
    });
});

reset.addEventListener('click', () => resetGame());