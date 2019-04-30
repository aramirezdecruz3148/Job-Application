import formApi from '../src/form-api.js';
const test = QUnit.test;
QUnit.module('form api');


test('round-trip form data', (assert) => {
    // arrange
    const form = { name: 'spongebob' };
    // act
    formApi.save(form);
    const result = formApi.get();
    // assert
    assert.deepEqual(result, form);
});