
let won = 0;
let lost = 0;
let draw = 0;

const hands = {
    rock: "✊",
    paper: "✋",
    scissors: "✌"
};

function play(playerChoice) {
    const playerHand = document.getElementById("playerHand");
    const computerHand = document.getElementById("computerHand");

    playerHand.classList.add("shake");
    computerHand.classList.add("shake");

    setTimeout(() => {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        playerHand.textContent = hands[playerChoice];
        computerHand.textContent = hands[computerChoice];

        let result = "";

        if (playerChoice === computerChoice) {
            result = "Match Draw!";
            draw++;
        } 
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You Won!";
            won++;
        } 
        else {
            result = "You Lost!";
            lost++;
        }

        document.getElementById("result").textContent = result;
        updateScore();

        
        playerHand.classList.remove("shake");
        computerHand.classList.remove("shake");

    }, 600); 
}

function updateScore() {
    document.getElementById("won").textContent = won;
    document.getElementById("lost").textContent = lost;
    document.getElementById("draw").textContent = draw;
}

function resetGame() {
    document.getElementById("result").textContent = "Make your move!";
    document.getElementById("playerHand").textContent = "✊";
    document.getElementById("computerHand").textContent = "✊";
}
