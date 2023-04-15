

const score = { player: 0, computer: 0 };

// maybe you're supposed to put everything in the eventListener function?
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
    };
}




const btn = document.querySelectorAll('#btn');

if (score.computer != 5 && score.player != 5) {
    btn.forEach((item) => {
        item.addEventListener('click', (e) => {
            let computerSelection = getComputerChoice(), playerSelection = `${e.target.className}`;
            let isWinner; 

            function round(playerSelection, computerSelection) {
                if (playerSelection === computerSelection) {
                        isWinner = null;
                } else if (playerSelection === 'rock' && computerSelection === 'scissors' 
                        || playerSelection === 'scissors' && computerSelection === 'paper' 
                        || playerSelection === 'paper' && computerSelection === 'rock') {
                        
                        score.player++;
                        isWinner = true;
                } else if (playerSelection === 'rock' && computerSelection === 'paper' 
                        || playerSelection === 'scissors' && computerSelection === 'rock'
                        || playerSelection === 'paper' && computerSelection === 'scissors') {
                        
                        score.computer++;
                        isWinner = false;
                }
                const results = document.querySelector('#results');
                const msg = document.createElement('div');
                
                results.appendChild(msg);
                if (isWinner == true) {
                    msg.textContent += 'You Won!';
                    msg.style.color = 'green';
                } else if (isWinner == null) {
                    msg.textContent += 'Tied!';
                    msg.style.color = 'blue';
                } else {
                    msg.textContent += 'You Lost!';
                    msg.style.color = 'red';
                }
                msg.textContent += ' || ' + playerSelection + ' to ' + computerSelection + ' || Current Score: ' + score.player + ' ' + score.computer;
            }
        
            
            

            if (score.player < 5 && score.computer < 5) {
                round(playerSelection, computerSelection);
            } else {
                
                function determineWinner({player}, {computer}) {
                    if (player > computer) {
                        return 'player';
                    } else {
                        return 'computer';
                    }
                }
                    
                let winner = determineWinner(score, score)
                    
                const gameOver = document.querySelector('#overall-winner');
                gameOver.textContent = `${winner} wins!`;
                gameOver.style.textTransform = 'uppercase';
                gameOver.style.fontWeight = 'bold';
            }
        })
    })
    
} 


