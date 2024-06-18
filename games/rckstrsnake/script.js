// Constants
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
const canvasSize = 400;
const snakeColor = '#4caf50';
const foodColor = '#f44336';

// Initial snake position
let snake = [{x: 200, y: 200}];
let dx = box;
let dy = 0;

// Initial food position
let food = {x: getRandomPosition(), y: getRandomPosition()};

// Event listeners
document.addEventListener('keydown', changeDirection);

// Main function to draw everything
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    // Draw snake
    ctx.fillStyle = snakeColor;
    snake.forEach(drawSnakePart);

    // Draw food
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x, food.y, box, box);

    // Move snake
    let head = {x: snake[0].x + dx, y: snake[0].y + dy};

    // Check if the snake eats food
    if (head.x === food.x && head.y === food.y) {
        snake.unshift(head); // Add new head
        food = {x: getRandomPosition(), y: getRandomPosition()}; // Place new food
    } else {
        snake.pop(); // Remove tail
        snake.unshift(head); // Add new head
    }

    // Check for collision with walls or itself
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize || checkCollision(head, snake.slice(1))) {
        clearInterval(game); // End game
        alert('Game Over!'); // Alert user
        location.reload(); // Reload page
    }
}

// Draw each part of the snake
function drawSnakePart(part) {
    ctx.fillRect(part.x, part.y, box, box);
}

// Function to change direction based on key press
function changeDirection(event) {
    const keyPressed = event.keyCode;
    if (keyPressed === 37 && dx !== box) { // Left arrow
        dx = -box;
        dy = 0;
    } else if (keyPressed === 38 && dy !== box) { // Up arrow
        dx = 0;
        dy = -box;
    } else if (keyPressed === 39 && dx !== -box) { // Right arrow
        dx = box;
        dy = 0;
    } else if (keyPressed === 40 && dy !== -box) { // Down arrow
        dx = 0;
        dy = box;
    }
}

// Function to get random position for food
function getRandomPosition() {
    return Math.floor(Math.random() * (canvasSize / box)) * box;
}

// Function to check if the snake collides with itself
function checkCollision(head, array) {
    return array.some(part => part.x === head.x && part.y === head.y);
}

// Start the game
let game = setInterval(draw, 100);
