import formApi from '../src/form-api.js';
const test = QUnit.test;
QUnit.module('form api');

formApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round-trip form data', (assert) => {
    testStorage.removeItem('forms');
    // arrange
    const form1 = { name: 'tester1' };
    const form2 = { name: 'tester2' };
    // act
    formApi.save(form1);
    formApi.save(form2);
    const result = formApi.get(form2.name);
    // assert
    assert.deepEqual(result, form2);
});

test('no applicants in local storage, returns an empty array', (assert) => {
    // arrange
    testStorage.removeItem('forms');
    const expected = [];
    // act
    const forms = formApi.getAll();
    // assert
    assert.deepEqual(forms, expected);
});

test('two saves return array with two items', (assert) => {
    testStorage.removeItem('forms');
    // arrange
    const form1 = { name: 'tester1' };
    const form2 = { name: 'tester2' };
    const expected = [form1, form2];

    formApi.save(form1);
    formApi.save(form2);

    // act
    const forms = formApi.getAll();

    // assert
    assert.deepEqual(forms, expected);
});