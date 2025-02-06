// script.js
function updateTime() {
    const timeElement = document.getElementById('time');
    const ampmElement = document.getElementById('ampm');

    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
    hours = hours % 12 || 12;

  // Update the time display
    timeElement.textContent = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
    ampmElement.textContent = ampm;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the clock immediately
updateTime();