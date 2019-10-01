module.exports = {
  "@tags": ["login", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
  },

  "Login Test Positive": function(browser) {
    const input = {
      username: "user@email.com",
      password: "QWE123qwe"
    };

    //Positive login
    browser
      .url("https://afterthebest.com/auth/login")
      .waitForElementVisible(".card.p-4", 1000)
      .setValue("input[placeholder=Username]", input.username)
      .setValue("input[placeholder=Password]", input.password)
      .click("button[type=submit].btn.px-4")
      .waitForElementVisible(".navbar-brand-full")
      .assert.urlContains("/dashboard")
      .click(".nav-item.d-md-down-none")
      .waitForElementVisible(".dropdown-menu")
      .click(".fa.fa-lock")
      .assert.urlContains("/auth/login")
      .end();
  }
};
