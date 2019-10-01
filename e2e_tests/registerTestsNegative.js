module.exports = {
  "@tags": ["register", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
  },

  "Register Test Negative": function(browser) {
    const emailDomain = "test.com";
    const nickname = "test" + Date.now();
    const input = {
      nickname: nickname,
      password: "111111aA",
      phoneNumber: "123123123",
      address: "lorem ipsum"
    };

    browser
      .url("https://afterthebest.com/auth/register")
      .waitForElementVisible(".app", 2000)
      //Email input boundaries
      .setValue("input[placeholder=Email]", nickname)
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .setValue("input[placeholder=Email]", nickname + "@")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .setValue("input[placeholder=Email]", nickname + emailDomain)
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .setValue("input[placeholder=Email]", "@")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .setValue("input[placeholder=Email]", "@" + emailDomain)
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .setValue("input[placeholder=Email]", emailDomain)
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .setValue(
        "input[placeholder=Email]",
        nickname + " " + "@" + " " + emailDomain
      )
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "This is a required field and must be valid e-mail address"
      )

      .clearValue("input[placeholder=Email]")
      .setValue("input[placeholder=Email]", nickname + "@" + emailDomain)
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementNotPresent(".error-message")

      //Password input boundaries
      .setValue("input[placeholder=Password]", "1")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Required password containing at least: number, uppercase and lowercase letter, 6 characters"
      )

      .clearValue("input[placeholder=Password]")
      .setValue("input[placeholder=Password]", "111Aa")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Required password containing at least: number, uppercase and lowercase letter, 6 characters"
      )

      .clearValue("input[placeholder=Password]")
      .setValue("input[placeholder=Password]", "1111aa")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Required password containing at least: number, uppercase and lowercase letter, 6 characters"
      )

      .clearValue("input[placeholder=Password]")
      .setValue("input[placeholder=Password]", "1111AA")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Required password containing at least: number, uppercase and lowercase letter, 6 characters"
      )

      .clearValue("input[placeholder=Password]")
      .setValue("input[placeholder=Password]", "111111")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Required password containing at least: number, uppercase and lowercase letter, 6 characters"
      )

      .clearValue("input[placeholder=Password]")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(".error-message", "This is a required field")

      .clearValue("input[placeholder=Password]")
      .setValue("input[placeholder=Password]", input.password)
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementNotPresent(".error-message")

      //Repeat Password input boundaries
      .setValue('input[placeholder="Repeat password"]', "1")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(".error-message", "Passwords must be identical")

      .clearValue('input[placeholder="Repeat password"]')
      .setValue('input[placeholder="Repeat password"]', "11111111")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(".error-message", "Passwords must be identical")

      .clearValue('input[placeholder="Repeat password"]')
      .setValue('input[placeholder="Repeat password"]', input.password)
      .assert.elementPresent(".btn.btn-success")
      .assert.elementNotPresent(".error-message")

      //Name input doesn't have validation
      // .setValue('input[placeholder="Name"]', 'Te')
      // .assert.attributeContains('.btn.btn-success', 'class', 'disabled')
      // .assert.elementPresent('.error-message')
      // .assert.containsText('.error-message', 'Name must contain at least 3 and no more than 50 letters')
      //
      // .clearValue('input[placeholder="Name"]')
      // .assert.elementPresent('.btn.btn-success')
      // .assert.elementNotPresent('.error-message')
      //
      // .clearValue('input[placeholder="Name"]')
      // .setValue('input[placeholder="Name"]', 'TestTestTestTestTestTestTestTestTestTestTestTestTes')
      // .assert.attributeContains('.btn.btn-success', 'class', 'disabled')
      // .assert.elementPresent('.error-message')
      // .assert.containsText('.error-message', 'Name must contain at least 3 and no more than 50 letters')
      //
      // .clearValue('input[placeholder="Name"]')
      // .setValue('input[placeholder="Name"]', 'TestTestTestTestTestTestTestTestTestTestTestTestTe')
      // .assert.elementPresent('.btn.btn-success')
      // .assert.elementNotPresent('.error-message')
      //
      // .clearValue('input[placeholder="Name"]')
      // .setValue('input[placeholder="Name"]', 'Tes')
      // .assert.elementPresent('.btn.btn-success')
      // .assert.elementNotPresent('.error-message')

      //Phone input Boundaries
      .setValue('input[placeholder="Phone number"]', "11111")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Phone must contain at least 6 and no more than 50 numbers"
      )

      .clearValue('input[placeholder="Phone number"]')
      .assert.elementPresent(".btn.btn-success")
      .assert.elementNotPresent(".error-message")

      .clearValue('input[placeholder="Phone number"]')
      .setValue('input[placeholder="Phone number"]', "TestTe")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Phone must contain at least 6 and no more than 50 numbers"
      )

      .clearValue('input[placeholder="Phone number"]')
      .setValue(
        'input[placeholder="Phone number"]',
        "111111111111111111111111111111111111111111111111111"
      )
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Phone must contain at least 6 and no more than 50 numbers"
      )

      .clearValue('input[placeholder="Phone number"]')
      .setValue(
        'input[placeholder="Phone number"]',
        "11111111111111111111111111111111111111111111111111"
      )
      .assert.elementPresent(".btn.btn-success")
      .assert.elementNotPresent(".error-message")

      .clearValue('input[placeholder="Phone number"]')
      .setValue('input[placeholder="Phone number"]', "111111")
      .assert.elementPresent(".btn.btn-success")
      .assert.elementNotPresent(".error-message")

      //Address input Boundaries
      .setValue('input[placeholder="Address"]', "Test")
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Address must contain at least 5 and no more than 256 letters"
      )

      .clearValue('input[placeholder="Address"]')
      .assert.elementPresent(".btn.btn-success")
      .assert.elementNotPresent(".error-message")

      .clearValue('input[placeholder="Address"]')
      .setValue(
        'input[placeholder="Address"]',
        "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestT"
      )
      .assert.attributeContains(".btn.btn-success", "class", "disabled")
      .assert.elementPresent(".error-message")
      .assert.containsText(
        ".error-message",
        "Address must contain at least 5 and no more than 256 letters"
      )

      .clearValue('input[placeholder="Address"]')
      .setValue(
        'input[placeholder="Address"]',
        "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest"
      )
      .assert.elementPresent(".btn.btn-success")
      .assert.elementNotPresent(".error-message")

      .clearValue('input[placeholder="Address"]')
      .setValue('input[placeholder="Address"]', "TestT")
      .assert.elementPresent(".btn.btn-success")
      .assert.elementNotPresent(".error-message")
      .end();
  }
};
