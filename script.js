// Your code goes here
// Get DOM elements
const form = document.querySelector('#name-form');
const input = document.querySelector('#user-input');
const response = document.querySelector('#computer-response');

// Define enemy list
const enemies = ['voldemort', 'palpatine', 'joker', 'lex', 'sauron'];

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  const userName = input.value.trim().toLowerCase(); // Normalize input

  // Check if the user is an enemy
  if (enemies.includes(userName)) {
    response.textContent = 'Go away!';
    response.className = 'enemy';
  } else {
    response.textContent = `Hello, ${input.value.trim()}!`;
    response.className = 'friend';
  }

  input.value = ''; // Clear input after submit
});