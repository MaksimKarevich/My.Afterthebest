module.exports = {

  '@tags': ['login', 'all'],
  before: function (browser) {
    console.log('Setting up... browser', typeof browser)
  },

  after: function (browser) {
    console.log('Closing down... browser', typeof browser)
  },

  'Login Negative Tests': function(browser) {
    browser
      .url('https://afterthebest.com/auth/login') //open URL
      .waitForElementVisible('.app', 2000)
      .assert.elementPresent('.col-6')
      .useXpath()
      .assert.attributeContains('//button[text()="Login"]', 'class', 'disabled')
      .useCss()
      .assert.urlEquals('https://afterthebest.com/auth/login')
      //Boundaries values
      .setValue('input[placeholder=Username]', '1')
      .setValue('input[placeholder=Password]', '1')
      .assert.attributeContains('button[type=submit].btn.px-4', 'class', 'disabled')
      .assert.elementPresent('.error-message')
      .assert.containsText('.error-message', 'Required password containing at least: number, uppercase and lowercase letter, 6 characters')
      .clearValue('input[placeholder=Username]')
      .clearValue('input[placeholder=Password]')

      .setValue('input[placeholder=Username]', '1')
      .setValue('input[placeholder=Password]', '111Aa')
      .assert.attributeContains('button[type=submit].btn.px-4', 'class', 'disabled')
      .assert.elementPresent('.error-message')
      .assert.containsText('.error-message', 'Required password containing at least: number, uppercase and lowercase letter, 6 characters')
      .clearValue('input[placeholder=Username]')
      .clearValue('input[placeholder=Password]')

      .setValue('input[placeholder=Username]', '1')
      .setValue('input[placeholder=Password]', '111111')
      .assert.attributeContains('button[type=submit].btn.px-4', 'class', 'disabled')
      .assert.elementPresent('.error-message')
      .assert.containsText('.error-message', 'Required password containing at least: number, uppercase and lowercase letter, 6 characters')
      .clearValue('input[placeholder=Username]')
      .clearValue('input[placeholder=Password]')

      .setValue('input[placeholder=Username]', '1')
      .setValue('input[placeholder=Password]', '1111AA')
      .assert.attributeContains('button[type=submit].btn.px-4', 'class', 'disabled')
      .assert.elementPresent('.error-message')
      .assert.containsText('.error-message', 'Required password containing at least: number, uppercase and lowercase letter, 6 characters')
      .clearValue('input[placeholder=Username]')
      .clearValue('input[placeholder=Password]')

      .setValue('input[placeholder=Username]', '1')
      .setValue('input[placeholder=Password]', '1111aa')
      .assert.attributeContains('button[type=submit].btn.px-4', 'class', 'disabled')
      .assert.elementPresent('.error-message')
      .assert.containsText('.error-message', 'Required password containing at least: number, uppercase and lowercase letter, 6 characters')
      .end()
  },
};
