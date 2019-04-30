// import formApi from '../src/form-api.js';
const test = QUnit.test;
QUnit.module('form api');

const formApi = {
    save(form) {
    //serialize to JSON
        const json = JSON.stringify(form);
    //save to local storage
        localStorage.setItem('form', json);
    },
    get() {
    //get from local storage
        const json = localStorage.getItem('form');
    //deserialize to object
        const form = JSON.parse(json);
    //return it
        return form;
    }
};

test('round-trip form data', (assert) => {
    // arrange
    const form = { name: 'spongebob' };
    // act
    formApi.save(form);
    const result = formApi.get();
    // assert
    assert.deepEqual(result, form);
});