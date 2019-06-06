function computerPlay(){
    var rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
}

function oneRound(playerSelection, computerSelection){
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

function fiveRounds(){
    for(var i = 0; i < 5; i++){
        var computerSelection = computerPlay();
        var promptSelection = prompt("Rock, paper, or scissors");
        var playerSelection = promptSelection.toLowerCase();
        console.log(oneRound(playerSelection, computerSelection));
    }
}

fiveRounds();

 








