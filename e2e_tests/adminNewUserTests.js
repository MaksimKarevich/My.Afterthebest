module.exports = {
  "@tags": ["admin", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
  },

  "Admin register new User": function(browser) {
    const emailDomain = "test.com";
    const nickname = "test" + Date.now();
    const phone = Date.now();
    const input = {
      username: "admin@email.com",
      passwordLogin: "QWE123qwe",
      nickname: nickname,
      email: nickname + "@" + emailDomain,
      password: "Qwe123",
      phoneNumber: "123123123",
      address: "lorem ipsum"
    };

    browser
      //Navigate to profile
      .url("https://afterthebest.com/auth/login")
      .waitForElementVisible(
        ".card.p-4",
        2000,
        false,
        function() {},
        "Login form is visible"
      )
      .setValue("input[placeholder=Username]", input.username)
      .setValue("input[placeholder=Password]", input.passwordLogin)
      .click("button[type=submit].btn.px-4")
      .waitForElementVisible(
        ".navbar-brand-full",
        2000,
        false,
        function() {},
        "Website Logo is visible"
      )
      .click("section li:nth-child(2)")
      .waitForElementVisible(
        ".btn.btn-primary",
        2000,
        false,
        function() {},
        "New user button is displayed"
      )
      .assert.urlContains("/users", "The Users page is open")
      .click(".btn.btn-primary")
      .waitForElementVisible(
        ".btn-primary.btn-md",
        2000,
        false,
        function() {},
        "Create user button is displayed"
      )
      .assert.urlContains("/users/new", "The Users/New page is open")
      //New user register
      .setValue("#nick-name", nickname)
      .setValue("#email", input.email)
      .setValue("#password", input.password)
      .setValue("#phone", "8" + phone)
      .setValue("#address", "Lorem ipsum dolor sit amet")
      .click(".btn-primary.btn-md")
      .waitForElementVisible(
        ".success-message",
        3000,
        false,
        function() {},
        "Account is created"
      )
      .assert.containsText(
        ".success-message",
        "User successfully created.",
        "User successfully created."
      )
      //Displayed information about registered user
      .waitForElementVisible(
        ".badge-warning",
        3000,
        false,
        function() {},
        "The Account is not activate"
      )
      .assert.containsText(
        ".badge-warning",
        "FORCE_CHANGE_PASSWORD",
        "User status is: FORCE_CHANGE_PASSWORD"
      )
      .assert.containsText(
        ".badge-success",
        "Enabled",
        "Account status is: Enabled"
      )
      //Deactivate account
      .click(".dropdown-toggle.btn-primary")
      .waitForElementVisible(
        ".dropdown-menu.show",
        2000,
        false,
        function() {},
        "Dropdown menu is displayed"
      )
      .click(".dropdown-menu.show :nth-child(1) a.dropdown-item")
      .waitForElementVisible(
        "div.mini-toastr__notification.-success",
        2000,
        false,
        function() {},
        "Account is Deactivated"
      )
      .assert.containsText(
        "div.mini-toastr__notification.-success",
        "Profile successfully deactivated!",
        "Profile successfully deactivated!"
      )
      .assert.containsText(
        ".badge-danger",
        "Disabled",
        "Account status is: Disabled"
      )
      //Delete account
      .click(".dropdown-toggle.btn-primary")
      .click(".dropdown-menu.show :nth-child(2) a.dropdown-item")
      .waitForElementVisible(
        "div.mini-toastr__notification.-success",
        1000,
        false,
        function() {},
        "Account is Deleted"
      )
      .assert.containsText(
        "div.mini-toastr__notification.-success",
        "Profile successfully deleted! You will be redirected shortly.",
        "Profile successfully deleted! You will be redirected shortly."
      )
      .waitForElementVisible(
        ".btn.btn-primary",
        1000,
        false,
        function() {},
        "New user button is displayed"
      )
      .assert.urlContains("/users", "The Users page is open")
      .end();
  }
};
