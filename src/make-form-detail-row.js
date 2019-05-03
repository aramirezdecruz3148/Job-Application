function makeFormDetailRow(form) {
    const tr = document.createElement('tr');

    const nameCell = makeNameCell(form.name);
    const registryReasonCell = makeRegistryReasonCell(form.registryReason);
    const wandCoreCell = makeTextCell(form.wandCore);
    const wandWoodCell = makeTextCell(form.wandWood);

    tr.appendChild(nameCell);
    tr.appendChild(registryReasonCell);
    tr.appendChild(wandCoreCell);
    tr.appendChild(wandWoodCell);

    return tr;
}

function makeNameCell(name) {
    const nameCell = document.createElement('td');
    //Create an anchor link
    const link = document.createElement('a');
    //Create a search params instance
    const searchParams = new URLSearchParams();
    //Set the key as name and the value as the form.name
    searchParams.set('name', name);
    //Use the formatted search string as the end of the link href
    //ALSO this is where we are specifying the detination (list page) for our name link
    link.href = 'form-details.html?' + searchParams.toString();
    //Also use the form name as the display text for the link
    link.textContent = name;
    //Add the link to the name cell
    nameCell.appendChild(link);
    return nameCell;
}

function makeRegistryReasonCell(registryReason) {
    let registryReasonList = '';
    if(registryReasonList) {
        registryReasonList = registryReason.join(', ');
    }
    const cell = makeTextCell(registryReason);
    return cell;
}

function makeTextCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

export default makeFormDetailRow;