module.exports = {

    '@tags': ['test'],
    before: function (browser) {
        console.log('Setting up... browser', typeof browser)
    },

    after: function (browser) {
        console.log('Closing down... browser', typeof browser)
    },

    'Checkbox': function(browser) {
        const input = {
            username: 'samehowi@getbreathtaking.com',
            password: 'Qwe123',
        };

        browser
            .url('https://afterthebest.com/auth/login')
            .waitForElementVisible('.card.p-4', 2000, false, function () {}, 'Login form is visible')
            .setValue('input[placeholder=Username]', input.username)
            .setValue('input[placeholder=Password]', input.password)
            .click('button[type=submit].btn.px-4')
            .waitForElementVisible('.navbar-brand-full', 3000, false, function () {}, 'Website Logo is visible')
            .click('.nav-item:nth-child(3)')
            .waitForElementVisible('.mb-0', 5000, false, function () {}, "My Filters title is visible")
            .assert.attributeContains('.btn.btn-danger.btn-sm', 'class', 'disabled', 'Button is disabled')
            .useXpath()
            .click('//button[@class="btn btn-primary btn-sm"]')
            .useCss()
            .waitForElementVisible(".modal-content", 5000, false, function () {}, 'Advanced Search dialog window is displayed')
         //Checkboxes(Contract)
            .click(':nth-child(9) :nth-child(2) :nth-child(1) label.custom-control-label')
            .assert.elementPresent(':nth-child(9) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)')
            .assert.elementNotPresent('dsadadsada:nth-child(9) :nth-child(3) :nth-child(1) label.custom-control-label:checked')
            .click(':nth-child(9) :nth-child(3) :nth-child(1) label.custom-control-label')
            //.assert.visible(':nth-child(9) :nth-child(3) :nth-child(1) label.custom-control-label')
            .assert.visible(':nth-child(9) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)')
         //Checkboxes(Text Int)
            .click(':nth-child(10) :nth-child(2) :nth-child(1) label.custom-control-label')
            //.assert.visible(':nth-child(10) :nth-child(2) :nth-child(1) label.custom-control-label:checked')
            .assert.visible(':nth-child(10) :nth-child(3) :nth-child(1) label.custom-control-label:not(:checked)')
            .click(':nth-child(10) :nth-child(3) :nth-child(1) label.custom-control-label')
            //.assert.visible(':nth-child(10) :nth-child(3) :nth-child(1) label.custom-control-label:checked')
            .assert.visible(':nth-child(10) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)')
        //Checkboxes(Text Int)
            .click(':nth-child(11) :nth-child(2) :nth-child(1) label.custom-control-label')
            //.assert.visible(':nth-child(11) :nth-child(2) :nth-child(1) label.custom-control-label:checked')
            .assert.visible(':nth-child(11) :nth-child(3) :nth-child(1) label.custom-control-label:not(:checked)')
            .click(':nth-child(11) :nth-child(3) :nth-child(1) label.custom-control-label')
            //.assert.visible(':nth-child(11) :nth-child(3) :nth-child(1) label.custom-control-label:checked')
            .assert.visible(':nth-child(11) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)')
    .end()
    },
};