const logger = require('./logger');
let FormPage;
let AddToCart;
let Checkout;

module.exports = {
    beforeEach: (browser) => {
        browser
            .url('https://www.saucedemo.com/')
            .maximizeWindow()
        
        FormPage = browser.page.FormPage();
    },

    // Login Fuctionality - Positive Test Case
    "Test Case 1: Verify Login Page-Should successfully fill out the login form using valid username and password": () => {
        
        // const FormPage = browser.page.FormPage();
        FormPage
            .navigate()
            .verify.title('Swag Labs')
            .enterNameAndPassword('standard_user','secret_sauce')
            .submit()
    },

    "Test Case 2: Verify Login Page-After successful login, the user is directed to the correct landing page/dashboard.": () => {
        
        FormPage
            .navigate()
            .verify.title('Swag Labs') // Verify that the title of the landing page is correct
            .enterNameAndPassword('standard_user', 'secret_sauce')
            .submit()

            //.verify.containsText('@lblLeftFormMessage:nth-child(1)','Thanks for contacting us')
            browser.expect.element('.header_secondary_container').text.to.contain('Products');
    },

    //Negative Test Case
    "Test Case 3: Verify Login Page-Should verify error message when the  form is not filled out and submitted": () => {
        FormPage
            .submit()
            .verify.containsText('.error-message-container.error', 
            'Epic sadface: Username is required')
    },

    //Negative Test case
    "Test Case 4: Verify Login Page-Should verify error message when the  form with correct username & incorrect password": () => {
        FormPage
            .enterNameAndPassword('standard_user','Virat@123')
            .submit()
            .verify.containsText('.error-message-container.error', 
            'Epic sadface: Username and password do not match any user in this service')
    },

    "Test Case 5: Verify Login Page-Should successfully fill out the login form using valid username and password": () => {
        
        // const FormPage = browser.page.FormPage();
        FormPage
            .navigate()
            .verify.title('Swag Labs')
            .enterNameAndPassword('standard_user','secret_sauce')
            .submit()
    },

    beforeEach: (browser) => {
        browser
            .url('https://www.saucedemo.com/')
            .maximizeWindow()
        
        FormPage = browser.page.FormPage();
        AddToCart = browser.page.AddToCart();
        Checkout = browser.page.Checkout();
    },
        
    "Test Case 1: Verify Product Page-Should successfully fill out the login form using valid username and password": () => {
        FormPage
            .enterNameAndPassword('standard_user','secret_sauce')
            .submit()
        AddToCart
            .waitForElementVisible('@productName', 1000) 
            .productName()
            .waitForElementVisible('@addToCartBtn', 1000)
            .submit()
            .backToProduct()
            .waitForElementVisible('@productName1', 1000)
            .productName1()
            .waitForElementVisible('@addToCartBtn1', 1000)
            .submitOne()
            .backToProduct()
            .assert.elementPresent('@productName');     
    },

    "Test Case 2: Verify Product button,add to cart, remove will executed properly": () => {
        FormPage
            .enterNameAndPassword('standard_user','secret_sauce')
            .submit()
        AddToCart
            .waitForElementVisible('@productName1', 1000)
            .productName1()
            .removeToCart()
            .submitOne()
            .backToProduct()  
            .addToCartlogo()  
            .assert.elementPresent('@addToCartLogo');  
    },
    "Test Case 3: Verify Checkout button successfully executed": () => {
        FormPage
            .enterNameAndPassword('standard_user','secret_sauce')
            .submit()
        Checkout
            .addToCartlogo()  
            .checkoutBtn()
            .enterInputs('Virat','Mishra','451332')
            .continueBtn()
            .extractTotalAmount(totalAmount => {
                logger.info('Total amount extracted:', totalAmount);
            })
            .finishBtn()
            .assert.containsText('.complete-header', 'Thank you for your order!')
            .expect.element('.complete-header').text.to.contain('Thank you for your order!');
    },

    after: (browser) => {
        logger.info('Test suite finished.');
        browser.end();
    },
};


