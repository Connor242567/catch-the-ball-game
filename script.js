const gameContainer = document.getElementById('gameContainer');
const crosshair = document.getElementById('crosshair');
const target = document.getElementById('target');
const scoreBoard = document.getElementById('score');

let score = 0;

// Function to move the crosshair
document.addEventListener('mousemove', (e) => {
    const rect = gameContainer.getBoundingClientRect();
    crosshair.style.left = `${e.clientX - rect.left}px`;
    crosshair.style.top = `${e.clientY - rect.top}px`;
});

// Function to show a new target at a random position
function showTarget() {
    const rect = gameContainer.getBoundingClientRect();
    const targetX = Math.random() * (rect.width - 30); // 30 is the width of the target
    const targetY = Math.random() * (rect.height - 30); // 30 is the height of the target

    target.style.left = `${targetX}px`;
    target.style.top = `${targetY}px`;
    target.style.display = 'block'; // Show the target

    // Set a longer timeout to make it very slow
    setTimeout(() => {
        target.style.display = 'none'; // Hide the target after 5 seconds
        showTarget(); // Show another target
    }, 5000); // Increased timeout duration to 5000 milliseconds (5 seconds)
}

// Function to handle shooting
target.addEventListener('click', () => {
    score++;
    scoreBoard.innerText = score;
    target.style.display = 'none'; // Hide the target
    showTarget(); // Show a new target
});

// Start the game by showing the first target
showTarget();
