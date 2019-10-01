module.exports = {
  "@tags": ["register", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
  },

  "Register Test Positive": function(browser) {
    const emailDomain = "test.com";
    const nickname = "test" + Date.now();
    const input = {
      nickname: nickname,
      email: nickname + "@" + emailDomain,
      password: "Qwe123",
      phoneNumber: "123123123",
      address: "lorem ipsum"
    };

    browser
      .url("https://afterthebest.com/auth/register")
      .waitForElementVisible(".app", 2000)
      .setValue('input[placeholder="Name"]', input.nickname)
      .setValue('input[placeholder="Email"]', input.email)
      .setValue("input[placeholder=Password]", input.password)
      .setValue('input[placeholder="Repeat password"]', input.password)
      .setValue('input[placeholder="Phone number"]', input.phoneNumber)
      .setValue('input[placeholder="Address"]', input.address)
      .click(".btn.btn-success")
      .waitForElementPresent(".btn.active.mt-3", 5000)
      .assert.urlEquals(
        "https://afterthebest.com/" +
          "auth/verification?email=" +
          nickname +
          "%40" +
          emailDomain
      )
      .assert.elementPresent(".btn.active.mt-3")
      .end();
  }
};
