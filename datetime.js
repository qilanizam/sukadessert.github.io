// Function to update the date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const formattedDateTime = now.toLocaleString('en-US', options);
    dateTimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Call once immediately to display the current date and time when the page loads
updateDateTime();
