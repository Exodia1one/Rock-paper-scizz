const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const container = document.querySelector('body');
const scoreboard = document.querySelector('.score');
const playerScore = document.querySelector('#player');
const compScore = document.querySelector('#computer');
let gameIsOver = false;


function win() {
    playerWins++;
    playerScore.textContent = playerWins;
    result.style['margin-top'] = '3%';
    result.style['font-size'] = '22px';
}
function lose() {
    compWins++;
    compScore.textContent = compWins;
    result.style['margin-top'] = '3%';
    result.style['font-size'] = '22px';
}
function draw() {
    console.log("draw");
    result.textContent = "It's a Tie!";
    result.style['margin-top'] = '3%';
    result.style['font-size'] = '22px';
}
let playerWins = 0;
let compWins = 0;
let result = document.createElement('div');
result.textContent = '';
container.appendChild(result);
function singleRound(playerSelection) {
    const computerSelection = getComputerChoice();
    while (compWins < 5 && playerWins < 5) {
        if (playerSelection == "rock" && computerSelection == "paper") {
            lose();
            result.textContent = "You lose! Paper beats rock";
            return;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            win();
            result.textContent = "You win! Scissors beats paper";
            return;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            lose();
            result.textContent = "You lose! Scissors beats paper";
            return;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            lose();
            result.textContent = "You lose! Rock beats scissors";
            return;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            win();
            result.textContent = "You win! Rock beats scissors";
            return;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            win();
            result.textContent = "You win! Rock beats paper";
            return;
        } else {
            draw();
            return;
        }
    
    }
    if (compWins == 5 || playerWins == 5) {
        gameIsOver = true;
        container.textContent = '';
        console.log(compWins, playerWins);
        let finalMessage = document.createElement('div');
        if (playerWins > compWins) {
            finalMessage.textContent = "YOU WIN!!"
            finalMessage.setAttribute('style', 'font-size: 55px; margin-top: 20%; font-weight: 800;');
            container.appendChild(finalMessage);
        } else if (compWins > playerWins) {
            finalMessage.textContent = "GAME OVER"
            finalMessage.setAttribute('style', 'font-size: 55px; margin-top: 20%; font-weight: 800;');
            container.appendChild(finalMessage);
        }
    } else {
        gameIsOver = false;
    }
    
}

function main() {
    rock.addEventListener('click', function() {
        singleRound("rock");
    })
    paper.addEventListener('click', function() {
        singleRound("paper");
    })
    scissors.addEventListener('click', function() {
        singleRound('scissors');
    })
}
main();
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let shuffle = Math.floor(Math.random() * options.length);
    return options[shuffle];
}

