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

    // 2. Interactive Counter Logic
    let count = 0;
    const counterValue = document.getElementById('counterValue');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');

    increaseBtn.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
        animateValue(counterValue);
    });

    decreaseBtn.addEventListener('click', () => {
        count--;
        counterValue.textContent = count;
        animateValue(counterValue);
    });

    // Helper function for a quick bounce animation when number changes
    function animateValue(element) {
        element.style.transform = 'scale(1.2)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 150);
    }

    // 3. Dynamic Background Vibe / Gradient Changer
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

});
