import getForm from './get-form.js';
//selecting nodes I want to use
const wandRegistrationForm = document.getElementById('wand-registration-form');

// echo range for wand length in numeric display
const wandRange = document.getElementById('wand-length');
const rangeDisplay = document.getElementById('range-display');

wandRange.addEventListener('change', function() {
    rangeDisplay.textContent = wandRange.value;
});

//main event listener
wandRegistrationForm.addEventListener('submit', (event) => {
    event.preventDefault();   
    const formData = new FormData (wandRegistrationForm);
    const form = getForm(formData);
    console.log(form);
});