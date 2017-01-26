
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Before, After}) => {

    Before((scenario, callback) => {
        console.log('Before start');
        setTimeout(() => {
            console.log('Before end');
            callback();
        }, 1000);
    });

    After((scenario, callback) => {
        console.log('After start');
        setTimeout(() => {
            console.log('After end');
            callback();
        }, 1000);
    });

    
});