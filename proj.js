const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const container = document.querySelector('body');
const scoreboard = document.querySelector('.score');
const playerScore = document.querySelector('#player');
const compScore = document.querySelector('#computer');
const choices = document.querySelector('.choices');
let gameIsOver = false;
let globalplayer;
let globalcomp;

function capitalize(string) {//a function used to capitalize the player/comp selection
    caps = string.slice(0, 1);
    new_caps = caps.toUpperCase();
    proto_rest_of_string = string.slice(1);
    rest_of_string = proto_rest_of_string.toLowerCase();
    return (final = new_caps + rest_of_string);
}
function win() {//the page change results of a win
    playerWins++;
    playerchoice.textContent = capitalize(globalplayer);
    compchoice.textContent = capitalize(globalcomp);
    playerScore.textContent = playerWins;
    result.style['margin-top'] = '3%';
    result.style['font-size'] = '22px';
}
function lose() {//the page change results of a loss
    compWins++;
    playerchoice.textContent = capitalize(globalplayer);
    compchoice.textContent = capitalize(globalcomp);
    compScore.textContent = compWins;
    result.style['margin-top'] = '3%';
    result.style['font-size'] = '22px';
}
function draw() { //the page change results of a draw
    playerchoice.textContent = capitalize(globalplayer);
    compchoice.textContent = capitalize(globalcomp);
    result.textContent = "It's a Tie!";
    result.style['margin-top'] = '3%';
    result.style['font-size'] = '22px';
}
function endGame() {
    setTimeout(function() {
        if (compWins == 5 || playerWins == 5) {
            gameIsOver = true;
            container.textContent = '';
            console.log(compWins, playerWins);
            let finalMessage = document.createElement('div');
            let finalScore = document.createElement('div');
            finalScore.classList.add('finalscore');
            finalScore.textContent = `${playerWins} - ${compWins}`;
            container.appendChild(finalMessage);
            container.appendChild(finalScore);
            if (playerWins > compWins) {
                finalMessage.textContent = "YOU WIN!!"
                finalMessage.setAttribute('style', 'font-size: 55px; margin-top: 20%; font-weight: 800;');
            } else if (compWins > playerWins) {
                finalMessage.textContent = "GAME OVER"
                finalMessage.setAttribute('style', 'font-size: 55px; margin-top: 20%; font-weight: 800;');
            }
        } else {
            gameIsOver = false;
        }
    }, 2000);
}
let playerWins = 0; //sets the initiator for the while loop
let compWins = 0;
let playerchoice = document.createElement('li');//creates a div for the player weapon choice
playerchoice.textContent = '';
playerchoice.style['font-size'] = '18px';
let compchoice = document.createElement('li');//creates a div for the computer weapon choice
compchoice.textContent = '';
compchoice.style['font-size'] = '18px';
choices.appendChild(playerchoice);
choices.appendChild(compchoice);
let result = document.createElement('div');//creates a div for the result message of the round
result.textContent = '';
container.appendChild(result);
function singleRound(playerSelection) {
    const computerSelection = getComputerChoice();
    //setTimeout(endGame, 2000);//assigns random value to computerSelection
    while (!(compWins == 5 || playerWins == 5)) {
        endGame();
        gameIsOver = false;
        globalplayer = playerSelection; //allows parameters to have global values so it can be selected in other functions
        globalcomp = computerSelection;
        
        //all the different conditions for wins, losses, and draws
        if (playerSelection == "rock" && computerSelection == "paper") {
            lose();
            result.textContent = "You lose! If only you had a diamond sword";
            return;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            win();
            result.textContent = "You win! Those are some sharp shears you got";
            return;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            lose();
            result.textContent = "You lose! Are you trying paper cut your opponent??";
            return;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            lose();
            result.textContent = "You lose! You'll need diamond shears to cut diamond";
            return;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            win();
            result.textContent = "You win! The computer's shears shattered upon impact";
            return;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            win();
            result.textContent = "You win! You paper cut your opponent and stole their diamonds";
            return;
        } else {
            draw();
            return;
        }
    }
}
    //setTimeout(endGame, 3000);//makes end game screen popup after 2 sec

function main() {//the function that kicks off from the click of the options
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
main();//activates the functionality of the clicking to start the game
function getComputerChoice() {//generates a random option from rock paper and scissors
    let options = ["rock", "paper", "scissors"];
    let shuffle = Math.floor(Math.random() * options.length);
    return options[shuffle];
}

