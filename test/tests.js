const test = QUnit.test;

test('creates applicant from form data', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const expected = {};

    const formData = new FormData();
    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getApplicant(formData);
    
    //Assert
    assert.deepEqual(applicant, expected);
});