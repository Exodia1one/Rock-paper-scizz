function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let shuffle = Math.floor(Math.random() * options.length);
    return options[shuffle];
}
function game() {
    let compWins = 0;
    let playerWins = 0;
    for (round = 0; round < 5; round++) {
        function singleRound(playerSelection, computerSelection) {
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
                /*let compWins = 0;
                let playerWins = 0;*/
                if (playerSelection == "rock" && computerSelection == "paper") {
                    compWins++;
                    return "You lose! Paper beats rock";
                } else if (playerSelection == "scissors" && computerSelection == "paper") {
                    playerWins++;
                    return "You win! Scissors beats paper";
                } else if (playerSelection == "paper" && computerSelection == "scissors") {
                    compWins++;
                    return "You lose! Scissors beats paper";
                } else if (playerSelection == "scissors" && computerSelection == "rock") {
                    compWins++;
                    return "You lose! Rock beats scissors";
                } else if (playerSelection == "rock" && computerSelection == "scissors") {
                    playerWins++;
                    return "You win! Rock beats scissors";
                } else if (playerSelection == "paper" && computerSelection == "rock") {
                    playerWins++;
                    return "You win! Rocks beats paper";
                } else {
                    return "It's a Tie!";
                }
            } else {
                return "Invalid Input";
            }
        }
        let original_selec = prompt("Rock, Paper, Scissor, Shoot!");
        let playerSelection = original_selec.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(singleRound(playerSelection, computerSelection));
        console.log(`${playerWins} - ${compWins}`);
    }
    if (playerWins > compWins) {
        console.log("You Win!");
    } else if (playerWins < compWins) {
        console.log("GAME OVER!");
    } else {
        console.log("DRAW!");
    }
}

game();