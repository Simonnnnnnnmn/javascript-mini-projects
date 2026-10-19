let playerPoints = 0;
let computerPoints = 0;
const playerDisplay = document.getElementById("playerChoicesDisplay");
const computerDisplay = document.getElementById("computerChoicesDisplay");
const resultDisplay = document.getElementById("result");
const choices = ["rock", "paper", "scissors"];
let result;


function playGame(playerChoice) {
    const computerChoices = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoices) {
        result = "TIE"
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = computerChoices === "scissors" ? "Player Wins" : "Computer Wins";
                break;
            case "paper":
                result = computerChoices === "rock" ? "Player Wins" : "Computer Wins";
                break;
            case "scissors":
                result = computerChoices === "paper" ? "Player Wins" : "Computer Wins";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoices}`;
    resultDisplay.textContent = `Result: ${result}`;

    resultDisplay.classList.remove("win", "lose");

    switch (result) {
        case "Player Wins":
            resultDisplay.classList.add("win");
            playerPoints++;
            document.getElementById("playerPoints").textContent 
                        = `Player Points: ${playerPoints}`;
            break;
        case "Computer Wins":
            resultDisplay.classList.add("lose");
            computerPoints++;
            document.getElementById("computerPoints").textContent = 
            `Computer Points: ${computerPoints}`;
            break;
    }
    
}