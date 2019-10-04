module.exports = {
  "@tags": ["profile", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
    browser.end();
  },

  "Profile Tests Negative": function(browser) {
    const url = "https://afterthebest.com/auth/login";
    const input = {
      username: "user@email.com",
      password: "QWE123qwe"
    };

    browser
      //Navigate to profile
      .url(url)
      .waitForElementVisible(
        ".card.p-4",
        5000,
        false,
        function() {},
        "Login form is visible"
      )
      .setValue("input[placeholder=Username]", input.username)
      .setValue("input[placeholder=Password]", input.password)
      .click("button[type=submit].btn.px-4")
      .waitForElementVisible(
        ".navbar-brand-full",
        5000,
        false,
        function() {},
        "Website Logo is visible"
      )
      .click(".nav-item.d-md-down-none")
      .waitForElementVisible(
        ".dropdown-menu",
        5000,
        false,
        function() {},
        "Dropdown menu is displayed"
      )
      .click(".fa.fa-user")
      .waitForElementVisible(
        "#nick-name",
        5000,
        false,
        function() {},
        "NickName field is displayed"
      )
      .assert.urlContains("/profile", "The profile page is open")

      // Boundaries values
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")
      //Fill 1 character
      .setValue("#phone", "1")
      .setValue("#address", "q")
      .click("button[type=submit].btn-primary")
      .assert.elementPresent(
        "#phone.is-invalid",
        "Phone field is INVALID(1 char)"
      )
      .assert.elementPresent(
        "#address.is-invalid",
        "Address field is INVALID(1 char)"
      )
      .clearValue("#phone")
      .clearValue("#address")

      //Fill with low boundaries
      .setValue("#phone", "12345")
      .setValue("#address", "qqqq")
      .assert.elementPresent(
        "#phone.is-invalid",
        "Phone field is INVALID(low borders)"
      )
      .assert.elementPresent(
        "#address.is-invalid",
        "Address field is INVALID(low borders)"
      )
      .clearValue("#phone")
      .clearValue("#address")

      //Fill the top boundaries
      .setValue("#phone", "012345678901234567890123456789012345678901234567890")
      .setValue(
        "#address",
        "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTetestestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest"
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
      .clearValue("#phone")
      .clearValue("#address")
      .setValue("#phone", "q")
      .assert.elementPresent(".error-message", "Displayed error-message")
      .assert.containsText(
        ".error-message",
        "Phone is not valid",
        'This message include "Phone is not valid"'
      )
      .clearValue("#phone")
      .setValue("#address", "q")
      .assert.elementPresent(".error-message", "Displayed error-message")
      .assert.containsText(
        ".error-message",
        "Address is not valid",
        'This message include "Address is not valid"'
      )
  },
};

