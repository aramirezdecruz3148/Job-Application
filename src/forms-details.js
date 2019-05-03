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
    //Name cell
    const nameCell = document.createElement('td');
    //Create an anchor link
    const link = document.createElement('a');
    //Create a search params instance
    const searchParams = new URLSearchParams();
    //Set the key as name and the value as the form.name
    searchParams.set('name', form.name);
    //Use the formatted search string as the end of the link href
    link.href = 'form.html?' + searchParams.toString();
    //Also use the applicant's name as the display text for the link
    link.textContent = form.name;
    //Add the link to the name cell
    nameCell.appendChild(link);
   
    tr.appendChild(nameCell);

    //Registry reason cell
    const registryReasonCell = document.createElement('td');
    let registryReasonList = '';
    if(form.registryReason) {
        registryReasonList = form.registryReason.join(', ');
    }
    registryReasonCell.textContent = registryReasonList;
    tr.appendChild(registryReasonCell);

    //Wand core cell
    const wandCoreCell = document.createElement('td');
    wandCoreCell.textContent = form.wandCore;
    tr.appendChild(wandCoreCell);

    //Wand wood cell
    const wandWoodCell = document.createElement('td');
    wandWoodCell.textContent = form.wandWood;
    tr.appendChild(wandWoodCell);

    tBody.appendChild(tr);
}

