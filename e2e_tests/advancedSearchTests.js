module.exports = {
  "@tags": ["search", "all"],
  before: function(browser) {
    console.log("Setting up... browser", typeof browser);
  },

  after: function(browser) {
    console.log("Closing down... browser", typeof browser);
  },

  "Advanced Search": function(browser) {
    const input = {
      username: "user@email.com",
      password: "QWE123qwe"
    };

    browser
      //Navigate to Advanced Search
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
      .click(".nav-item:nth-child(3)")
      .waitForElementVisible(
        ".mb-0",
        5000,
        false,
        function() {},
        "My Filters title is visible"
      )
      .assert.attributeContains(
        ".btn.btn-danger.btn-sm",
        "class",
        "disabled",
        "Button is disabled"
      )
      .useXpath()
      .click('//button[@class="btn btn-primary btn-sm"]')
      .useCss()
      .waitForElementVisible(
        ".modal-content",
        5000,
        false,
        function() {},
        "Advanced Search dialog window is displayed"
      )
      .assert.elementPresent(
        ".btn-primary:nth-child(2)",
        "Search button is present"
      )
      //Empty search
      .click(".btn-primary:nth-child(2)") //Search button
      .waitForElementVisible(
        ".btn.btn-danger.btn-sm",
        1000,
        false,
        function() {},
        "Button is enabled"
      )
      .assert.elementPresent(".fa.fa-close", "Button present")
      .pause(500)
      .useXpath()
      .click('//button[@class="btn btn-primary btn-sm"]')
      .useCss()
      //Fill the filter(Minimum Term)
      .setValue("#minimum-term", "0")
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(1) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .clearValue(
        ".col-md-4:nth-child(1) > :nth-child(1) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(1) input[placeholder=To]",
        "1"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .clearValue("#minimum-term")
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .setValue("#minimum-term", "1")
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .clearValue("#minimum-term")
      .setValue("#minimum-term", "2")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(1) > :nth-child(1) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(1) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(1) > :nth-child(1) input[placeholder=To]"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .clearValue("#minimum-term")
      .setValue("#minimum-term", "1")
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(1) input[placeholder=To]",
        "30"
      )
      .waitForElementNotPresent("error-message", 1000)
      //Fill the filter(Minimum Duraction)
      .setValue("#minimum-duration", "0")
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(2) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .clearValue(
        ".col-md-4:nth-child(1) > :nth-child(2) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(2) input[placeholder=To]",
        "1"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .clearValue("#minimum-duration")
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .setValue("#minimum-duration", "1")
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .clearValue("#minimum-duration")
      .setValue("#minimum-duration", "2")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(1) > :nth-child(2) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(2) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(1) > :nth-child(2) input[placeholder=To]"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .clearValue("#minimum-duration")
      .setValue("#minimum-duration", "1")
      .setValue(
        ".col-md-4:nth-child(1) > :nth-child(2) input[placeholder=To]",
        "30"
      )
      .waitForElementNotPresent("error-message", 1000)
      //Fill the filter(Cost)
      .setValue("#cost", "0")
      .setValue(
        ".col-md-4:nth-child(2) > :nth-child(6) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .clearValue(
        ".col-md-4:nth-child(2) > :nth-child(6) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(2) > :nth-child(6) input[placeholder=To]",
        "1"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .clearValue("#cost")
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .setValue("#cost", "1")
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ":nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .clearValue("#cost")
      .setValue("#cost", "2")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(2) > :nth-child(6) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(2) > :nth-child(6) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(2) > :nth-child(6) input[placeholder=To]"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .clearValue("#cost")
      .setValue("#cost", "1")
      .setValue(
        ".col-md-4:nth-child(2) > :nth-child(6) input[placeholder=To]",
        "30"
      )
      .waitForElementNotPresent("error-message", 1000)
      //Fill the filter(Cycle Days)
      .setValue("#cycle-data", "0")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(3) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(3) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(3) input[placeholder=To]",
        "1"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .clearValue("#cycle-data")
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .setValue("#cycle-data", "1")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .clearValue("#cycle-data")
      .setValue("#cycle-data", "2")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(3) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(3) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(3) input[placeholder=To]"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .clearValue("#cycle-data")
      .setValue("#cycle-data", "1")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(3) input[placeholder=To]",
        "30"
      )
      .waitForElementNotPresent("error-message", 1000)
      //Fill the filter(Data GB)
      .setValue("#data-gb", "0")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(4) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(4) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(4) input[placeholder=To]",
        "1"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .clearValue("#data-gb")
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .setValue("#data-gb", "1")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .clearValue("#data-gb")
      .setValue("#data-gb", "2")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(4) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(4) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(4) input[placeholder=To]"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .clearValue("#data-gb")
      .setValue("#data-gb", "1")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(4) input[placeholder=To]",
        "30"
      )
      .waitForElementNotPresent("error-message", 1000)
      //Fill the filter(Min data per month)
      .setValue("#min-data-per-month", "0")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(6) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(6) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(6) input[placeholder=To]",
        "1"
      )
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .clearValue("#min-data-per-month")
      .assert.containsText(
        ":nth-child(2) :nth-child(1) > .error-message.w-100",
        "Value cannot be less than zero"
      )
      .setValue("#min-data-per-month", "1")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .clearValue("#min-data-per-month")
      .setValue("#min-data-per-month", "2")
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(6) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(6) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(2) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "The value cannot be greater than the maximum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(6) input[placeholder=To]"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) > .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .clearValue("#min-data-per-month")
      .setValue("#min-data-per-month", "1")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(6) input[placeholder=To]",
        "30"
      )
      .waitForElementNotPresent("error-message", 1000)
      //Fill the filter(Average data per month)
      .setValue("#average-data-per-moth", "0")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(8) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(4)",
        "The value cannot be equal with the maximum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(8) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(8) input[placeholder=To]",
        "1"
      )
      .waitForElementNotPresent("error-message", 1000)
      .clearValue("#average-data-per-moth")
      .waitForElementNotPresent("error-message", 1000)
      .setValue("#average-data-per-moth", "1")
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "The value cannot be equal with the maximum"
      )
      .clearValue("#average-data-per-moth")
      .setValue("#average-data-per-moth", "2")
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(8) input[placeholder=To]"
      )
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(8) input[placeholder=To]",
        "0"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(3)",
        "Value cannot be less than minimum"
      )
      .clearValue(
        ".col-md-4:nth-child(3) > :nth-child(8) input[placeholder=To]"
      )
      .assert.containsText(
        ".col-md-6:nth-child(3) :nth-child(1) .error-message.w-100:nth-child(2)",
        "Value cannot be less than zero"
      )
      .clearValue("#average-data-per-moth")
      .setValue("#average-data-per-moth", "1")
      .setValue(
        ".col-md-4:nth-child(3) > :nth-child(8) input[placeholder=To]",
        "30"
      )
      .waitForElementNotPresent("error-message", 1000)
      //Checkboxes
      //Checkboxes(Contract)
      .click(
        ":nth-child(9) :nth-child(2) :nth-child(1) label.custom-control-label"
      )
      .assert.elementPresent(
        ":nth-child(9) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)"
      )
      .assert.elementNotPresent(
        "dsadadsada:nth-child(9) :nth-child(3) :nth-child(1) label.custom-control-label:checked"
      )
      .click(
        ":nth-child(9) :nth-child(3) :nth-child(1) label.custom-control-label"
      )
      //.assert.visible(':nth-child(9) :nth-child(3) :nth-child(1) label.custom-control-label')
      .assert.visible(
        ":nth-child(9) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)"
      )
      //Checkboxes(Text Int)
      .click(
        ":nth-child(10) :nth-child(2) :nth-child(1) label.custom-control-label"
      )
      //.assert.visible(':nth-child(10) :nth-child(2) :nth-child(1) label.custom-control-label:checked')
      .assert.visible(
        ":nth-child(10) :nth-child(3) :nth-child(1) label.custom-control-label:not(:checked)"
      )
      .click(
        ":nth-child(10) :nth-child(3) :nth-child(1) label.custom-control-label"
      )
      //.assert.visible(':nth-child(10) :nth-child(3) :nth-child(1) label.custom-control-label:checked')
      .assert.visible(
        ":nth-child(10) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)"
      )
      //Checkboxes(Text Int)
      .click(
        ":nth-child(11) :nth-child(2) :nth-child(1) label.custom-control-label"
      )
      //.assert.visible(':nth-child(11) :nth-child(2) :nth-child(1) label.custom-control-label:checked')
      .assert.visible(
        ":nth-child(11) :nth-child(3) :nth-child(1) label.custom-control-label:not(:checked)"
      )
      .click(
        ":nth-child(11) :nth-child(3) :nth-child(1) label.custom-control-label"
      )
      //.assert.visible(':nth-child(11) :nth-child(3) :nth-child(1) label.custom-control-label:checked')
      .assert.visible(
        ":nth-child(11) :nth-child(2) :nth-child(1) label.custom-control-label:not(:checked)"
      )
      .end();
  }
};
