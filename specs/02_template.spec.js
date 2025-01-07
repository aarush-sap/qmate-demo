"use strict";

describe("02_template - describe your test", function () {
  const data = util.data.getData("02_template");
  const references = util.data.getData("references");

  it("Step 01: navigate to application", async function () {
    await ui5.navigation.navigateToApplication("<app_intent>");
  });

  it("Step 02: login", async function () {
    await ui5.session.login(data.session.username, data.session.password);
  });

  it("Step 03: do something", async function () {
    // ...
  });

  it("Step 04: enter reference number", async function () {
    const selector = {
      // ...
    };
    await ui5.userInteraction.fill(selector, references.sampleReference);
  });

  it("Step 05: do something", async function () {
    // ...
  });

  it("Step 06: logout", async function () {
    await ui5.session.logout();
  });
});
