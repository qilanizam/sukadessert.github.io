// Ensure the audio plays automatically, depending on browser policies
const audio = document.getElementById('autoplayAudio');
document.addEventListener('DOMContentLoaded', () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Autoplay prevented:', error);
        });
    }
});