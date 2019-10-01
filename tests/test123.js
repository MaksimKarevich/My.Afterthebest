module.exports = {

    '@tags': ['test'],
    before: function (browser) {
        console.log('Setting up... browser', typeof browser)
    },

    after: function (browser) {
        console.log('Closing down... browser', typeof browser)
    },

    'Checkbox': function(browser) {

        browser
            .url('https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent')
            .click('.s-checkbox#opt-in')
            .assert.visible('.s-checkbox#opt-in:checked')
            .click('.s-checkbox#opt-in')
            .assert.visible('.s-checkbox#opt-in:not(:checked)')
            // .assert.visible('.s-checkbox#opt-in:not(:checked)')
            //.click('.s-checkbox#opt-in')
            .assert.visible('.s-checkbox#opt-in:checked')
            // .assert.visible('.s-checkbox#opt-in:checked')
    },
};


