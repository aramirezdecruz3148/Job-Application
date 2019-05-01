//import our utility object for getting data
import formApi from './form-api.js';

//reference all the DOM elements we need to update
const name = document.getElementById('name');
const registryReason = document.getElementById('registry-reason');
const lawfullyObtained = document.getElementById('lawfully-obtained');
const wandCore = document.getElementById('wand-core');
const wandWood = document.getElementById('wand-wood');
const wandLength = document.getElementById('wand-length');
const uniqueWandTraits = document.getElementById('unique-wand-traits');

//get our applicant data from the api
const form = formApi.get();
console.log(form);

//no applicant? no can do, head back to home page
if(!form) {
    window.location = './';
}
//mediate data into the elements
name.textContent = form.name;
registryReason.textContent = form.registryReason;
lawfullyObtained.textContent = form.lawfullyObtained;
wandCore.textContent = form.wandCore;
wandWood.textContent = form.wandWood;
wandLength.textContent = form.wandLength + ' inches';
uniqueWandTraits.textContent = form.uniqueWandTraits;