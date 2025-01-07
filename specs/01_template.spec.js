"use strict";

describe("E2E Login and Filter Access Test", function () {
  const data = util.data.getData("01_template");
  const references = util.data.getData("references");

  it("Step 01: Navigate to Application Link", async function () {
    await ui5.navigation.navigateToApplication("https://ldcierx.devsys.net.sap:44300/sap/bc/adt/businessservices/odatav4/feap/C%C2%87u%C2%84C%C2%83%C2%84%C2%89C%C2%83xu%C2%88uHC%C2%87u%C2%84C%C2%89%7Ds%C2%88%C2%86uxyw%C2%80u%7D%C2%81%C2%86y%C2%85%C2%89y%C2%87%C2%88s%C2%8AHC%C2%87%C2%86%C2%8AxC%C2%87u%C2%84C%C2%89%7Ds%C2%88%C2%86uxyw%C2%80u%7D%C2%81%C2%86y%C2%85%C2%89y%C2%87%C2%88CDDDEC77Wsb%C2%83%C2%88yVu%C2%87%7Dwhd777777i%5DshfUXYW%60U%5DafYeiYgh77DDDE77i%5DshfUXYW%60U%5DafYeiYghsjH/flp.html?sap-ui-xx-viewCache=false&sap-ui-language=EN&sap-client=001#app-preview");
  });

  it("Step 02: Login", async function () {
    await ui5.session.login(data.session.username, data.session.password);
  });

  it("Step 03: Access Filter Element", async function () {
    // ...
  });

  it("Step 04: mock test", async function () {
    const selector = {
      // ...
    };
    references.sampleReference = await ui5.element.getValue(selector);
    util.console.info(`Document with reference number ${references.sampleReference} has been created.`);
  });

  it("Step 05: logout", async function () {
    await ui5.session.logout();
  });
});
