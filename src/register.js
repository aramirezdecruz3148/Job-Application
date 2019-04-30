//selecting nodes I want to use
const wandRegistrationForm = document.getElementById('wand-resitration-form');

// echo range in numeric display
const wandRange = document.getElementById('wand-length');
const rangeDisplay = document.getElementById('range-display');

wandRange.addEventListener('change', function() {
    rangeDisplay.textContent = wandRange.value;
});

//main event listener
wandRegistrationForm.addEventListener('submit', (event) => {
    event.preventDefault();   
    
});