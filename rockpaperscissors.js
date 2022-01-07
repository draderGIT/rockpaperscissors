//The code below provides the computer's input for the game.

function computerPlay () {
    
    const moves = ['rock', 'paper', 'scissors'];
    const play = moves[Math.floor(Math.random() * moves.length)];

    return(play);
}

// The code below provides the game results.

function rpsPlay (playerSelection, computerSelection) {

    if (playerSelection == computerSelection)
        return('It\'s a TIE! Try again.');
    if (playerSelection == 'rock' && computerSelection =='paper')
        return('You LOSE! Paper beats Rock.');
    if (playerSelection == 'rock' && computerSelection == 'scissors')
        return('You WIN! Rock beats Scissors.');
    if (playerSelection == 'paper' && computerSelection == 'scissors')
        return('You LOSE! Scissors beats Paper.');
    if (playerSelection == 'paper' && computerSelection == 'rock')
        return('You WIN! Paper beats Rock.');
    if (playerSelection == 'scissors' && computerSelection == 'rock')
        return('You LOSE! Rock beats Scissors.');
    if (playerSelection == 'scissors' && computerSelection == 'paper')
        return('You WIN! Scissors beats Paper.');
    else
        return('You must choose rock, paper, or scissors.');
}

// The code below will play five rounds of the game.

function rpsGame () {
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        const computerSelection = computerPlay();

        console.log(rpsPlay(playerSelection, computerSelection));
    }
}

rpsGame ();