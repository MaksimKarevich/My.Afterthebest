module.exports = {
  "@tags": ["test"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
  },

  "Fill profile with invalid data": function(browser) {
    const input = {
      username: "test04092019KM01@gmail.com",
      password: "Qwe123"
    };
    const page = browser.page.loginToWebsite();

    page
      //Navigate to profile
      .navigate()
      .waitForLogin()
      .inputUsername(input.username)
      .inputPassword(input.password)
      .submitLogin()
      .waitForLogo()
      .click(".nav-item.d-md-down-none")
      .click(".fa.fa-user")
      .waitForNickname()
      .urlContain();

    browser
      //Boundaries values
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")
      //Fill 1 character
      .setValue("#nick-name", "q")
      .setValue("#phone", "1")
      .setValue("#address", "q")
      .click("button[type=submit].btn-primary")
      .assert.elementPresent(
        "#nick-name.is-invalid",
        "NickName field is INVALID(1 char)"
      )
      .assert.elementPresent(
        "#phone.is-invalid",
        "Phone field is INVALID(1 char)"
      )
      .assert.elementPresent(
        "#address.is-invalid",
        "Address field is INVALID(1 char)"
      )
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")

      //Fill with low boundaries
      .setValue("#nick-name", "qq")
      .setValue("#phone", "12345")
      .setValue("#address", "qqqq")
      .assert.elementPresent(
        "#nick-name.is-invalid",
        "NickName field is INVALID(low borders"
      )
      .assert.elementPresent(
        "#phone.is-invalid",
        "Phone field is INVALID(low borders)"
      )
      .assert.elementPresent(
        "#address.is-invalid",
        "Address field is INVALID(low borders)"
      )
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")

      //Fill the top boundaries
      .setValue(
        "#nick-name",
        "TestTestTestTestTestTestTestTestTestTestTestTestTes"
      )
      .setValue("#phone", "012345678901234567890123456789012345678901234567890")
      .setValue(
        "#address",
        "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTetestestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest"
      )
      .assert.elementPresent(
        "#nick-name.is-invalid",
        "NickName field is INVALID(top borders)"
      )
      .assert.elementPresent(
        "#phone.is-invalid",
        "Phone field is INVALID(top borders)"
      )
      .assert.elementPresent(
        "#address.is-invalid",
        "Address field is INVALID(top borders)"
      )
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")

      //Fill the low borders that will accept
      .setValue("#nick-name", "Tes")
      .setValue("#phone", "0123456")
      .setValue("#address", "TestT")
      .assert.elementNotPresent(
        "#nick-name.is-invalid",
        "NickName field is VALID(low borders)"
      )
      .assert.elementNotPresent(
        "#phone.is-invalid",
        "Phone field is VALID(low borders)"
      )
      .assert.elementNotPresent(
        "#address.is-invalid",
        "Address field is VALID(low borders)"
      )
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")

      //Fill the top borders that will accept
      .setValue(
        "#nick-name",
        "TestTestTestTestTestTestTestTestTestTestTestTestTe"
      )
      .setValue("#phone", "01234567890123456789012345678901234567890123456789")
      .setValue(
        "#address",
        "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTetestestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTes"
      )
      .assert.elementNotPresent(
        "#nick-name.is-invalid",
        "NickName field is VALID(top borders)"
      )
      .assert.elementNotPresent(
        "#phone.is-invalid",
        "Phone field is VALID(top borders)"
      )
      .assert.elementNotPresent(
        "#address.is-invalid",
        "Address field is VALID(top borders)"
      )
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")

      //Error messages tests
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")
      .setValue("#nick-name", "q")
      .assert.elementPresent(".error-message", "Displayed error-message")
      .assert.containsText(
        ".error-message",
        "Nickname is is not valid",
        'This message include "Nickname is not valid"'
      )
      .clearValue("#nick-name")
      .setValue("#phone", "q")
      .assert.elementPresent(".error-message", "Displayed error-message")
      .assert.containsText(
        ".error-message",
        "Phone is is not valid",
        'This message include "Phone is not valid"'
      )
      .clearValue("#phone")
      .setValue("#address", "q")
      .assert.elementPresent(".error-message", "Displayed error-message")
      .assert.containsText(
        ".error-message",
        "Address is is not valid",
        'This message include "Address is not valid"'
      )
      .end();
  }
};
