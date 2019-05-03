import getForm from './get-form.js';
import formApi from './form-api.js';

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
    //replaced console log with a call to API object to save the API data
    formApi.save(form);
    //redirecting to the thank you page
    window.location = 'thank-you.html';
});

