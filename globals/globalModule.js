const logger = require('../test/logger');
const fs = require('fs')

module.exports = {
    before: (done) => {
        logger.info('before');
        done();
    },
    after: (done) => {
        logger.info('after');
        done();
    },
    beforeEach: (browser , done) => {
        logger.info('before Each');
        browser.status(result =>{
            console.log(result.value)
            done()
        });
    },
    afterEach: (browser, done) => {
        logger.info('after each');
       console.log(browser.currentTest);
       done()
    },

    reporter: (results, done) => {
        fs.writeFile('testresults.json', JSON.stringify(results, null, '\t'), (err) => {
            if (err) throw err;

            console.log('report saved')
        });
    }
}
