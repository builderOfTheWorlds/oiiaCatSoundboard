// Load the sound file
const soundO = new Audio('o_sound.mp3'); // Replace with the actual path to your sound file

// Add event listener to the button
document.getElementById('button1').addEventListener('click', () => {
  soundO.currentTime = 0; // Reset the sound to the beginning
  soundO.play(); // Play the sound
});
