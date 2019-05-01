const formApi = {
    save(form) {
    //get our form array
        const forms = formApi.getAll(); 
    //add this form to the array
        forms.push(form);
    //serialize to JSON
        const json = JSON.stringify(forms);
    //save to local storage
        localStorage.setItem('forms', json);
    },
    get() {
    //use get all to fetch forms
        const forms = formApi.getAll(); 
    //return it
        return forms[0];
    },
    getAll() {
    //get from local storage
        const json = localStorage.getItem('forms');
    //deserialize to object
        let forms = JSON.parse(json);
        if(!forms) {
            forms = [];
        }

        return forms;
    }
};

export default formApi;