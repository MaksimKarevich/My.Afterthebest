module.exports = {

    '@tags': ['test'],
    before: function (browser) {
        console.log('Setting up... browser', typeof browser)
    },

    after: function (browser) {
        console.log('Closing down... browser', typeof browser)
    },

    'Admin register new User(Negative Tests)': function (browser) {
        const input = {
            username: 'admin@email.com',
            passwordLogin: 'QWE123qwe',
            nickname: nickname ,
            email: nickname + '@' + emailDomain,
            password: '111111aA',
            phoneNumber: '123123123',
            address: 'lorem ipsum',
        };

        const emailDomain = 'test.com';
        const nickname = 'test'+ Date.now();

        browser
        //Navigate to profile
            .url('https://afterthebest.com/auth/login')
            .waitForElementVisible('.card.p-4', 2000, false, function () {}, 'Login form is visible')
            .setValue('input[placeholder=Username]', input.username)
            .setValue('input[placeholder=Password]', input.passwordLogin)
            .click('button[type=submit].btn.px-4')
            .waitForElementVisible('.navbar-brand-full', 2000, false, function () {}, 'Website Logo is visible')
            .click('section li:nth-child(2)')
            .waitForElementVisible(".btn.btn-primary", 2000, false, function () {}, 'New user button is displayed')
            .assert.urlContains('/users', 'The Users page is open')
            .click('.btn.btn-primary')
            .waitForElementVisible('.btn-primary.btn-md', 2000, false, function () {}, 'Create user button is displayed')
            .assert.urlContains('/users/new', 'The Users/New page is open')
        //empty form
            .click('.btn-primary.btn-md')
            .assert.elementPresent('.error-message')
            .assert.containsText('.error-message', '2 validation errors detected: Value at \'username\' failed to satisfy constraint: Member must satisfy regular expression pattern: [\\p{L}\\p{M}\\p{S}\\p{N}\\p{P}]+; Value at \'username\' failed to satisfy constraint: Member must have length greater than or equal to 1')
            .end()
    },
};
