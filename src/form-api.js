const formApi = {
    storage: localStorage,
    save(form) {
    //get our form array
        const forms = formApi.getAll(); 
    //add this form to the array
        forms.push(form);
    //serialize to JSON
        const json = JSON.stringify(forms);
    //save to local storage
        formApi.storage.setItem('forms', json);
    },
    get(name) {
    //use get all to fetch forms
        const forms = formApi.getAll(); 
    //return it
        for(let i = 0; i < forms.length; i++) {
            const form = forms[i];
            if(form.name === name) {
                return form;
            }
        }
    },
    getAll() {
    //get from local storage
        const json = formApi.storage.getItem('forms');
    //deserialize to object
        let forms = JSON.parse(json);
        if(!forms) {
            forms = [];
        }

        return forms;
    }
};

export default formApi;