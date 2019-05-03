//Import our utility object for getting data
import formApi from './form-api.js';

//Reference all the DOM elements we need to update
const name = document.getElementById('name');
const registryReason = document.getElementById('registry-reason');
const lawfullyObtained = document.getElementById('lawfully-obtained');
const wandCore = document.getElementById('wand-core');
const wandWood = document.getElementById('wand-wood');
const wandLength = document.getElementById('wand-length');
const uniqueWandTraits = document.getElementById('unique-wand-traits');

//Get form name
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');

//Get our form data from the api
const form = formApi.get(id);

//No form filled out? no can do, head back to home page
if(!form) {
    window.location = './';
}
//Mediate data into the elements
name.textContent = form.name;
registryReason.textContent = form.registryReason.join(', ');
lawfullyObtained.textContent = form.lawfullyObtained;
wandCore.textContent = form.wandCore;
wandWood.textContent = form.wandWood;
wandLength.textContent = form.wandLength + ' inches';
uniqueWandTraits.textContent = form.uniqueWandTraits;