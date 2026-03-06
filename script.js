const rockButton = document.getElementById("Rock")
const paperButton = document.getElementById("Paper")
const scissorsButton = document.getElementById("Scissors")

rockButton.addEventListener("click", rockPaperScissors)
paperButton.addEventListener("click", rockPaperScissors)
scissorsButton.addEventListener("click", rockPaperScissors)

let playerWins = 0
let computerWins = 0

function rockPaperScissors(e) {
    const playersChoice = e.target.id
    console.log("Player has chosen: " + playersChoice);

    rps = ["Rock","Paper","Scissors"]
    const computersChoice = rps[Math.floor(Math.random()*3)]
    console.log("Computer has chosen: " + computersChoice)
    const resultsBG = document.getElementById("winnerBackground")

    if (playersChoice === computersChoice) {
        rpsWinner(playersChoice, computersChoice, "Tie")
        resultsBG.style.backgroundColor = "lightBlue"
    } else if (playersChoice === "Rock" && computersChoice === "Scissors"){
        playerWins++
        rpsWinner(playersChoice, computersChoice, "Player Wins")
        resultsBG.style.backgroundColor = "lightGreen"
    } else if (playersChoice === "Paper" && computersChoice === "Rock"){
        playerWins++
        rpsWinner(playersChoice, computersChoice, "Player Wins")
        resultsBG.style.backgroundColor = "lightGreen"
    } else if (playersChoice === "Scissors" && computersChoice === "Paper"){
        playerWins++
        rpsWinner(playersChoice, computersChoice, "Player Wins")
        resultsBG.style.backgroundColor = "lightGreen"
    } else {
        computerWins++
        rpsWinner(playersChoice, computersChoice, "Computer Wins")
        resultsBG.style.backgroundColor = "#ff6464"
    }
}

function rpsWinner (playersChoice, computersChoice, winner) {
    console.log(winner);

    document.getElementById("playerResult").innerText = `Player: ${playersChoice}`
    document.getElementById("computersResult").innerText = `Computer: ${computersChoice}`
    document.getElementById("summary").innerText = `The result is...`
    document.getElementById("winner").innerText = `${winner}`

    document.getElementById("playerWins").innerText = `Wins: ${playerWins}`
    document.getElementById("computerWins").innerText = `Wins: ${computerWins}`
}
