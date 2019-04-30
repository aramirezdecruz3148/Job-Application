import getForm from '../src/get-form.js';
const test = QUnit.test;

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

    //calling in my form data that I am using
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