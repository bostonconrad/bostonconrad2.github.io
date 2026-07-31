// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button element from our HTML using its ID
    const colorButton = document.getElementById('colorButton');
    
    // Define an array of fun background colors
    const colors = ['#e3f2fd', '#e8f5e9', '#fff3e0', '#f3e5f5', '#ffebee'];
    
    // Add an event listener that listens for a 'click' event on the button
    colorButton.addEventListener('click', () => {
        // Pick a random color from our array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the body's background color to the randomly selected color
        document.body.style.backgroundColor = randomColor;
    });

});
