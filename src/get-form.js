function getForm(formData) {
    //converting my boolean and number values from strings to a number and boolean value
    const lawfullyObtained = formData.get('lawfully-obtained') === 'yes';
    const wandLength = parseInt(formData.get('wand-length'));

    //make object literal
    const form = {
        name: formData.get('name'),
        registryReason: formData.getAll('registry-reason'),
        lawfullyObtained: lawfullyObtained,
        wandCore: formData.get('wand-core'),
        wandWood: formData.get('wand-wood'),
        wandLength: wandLength,
        uniqueWandTraits: formData.get('unique-wand-traits')
    };
    return form;
}

export default getForm;