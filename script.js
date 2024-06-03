const gameContainer = document.getElementById('game-container');
let scoreBoard = document.getElementById('score');
let timerBoard = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const gameTimeInput = document.getElementById('game-time');
let score = 0;
let time;
let gameInterval;
let triangleInterval;
let squareInterval;
let timer;

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomColor();
    circle.style.top = `${Math.random() * (gameContainer.clientHeight - 50)}px`;
    circle.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`;

    circle.addEventListener('click', () => {
        score++;
        scoreBoard.textContent = score;
        gameContainer.removeChild(circle);
    });

    gameContainer.appendChild(circle);

    setTimeout(() => {
        if (circle.parentElement) {
            gameContainer.removeChild(circle);
        }
    }, 2000);
}

function createTriangle() {
    const triangle = document.createElement('div');
    triangle.classList.add('triangle');
    triangle.style.top = `${Math.random() * (gameContainer.clientHeight - 50)}px`;
    triangle.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`;

    triangle.addEventListener('click', () => {
        score += 2;
        scoreBoard.textContent = score;
        gameContainer.removeChild(triangle);
    });

    gameContainer.appendChild(triangle);

    setTimeout(() => {
        if (triangle.parentElement) {
            gameContainer.removeChild(triangle);
        }
    }, 2000);
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.top = `${Math.random() * (gameContainer.clientHeight - 50)}px`;
    square.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`;

    square.addEventListener('click', () => {
        score += 3;
        scoreBoard.textContent = score;
        gameContainer.removeChild(square);
    });

    gameContainer.appendChild(square);

    setTimeout(() => {
        if (square.parentElement) {
            gameContainer.removeChild(square);
        }
    }, 2000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startGame() {
    resetGame();  // Reset game before starting
    score = 0;
    scoreBoard.textContent = score;
    time = parseInt(gameTimeInput.value, 10);
    timerBoard.textContent = time;

    gameInterval = setInterval(createCircle, 1000);
    triangleInterval = setInterval(createTriangle, 10000);
    squareInterval = setInterval(createSquare, 15000);
    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        time--;
        timerBoard.textContent = time;
        if (time <= 0) {
            clearInterval(timer);
            clearInterval(gameInterval);
            clearInterval(triangleInterval);
            clearInterval(squareInterval);
            alert('¡Tiempo terminado! Puntuación final: ' + score);
        }
    }, 1000);
}

function resetGame() {
    clearInterval(timer);
    clearInterval(gameInterval);
    clearInterval(triangleInterval);
    clearInterval(squareInterval);
    gameContainer.innerHTML = '<div id="score-board"><span>Puntuación: </span><span id="score">0</span></div><div id="timer-board"><span>Tiempo: </span><span id="timer">60</span></div>';
    scoreBoard = document.getElementById('score');
    timerBoard = document.getElementById('timer');
}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
