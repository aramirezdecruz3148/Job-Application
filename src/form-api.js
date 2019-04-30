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

export default formApi;