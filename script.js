// Load the sound file
// const soundO = new Audio('0_o.wav'); // Replace with the actual path to your sound file

const sounds = {
  button1: new Audio('0_o.wav'),
  button2: new Audio('1_i.wav'),
  button3: new Audio('2_i.wav'),
  button4: new Audio('3_a.wav'),
};






// // Add event listener to the button
// document.getElementById('button1').addEventListener('click', () => {
//   soundO.currentTime = 0; // Reset the sound to the beginning
//   soundO.play(); // Play the sound
// });


Object.keys(sounds).forEach((buttonId) => {
  document.getElementById(buttonId).addEventListener('click', () => {
    sounds[buttonId].currentTime = 0;
    sounds[buttonId].play();
  });
});


