const elements = {
    username: "#user-name",
    password: {
        selector: "#password",
        locatorStrategy: 'css Selector',
    },
    btnSubmit: "#login-button",
};

const commands = [
    {
        /**cd 
        * Enters the given name & message into the left form fields
        * 
        * @param {String} name
        * @param {String} message
        */
        enterNameAndPassword(name, password){
            return this
                .setValue('@username', name)
                .setValue('@password', password);
        },
        submit(){
            return this.click('@btnSubmit');
        }
    }
];

module.exports = {
    elements: elements,
    commands: commands,
    url: function(){
        return `${this.api.launch_url}/Swag Labs/`;
    }
};
