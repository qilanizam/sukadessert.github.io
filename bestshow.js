// Select the necessary elements
const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 1; // Start at the first real slide
const autoplayInterval = 3000; // 3 seconds
let autoplay;

// Ensure all slides have consistent width
const slidesArray = Array.from(slides.children);
const slideWidth = slidesArray[0].offsetWidth;

// Clone the first and last slides for seamless looping
const firstSlide = slidesArray[0].cloneNode(true);
const lastSlide = slidesArray[slidesArray.length - 1].cloneNode(true);
slides.appendChild(firstSlide);
slides.insertBefore(lastSlide, slides.firstChild);

// Adjust the transform to account for the cloned slide
slides.style.transform = `translateX(-${index * slideWidth}px)`;

// Function to move to the next slide
const moveToNextSlide = () => {
    index++;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * slideWidth}px)`;

    if (index === slides.children.length - 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            index = 1;
            slides.style.transform = `translateX(-${index * slideWidth}px)`;
        }, 500); // Match the transition duration
    }
};

// Function to move to the previous slide
const moveToPrevSlide = () => {
    index--;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * slideWidth}px)`;

    if (index === 0) {
        setTimeout(() => {
            slides.style.transition = 'none';
            index = slides.children.length - 2;
            slides.style.transform = `translateX(-${index * slideWidth}px)`;
        }, 500); // Match the transition duration
    }
};

// Autoplay setup
const startAutoplay = () => {
    autoplay = setInterval(moveToNextSlide, autoplayInterval);
};

const stopAutoplay = () => {
    clearInterval(autoplay);
};

// Event listeners for navigation buttons
prev.addEventListener('click', () => {
    stopAutoplay();
    moveToPrevSlide();
    startAutoplay();
});

next.addEventListener('click', () => {
    stopAutoplay();
    moveToNextSlide();
    startAutoplay();
});

// Pause autoplay on hover
slides.addEventListener('mouseenter', stopAutoplay);
slides.addEventListener('mouseleave', startAutoplay);

// Start autoplay when the page loads
startAutoplay();
