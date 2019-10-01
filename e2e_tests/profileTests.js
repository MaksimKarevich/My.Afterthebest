module.exports = {
  "@tags": ["profile", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
  },

  "Profile Tests Positive": function(browser) {
    const timestamp = Date.now();
    const input = {
      username: "user@email.com",
      password: "QWE123qwe"
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
      .setValue("input[placeholder=Password]", input.password)
      .click("button[type=submit].btn.px-4")
      .waitForElementVisible(
        ".navbar-brand-full",
        3000,
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
        1000,
        false,
        function() {},
        "NickName field is displayed"
      )
      .assert.urlContains("/profile", "The profile page is open")

      //clear the fields
      .clearValue("#nick-name")
      .clearValue("#phone")
      .clearValue("#address")

      //Fill the valid data and Save
      .setValue("#nick-name", "test" + timestamp)
      .setValue("#phone", "8" + timestamp)
      .setValue("#address", "Lorem ipsum dolor sit amet")
      .click("button[type=submit].btn-primary")
      .waitForElementPresent(
        "div.mini-toastr__notification.-success",
        2000,
        false,
        function() {},
        "Success tost message is displayed"
      )
      .assert.containsText(
        "div.mini-toastr__notification.-success",
        "Your profile info successfully updated!",
        'This message include "Your profile info successfully updated!"'
      )
      .assert.value(
        "#nick-name",
        "test" + timestamp,
        "NickName field is the same as we input"
      )
      .assert.value(
        "#phone",
        "8" + timestamp,
        "Phone field is the same as we input"
      )
      .assert.value(
        "#address",
        "Lorem ipsum dolor sit amet",
        "Address field is the same as we input"
      )
      .end();
  }
};
