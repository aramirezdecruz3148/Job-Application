//Importing my formAPI utility object
import formAPI from './form-api.js';

//Reference the table body DOM element
const tBody = document.getElementById('forms');

//Get the applicants from the API object
const forms = formAPI.getAll();

//Loop the list of applicants
for(let i = 0; i < forms.length; i++) {
    const form = forms[i];
    const tr = document.createElement('tr');

    //For each applicant, construct a table row and append to the table body
    const nameCell = document.createElement('td');
    nameCell.textContent = form.name;
    tr.appendChild(nameCell);

    const registryReasonCell = document.createElement('td');
    let registryReasonList = '';
    if(form.registryReason) {
        registryReasonList = form.registryReason.join(', ');
    }
    registryReasonCell.textContent = registryReasonList;
    tr.appendChild(registryReasonCell);

    const wandCoreCell = document.createElement('td');
    wandCoreCell.textContent = form.wandCore;
    tr.appendChild(wandCoreCell);

    const wandWoodCell = document.createElement('td');
    wandWoodCell.textContent = form.wandWood;
    tr.appendChild(wandWoodCell);

    tBody.appendChild(tr);
}

