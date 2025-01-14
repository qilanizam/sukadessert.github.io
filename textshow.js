// Array of text to display in the slideshow
const texts = [
    "Welcome to the menu of Suka Dessert!",
    "Tastier products",
    "Chocolate Heaven!",
    "Suka Dessert is the best!",
    "Thank you for visiting!"
];

let currentIndex = 0; // Starting index
const slideshowElement = document.getElementById("slideshow");
const interval = 3000; // Interval in milliseconds (3 seconds)

function updateSlideshow() {
    // Set the text of the slideshow element
    slideshowElement.textContent = texts[currentIndex];

    // Move to the next index, looping back if necessary
    currentIndex = (currentIndex + 1) % texts.length;
}

// Initialize the slideshow
updateSlideshow();
setInterval(updateSlideshow, interval);
