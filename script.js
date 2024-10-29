// Variables for game elements
const player = document.getElementById("player");
const ball = document.getElementById("ball");
const scoreBoard = document.getElementById("score");

let score = 0;
let ballSpeed = 2;
let gameInterval;

// Set initial player position
let playerPos = 125;
const playerSpeed = 15;

// Listen for keypresses to move the player
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && playerPos > 0) {
        playerPos -= playerSpeed;
    } else if (e.key === "ArrowRight" && playerPos < 250) {
        playerPos += playerSpeed;
    }
    player.style.left = playerPos + "px";
});

// Start the game
function startGame() {
    let ballPos = Math.floor(Math.random() * 270);
    let ballY = 0;

    ball.style.left = ballPos + "px";
    ball.style.top = ballY + "px";

    // Ball falling animation
    gameInterval = setInterval(() => {
        ballY += ballSpeed;
        ball.style.top = ballY + "px";

        // Check for collision with player
        if (ballY >= 450 && ballY <= 500 && Math.abs(ballPos - playerPos) < 50) {
            score++;
            scoreBoard.innerText = score;
            resetBall();
        } else if (ballY > 500) {
            resetBall();
        }

        // Increase ball speed over time
        if (score > 0 && score % 5 === 0) {
            ballSpeed += 0.2;
        }
    }, 20);
}

// Reset ball position after catching or missing
function resetBall() {
    ballY = 0;
    ballPos = Math.floor(Math.random() * 270);
    ball.style.left = ballPos + "px";
}

// Start the game when the page loads
startGame();
