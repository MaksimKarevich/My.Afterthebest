module.exports = {
  "@tags": ["login", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
    browser.end();
  },

  "Login Test Positive": function(browser) {
    const input = {
      username: "user@email.com",
      password: "QWE123qwe"
    };

    //Positive login
    browser
      .url("https://afterthebest.com/auth/login")
      .waitForElementVisible("input[placeholder=Username]", 5000)
      .setValue("input[placeholder=Username]", input.username)
      .setValue("input[placeholder=Password]", input.password)
      .click("button[type=submit].btn.px-4")
      .waitForElementVisible(".navbar-brand-full", 5000)
      .assert.urlContains("/dashboard")
      .click(".nav-item.d-md-down-none")
      .waitForElementVisible(".dropdown-menu", 5000)
      .click(".fa.fa-lock")
      .assert.urlContains("/auth/login")
  },
};
