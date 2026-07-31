// Wait for the HTML document to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Time-Based Greeting Feature
    const greetingBadge = document.getElementById('greetingBadge');
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
        greetingBadge.textContent = "☀️ Good Morning!";
    } else if (currentHour < 18) {
        greetingBadge.textContent = "🌤️ Good Afternoon!";
    } else {
        greetingBadge.textContent = "🌙 Good Evening!";
    }

    // 2. Dynamic Background Vibe / Gradient Changer
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Original Purple
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink Sunset
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Ocean Blue
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'  // Fresh Mint
    ];

    let currentGradientIndex = 0;

    themeToggleBtn.addEventListener('click', () => {
        currentGradientIndex = (currentGradientIndex + 1) % gradients.length;
        document.body.style.background = gradients[currentGradientIndex];
    });

    // 3. Mini-Game Logic ("Catch the Code") - Cross-Platform (Touch + Click)
    const startGameBtn = document.getElementById('startGameBtn');
    const gameTarget = document.getElementById('gameTarget');
    const gameOverlay = document.getElementById('gameOverlay');
    const overlayTitle = document.getElementById('overlayTitle');
    const overlaySub = document.getElementById('overlaySub');
    const scoreValue = document.getElementById('scoreValue');
    const timerValue = document.getElementById('timerValue');
    const gameArena = document.getElementById('gameArena');

    let score = 0;
    let timeLeft = 20;
    let gameInterval = null;

    startGameBtn.addEventListener('click', startGame);

    function startGame() {
        score = 0;
        timeLeft = 20;
        scoreValue.textContent = score;
        timerValue.textContent = timeLeft;
        
        gameOverlay.style.display = 'none';
        gameTarget.style.display = 'block';
        moveTarget();

        // Start countdown timer
        gameInterval = setInterval(() => {
            timeLeft--;
            timerValue.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function moveTarget() {
        if (timeLeft <= 0) return;

        // Calculate random positions bounded securely inside the arena
        const arenaWidth = gameArena.clientWidth - 80;
        const arenaHeight = gameArena.clientHeight - 40;
        
        const randomX = Math.max(10, Math.floor(Math.random() * arenaWidth));
        const randomY = Math.max(10, Math.floor(Math.random() * arenaHeight));

        gameTarget.style.left = `${randomX}px`;
        gameTarget.style.top = `${randomY}px`;
    }

    // Handles both mouse clicks and mobile finger taps instantly
    gameTarget.addEventListener('pointerdown', (e) => {
        e.preventDefault(); // Prevents layout double-taps zooming on mobile phones
        score++;
        scoreValue.textContent = score;
        moveTarget();
    });

    function endGame() {
        clearInterval(gameInterval);
        gameTarget.style.display = 'none';
        
        overlayTitle.textContent = "Game Over!";
        overlaySub.textContent = `You caught ${score} targets! Great reflexes.`;
        startGameBtn.textContent = "Play Again";
        gameOverlay.style.display = 'flex';
    }

});
