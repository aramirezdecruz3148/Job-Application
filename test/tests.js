const test = QUnit.test;

function getForm(formData) {
    const lawfullyObtained = formData.get('lawfully-obtained') === 'yes';
    const wandLength = parseInt(formData.get('wand-length'));

    //make object literal
    const applicant = {
        name: formData.get('name'),
        registryReason: formData.getAll('registry-reason'),
        lawfullyObtained: lawfullyObtained,
        wandCore: formData.get('wand-core'),
        wandWood: formData.get('wand-wood'),
        wandLength: wandLength,
        uniqueWandTraits: formData.get('unique-wand-traits')
    };
    return applicant;
}


test('creates applicant from form data', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Alex',
        registryReason: ['I am new to the country'],
        lawfullyObtained: true,
        wandCore: 'dragon heart string',
        wandWood: 'beech',
        wandLength: 12,
        uniqueWandTraits: 'My wand is fancy as hell.'
    };

    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('registry-reason', expected.registryReason);
    formData.set('lawfully-obtained', 'yes');
    formData.set('wand-core', expected.wandCore);
    formData.set('wand-wood', expected.wandWood);
    formData.set('wand-length', expected.wandLength);
    formData.set('unique-wand-traits', expected.uniqueWandTraits);
    //Act 
    // Call the function you're testing and set the result to a const
    const form = getForm(formData);

    //Assert
    assert.deepEqual(form, expected);
});