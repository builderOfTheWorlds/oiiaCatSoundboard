// Load the sound file
// const soundO = new Audio('0_o.wav'); // Replace with the actual path to your sound file

const sounds = {
  button1: new Audio('0.wav'),
  button2: new Audio('1.wav'),
  button3: new Audio('2.wav'),
  button4: new Audio('3.wav'),
  button4: new Audio('4.wav'),
  button5: new Audio('5.wav'),
  button6: new Audio('6.wav'),
  button7: new Audio('7.wav'),
  button8: new Audio('8.wav'),
  button9: new Audio('9.wav'),
  button10: new Audio('10.wav'),
  button11: new Audio('11.wav'),
  button12: new Audio('oiia.wav')

  
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


