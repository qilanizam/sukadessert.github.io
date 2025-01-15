document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to the server

    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (username.trim() && password.trim() && message.trim()) {
        // Display success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');
        successMessage.textContent = `Thank you, ${username}, for registering! Your message: "${message}" has been received.`;
        
        // Clear form fields
        document.getElementById('registerForm').reset();
    } else {
        alert('Please fill in all the fields.');
    }
});
