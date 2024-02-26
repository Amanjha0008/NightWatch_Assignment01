const elements = {
    productName: "#item_4_title_link",
    productName1: "#item_0_title_link",
    addToCartBtn: "#add-to-cart-sauce-labs-backpack",
    addToCartBtn1:"#add-to-cart-sauce-labs-bike-light",
    backToProductBtn: "#back-to-products",
    addToCartLogo: ".shopping_cart_link",
    addToRemove: "#remove-sauce-labs-bike-light"

};

const commands = [
    {
        productName(){
            return this.click('@productName')
        },
        productName1(){
            return this.click('@productName1')
        },
        submit(){
            return this.click('@addToCartBtn');
        },
        submitOne(){
            return this.click('@addToCartBtn1');
        },
        backToProduct(){
            return this.click('@backToProductBtn');
        },
        
        addToCartlogo(){
            return this.click('@addToCartLogo')
        },
        removeToCart(){
            return this.click('@addToRemove')
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
