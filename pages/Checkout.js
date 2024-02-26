const logger = require('../test/logger');
const elements = {
    removeBtn: "#first-name",
    addToCartLogo: ".shopping_cart_link",
    checkout: "#checkout",
    firstname: "#first-name",
    lastname: "#last-name",
    postalCode:"#postal-code",
    continueB: "#continue",
    totalLabel: ".summary_info_label.summary_total_label",
    finish: "#finish"
};

const commands = [
    {
        removeProduct(){
            return this.click('@removeBtn')
        },
        addToCartlogo(){
            return this.click('@addToCartLogo')
        },
        checkoutBtn(){
            return this.click('@checkout')
        },
         /**cd 
        * Enters the given name & message into the left form fields
        * 
        * @param {String} firstname
        * @param {String} lastname
        * @param {String} postalCode
        */
        enterInputs(firstname, lastname, postalCode){
            return this
                .setValue('@firstname', firstname)
                .setValue('@lastname', lastname)
                .setValue('@postalCode' ,postalCode);
        },
        continueBtn(){
            return this.click('@continueB')
        },
         /** 
         * Extracts the total amount from the page
         */
        extractTotalAmount(callback) {
            return this.getText('@totalLabel', result => {
                if (result.status === 0) {
                    const totalAmount = result.value.trim();
                    console.log('Total amount:', totalAmount);
                    logger.info('Total amount:', totalAmount);
                    callback(totalAmount);
                } else {
                    console.error('Failed to extract total amount:', result);
                    callback(null);
                }
            });
        },
        finishBtn(){
            return this.click('@finish')
    
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
