//Computer chooses random option
function getComputerChoice(){
    var rockPaperScissors = ["rock", "paper", "scissors"];
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

//Compare player's choice and computer's choice
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie Game!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose!";
    } else {
        return "You Win!";
    }
}

//Get player's choice and play five rounds
function playGame(){
    for(var i = 0; i < 5; i++){
        var computerSelection = getComputerChoice();
        var promptSelection = prompt("Rock, paper, or scissors");
        var playerSelection = promptSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();

 








