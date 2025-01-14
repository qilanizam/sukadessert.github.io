// JavaScript for Hero Section Background Slideshow
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero");
    const images = [
        "https://wallpapercave.com/wp/wp3192502.jpg",
        "https://wallpapercave.com/wp/wp3192480.jpg",
        "https://wallpapercave.com/wp/wp3057104.jpg"
    ];
    let currentIndex = 0;

    // Function to change background image
    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length; // Loop to the next image
    }

    // Set initial background image
    changeBackground();

    // Change image every 5 seconds
    setInterval(changeBackground, 5000);
});
