const dorothy = document.querySelector('.explose');

// Function to move Dorothy to a new position
function moveexplose() {
    explose.style.left = '250px';  // New left position
    explose.style.top = '240px';   // New top position
}

// Optional: Trigger the movement after a delay (e.g., 2 seconds)
setTimeout(moveexplose, 2000);