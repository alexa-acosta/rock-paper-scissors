function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function oneRound(player) {
    const playerChoice = (player.toLowerCase()).trim();
    const compChoice = getComputerChoice();
    let verdict = "Analyzing round...";

    if (playerChoice === compChoice) {
        verdict = "It's a tie!";
    } else if (playerChoice === 'rock') {
        verdict = (compChoice === 'paper') 
            ? "You lose! Paper beats Rock." 
            : "You win! Rock beats Scissors.";
    } else if (playerChoice === 'paper') {
        verdict = (compChoice === 'scissors') 
            ? "You lose! Scissors beats Paper." 
            : "You win! Paper beats Rock.";
    } else if (playerChoice === 'scissors') {
        verdict = (compChoice === 'rock') 
            ? "You lose! Rock beats Scissors." 
            : "You win! Scissors beats Paper.";
    } else { // not valid choice
        verdict = "You didn't choose rock, paper or scissors.";
    }

    return verdict;
}

function tally(verdict) {
    if (verdict.includes('win')) {
        return 1;
    } else if (verdict.includes('lose')) {
        return -1;
    } else {
        return 0;
    }
}

function game() {
    let playerTally = 0;
    let compTally = 0;

    for (let rounds = 0; rounds < 5; rounds++) {
        let player = prompt("Rock, paper or scissors?", getComputerChoice());
        let verdict = oneRound(player);
        let score = tally(verdict);

        if (score === 1) {
            playerTally++;
        } else if (score === -1) {
            compTally++;
        }

        console.log(verdict);
        console.log(`Player score: ${playerTally} ---- Computer score: ${compTally}`);
    }

    return "Thanks for playing!";
}