//Set Initial Scores and Display Them
var playerScore = 0;
var computerScore = 0;
document.getElementById('computerScore').textContent = computerScore;
document.getElementById('playerScore').textContent = playerScore;

//Put all buttons on the page into the buttons constant
const buttons = document.querySelectorAll('button');

//Computer Randomly Generates Rock, Paper, or Scissors
function getComputerChoice(){
    var rockPaperScissors = ["rock", "paper", "scissors"];
    return computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

//A single round 
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "Tie Game!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore = computerScore + 1;
        scoreCheck(playerScore, computerScore);
        document.getElementById('computerScore').textContent = computerScore;
        return "You Lose!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore = computerScore + 1;
        scoreCheck(playerScore, computerScore);
        document.getElementById('computerScore').textContent = computerScore;
        return "You Lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore = computerScore + 1;
        scoreCheck(playerScore, computerScore);
        document.getElementById('computerScore').textContent = computerScore;
        return "You Lose!";
    } else {
        playerScore= playerScore + 1 ;
        scoreCheck(playerScore, computerScore);
        document.getElementById('playerScore').textContent = playerScore;
        return "You Win!";
    }
}


//Use buttons to make player choice and start game 
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        var playerSelection = button.id;
        var computerSelection = getComputerChoice();
        document.getElementById('computerChoice').textContent = computerSelection;
        playRound(playerSelection, computerSelection);
    });
});

//Check if anyone has won yet
function scoreCheck(playerScore, computerScore){
    if(playerScore == 3){
        alert("You Won!");
        location.reload();
    } else if(computerScore == 3){
        alert("You Lost!")
        location.reload();
    }
}




