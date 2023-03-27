function getComputerChoice() {
    let a = "rock";
    let b = "scissors";
    let c = "paper";
    let d = Math.floor(Math.random() * 3);
    
    if (d == 0) {
        return a;
    } else if (d == 1) {
        return b;
    } else if (d == 2) {
        return c;
    } else {
        return;
    };
    
}

let computerSelection;
let playerSelection;



let playerScore=0, computerScore=0, tiedRounds = 0;

function round(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Please enter your choice:").toLowerCase; // input is turned into all lowercase
    if (playerSelection = `rock`) {
        switch(computerSelection) {
            case `rock`:
                alert("Tie!");
                tiedRounds += 1;
                break;
            case `paper`:
                alert("You win!");
                playerScore += 1;
                break;
            case `scissors`:
                alert("You lose!");
                computerScore += 1;
                break;
            default:
                alert("i did something wrong on the code lol");
        }
    } else if (playerSelection = `paper`) {
        switch(computerSelection) {
            case `paper`:
                alert("Tie!");
                tiedRounds += 1;
                break;
            case `scissors`:
                alert("You lose!");
                computerScore = computerScore + 1;
                break;
            case `rock`:
                alert("You win!");
                playerScore = playerScore + 1;
            default:
                alert("i did something wrong on the code lol");
        }
    } else if (playerSelection = `scissors`) {
        switch(computerSelection) {
            case `scissors`:
                alert("Tie!");
                tiedRounds += 1;
                break;
            case `rock`:
                alert("You lose!");
                computerScore += 1;
                break;
            case `paper`:
                alert("You win!");
                playerScore += 1;
            default:
                alert("i did something wrong on the code lol");
        }
    } else {
        alert("Did not enter choice.");
    };
    console.log(playerScore, computerScore, tiedRounds);
}

function game() {
    let i = 0;
    while (i < 5) {
        round(computerSelection, playerSelection);
        i++;
    };
    if (computerScore > playerScore || computerScore == 5 - tiedRounds - 1) {
        alert("You Lose! " + playerScore + " to " + computerScore);
    } else if (playerScore > computerScore || playerScore == 5 - tiedRounds - 1) {
        alert("You win! " + playerScore + " to " + computerScore);
    }
    else if (playerScore == computerScore) {
        alert ("Tie!");
    }
    console.log(tiedRounds);
};



game();

console.log(playerScore, computerScore, tiedRounds);