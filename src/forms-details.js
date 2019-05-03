//Importing my formAPI utility object and refactored functions
import formAPI from './form-api.js';
import makeFormDetailRow from './make-form-detail-row.js';

//Reference the table body DOM element
const tBody = document.getElementById('forms');

//Get the applicants from the API object
const forms = formAPI.getAll();

//Loop the list of applicants
for(let i = 0; i < forms.length; i++) {
    const form = forms[i];
    const tr = makeFormDetailRow(form);
    tBody.appendChild(tr);
}

